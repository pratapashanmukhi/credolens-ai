import React from 'react';
import { ShieldCheck, Award, FileText, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenDeck }) {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <span className="font-bold text-slate-200">CredoLens AI</span>
            <p className="text-[11px] text-slate-500">Autonomous SME Credit Underwriting & Forensic Risk Engine</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <span className="text-[11px]">Enterprise Decisioning System</span>
          <button onClick={onOpenDeck} className="hover:text-emerald-400 transition font-medium flex items-center gap-1">
            <span>Executive Deck</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}