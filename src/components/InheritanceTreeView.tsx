import { useState } from 'react';
import { ChevronRight, ChevronDown, GitBranch } from 'lucide-react';
import type { CodeClass, InheritanceEdge } from '@/data/codeMeta';

const TYPE_COLORS: Record<string, string> = {
  interface: 'text-cyan-400',
  class: 'text-purple-400',
  abstract_class: 'text-amber-400',
  static_class: 'text-green-400',
  enum: 'text-red-400',
  struct: 'text-blue-400',
};

const TYPE_BADGE: Record<string, { label: string; color: string }> = {
  interface: { label: 'I', color: 'bg-cyan-500/20 text-cyan-400' },
  class: { label: 'C', color: 'bg-purple-500/20 text-purple-400' },
  abstract_class: { label: 'A', color: 'bg-amber-500/20 text-amber-400' },
  static_class: { label: 'S', color: 'bg-green-500/20 text-green-400' },
  enum: { label: 'E', color: 'bg-red-500/20 text-red-400' },
  struct: { label: 'V', color: 'bg-blue-500/20 text-blue-400' },
};

interface InheritanceTreeViewProps {
  rootClass: CodeClass;
  edges: InheritanceEdge[];
  classes: CodeClass[];
  depth?: number;
}

export default function InheritanceTreeView({
  rootClass,
  edges,
  classes,
  depth = 0,
}: InheritanceTreeViewProps) {
  const [expanded, setExpanded] = useState(depth < 1);

  const children = edges
    .filter((e) => e.target === rootClass.id && e.type === 'inherits')
    .map((e) => classes.find((c) => c.id === e.source))
    .filter((c): c is CodeClass => !!c);

  const badge = TYPE_BADGE[rootClass.type] || TYPE_BADGE.class;

  return (
    <div>
      <button
        className="flex items-center gap-2 w-full py-1.5 px-2 text-sm hover:bg-white/5 rounded transition-colors"
        style={{ paddingLeft: `${depth * 20 + 8}px` }}
        onClick={() => children.length > 0 && setExpanded(!expanded)}
      >
        {children.length > 0 ? (
          expanded ? (
            <ChevronDown className="w-3.5 h-3.5 text-gray-500 shrink-0" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 text-gray-500 shrink-0" />
          )
        ) : (
          <GitBranch className="w-3.5 h-3.5 text-gray-700 shrink-0" />
        )}
        <span className={`w-4 h-4 rounded text-[10px] font-bold flex items-center justify-center shrink-0 ${badge.color}`}>
          {badge.label}
        </span>
        <span className={`${TYPE_COLORS[rootClass.type] || 'text-gray-300'} truncate`}>
          {rootClass.name}
        </span>
        {rootClass.description && (
          <span className="text-xs text-gray-600 truncate ml-2">{rootClass.description}</span>
        )}
      </button>
      {expanded &&
        children.map((child) => (
          <InheritanceTreeView
            key={child.id}
            rootClass={child}
            edges={edges}
            classes={classes}
            depth={depth + 1}
          />
        ))}
    </div>
  );
}
