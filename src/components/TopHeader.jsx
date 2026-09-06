import React from 'react';
import { Search, Building2, UploadCloud, Bell, RefreshCw, Command } from 'lucide-react';
import { COMPANIES_DATA } from '../data/mockData';

export default function TopHeader({ selectedCompanyId, onSelectCompany, onOpenUpload, onReAudit, isAuditing, onOpenCommandPalette }) {
  const company = COMPANIES_DATA[selectedCompanyId] || COMPANIES_DATA.apex;

  return (
    <header className="h-14 border-b border-[#1a2233] bg-[#090d16] px-5 flex items-center justify-between sticky top-0 z-30">
      
      {/* Search & Breadcrumb */}
      <div className="flex items-center gap-4 flex-1 max-w-lg">
        <button
          onClick={onOpenCommandPalette}
          className="relative w-full max-w-xs text-left"
        >
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <div className="w-full pl-8 pr-8 py-1.5 rounded-lg bg-[#111622] border border-[#1e293b] text-xs text-slate-400 hover:border-slate-600 transition">
            Search CIN, PAN, GSTIN, actions...
          </div>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-mono text-slate-500 bg-[#0c101a] px-1.5 py-0.5 rounded border border-[#1e293b]">
            ⌘K
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span>Borrower:</span>
          <span className="text-slate-200 font-semibold font-mono truncate">{company.name}</span>
        </div>
      </div>

      {/* Company Selector & Actions */}
      <div className="flex items-center gap-2.5">
        
        {/* Company Dropdown Switcher */}
        <div className="flex items-center gap-1 bg-[#111622] p-1 rounded-lg border border-[#1a2233] text-xs">
          <button
            onClick={() => onSelectCompany('apex')}
            className={`px-2.5 py-1 rounded-md font-semibold transition flex items-center gap-1.5 text-xs ${
              selectedCompanyId === 'apex'
                ? 'bg-red-950/60 text-red-300 border border-red-800/80 shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Apex Logistics</span>
          </button>

          <button
            onClick={() => onSelectCompany('nexus')}
            className={`px-2.5 py-1 rounded-md font-semibold transition flex items-center gap-1.5 text-xs ${
              selectedCompanyId === 'nexus'
                ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/80 shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Nexus Bio</span>
          </button>

          <button
            onClick={() => onSelectCompany('zenith')}
            className={`px-2.5 py-1 rounded-md font-semibold transition flex items-center gap-1.5 text-xs ${
              selectedCompanyId === 'zenith'
                ? 'bg-amber-950/60 text-amber-300 border border-amber-800/80 shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>Zenith Infra</span>
          </button>
        </div>

        {/* Re-run Audit Button */}
        <button
          onClick={onReAudit}
          disabled={isAuditing}
          className="p-1.5 rounded-lg bg-[#111622] hover:bg-[#161f30] border border-[#1a2233] text-slate-400 hover:text-slate-200 transition"
          title="Re-run Multi-Agent Audit"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isAuditing ? 'animate-spin text-blue-400' : ''}`} />
        </button>

        {/* Ingest Button */}
        <button
          onClick={onOpenUpload}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shadow-xs"
        >
          <UploadCloud className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Ingest Dossier</span>
        </button>

      </div>

    </header>
  );
}