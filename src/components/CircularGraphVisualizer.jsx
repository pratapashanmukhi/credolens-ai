import React, { useState } from 'react';
import { Network, AlertCircle, CheckCircle2, ShieldAlert, Info, ArrowRight } from 'lucide-react';

export default function CircularGraphVisualizer({ company }) {
  const [selectedNode, setSelectedNode] = useState(company.agents.forensic.graphNodes[0]);
  const nodes = company.agents.forensic.graphNodes;
  const edges = company.agents.forensic.graphEdges || [];

  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Network className="w-4 h-4 text-blue-600" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
            Interactive Counterparty Graph RAG
          </h3>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-600">
          Click any node to inspect telemetry
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full h-[250px] bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e140_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e140_1px,transparent_1px)] bg-[size:24px_24px]" />

        <svg className="w-full h-full" viewBox="0 0 450 280">
          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="16" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="16" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669" />
            </marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="16" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#d97706" />
            </marker>
          </defs>

          {/* Edges / Transactions */}
          {edges.map((edge, idx) => {
            const sourceNode = nodes.find(n => n.id === edge.from);
            const targetNode = nodes.find(n => n.id === edge.to);
            if (!sourceNode || !targetNode) return null;

            const strokeColor = edge.suspect ? '#dc2626' : company.statusColor === 'emerald' ? '#059669' : '#d97706';
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
                />
                <rect
                  x={(sourceNode.x + targetNode.x) / 2 - 32}
                  y={(sourceNode.y + targetNode.y) / 2 - 16}
                  width="64"
                  height="16"
                  rx="4"
                  fill="#ffffff"
                  stroke={strokeColor}
                  strokeWidth="0.8"
                />
                <text
                  x={(sourceNode.x + targetNode.x) / 2}
                  y={(sourceNode.y + targetNode.y) / 2 - 4}
                  fill={strokeColor}
                  fontSize="8.5"
                  fontFamily="monospace"
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
            
            let fillBg = '#ffffff';
            let strokeColor = '#94a3b8';
            let textColor = '#0f172a';

            if (isShell) {
              fillBg = '#fef2f2';
              strokeColor = '#dc2626';
              textColor = '#991b1b';
            } else if (node.status === 'prime' || node.status === 'verified') {
              fillBg = '#f0fdf4';
              strokeColor = '#059669';
              textColor = '#166534';
            } else if (node.status === 'moderate' || node.status === 'slow_payer') {
              fillBg = '#fffbeb';
              strokeColor = '#d97706';
              textColor = '#92400e';
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
                  stroke={isSelected ? '#2563eb' : strokeColor}
                  strokeWidth={isSelected ? 3 : 2}
                  className="shadow-sm"
                />
                <text
                  x={node.x}
                  y={node.y + 4}
                  fill={textColor}
                  fontSize={isTarget ? "9.5" : "8"}
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {node.id.split(' ')[0]}
                </text>
                <text
                  x={node.x}
                  y={node.y + (isTarget ? 36 : 28)}
                  fill="#64748b"
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
        <div className="absolute top-2 left-2 flex items-center gap-3 text-[10px] font-mono bg-white/90 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
          <span className="flex items-center gap-1.5 text-red-600 font-semibold">
            <span className="w-2 h-2 rounded-full bg-red-500" /> Shell / Circular Loop
          </span>
          <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Verified Counterparty
          </span>
        </div>
      </div>

      {/* Selected Node Details Box */}
      {selectedNode && (
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-sm">{selectedNode.id}</span>
              <span className="text-[10px] px-2 py-0.5 rounded font-mono font-semibold bg-white border border-slate-200 text-slate-700">
                {selectedNode.type}
              </span>
            </div>
            <p className="text-slate-600 mt-1 leading-relaxed text-xs">
              {selectedNode.details}
            </p>
          </div>
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded font-mono uppercase shrink-0 ${
            selectedNode.status === 'shell' || selectedNode.status === 'suspect'
              ? 'bg-red-100 text-red-800 border border-red-200'
              : selectedNode.status === 'prime' || selectedNode.status === 'verified'
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
              : 'bg-amber-100 text-amber-800 border border-amber-200'
          }`}>
            {selectedNode.status}
          </span>
        </div>
      )}

    </div>
  );
}