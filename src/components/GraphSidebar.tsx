import { useMemo } from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';
import { codeMetaData, type CodeClass } from '@/data/codeMeta';
import { useAppStore } from '@/store/useAppStore';

const TYPE_FILTERS: { label: string; value: string | null; color: string }[] = [
  { label: 'All', value: null, color: 'text-slate-300' },
  { label: 'Class', value: 'class', color: 'text-purple-400' },
  { label: 'Interface', value: 'interface', color: 'text-cyan-400' },
  { label: 'Abstract', value: 'abstract_class', color: 'text-amber-400' },
  { label: 'Static', value: 'static_class', color: 'text-emerald-400' },
  { label: 'Enum', value: 'enum', color: 'text-red-400' },
];

const NODE_COLORS: Record<string, string> = {
  interface: '#00d4ff', class: '#7c3aed', abstract_class: '#f59e0b',
  static_class: '#10b981', enum: '#ef4444', struct: '#f97316',
};

export default function GraphSidebar() {
  const { searchQuery, activeNamespace, activeTypeFilter, setSearchQuery, setActiveNamespace, setActiveTypeFilter } = useAppStore();

  const namespaces = useMemo(() => {
    const nsSet = new Set(codeMetaData.classes.map((c: CodeClass) => c.namespace));
    return Array.from(nsSet).sort();
  }, []);

  const stats = useMemo(() => ({
    classes: codeMetaData.classes.filter((c: CodeClass) => c.type === 'class' || c.type === 'abstract_class' || c.type === 'static_class').length,
    interfaces: codeMetaData.classes.filter((c: CodeClass) => c.type === 'interface').length,
    edges: codeMetaData.edges.length,
    total: codeMetaData.classes.length,
  }), []);

  return (
    <div className="w-64 h-full bg-[#0d1220]/95 backdrop-blur-xl border-r border-cyan-500/20 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-cyan-500/10">
        <h1 className="text-sm font-bold text-white flex items-center gap-2">
          <Filter size={14} className="text-cyan-400" />
          Knowledge Graph
        </h1>
      </div>

      {/* Search */}
      <div className="p-3">
        <div className="relative">
          <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search classes..."
            className="w-full bg-white/5 border border-cyan-500/15 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 transition-colors"
          />
        </div>
      </div>

      {/* Namespace Filter */}
      <div className="px-3 pb-3">
        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Namespace</label>
        <div className="relative">
          <select
            value={activeNamespace || ''}
            onChange={(e) => setActiveNamespace(e.target.value || null)}
            className="w-full appearance-none bg-white/5 border border-cyan-500/15 rounded-lg px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/40 transition-colors"
          >
            <option value="">All Namespaces</option>
            {namespaces.map((ns) => <option key={ns} value={ns}>{ns}</option>)}
          </select>
          <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
        </div>
      </div>

      {/* Type Filter */}
      <div className="px-3 pb-3">
        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">Type</label>
        <div className="flex flex-wrap gap-1">
          {TYPE_FILTERS.map((tf) => (
            <button
              key={tf.label}
              onClick={() => setActiveTypeFilter(activeTypeFilter === tf.value ? null : tf.value)}
              className={`text-[10px] px-2 py-1 rounded-md border transition-colors ${
                activeTypeFilter === tf.value
                  ? 'border-cyan-500/40 bg-cyan-500/15 text-cyan-400'
                  : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20'
              }`}
            >
              <span className={activeTypeFilter === tf.value ? 'text-cyan-400' : tf.color}>{tf.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="px-3 pb-3 mt-auto">
        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">Statistics</label>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-white/[0.03] rounded-lg p-2 text-center">
            <div className="text-base font-bold text-white">{stats.total}</div>
            <div className="text-[10px] text-slate-500">Total</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-2 text-center">
            <div className="text-base font-bold text-purple-400">{stats.classes}</div>
            <div className="text-[10px] text-slate-500">Classes</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-2 text-center">
            <div className="text-base font-bold text-cyan-400">{stats.interfaces}</div>
            <div className="text-[10px] text-slate-500">Interfaces</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-2 text-center">
            <div className="text-base font-bold text-amber-400">{stats.edges}</div>
            <div className="text-[10px] text-slate-500">Edges</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="px-3 pb-4 border-t border-cyan-500/10 pt-3">
        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">Legend</label>
        <div className="space-y-1">
          {Object.entries(NODE_COLORS).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2 text-[10px] text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
              <span className="capitalize">{type.replace('_', ' ')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
