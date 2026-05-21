import { useState, useMemo } from 'react';
import { Layers, Box } from 'lucide-react';
import { codeMetaData } from '@/data/codeMeta';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import ModuleCard from '@/components/ModuleCard';

export default function ModuleOverview() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const filteredModules = useMemo(() => {
    if (!activeLayer) return codeMetaData.modules;
    return codeMetaData.modules.filter((m) => m.layer === activeLayer);
  }, [activeLayer]);

  const totalClasses = codeMetaData.classes.length;
  const totalModules = codeMetaData.modules.length;

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#0d1220]/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Layers className="text-cyan-400" size={24} />
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              模块架构总览
            </h1>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><Box size={14} /> {totalModules} 模块</span>
            <span>{totalClasses} 类</span>
          </div>
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-2xl border border-white/10 bg-[#0d1220]/40 p-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">分层架构图</h2>
          <ArchitectureDiagram activeLayer={activeLayer} onLayerClick={setActiveLayer} />
          {activeLayer && (
            <div className="mt-4 text-center">
              <button onClick={() => setActiveLayer(null)}
                className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                清除筛选（显示全部模块）
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Module Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">
            {activeLayer ? `${activeLayer} 层模块` : '全部模块'}
            <span className="ml-2 text-sm text-gray-500">({filteredModules.length})</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredModules.map((mod) => (
            <ModuleCard key={mod.id} module={mod} />
          ))}
        </div>
      </div>
    </div>
  );
}
