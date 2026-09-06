import React, { useState } from 'react';
import { Network, AlertCircle, CheckCircle2, ShieldAlert, Info, ArrowRight } from 'lucide-react';

export default function CircularGraphVisualizer({ company }) {
  const [selectedNode, setSelectedNode] = useState(company.agents.forensic.graphNodes[0]);
  const nodes = company.agents.forensic.graphNodes;
  const edges = company.agents.forensic.graphEdges || [];

  return (
    <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233] space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Network className="w-4 h-4 text-blue-400" />
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
            Counterparty Transaction Graph
          </h3>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111622] border border-[#1a2233] text-slate-400">
          Click node to inspect entity
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full h-[240px] bg-[#090d16] rounded-lg border border-[#1a2233] overflow-hidden flex items-center justify-center">
        
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        <svg className="w-full h-full" viewBox="0 0 450 280">
          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="16" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f87171" />
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="16" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#34d399" />
            </marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="16" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
            </marker>
          </defs>

          {/* Edges / Transactions */}
          {edges.map((edge, idx) => {
            const sourceNode = nodes.find(n => n.id === edge.from);
            const targetNode = nodes.find(n => n.id === edge.to);
            if (!sourceNode || !targetNode) return null;

            const strokeColor = edge.suspect ? '#f87171' : company.statusColor === 'emerald' ? '#34d399' : '#fbbf24';
            const markerId = edge.suspect ? 'url(#arrow-red)' : company.statusColor === 'emerald' ? 'url(#arrow-green)' : 'url(#arrow-amber)';

            return (
              <g key={idx}>
                <line
                  x1={sourceNode.x}
                  y1={sourceNode.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke={strokeColor}
                  strokeWidth={edge.suspect ? "2" : "1.5"}
                  strokeDasharray={edge.suspect ? "4 2" : "none"}
                  markerEnd={markerId}
                />
                <rect
                  x={(sourceNode.x + targetNode.x) / 2 - 28}
                  y={(sourceNode.y + targetNode.y) / 2 - 14}
                  width="56"
                  height="14"
                  rx="3"
                  fill="#090d16"
                  stroke={strokeColor}
                  strokeWidth="0.8"
                />
                <text
                  x={(sourceNode.x + targetNode.x) / 2}
                  y={(sourceNode.y + targetNode.y) / 2 - 3}
                  fill={strokeColor}
                  fontSize="8"
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
            
            let fillBg = '#0e1422';
            let strokeColor = '#334155';
            let textColor = '#e2e8f0';

            if (isShell) {
              fillBg = '#2a1015';
              strokeColor = '#f87171';
              textColor = '#fca5a5';
            } else if (node.status === 'prime' || node.status === 'verified') {
              fillBg = '#0d281e';
              strokeColor = '#34d399';
              textColor = '#86efac';
            } else if (node.status === 'moderate' || node.status === 'slow_payer') {
              fillBg = '#281a0c';
              strokeColor = '#fbbf24';
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
                  r={isTarget ? 22 : 16}
                  fill={fillBg}
                  stroke={isSelected ? '#38bdf8' : strokeColor}
                  strokeWidth={isSelected ? 2.5 : 1.5}
                />
                <text
                  x={node.x}
                  y={node.y + 3.5}
                  fill={textColor}
                  fontSize={isTarget ? "9" : "7.5"}
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {node.id.split(' ')[0]}
                </text>
                <text
                  x={node.x}
                  y={node.y + (isTarget ? 34 : 26)}
                  fill="#94a3b8"
                  fontSize="7"
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
        <div className="absolute top-2 left-2 flex items-center gap-3 text-[9px] font-mono bg-[#0e1422]/90 px-2 py-1 rounded border border-[#1a2233]">
          <span className="flex items-center gap-1 text-red-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Shell / Circular Route
          </span>
          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Verified Counterparty
          </span>
        </div>
      </div>

      {/* Selected Node Details Box */}
      {selectedNode && (
        <div className="p-3 rounded-lg bg-[#090d16] border border-[#1a2233] text-xs flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-100">{selectedNode.id}</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded font-mono font-semibold bg-[#111622] border border-[#1e293b] text-slate-300">
                {selectedNode.type}
              </span>
            </div>
            <p className="text-slate-400 mt-1 leading-relaxed text-[11px]">
              {selectedNode.details}
            </p>
          </div>
          <span className={`text-[9px] font-bold px-2 py-0.5 rounded font-mono uppercase shrink-0 ${
            selectedNode.status === 'shell' || selectedNode.status === 'suspect'
              ? 'bg-red-950 text-red-400 border border-red-800'
              : selectedNode.status === 'prime' || selectedNode.status === 'verified'
              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
              : 'bg-amber-950 text-amber-400 border border-amber-800'
          }`}>
            {selectedNode.status}
          </span>
        </div>
      )}

    </div>
  );
}