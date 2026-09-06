import React from 'react';
import { Search, Building2, UploadCloud, Bell, ChevronDown, CheckCircle2, AlertTriangle, XCircle, RefreshCw } from 'lucide-react';
import { COMPANIES_DATA } from '../data/mockData';

export default function TopHeader({ selectedCompanyId, onSelectCompany, onOpenUpload, onReAudit, isAuditing }) {
  const company = COMPANIES_DATA[selectedCompanyId] || COMPANIES_DATA.apex;

  return (
    <header className="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      
      {/* Search & Breadcrumb */}
      <div className="flex items-center gap-6 flex-1 max-w-xl">
        <div className="relative w-full max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by CIN, GSTIN, PAN or Loan Ref..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
          />
        </div>

        <div className="hidden xl:flex items-center gap-2 text-xs text-slate-400 font-medium">
          <span>Borrowers</span>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">{company.name}</span>
        </div>
      </div>

      {/* Company Selector & Actions */}
      <div className="flex items-center gap-3">
        
        {/* Company Dropdown Switcher */}
        <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl border border-slate-200 text-xs">
          <span className="text-[11px] font-semibold text-slate-500 px-2 hidden sm:inline">Entity:</span>
          
          <button
            onClick={() => onSelectCompany('apex')}
            className={`px-2.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              selectedCompanyId === 'apex'
                ? 'bg-red-50 text-red-700 border border-red-200 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>Apex Logistics</span>
          </button>

          <button
            onClick={() => onSelectCompany('nexus')}
            className={`px-2.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              selectedCompanyId === 'nexus'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Nexus BioTech</span>
          </button>

          <button
            onClick={() => onSelectCompany('zenith')}
            className={`px-2.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              selectedCompanyId === 'zenith'
                ? 'bg-amber-50 text-amber-700 border border-amber-200 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
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
          className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 transition"
          title="Re-run Multi-Agent Audit"
        >
          <RefreshCw className={`w-4 h-4 ${isAuditing ? 'animate-spin text-blue-600' : ''}`} />
        </button>

        {/* New Dossier Button */}
        <button
          onClick={onOpenUpload}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm"
        >
          <UploadCloud className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Ingest Dossier</span>
        </button>

      </div>

    </header>
  );
}