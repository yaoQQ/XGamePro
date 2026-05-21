import { useMemo } from 'react';
import { Search, Code, Layers, GitBranch } from 'lucide-react';
import Fuse from 'fuse.js';
import { codeMetaData } from '@/data/codeMeta';
import { useAppStore } from '@/store/useAppStore';
import NamespaceTree from '@/components/NamespaceTree';
import ClassDetail from '@/components/ClassDetail';

export default function ApiDocs() {
  const { searchQuery, setSearchQuery, selectedNodeId } = useAppStore();
  const { classes } = codeMetaData;

  const fuse = useMemo(
    () =>
      new Fuse(classes, {
        keys: ['name', 'methods.name', 'namespace'],
        threshold: 0.3,
      }),
    [classes]
  );

  const filteredClasses = useMemo(() => {
    if (!searchQuery) return classes;
    return fuse.search(searchQuery).map((r) => r.item);
  }, [fuse, searchQuery, classes]);

  const stats = useMemo(() => {
    const namespaces = new Set(classes.map((c) => c.namespace));
    const interfaces = classes.filter((c) => c.type === 'interface').length;
    return { classes: classes.length, namespaces: namespaces.size, interfaces };
  }, [classes]);

  return (
    <div className="flex h-full bg-[#0a0e17]">
      {/* Left sidebar */}
      <div className="w-72 border-r border-gray-800 flex flex-col shrink-0">
        {/* Search */}
        <div className="p-3 border-b border-gray-800">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="搜索类名、方法名..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>
        {/* Tree */}
        <NamespaceTree classes={filteredClasses} />
      </div>

      {/* Right content */}
      <div className="flex-1 min-w-0">
        {selectedNodeId ? (
          <ClassDetail classes={classes} />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-6">
            <div className="flex items-center gap-4">
              <Code className="w-16 h-16 text-cyan-500/20" />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold text-gray-300">XGame API 文档</h2>
              <p className="text-sm text-gray-500">从左侧命名空间树中选择类查看详细文档</p>
            </div>
            <div className="flex gap-6 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{stats.classes}</div>
                <div className="text-xs text-gray-600 flex items-center gap-1">
                  <Code className="w-3 h-3" /> 类/接口
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{stats.namespaces}</div>
                <div className="text-xs text-gray-600 flex items-center gap-1">
                  <Layers className="w-3 h-3" /> 命名空间
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">{stats.interfaces}</div>
                <div className="text-xs text-gray-600 flex items-center gap-1">
                  <GitBranch className="w-3 h-3" /> 接口
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
