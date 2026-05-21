import { useState } from 'react';
import { Cpu, Wifi, Users, Puzzle, Sparkles, Monitor, Wrench, Smartphone, RefreshCw } from 'lucide-react';
import { codeMetaData } from '@/data/codeMeta';

const layerConfig: Record<string, { label: string; icon: React.ReactNode; gradient: string; glow: string }> = {
  business: { label: '业务层', icon: <Sparkles size={16} />, gradient: 'url(#grad-business)', glow: '#f59e0b' },
  module:   { label: '模块层', icon: <Puzzle size={16} />, gradient: 'url(#grad-module)', glow: '#06b6d4' },
  entity:   { label: '实体层', icon: <Users size={16} />, gradient: 'url(#grad-entity)', glow: '#a855f7' },
  network:  { label: '网络层', icon: <Wifi size={16} />, gradient: 'url(#grad-network)', glow: '#3b82f6' },
  framework:{ label: '框架层', icon: <Cpu size={16} />, gradient: 'url(#grad-framework)', glow: '#94a3b8' },
};

const sideConfig: Record<string, { label: string; icon: React.ReactNode; gradient: string; glow: string; side: 'left' | 'right' }> = {
  ui:     { label: 'UI表现层', icon: <Monitor size={16} />, gradient: 'url(#grad-ui)', glow: '#ec4899', side: 'left' },
  sdk:    { label: 'SDK层', icon: <Smartphone size={16} />, gradient: 'url(#grad-sdk)', glow: '#22c55e', side: 'left' },
  update: { label: '更新系统层', icon: <RefreshCw size={16} />, gradient: 'url(#grad-update)', glow: '#f97316', side: 'right' },
  editor: { label: '编辑器工具层', icon: <Wrench size={16} />, gradient: 'url(#grad-editor)', glow: '#6b7280', side: 'right' },
};

const mainLayers = ['business', 'module', 'entity', 'network', 'framework'] as const;

interface Props {
  activeLayer: string | null;
  onLayerClick: (layer: string | null) => void;
}

export default function ArchitectureDiagram({ activeLayer, onLayerClick }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const moduleCount = (layer: string) =>
    codeMetaData.modules.filter((m) => m.layer === layer).reduce((s, m) => s + m.keyClasses.length, 0);

  const isActive = (layer: string) => activeLayer === layer || (!activeLayer && !hovered) || hovered === layer;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <svg viewBox="0 0 800 520" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          {Object.entries(layerConfig).map(([k, v]) => (
            <linearGradient key={k} id={`grad-${k}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={v.glow} stopOpacity="0.3" />
              <stop offset="50%" stopColor={v.glow} stopOpacity="0.6" />
              <stop offset="100%" stopColor={v.glow} stopOpacity="0.3" />
            </linearGradient>
          ))}
          {Object.entries(sideConfig).map(([k, v]) => (
            <linearGradient key={k} id={`grad-${k}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={v.glow} stopOpacity="0.3" />
              <stop offset="50%" stopColor={v.glow} stopOpacity="0.6" />
              <stop offset="100%" stopColor={v.glow} stopOpacity="0.3" />
            </linearGradient>
          ))}
          <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#00d4ff" opacity="0.7" />
          </marker>
        </defs>

        {/* Main layers */}
        {mainLayers.map((layer, i) => {
          const cfg = layerConfig[layer];
          const y = 20 + i * 80;
          const active = isActive(layer);
          return (
            <g key={layer} style={{ cursor: 'pointer', opacity: active ? 1 : 0.35, transition: 'opacity 0.3s' }}
               onClick={() => onLayerClick(activeLayer === layer ? null : layer)}
               onMouseEnter={() => setHovered(layer)} onMouseLeave={() => setHovered(null)}>
              <rect x="200" y={y} width="400" height="56" rx="10" fill={cfg.gradient}
                    stroke={cfg.glow} strokeWidth={active ? 2 : 1} filter={active ? 'url(#glow)' : undefined} />
              <text x="220" y={y + 35} fill="white" fontSize="16" fontWeight="bold">{cfg.icon}</text>
              <text x="245" y={y + 35} fill="white" fontSize="15" fontWeight="600">{cfg.label}</text>
              <text x="570" y={y + 35} fill="white" fontSize="12" opacity="0.7">{moduleCount(layer)} 类</text>
            </g>
          );
        })}

        {/* Arrows between main layers */}
        {mainLayers.slice(0, -1).map((_, i) => {
          const y1 = 20 + i * 80 + 56;
          const y2 = 20 + (i + 1) * 80;
          const mid = (y1 + y2) / 2;
          return (
            <g key={`arrow-${i}`}>
              <line x1="400" y1={y1 + 2} x2="400" y2={y2 - 2} stroke="#00d4ff" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
              </line>
              <circle cx="400" cy={mid} r="2" fill="#00d4ff">
                <animate attributeName="cy" values={`${y1+4};${y2-4}`} dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}

        {/* Side layers */}
        {Object.entries(sideConfig).map(([key, cfg], i) => {
          const y = 60 + i * 110;
          const x = cfg.side === 'left' ? 10 : 630;
          const active = isActive(key);
          return (
            <g key={key} style={{ cursor: 'pointer', opacity: active ? 1 : 0.35, transition: 'opacity 0.3s' }}
               onClick={() => onLayerClick(activeLayer === key ? null : key)}
               onMouseEnter={() => setHovered(key)} onMouseLeave={() => setHovered(null)}>
              <rect x={x} y={y} width="160" height="44" rx="8" fill={cfg.gradient}
                    stroke={cfg.glow} strokeWidth={active ? 2 : 1} filter={active ? 'url(#glow)' : undefined} />
              <text x={x + 15} y={y + 28} fill="white" fontSize="13" fontWeight="600">{cfg.label}</text>
              {/* Connection line to center */}
              <line x1={cfg.side === 'left' ? 170 : 630} y1={y + 22}
                    x2={cfg.side === 'left' ? 200 : 600} y2={y + 22}
                    stroke={cfg.glow} strokeWidth="1" strokeDasharray="4,4" opacity="0.4">
                <animate attributeName="stroke-dashoffset" values="0;8" dur="1s" repeatCount="indefinite" />
              </line>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
