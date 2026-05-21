import { useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import { codeMetaData, type CodeClass, type InheritanceEdge } from '@/data/codeMeta';
import { useAppStore } from '@/store/useAppStore';

const NODE_COLORS: Record<string, string> = {
  interface: '#00d4ff',
  class: '#7c3aed',
  abstract_class: '#f59e0b',
  static_class: '#10b981',
  enum: '#ef4444',
  struct: '#f97316',
};

const EDGE_COLORS: Record<string, string> = {
  inherits: '#7c3aed',
  implements: '#00d4ff',
};

interface SimNode extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  type: CodeClass['type'];
  namespace: string;
}

interface SimLink extends d3.SimulationLinkDatum<SimNode> {
  type: 'inherits' | 'implements';
}

export default function GraphCanvas() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { selectedNodeId, searchQuery, activeNamespace, activeTypeFilter, setSelectedNode } = useAppStore();

  const buildGraph = useCallback(() => {
    const nodes: SimNode[] = codeMetaData.classes.map((c) => ({
      id: c.id, name: c.name, type: c.type, namespace: c.namespace,
    }));
    const nodeMap = new Map(nodes.map((n) => [n.id, n]));
    const links: SimLink[] = codeMetaData.edges
      .filter((e: InheritanceEdge) => nodeMap.has(e.source) && nodeMap.has(e.target))
      .map((e: InheritanceEdge) => ({
        source: e.source, target: e.target, type: e.type,
      }));
    return { nodes, links };
  }, []);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;
    const { nodes, links } = buildGraph();
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    svg.attr('width', width).attr('height', height);

    const defs = svg.append('defs');
    Object.entries(EDGE_COLORS).forEach(([key, color]) => {
      defs.append('marker')
        .attr('id', `arrow-${key}`)
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 20).attr('refY', 0)
        .attr('markerWidth', 6).attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path').attr('d', 'M0,-5L10,0L0,5').attr('fill', color);
    });

    // Glow filter
    const filter = defs.append('filter').attr('id', 'glow');
    filter.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'coloredBlur');
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    const g = svg.append('g');

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => g.attr('transform', event.transform));
    svg.call(zoom);

    const simulation = d3.forceSimulation<SimNode>(nodes)
      .force('link', d3.forceLink<SimNode, SimLink>(links).id((d) => d.id).distance(80))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(20));

    const link = g.append('g').selectAll('line')
      .data(links).join('line')
      .attr('stroke', (d) => EDGE_COLORS[d.type] || '#444')
      .attr('stroke-opacity', 0.5)
      .attr('stroke-width', 1.5)
      .attr('marker-end', (d) => `url(#arrow-${d.type})`);

    const node = g.append('g').selectAll<SVGCircleElement, SimNode>('circle')
      .data(nodes).join('circle')
      .attr('r', 6)
      .attr('fill', (d) => NODE_COLORS[d.type] || '#666')
      .attr('stroke', (d) => NODE_COLORS[d.type] || '#666')
      .attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.4)
      .style('filter', 'url(#glow)')
      .style('cursor', 'pointer')
      .on('click', (_event, d) => setSelectedNode(d.id))
      .on('mouseenter', function () { d3.select(this).transition().duration(150).attr('r', 10); })
      .on('mouseleave', function () { d3.select(this).transition().duration(150).attr('r', 6); })
      .call(d3.drag<SVGCircleElement, SimNode>()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        })
      );

    const label = g.append('g').selectAll<SVGTextElement, SimNode>('text')
      .data(nodes).join('text')
      .text((d) => d.name)
      .attr('font-size', 9)
      .attr('fill', '#94a3b8')
      .attr('text-anchor', 'middle')
      .attr('dy', -12)
      .style('pointer-events', 'none')
      .style('user-select', 'none');

    simulation.on('tick', () => {
      link.attr('x1', (d) => (d.source as SimNode).x!)
        .attr('y1', (d) => (d.source as SimNode).y!)
        .attr('x2', (d) => (d.target as SimNode).x!)
        .attr('y2', (d) => (d.target as SimNode).y!);
      node.attr('cx', (d) => d.x!).attr('cy', (d) => d.y!);
      label.attr('x', (d) => d.x!).attr('y', (d) => d.y!);
    });

    const handleResize = () => {
      const r = containerRef.current?.getBoundingClientRect();
      if (r) {
        svg.attr('width', r.width).attr('height', r.height);
        simulation.force('center', d3.forceCenter(r.width / 2, r.height / 2));
        simulation.alpha(0.3).restart();
      }
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(containerRef.current);

    // Store refs for external updates
    (svgRef.current as SVGSVGElement & { _nodes: SimNode[]; _node: d3.Selection<SVGCircleElement, SimNode, SVGGElement, unknown> })._nodes = nodes;
    (svgRef.current as SVGSVGElement & { _nodes: SimNode[]; _node: d3.Selection<SVGCircleElement, SimNode, SVGGElement, unknown> })._node = node;

    return () => { simulation.stop(); ro.disconnect(); };
  }, [buildGraph, setSelectedNode]);

  // Search + filter highlighting
  useEffect(() => {
    const el = svgRef.current as SVGSVGElement & { _nodes?: SimNode[]; _node?: d3.Selection<SVGCircleElement, SimNode, SVGGElement, unknown> };
    if (!el?._node) return;
    const query = searchQuery.toLowerCase();
    el._node.attr('opacity', (d) => {
      const matchSearch = !query || d.name.toLowerCase().includes(query) || d.id.toLowerCase().includes(query);
      const matchNs = !activeNamespace || d.namespace === activeNamespace;
      const matchType = !activeTypeFilter || d.type === activeTypeFilter;
      return (matchSearch && matchNs && matchType) ? 1 : 0.12;
    });
  }, [searchQuery, activeNamespace, activeTypeFilter]);

  // Selected node highlight
  useEffect(() => {
    const el = svgRef.current as SVGSVGElement & { _node?: d3.Selection<SVGCircleElement, SimNode, SVGGElement, unknown> };
    if (!el?._node) return;
    el._node.attr('stroke-width', (d) => d.id === selectedNodeId ? 3 : 1.5)
      .attr('r', (d) => d.id === selectedNodeId ? 10 : 6);
  }, [selectedNodeId]);

  return (
    <div ref={containerRef} className="w-full h-full bg-[#0a0e17]">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
}
