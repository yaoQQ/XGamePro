import GraphCanvas from '@/components/GraphCanvas';
import GraphSidebar from '@/components/GraphSidebar';
import NodeDetailPanel from '@/components/NodeDetailPanel';

export default function KnowledgeGraph() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-full bg-[#0a0e17] overflow-hidden">
      <GraphSidebar />
      <div className="flex-1 relative">
        <GraphCanvas />
      </div>
      <NodeDetailPanel />
    </div>
  );
}
