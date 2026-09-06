import React from 'react';
import { ShieldAlert, Network, AlertTriangle, CheckCircle2, XCircle, FileSearch, Layers } from 'lucide-react';
import CircularGraphVisualizer from '../components/CircularGraphVisualizer';

export default function ForensicRadarView({ company }) {
  return (
    <div className="space-y-5">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
        <div>
          <h2 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>Forensic Radar & Circularity Engine</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Round-tripping loop detection, counterparty clustering, and PDF metadata tampering verification.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2 py-1 rounded bg-[#090d16] text-slate-300 font-bold border border-[#1a2233]">
            Fraud Risk: {company.fraudProbability}
          </span>
          <span className="px-2 py-1 rounded bg-[#090d16] text-blue-400 font-bold border border-[#1a2233]">
            Graph RAG
          </span>
        </div>
      </div>

      {/* Graph Visualizer */}
      <CircularGraphVisualizer company={company} />

      {/* Forensic Alerts & PDF Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        {/* Left: Forensic Discrepancies */}
        <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233] space-y-3">
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
            Forensic Integrity Checklist
          </h3>

          <div className="space-y-2.5 text-xs">
            {company.agents.forensic.alerts.map((alert, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border flex items-start gap-2.5 ${
                  alert.severity === 'critical'
                    ? 'bg-red-950/40 border-red-900/60 text-red-300'
                    : alert.severity === 'warning'
                    ? 'bg-amber-950/40 border-amber-900/60 text-amber-300'
                    : 'bg-emerald-950/40 border-emerald-900/60 text-emerald-300'
                }`}
              >
                {alert.severity === 'critical' ? (
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                ) : alert.severity === 'warning' ? (
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <span className="font-bold font-mono text-[9px] uppercase block">[{alert.type}]</span>
                  <span className="text-[11px] leading-relaxed">{alert.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: PDF Metadata & OCR Layer Inspector */}
        <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233] space-y-3">
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono flex items-center justify-between">
            <span>PDF Vector Layer Inspector</span>
            <span className="text-[10px] font-normal text-slate-500">LayoutLMv3</span>
          </h3>

          <div className="p-3 rounded-lg bg-[#090d16] border border-[#1a2233] font-mono text-xs space-y-2 text-slate-300">
            <div className="flex justify-between border-b border-[#1a2233] pb-1.5 text-[11px]">
              <span className="text-slate-500">Document Type:</span>
              <span className="font-bold text-slate-200">Current Account Bank Statement (.pdf)</span>
            </div>
            <div className="flex justify-between border-b border-[#1a2233] pb-1.5 text-[11px]">
              <span className="text-slate-500">Cryptographic Watermark:</span>
              <span className={`font-bold ${company.id === 'apex' ? 'text-red-400' : 'text-emerald-400'}`}>
                {company.id === 'apex' ? 'MODIFIED / INVALID' : 'VERIFIED STAMP'}
              </span>
            </div>
            <div className="flex justify-between border-b border-[#1a2233] pb-1.5 text-[11px]">
              <span className="text-slate-500">Font Substitution Check:</span>
              <span className={`font-bold ${company.id === 'apex' ? 'text-red-400' : 'text-emerald-400'}`}>
                {company.id === 'apex' ? 'ALERT: Font swapped on Pg 4' : 'PASSED: Native Font'}
              </span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-500">GSTR-3B vs Bank Credit:</span>
              <span className={`font-bold ${company.id === 'apex' ? 'text-red-400' : 'text-emerald-400'}`}>
                {company.id === 'apex' ? '42.8% Unexplained Inflow Gap' : '0.6% Variance (High Match)'}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}