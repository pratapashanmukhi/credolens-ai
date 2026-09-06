import React, { useState } from 'react';
import { Network, AlertCircle, CheckCircle2, ShieldAlert, Info, ArrowRight } from 'lucide-react';

export default function CircularGraphVisualizer({ company }) {
  const [selectedNode, setSelectedNode] = useState(company.agents.forensic.graphNodes[0]);
  const nodes = company.agents.forensic.graphNodes;
  const edges = company.agents.forensic.graphEdges || [];

  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Network className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Interactive Counterparty Graph RAG
          </h4>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
          Click any node to inspect telemetry
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full h-[230px] bg-slate-950/80 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:20px_20px]" />

        <svg className="w-full h-full" viewBox="0 0 450 280">
          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="15" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="15" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
            </marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="15" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
            </marker>
          </defs>

          {/* Edges / Transactions */}
          {edges.map((edge, idx) => {
            const sourceNode = nodes.find(n => n.id === edge.from);
            const targetNode = nodes.find(n => n.id === edge.to);
            if (!sourceNode || !targetNode) return null;

            const strokeColor = edge.suspect ? '#ef4444' : company.statusColor === 'emerald' ? '#10b981' : '#f59e0b';
            const markerId = edge.suspect ? 'url(#arrow-red)' : company.statusColor === 'emerald' ? 'url(#arrow-green)' : 'url(#arrow-amber)';

            return (
              <g key={idx}>
                <line
                  x1={sourceNode.x}
                  y1={sourceNode.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke={strokeColor}
                  strokeWidth={edge.suspect ? "2.5" : "1.8"}
                  strokeDasharray={edge.suspect ? "4 2" : "none"}
                  markerEnd={markerId}
                  className={edge.suspect ? "animate-pulse" : ""}
                />
                <text
                  x={(sourceNode.x + targetNode.x) / 2}
                  y={(sourceNode.y + targetNode.y) / 2 - 6}
                  fill={strokeColor}
                  fontSize="9"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {edge.amount}
                </text>
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node, i) => {
            const isSelected = selectedNode?.id === node.id;
            const isTarget = node.type.includes('Target');
            const isShell = node.status === 'shell' || node.status === 'suspect';
            
            let fillBg = '#0f172a';
            let strokeColor = '#334155';
            let textColor = '#f8fafc';

            if (isShell) {
              fillBg = '#450a0a';
              strokeColor = '#ef4444';
              textColor = '#fca5a5';
            } else if (node.status === 'prime' || node.status === 'verified') {
              fillBg = '#022c22';
              strokeColor = '#10b981';
              textColor = '#6ee7b7';
            } else if (node.status === 'moderate' || node.status === 'slow_payer') {
              fillBg = '#451a03';
              strokeColor = '#f59e0b';
              textColor = '#fde68a';
            }

            return (
              <g
                key={i}
                className="cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedNode(node)}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isTarget ? 24 : 18}
                  fill={fillBg}
                  stroke={isSelected ? '#38bdf8' : strokeColor}
                  strokeWidth={isSelected ? 3 : 2}
                  className="shadow-lg"
                />
                <text
                  x={node.x}
                  y={node.y + 4}
                  fill={textColor}
                  fontSize={isTarget ? "10" : "8.5"}
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {node.id.split(' ')[0]}
                </text>
                <text
                  x={node.x}
                  y={node.y + (isTarget ? 36 : 28)}
                  fill="#94a3b8"
                  fontSize="7.5"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {node.type}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="absolute top-2 left-2 flex items-center gap-3 text-[9px] font-mono bg-slate-950/90 px-2 py-1 rounded border border-slate-800">
          <span className="flex items-center gap-1 text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500" /> Shell / Circular Loop
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Verified Counterparty
          </span>
        </div>
      </div>

      {/* Selected Node Details Box */}
      {selectedNode && (
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">{selectedNode.id}</span>
              <span className="text-[10px] px-2 py-0.5 rounded font-mono font-semibold bg-slate-950 border border-slate-700 text-slate-300">
                {selectedNode.type}
              </span>
            </div>
            <p className="text-slate-400 mt-1 text-[11px] leading-relaxed">
              {selectedNode.details}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase font-mono ${
              selectedNode.status === 'shell' || selectedNode.status === 'suspect'
                ? 'bg-red-950 text-red-300 border border-red-800'
                : selectedNode.status === 'prime' || selectedNode.status === 'verified'
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                : 'bg-amber-950 text-amber-300 border border-amber-800'
            }`}>
              {selectedNode.status}
            </span>
          </div>
        </div>
      )}

    </div>
  );
}