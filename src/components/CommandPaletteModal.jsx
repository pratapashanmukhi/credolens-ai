import React, { useState, useEffect } from 'react';
import { Search, Building2, ShieldAlert, FileText, Activity, Sliders, Scale, Bot, UploadCloud, ArrowRight, X } from 'lucide-react';
import { COMPANIES_DATA } from '../data/mockData';

export default function CommandPaletteModal({ isOpen, onClose, onSelectCompany, onSelectTab, onOpenUpload, onReAudit }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onOpenUpload?.(); // or toggle command palette
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const borrowers = Object.values(COMPANIES_DATA).filter(c => 
    c.name.toLowerCase().includes(query.toLowerCase()) || 
    c.cin.toLowerCase().includes(query.toLowerCase()) ||
    c.gstin.toLowerCase().includes(query.toLowerCase())
  );

  const navigationItems = [
    { id: 'overview', title: 'Overview & Risk Summary', icon: Activity, tag: 'View' },
    { id: 'forensics', title: 'Forensic Radar & Circular Graph', icon: ShieldAlert, tag: 'View' },
    { id: 'cashflow', title: 'Cashflow & DSCR Analysis', icon: Activity, tag: 'View' },
    { id: 'simulator', title: 'Debt Stress Simulator', icon: Sliders, tag: 'View' },
    { id: 'policy', title: 'RBI & Policy Checklist', icon: Scale, tag: 'View' },
    { id: 'cam', title: 'Formal Credit Appraisal Memo (CAM)', icon: FileText, tag: 'View' },
    { id: 'copilot', title: 'Underwriting AI Copilot', icon: Bot, tag: 'View' },
  ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  const actions = [
    { title: 'Ingest Financial Statement Dossier', action: onOpenUpload, icon: UploadCloud, tag: 'Action' },
    { title: 'Re-run 4-Agent Forensic Audit', action: onReAudit, icon: Activity, tag: 'Action' },
  ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#0e1422] border border-[#1a2233] rounded-xl w-full max-w-xl shadow-2xl overflow-hidden">
        
        {/* Search Input */}
        <div className="p-3.5 border-b border-[#1a2233] flex items-center gap-3 bg-[#090d16]">
          <Search className="w-4 h-4 text-blue-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, search borrower CIN/GSTIN, or navigate..."
            className="w-full text-xs text-slate-100 placeholder-slate-500 bg-transparent focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-[#161f30] transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-3 text-xs">
          
          {/* Borrowers */}
          {borrowers.length > 0 && (
            <div>
              <div className="text-[10px] font-mono font-bold uppercase text-slate-500 px-2 py-1">
                Borrower Dossiers
              </div>
              <div className="space-y-0.5 mt-1">
                {borrowers.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectCompany(c.id);
                      onClose();
                    }}
                    className="w-full px-2.5 py-2 rounded-lg hover:bg-[#111622] flex items-center justify-between text-left transition group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 transition" />
                      <div>
                        <div className="font-semibold text-slate-200 text-xs">{c.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{c.cin} • GSTIN: {c.gstin}</div>
                      </div>
                    </div>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                      c.statusColor === 'red' ? 'bg-red-950 text-red-400 border border-red-900' :
                      c.statusColor === 'emerald' ? 'bg-emerald-950 text-emerald-400 border border-emerald-900' :
                      'bg-amber-950 text-amber-400 border border-amber-900'
                    }`}>
                      {c.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Items */}
          {navigationItems.length > 0 && (
            <div>
              <div className="text-[10px] font-mono font-bold uppercase text-slate-500 px-2 py-1">
                Navigation & Workspaces
              </div>
              <div className="space-y-0.5 mt-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectTab(item.id);
                        onClose();
                      }}
                      className="w-full px-2.5 py-2 rounded-lg hover:bg-[#111622] flex items-center justify-between text-left transition group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 transition" />
                        <span className="font-medium text-slate-200 text-xs">{item.title}</span>
                      </div>
                      <span className="text-[9px] text-slate-500 font-mono">Jump &rarr;</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          {actions.length > 0 && (
            <div>
              <div className="text-[10px] font-mono font-bold uppercase text-slate-500 px-2 py-1">
                Quick Actions
              </div>
              <div className="space-y-0.5 mt-1">
                {actions.map((act, i) => {
                  const Icon = act.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        act.action?.();
                        onClose();
                      }}
                      className="w-full px-2.5 py-2 rounded-lg hover:bg-[#111622] flex items-center justify-between text-left transition group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-blue-400" />
                        <span className="font-medium text-slate-200 text-xs">{act.title}</span>
                      </div>
                      <span className="text-[9px] text-blue-400 font-mono">Execute</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-2.5 border-t border-[#1a2233] bg-[#090d16] flex items-center justify-between text-[10px] text-slate-500 font-mono px-3">
          <span>Navigate with arrows or click</span>
          <span>ESC to close</span>
        </div>

      </div>
    </div>
  );
}
