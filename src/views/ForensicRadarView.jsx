import React from 'react';
import { ShieldAlert, Network, AlertTriangle, CheckCircle2, XCircle, FileSearch, Layers, Sparkles } from 'lucide-react';
import CircularGraphVisualizer from '../components/CircularGraphVisualizer';

export default function ForensicRadarView({ company }) {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <span>Forensic Radar & Counterparty Circular Graph</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Detects round-tripping, circular invoice networks, and PDF metadata font tampering.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold border border-slate-200">
            Fraud Risk: {company.fraudProbability}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold border border-blue-200">
            Graph RAG Active
          </span>
        </div>
      </div>

      {/* Interactive Node Canvas */}
      <CircularGraphVisualizer company={company} />

      {/* Forensic Alerts & PDF Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: Forensic Discrepancies */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
            Forensic Integrity Checklist
          </h3>

          <div className="space-y-3 text-xs">
            {company.agents.forensic.alerts.map((alert, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                  alert.severity === 'critical'
                    ? 'bg-red-50/70 border-red-200 text-red-800'
                    : alert.severity === 'warning'
                    ? 'bg-amber-50/70 border-amber-200 text-amber-800'
                    : 'bg-emerald-50/70 border-emerald-200 text-emerald-800'
                }`}
              >
                {alert.severity === 'critical' ? (
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                ) : alert.severity === 'warning' ? (
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <span className="font-bold font-mono text-[10px] uppercase block">[{alert.type}]</span>
                  <span className="text-[11px] leading-relaxed">{alert.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: PDF Metadata & OCR Layer Inspector */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center justify-between">
            <span>PDF Document Layer Inspector</span>
            <span className="text-[10px] font-normal text-slate-400">LayoutLMv3 Bounding Box Scan</span>
          </h3>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-2 text-slate-700">
            <div className="flex justify-between border-b border-slate-200 pb-1.5 text-[11px]">
              <span className="text-slate-500">Document Type:</span>
              <span className="font-bold text-slate-900">Current Account Bank Statement (.pdf)</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5 text-[11px]">
              <span className="text-slate-500">Digital Watermark Stamp:</span>
              <span className={`font-bold ${company.id === 'apex' ? 'text-red-600' : 'text-emerald-600'}`}>
                {company.id === 'apex' ? 'MODIFIED / INVALID' : 'VERIFIED CRYPTOGRAPHIC SIGNATURE'}
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5 text-[11px]">
              <span className="text-slate-500">Font Substitution Check:</span>
              <span className={`font-bold ${company.id === 'apex' ? 'text-red-600' : 'text-emerald-600'}`}>
                {company.id === 'apex' ? 'ALERT: Helvetica-Bold replaced on Pg 4' : 'PASSED: 100% Native Font Vector'}
              </span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-500">GSTR-3B vs Credit Variance:</span>
              <span className={`font-bold ${company.id === 'apex' ? 'text-red-600' : 'text-emerald-600'}`}>
                {company.id === 'apex' ? '42.8% Unexplained Inflow Gap' : '0.6% Variance (High Fidelity)'}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}