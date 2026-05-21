import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ExternalLink, ArrowRight } from 'lucide-react';
import type { ModuleInfo } from '@/data/codeMeta';
import { codeMetaData } from '@/data/codeMeta';

const layerColors: Record<string, string> = {
  framework: 'bg-slate-500/20 text-slate-300 border-slate-500/40',
  network: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  entity: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  module: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
  business: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  ui: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
  editor: 'bg-gray-500/20 text-gray-300 border-gray-500/40',
  sdk: 'bg-green-500/20 text-green-300 border-green-500/40',
  update: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
};

const layerGlow: Record<string, string> = {
  framework: 'hover:shadow-slate-400/30', network: 'hover:shadow-blue-400/30',
  entity: 'hover:shadow-purple-400/30', module: 'hover:shadow-cyan-400/30',
  business: 'hover:shadow-amber-400/30', ui: 'hover:shadow-pink-400/30',
  editor: 'hover:shadow-gray-400/30', sdk: 'hover:shadow-green-400/30',
  update: 'hover:shadow-orange-400/30',
};

interface Props {
  module: ModuleInfo;
}

export default function ModuleCard({ module }: Props) {
  const [expanded, setExpanded] = useState(false);
  const badge = layerColors[module.layer] ?? layerColors.framework;
  const glow = layerGlow[module.layer] ?? '';
  const depModules = codeMetaData.modules.filter((m) => module.dependencies.includes(m.id));
  const displayClasses = expanded ? module.keyClasses : module.keyClasses.slice(0, 5);

  return (
    <div className={`group relative rounded-xl border border-white/10 bg-[#0d1220]/80 backdrop-blur-sm
      transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg ${glow}`}>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{module.name}</h3>
          <span className={`text-xs px-2 py-0.5 rounded-full border ${badge}`}>{module.layer}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{module.description}</p>

        {/* Key classes */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {displayClasses.map((cls) => {
            const clsData = codeMetaData.classes.find((c) => c.id === cls);
            return (
              <Link key={cls} to={`/api/${encodeURIComponent(cls)}`}
                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md
                  bg-cyan-900/30 text-cyan-300 border border-cyan-800/30
                  hover:bg-cyan-800/40 hover:border-cyan-500/50 transition-colors">
                {clsData?.name ?? cls.split('.').pop()}
                <ExternalLink size={10} className="opacity-50" />
              </Link>
            );
          })}
          {module.keyClasses.length > 5 && (
            <button onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md
                bg-white/5 text-gray-400 hover:text-cyan-300 transition-colors">
              {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              {expanded ? '收起' : `+${module.keyClasses.length - 5}`}
            </button>
          )}
        </div>

        {/* Dependencies */}
        {depModules.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap text-xs text-gray-500">
            <ArrowRight size={10} className="text-cyan-600" />
            {depModules.map((dep) => (
              <span key={dep.id} className="px-1.5 py-0.5 rounded bg-white/5 text-gray-400">
                {dep.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
