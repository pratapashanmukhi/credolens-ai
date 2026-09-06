import React from 'react';
import { ShieldCheck, Sparkles, FileText, Cpu, BarChart3, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenDeck, onScrollToSection }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 p-[1px] shadow-lg shadow-emerald-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-white">CredoLens<span className="text-emerald-400">.AI</span></span>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                BITSoM '26
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Autonomous Forensic Credit Engine</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button onClick={() => onScrollToSection('sandbox')} className="hover:text-emerald-400 transition-colors">
            Live Sandbox
          </button>
          <button onClick={() => onScrollToSection('architecture')} className="hover:text-emerald-400 transition-colors">
            Multi-Agent System
          </button>
          <button onClick={() => onScrollToSection('market')} className="hover:text-emerald-400 transition-colors">
            Business Model
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDeck}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition shadow-sm"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Pitch Deck (10 Slides)</span>
          </button>

          <button
            onClick={() => onScrollToSection('sandbox')}
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-md shadow-emerald-500/25 font-bold"
          >
            <Sparkles className="w-4 h-4" />
            <span>Audit Live SME</span>
          </button>
        </div>

      </div>
    </header>
  );
}
