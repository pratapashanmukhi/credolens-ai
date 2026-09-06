import React from 'react';
import { ShieldCheck, Sparkles, FileText, UploadCloud, Search, Bell, Settings, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Navbar({ onOpenDeck, onOpenUpload, onScrollToSection, activeView, setActiveView }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-400 p-[1.5px] shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold tracking-tight text-white">CredoLens<span className="text-emerald-400">.AI</span></span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800 font-mono">
                  v2.4 Enterprise
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800/80 text-xs font-medium">
            <button
              onClick={() => onScrollToSection('sandbox')}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-white font-semibold shadow-sm transition"
            >
              Audit Studio
            </button>
            <button
              onClick={() => onScrollToSection('architecture')}
              className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition"
            >
              Agent Architecture
            </button>
            <button
              onClick={() => onScrollToSection('market')}
              className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition"
            >
              Enterprise Pricing
            </button>
          </nav>
        </div>

        {/* Global Action Controls */}
        <div className="flex items-center gap-3">
          
          {/* Live System Status Pill */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-[11px] font-mono text-emerald-400">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>4 Agents Active</span>
          </div>

          <button
            onClick={onOpenUpload}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 transition shadow-sm"
          >
            <UploadCloud className="w-3.5 h-3.5 text-emerald-400" />
            <span>New Dossier</span>
          </button>

          <button
            onClick={onOpenDeck}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-md shadow-emerald-500/20 font-bold"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Overview Deck</span>
          </button>
        </div>

      </div>
    </header>
  );
}