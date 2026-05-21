import { Eye, Shield, Lock, Code, Layers } from 'lucide-react';
import type { CodeClass } from '@/data/codeMeta';
import { useAppStore } from '@/store/useAppStore';

const TYPE_BADGE: Record<string, { label: string; color: string }> = {
  interface: { label: 'interface', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  class: { label: 'class', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  abstract_class: { label: 'abstract', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  static_class: { label: 'static', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  enum: { label: 'enum', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  struct: { label: 'struct', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
};

const ACCESS_ICONS = {
  public: { icon: Eye, color: 'text-green-400' },
  protected: { icon: Shield, color: 'text-yellow-400' },
  private: { icon: Lock, color: 'text-red-400' },
};

export default function ClassDetail({ classes }: { classes: CodeClass[] }) {
  const { selectedNodeId, setSelectedNode } = useAppStore();
  const cls = classes.find((c) => c.id === selectedNodeId);

  if (!cls) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-3">
        <Code className="w-12 h-12 opacity-30" />
        <p className="text-lg">选择一个类查看详细文档</p>
        <p className="text-sm text-gray-600">从左侧命名空间树中选择</p>
      </div>
    );
  }

  const badge = TYPE_BADGE[cls.type] || TYPE_BADGE.class;
  const baseClassObj = cls.baseClass ? classes.find((c) => c.name === cls.baseClass || c.id === cls.baseClass) : null;

  return (
    <div className="h-full overflow-y-auto p-6 space-y-6 scrollbar-thin">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold text-white">{cls.name}</h1>
          <span className={`px-2 py-0.5 text-xs rounded border ${badge.color}`}>{badge.label}</span>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded bg-gray-800 text-gray-400 border border-gray-700">
          <Layers className="w-3 h-3" />
          {cls.namespace}
        </span>
      </div>

      {/* Description */}
      {cls.description && (
        <p className="text-gray-300 text-sm leading-relaxed">{cls.description}</p>
      )}

      {/* File path */}
      <div className="text-xs text-gray-500 font-mono bg-gray-900/50 px-3 py-2 rounded border border-gray-800">
        📄 {cls.filePath}
      </div>

      {/* Inheritance chain */}
      {(cls.baseClass || cls.interfaces.length > 0) && (
        <div className="space-y-2">
          {cls.baseClass && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">继承:</span>
              <button
                className="text-cyan-400 hover:underline"
                onClick={() => {
                  if (baseClassObj) setSelectedNode(baseClassObj.id);
                }}
              >
                {cls.baseClass}
              </button>
            </div>
          )}
          {cls.interfaces.length > 0 && (
            <div className="flex items-center gap-2 text-sm flex-wrap">
              <span className="text-gray-500">实现:</span>
              {cls.interfaces.map((iface) => {
                const ifaceObj = classes.find((c) => c.name === iface || c.id === iface);
                return (
                  <button
                    key={iface}
                    className="px-2 py-0.5 text-xs rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                    onClick={() => { if (ifaceObj) setSelectedNode(ifaceObj.id); }}
                  >
                    {iface}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Properties */}
      {cls.properties.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">属性</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-2 px-3 text-gray-500 font-medium">名称</th>
                  <th className="text-left py-2 px-3 text-gray-500 font-medium">类型</th>
                  <th className="text-left py-2 px-3 text-gray-500 font-medium">描述</th>
                </tr>
              </thead>
              <tbody>
                {cls.properties.map((prop) => (
                  <tr key={prop.name} className="border-b border-gray-800/50 hover:bg-white/[0.02]">
                    <td className="py-2 px-3 text-cyan-400 font-mono text-xs">{prop.name}</td>
                    <td className="py-2 px-3 text-purple-400 font-mono text-xs">{prop.type}</td>
                    <td className="py-2 px-3 text-gray-400">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Methods */}
      {cls.methods.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">方法</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-2 px-3 text-gray-500 font-medium w-8" />
                  <th className="text-left py-2 px-3 text-gray-500 font-medium">名称</th>
                  <th className="text-left py-2 px-3 text-gray-500 font-medium">返回类型</th>
                  <th className="text-left py-2 px-3 text-gray-500 font-medium">参数</th>
                  <th className="text-left py-2 px-3 text-gray-500 font-medium">描述</th>
                </tr>
              </thead>
              <tbody>
                {cls.methods.map((method, i) => {
                  const AccessIcon = ACCESS_ICONS[method.accessModifier];
                  return (
                    <tr key={`${method.name}-${i}`} className="border-b border-gray-800/50 hover:bg-white/[0.02]">
                      <td className="py-2 px-3">
                        <AccessIcon.icon className={`w-3.5 h-3.5 ${AccessIcon.color}`} />
                      </td>
                      <td className="py-2 px-3 text-cyan-400 font-mono text-xs">
                        {method.isStatic && <span className="text-green-400 mr-1">static</span>}
                        {method.name}
                      </td>
                      <td className="py-2 px-3 text-purple-400 font-mono text-xs">{method.returnType}</td>
                      <td className="py-2 px-3 text-gray-400 font-mono text-xs">
                        ({method.parameters.join(', ')})
                      </td>
                      <td className="py-2 px-3 text-gray-400">{method.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
