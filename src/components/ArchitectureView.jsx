import React from 'react';
import { Cpu, ShieldCheck, Database, Layers, GitBranch, Terminal, Zap, CheckCircle2, Lock } from 'lucide-react';

export default function ArchitectureView() {
  return (
    <section id="architecture" className="py-16 bg-slate-900/60 border-t border-b border-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-xs font-semibold text-emerald-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Multi-Agent LangGraph Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            CredoLens AI avoids monolithic LLM hallucinations by decoupling credit underwriting into 4 deterministic, verifiable autonomous agents orchestrated via LangGraph.
          </p>
        </div>

        {/* 4 Agent Pipeline Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Agent 1 */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative group hover:border-slate-700 transition shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <span className="font-mono font-bold text-sm">01</span>
            </div>
            <h3 className="text-base font-bold text-white">Forensic Vision Agent</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Parses PDF bank statements & GST invoices down to bounding-box coordinates. Validates OCR metadata, font layer tampering, and cryptographic bank digital stamps.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 text-[11px] text-cyan-400 font-mono">
              <Zap className="w-3.5 h-3.5" /> LayoutLMv3 + PDF Plumber
            </div>
          </div>

          {/* Agent 2 */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative group hover:border-slate-700 transition shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <span className="font-mono font-bold text-sm">02</span>
            </div>
            <h3 className="text-base font-bold text-white">Graph RAG & Circularity Agent</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Constructs Neo4j counterparty transaction graphs. Runs PageRank and cycle-detection algorithms to identify circular trading, round-tripping, and shell supplier rings.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
              <Database className="w-3.5 h-3.5" /> Neo4j + Tarjan Algorithm
            </div>
          </div>

          {/* Agent 3 */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative group hover:border-slate-700 transition shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <span className="font-mono font-bold text-sm">03</span>
            </div>
            <h3 className="text-base font-bold text-white">Cashflow & DSCR Scorer</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Computes Operating Cash Flow (OCF), Debt-Service Coverage Ratio (DSCR), current ratio, and volatile revenue spikes to establish true repayment capability.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 text-[11px] text-amber-400 font-mono">
              <Layers className="w-3.5 h-3.5" /> Deterministic Math Engine
            </div>
          </div>

          {/* Agent 4 */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative group hover:border-slate-700 transition shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <span className="font-mono font-bold text-sm">04</span>
            </div>
            <h3 className="text-base font-bold text-white">CAM Synthesis Agent</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Assembles all agent telemetry into an audit-ready Credit Appraisal Memo. Formulates condition precedents, recommended sanction limits, and pricing grids.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 text-[11px] text-purple-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" /> Structured JSON + ReportLab
            </div>
          </div>

        </div>

        {/* Zero Hallucination Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Deterministic Zero-Trust AI Guardrails</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                Every calculation (DSCR, GST variance, debt coverage) is executed in isolated Python sandboxes, ensuring exact mathematical integrity without LLM rounding errors.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-400 shrink-0">
            <CheckCircle2 className="w-4 h-4" /> 100% Audit-Traceable
          </div>
        </div>

      </div>
    </section>
  );
}