import { useState, useMemo } from 'react';
import { ChevronRight, ChevronDown, FileCode } from 'lucide-react';
import type { CodeClass } from '@/data/codeMeta';
import { useAppStore } from '@/store/useAppStore';

interface NamespaceNode {
  name: string;
  fullPath: string;
  classes: CodeClass[];
  children: Map<string, NamespaceNode>;
}

function buildTree(classes: CodeClass[]): NamespaceNode {
  const root: NamespaceNode = { name: '', fullPath: '', classes: [], children: new Map() };
  for (const cls of classes) {
    const parts = cls.namespace.split('.');
    let current = root;
    let path = '';
    for (const part of parts) {
      path = path ? `${path}.${part}` : part;
      if (!current.children.has(part)) {
        current.children.set(part, { name: part, fullPath: path, classes: [], children: new Map() });
      }
      current = current.children.get(part)!;
    }
    current.classes.push(cls);
  }
  return root;
}

function countClasses(node: NamespaceNode): number {
  let count = node.classes.length;
  for (const child of node.children.values()) {
    count += countClasses(child);
  }
  return count;
}

const TYPE_COLORS: Record<string, string> = {
  interface: 'text-cyan-400',
  class: 'text-purple-400',
  abstract_class: 'text-amber-400',
  static_class: 'text-green-400',
  enum: 'text-red-400',
  struct: 'text-blue-400',
};

function NamespaceNodeView({
  node,
  depth,
  searchQuery,
  selectedNodeId,
  onSelect,
}: {
  node: NamespaceNode;
  depth: number;
  searchQuery: string;
  selectedNodeId: string | null;
  onSelect: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState(depth < 2);
  const total = countClasses(node);

  const filteredClasses = useMemo(() => {
    if (!searchQuery) return node.classes;
    const q = searchQuery.toLowerCase();
    return node.classes.filter((c) => c.name.toLowerCase().includes(q));
  }, [node.classes, searchQuery]);

  const filteredChildren = useMemo(() => {
    if (!searchQuery) return [...node.children.values()];
    return [...node.children.values()].filter(
      (child) => countClasses(child) > 0
    );
  }, [node.children, searchQuery]);

  if (total === 0 && searchQuery) return null;

  return (
    <div>
      {node.name && (
        <button
          className="flex items-center w-full px-2 py-1 text-sm hover:bg-white/5 rounded transition-colors"
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <ChevronDown className="w-3.5 h-3.5 text-gray-500 mr-1 shrink-0" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 text-gray-500 mr-1 shrink-0" />
          )}
          <span className="text-gray-300 font-medium truncate">{node.name}</span>
          <span className="ml-auto text-xs text-gray-600 shrink-0">{total}</span>
        </button>
      )}
      {expanded && (
        <>
          {filteredClasses.map((cls) => (
            <button
              key={cls.id}
              className={`flex items-center w-full px-2 py-1 text-sm hover:bg-white/5 rounded transition-colors ${
                selectedNodeId === cls.id ? 'bg-cyan-500/10 text-cyan-400' : ''
              }`}
              style={{ paddingLeft: `${(depth + 1) * 16 + 8}px` }}
              onClick={() => onSelect(cls.id)}
            >
              <FileCode className={`w-3.5 h-3.5 mr-1.5 shrink-0 ${TYPE_COLORS[cls.type] || 'text-gray-400'}`} />
              <span className="truncate">{cls.name}</span>
            </button>
          ))}
          {filteredChildren.map((child) => (
            <NamespaceNodeView
              key={child.fullPath}
              node={child}
              depth={depth + 1}
              searchQuery={searchQuery}
              selectedNodeId={selectedNodeId}
              onSelect={onSelect}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default function NamespaceTree({ classes }: { classes: CodeClass[] }) {
  const { selectedNodeId, searchQuery, setSelectedNode } = useAppStore();
  const tree = useMemo(() => buildTree(classes), [classes]);

  return (
    <div className="h-full overflow-y-auto scrollbar-thin">
      {[...tree.children.values()].map((node) => (
        <NamespaceNodeView
          key={node.fullPath}
          node={node}
          depth={0}
          searchQuery={searchQuery}
          selectedNodeId={selectedNodeId}
          onSelect={setSelectedNode}
        />
      ))}
    </div>
  );
}
