import { useState, useMemo } from 'react';
import { Search, GitBranch, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { codeMetaData } from '@/data/codeMeta';
import InheritanceTreeView from '@/components/InheritanceTreeView';

type TabType = 'inheritance' | 'interfaces';

export default function InheritanceTree() {
  const [activeTab, setActiveTab] = useState<TabType>('inheritance');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { classes, edges } = codeMetaData;

  // Root classes: those that are not a source in any 'inherits' edge
  const rootClasses = useMemo(() => {
    const childIds = new Set(edges.filter((e) => e.type === 'inherits').map((e) => e.source));
    return classes.filter((c) => !childIds.has(c.id));
  }, [classes, edges]);

  // Filtered roots for inheritance tab
  const filteredRoots = useMemo(() => {
    if (!searchQuery) return rootClasses;
    const q = searchQuery.toLowerCase();
    return rootClasses.filter((c) => c.name.toLowerCase().includes(q) || c.namespace.toLowerCase().includes(q));
  }, [rootClasses, searchQuery]);

  // Interface implementations map
  const interfaceMap = useMemo(() => {
    const map = new Map<string, { iface: typeof classes[0]; impls: typeof classes }>();
    for (const edge of edges) {
      if (edge.type !== 'implements') continue;
      const iface = classes.find((c) => c.id === edge.target);
      const impl = classes.find((c) => c.id === edge.source);
      if (!iface || !impl) continue;
      if (!map.has(iface.id)) {
        map.set(iface.id, { iface, impls: [] });
      }
      map.get(iface.id)!.impls.push(impl);
    }
    return [...map.values()];
  }, [classes, edges]);

  const filteredInterfaces = useMemo(() => {
    if (!searchQuery) return interfaceMap;
    const q = searchQuery.toLowerCase();
    return interfaceMap.filter(
      ({ iface }) => iface.name.toLowerCase().includes(q) || iface.namespace.toLowerCase().includes(q)
    );
  }, [interfaceMap, searchQuery]);

  const handleClassClick = (classId: string) => {
    navigate(`/api-docs?selected=${classId}`);
  };

  return (
    <div className="h-full bg-[#0a0e17] flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-800 px-4 py-3 flex items-center gap-4 shrink-0">
        {/* Tabs */}
        <div className="flex gap-1 bg-gray-900 rounded-lg p-1">
          <button
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              activeTab === 'inheritance'
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('inheritance')}
          >
            <GitBranch className="w-4 h-4 inline mr-1.5" />
            继承树
          </button>
          <button
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              activeTab === 'interfaces'
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('interfaces')}
          >
            <Layers className="w-4 h-4 inline mr-1.5" />
            接口实现
          </button>
        </div>
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="搜索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-sm bg-gray-900 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
        {activeTab === 'inheritance' ? (
          <div className="space-y-1">
            {filteredRoots.map((root) => (
              <InheritanceTreeView
                key={root.id}
                rootClass={root}
                edges={edges}
                classes={classes}
              />
            ))}
            {filteredRoots.length === 0 && (
              <p className="text-gray-600 text-sm text-center py-8">无匹配结果</p>
            )}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredInterfaces.map(({ iface, impls }) => (
              <div
                key={iface.id}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-1.5 py-0.5 text-[10px] rounded bg-cyan-500/20 text-cyan-400 font-bold">
                    I
                  </span>
                  <h3 className="text-sm font-semibold text-cyan-400">{iface.name}</h3>
                </div>
                {iface.description && (
                  <p className="text-xs text-gray-500 mb-3">{iface.description}</p>
                )}
                <div className="space-y-1">
                  {impls.map((impl) => (
                    <button
                      key={impl.id}
                      className="block w-full text-left px-2 py-1 text-xs text-purple-400 hover:bg-white/5 rounded transition-colors font-mono"
                      onClick={() => handleClassClick(impl.id)}
                    >
                      {impl.name}
                      <span className="text-gray-600 ml-1 font-sans">({impl.namespace})</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {filteredInterfaces.length === 0 && (
              <p className="text-gray-600 text-sm text-center py-8 col-span-full">无匹配结果</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
