import React from 'react';
import { ShieldCheck, ShieldAlert, Sparkles, ArrowRight, Activity, TrendingUp, CheckCircle2, Zap, Layers, FileSpreadsheet } from 'lucide-react';

export default function Hero({ onSelectCompany, selectedCompanyId, onScrollToSection, onOpenUpload }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-12 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-[#070b14] to-slate-950">
      
      {/* Refined ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Product Category Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-white font-semibold">Autonomous Underwriting Intelligence</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-mono text-[11px]">MSME & Commercial Credit Forensics</span>
          </div>
        </div>

        {/* Hero Value Headline */}
        <div className="mt-6 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Autonomous SME Credit Underwriting <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Powered by Multi-Agent Forensics
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ingest bank statements, GST filings, and balance sheets in seconds. CredoLens AI identifies circular trading networks, validates debt service capacity, and drafts audit-ready Credit Appraisal Memos (CAM).
          </p>
        </div>

        {/* Quick Enterprise Metrics Banner */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-center">
            <div className="text-2xl font-black text-emerald-400 font-mono">85%</div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Faster Decision TAT</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-center">
            <div className="text-2xl font-black text-cyan-400 font-mono">99.4%</div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Circular Fraud Detection</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-center">
            <div className="text-2xl font-black text-amber-400 font-mono">&lt; 90s</div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Instant CAM Generation</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-center">
            <div className="text-2xl font-black text-purple-400 font-mono">Zero</div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Mathematical Hallucination</div>
          </div>
        </div>

        {/* Live Case Switcher Cards */}
        <div className="mt-10 max-w-4xl mx-auto bg-slate-900/60 p-3 rounded-2xl border border-slate-800/90 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between px-3 py-1.5 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Select Borrower Dossier to Audit:</span>
            <button
              onClick={onOpenUpload}
              className="text-[11px] text-emerald-400 hover:text-emerald-300 font-mono font-semibold transition flex items-center gap-1"
            >
              <span>+ Ingest Custom File</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
            
            {/* Case A: Apex Logistics (Fraud Alert) */}
            <button
              onClick={() => onSelectCompany('apex')}
              className={`text-left p-3.5 rounded-xl border transition-all duration-200 ${
                selectedCompanyId === 'apex'
                  ? 'bg-red-950/40 border-red-500/80 shadow-lg shadow-red-950/40 ring-1 ring-red-500/50'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Apex Logistics</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-800 font-mono">
                  SCORE 34 (REJECT)
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-1">
                Circular Invoicing Loop & PDF Font Tamper
              </p>
              <div className="mt-2 text-[10px] text-red-400/90 font-mono flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" /> Critical Forensic Anomaly
              </div>
            </button>

            {/* Case B: Nexus BioTech (Prime Approval) */}
            <button
              onClick={() => onSelectCompany('nexus')}
              className={`text-left p-3.5 rounded-xl border transition-all duration-200 ${
                selectedCompanyId === 'nexus'
                  ? 'bg-emerald-950/40 border-emerald-500/80 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/50'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Nexus BioTech</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono">
                  SCORE 92 (APPROVED)
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-1">
                DSCR 2.65x & Verified Blue-Chip Clients
              </p>
              <div className="mt-2 text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Prime MSME Facility
              </div>
            </button>

            {/* Case C: Zenith Infra (Moderate / Conditional) */}
            <button
              onClick={() => onSelectCompany('zenith')}
              className={`text-left p-3.5 rounded-xl border transition-all duration-200 ${
                selectedCompanyId === 'zenith'
                  ? 'bg-amber-950/40 border-amber-500/80 shadow-lg shadow-amber-950/40 ring-1 ring-amber-500/50'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Zenith Infra</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800 font-mono">
                  SCORE 68 (CONDITIONAL)
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-1">
                Govt Receivables & Escrow Condition
              </p>
              <div className="mt-2 text-[10px] text-amber-400 font-mono flex items-center gap-1">
                <Layers className="w-3 h-3" /> Structured Approval
              </div>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}