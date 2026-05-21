import { X } from 'lucide-react';
import { codeMetaData, type CodeClass } from '@/data/codeMeta';
import { useAppStore } from '@/store/useAppStore';

const TYPE_COLORS: Record<string, string> = {
  interface: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  class: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  abstract_class: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  static_class: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  enum: 'bg-red-500/20 text-red-400 border-red-500/30',
  struct: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};

const TYPE_LABELS: Record<string, string> = {
  interface: 'Interface', class: 'Class', abstract_class: 'Abstract',
  static_class: 'Static', enum: 'Enum', struct: 'Struct',
};

export default function NodeDetailPanel() {
  const { selectedNodeId, setSelectedNode } = useAppStore();
  if (!selectedNodeId) return null;

  const cls = codeMetaData.classes.find((c: CodeClass) => c.id === selectedNodeId);
  if (!cls) return null;

  const handleLinkClick = (id: string) => {
    const found = codeMetaData.classes.find((c: CodeClass) => c.id === id || c.name === id);
    if (found) setSelectedNode(found.id);
  };

  return (
    <div className="fixed right-0 top-0 h-full w-[420px] z-50 flex">
      <div
        className="flex-1 bg-[#0d1220]/90 backdrop-blur-xl border-l border-cyan-500/20 overflow-y-auto"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#1e293b transparent' }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0d1220]/95 backdrop-blur-sm border-b border-cyan-500/10 p-4 flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-white truncate">{cls.name}</h2>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-xs px-2 py-0.5 rounded border bg-purple-500/15 text-purple-400 border-purple-500/25">
                {cls.namespace}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded border ${TYPE_COLORS[cls.type] || ''}`}>
                {TYPE_LABELS[cls.type] || cls.type}
              </span>
            </div>
          </div>
          <button
            onClick={() => setSelectedNode(null)}
            className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Description */}
          {cls.description && (
            <p className="text-sm text-slate-400 leading-relaxed">{cls.description}</p>
          )}

          {/* File Path */}
          <div className="text-xs text-slate-500 font-mono break-all">{cls.filePath}</div>

          {/* Base Class */}
          {cls.baseClass && (
            <div>
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Base Class</h3>
              <button
                onClick={() => handleLinkClick(cls.baseClass!)}
                className="text-sm text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                {cls.baseClass}
              </button>
            </div>
          )}

          {/* Interfaces */}
          {cls.interfaces.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Implements</h3>
              <div className="flex flex-wrap gap-1.5">
                {cls.interfaces.map((iface) => (
                  <button
                    key={iface}
                    onClick={() => handleLinkClick(iface)}
                    className="text-xs px-2 py-0.5 rounded border bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20"
                  >
                    {iface}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Properties */}
          {cls.properties.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Properties</h3>
              <div className="space-y-1">
                {cls.properties.map((p) => (
                  <div key={p.name} className="flex items-center gap-2 text-xs bg-white/[0.02] rounded px-2 py-1.5">
                    <span className="text-purple-400 font-mono">{p.type}</span>
                    <span className="text-slate-300">{p.name}</span>
                    {p.description && <span className="text-slate-500 ml-auto truncate max-w-[140px]">{p.description}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Methods */}
          {cls.methods.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Methods</h3>
              <div className="space-y-1">
                {cls.methods.map((m, i) => (
                  <div key={`${m.name}-${i}`} className="text-xs bg-white/[0.02] rounded px-2 py-1.5 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-[10px] px-1 rounded ${
                        m.accessModifier === 'public' ? 'text-emerald-400 bg-emerald-500/10' :
                        m.accessModifier === 'protected' ? 'text-amber-400 bg-amber-500/10' :
                        'text-red-400 bg-red-500/10'
                      }`}>{m.accessModifier}</span>
                      {m.isStatic && <span className="text-[10px] px-1 rounded text-blue-400 bg-blue-500/10">static</span>}
                      <span className="text-cyan-400 font-mono">{m.returnType}</span>
                      <span className="text-slate-300">{m.name}</span>
                      <span className="text-slate-500">({m.parameters.join(', ')})</span>
                    </div>
                    {m.description && <div className="text-slate-500 pl-12">{m.description}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
