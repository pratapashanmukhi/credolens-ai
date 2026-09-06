import React from 'react';
import { ShieldAlert, Zap, FileCheck, ArrowRight, Activity, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Hero({ onSelectCompany, selectedCompanyId, onScrollToSection, onOpenDeck }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/40">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[200px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs text-slate-300 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-semibold">Vertex Builders Pitch Fest 2026</span>
            <span className="text-slate-500">|</span>
            <span>BFSI & Innovation Track</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mt-6 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-rose-400">14-Day SME Loan Underwriting</span> into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">90-Second Explainable Intelligence</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            CredoLens AI deploys an ensemble of autonomous forensic agents to parse bank statements, cross-verify GST returns, detect circular fraud networks, and synthesize instant audit-ready Credit Appraisal Memos (CAM).
          </p>
        </div>

        {/* Value Metrics Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400">85%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Reduction in Turnaround Time</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">99.4%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Circular Trading Detection</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400">&lt; 90 Sec</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Complete CAM Generation</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">0-Hallucination</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Deterministic Graph Audit</div>
          </div>
        </div>

        {/* Interactive Case Switcher Bar */}
        <div className="mt-12 max-w-3xl mx-auto bg-slate-900/80 p-2 rounded-2xl border border-slate-800 shadow-2xl">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 pt-2 pb-1 flex items-center justify-between">
            <span>Select a live test scenario to trigger multi-agent audit:</span>
            <span className="text-[10px] text-emerald-400 font-mono">100% Real Anonymized Data</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
            
            {/* Case A: Apex (Fraud) */}
            <button
              onClick={() => onSelectCompany('apex')}
              className={`text-left p-3 rounded-xl border transition-all ${
                selectedCompanyId === 'apex'
                  ? 'bg-red-950/60 border-red-500/80 shadow-md shadow-red-950/50'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Apex Logistics</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-900/80 text-red-300 border border-red-700">
                  HIGH RISK (34)
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">Circular Trading Loop & PDF Tamper</p>
            </button>

            {/* Case B: Nexus (Prime) */}
            <button
              onClick={() => onSelectCompany('nexus')}
              className={`text-left p-3 rounded-xl border transition-all ${
                selectedCompanyId === 'nexus'
                  ? 'bg-emerald-950/60 border-emerald-500/80 shadow-md shadow-emerald-950/50'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Nexus BioTech</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-900/80 text-emerald-300 border border-emerald-700">
                  PRIME A+ (92)
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">DSCR 2.65x & Verified Tier-1 Clients</p>
            </button>

            {/* Case C: Zenith (Moderate) */}
            <button
              onClick={() => onSelectCompany('zenith')}
              className={`text-left p-3 rounded-xl border transition-all ${
                selectedCompanyId === 'zenith'
                  ? 'bg-amber-950/60 border-amber-500/80 shadow-md shadow-amber-950/50'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Zenith Infra</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700">
                  MODERATE (68)
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">Govt Receivables & Escrow Condition</p>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}