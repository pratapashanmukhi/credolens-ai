import React from 'react';
import { FileText, Printer, Download, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';

export default function CreditMemoView({ company }) {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span>Formal Credit Appraisal Memo (CAM)</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Audit-ready formal sanction dossier compiled for Executive Credit Committee review.
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs"
          >
            <Printer className="w-4 h-4 text-blue-400" />
            <span>Print / Save CAM</span>
          </button>
        </div>
      </div>

      {/* Formal Paper CAM Card */}
      <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6 max-w-4xl mx-auto font-sans text-xs text-slate-800 leading-relaxed">
        
        {/* Memo Letterhead */}
        <div className="border-b-2 border-slate-900 pb-4 flex items-center justify-between">
          <div>
            <div className="text-lg font-black text-slate-900 uppercase tracking-tight">CREDIT APPRAISAL MEMORANDUM</div>
            <div className="text-[11px] text-slate-500 font-mono">CREDIT RISK & UNDERWRITING DEPARTMENT</div>
          </div>
          <div className="text-right font-mono text-[11px] text-slate-600">
            <div>REF: <strong className="text-slate-900">CAM-2026-{company.id.toUpperCase()}</strong></div>
            <div>DATE: <strong className="text-slate-900">06-SEP-2026</strong></div>
          </div>
        </div>

        {/* Section 1: Borrower Profile */}
        <div>
          <div className="bg-slate-100 px-3 py-1.5 font-bold uppercase tracking-wider text-slate-800 font-mono text-[11px] rounded">
            1. BORROWER PROFILE & REGISTRATION DATA
          </div>
          <div className="mt-3 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-500 block">Borrower Entity:</span>
              <span className="font-bold text-slate-900">{company.name}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Corporate ID (CIN/LLP):</span>
              <span className="font-mono font-bold text-slate-900">{company.cin}</span>
            </div>
            <div>
              <span className="text-slate-500 block">GSTIN Registration:</span>
              <span className="font-mono font-bold text-slate-900">{company.gstin}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Industry & Segment:</span>
              <span className="font-bold text-slate-900">{company.industry}</span>
            </div>
          </div>
        </div>

        {/* Section 2: Financial Assessment */}
        <div>
          <div className="bg-slate-100 px-3 py-1.5 font-bold uppercase tracking-wider text-slate-800 font-mono text-[11px] rounded">
            2. FINANCIAL METRICS & DEBT-SERVICING COVERAGE
          </div>
          <div className="mt-3 grid grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Annual Turnover:</span>
              <span className="font-bold text-slate-900 text-sm font-mono">{company.turnover}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Computed DSCR:</span>
              <span className="font-bold text-slate-900 text-sm font-mono">{company.dscr}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Operating Cash Flow:</span>
              <span className="font-bold text-slate-900 text-sm font-mono">{company.agents.cashflow.metrics.operatingCashFlow}</span>
            </div>
          </div>
        </div>

        {/* Section 3: Forensic & Fraud Analysis */}
        <div>
          <div className="bg-slate-100 px-3 py-1.5 font-bold uppercase tracking-wider text-slate-800 font-mono text-[11px] rounded">
            3. FORENSIC AUDIT & COUNTERPARTY RISK SYNTHESIS
          </div>
          <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
            <div className="flex justify-between font-mono text-[11px]">
              <span className="text-slate-500">Forensic Risk Score:</span>
              <span className="font-bold text-slate-900">{company.riskScore} / 100</span>
            </div>
            <div className="flex justify-between font-mono text-[11px]">
              <span className="text-slate-500">Estimated Fraud Probability:</span>
              <span className="font-bold text-slate-900">{company.fraudProbability}</span>
            </div>
            <p className="text-slate-700 pt-2 border-t border-slate-200 text-xs leading-relaxed">
              {company.summary}
            </p>
          </div>
        </div>

        {/* Section 4: Final Committee Verdict */}
        <div className="border-t-2 border-slate-900 pt-4">
          <div className="bg-slate-100 px-3 py-1.5 font-bold uppercase tracking-wider text-slate-800 font-mono text-[11px] rounded">
            4. EXECUTIVE SANCTION RECOMMENDATION
          </div>
          <div className="mt-3 p-4 bg-slate-900 text-white rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Final Credit Recommendation:</span>
              <span className="text-sm font-black uppercase text-blue-400 font-mono">{company.agents.cam.recommendation}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Approved Sanction Limit:</span>
              <span className="text-base font-black font-mono text-emerald-400">{company.agents.cam.sanctionLimit}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Pricing Grid / Interest Rate:</span>
              <span className="text-xs font-bold font-mono text-slate-200">{company.agents.cam.suggestedRate}</span>
            </div>
            <p className="text-xs text-slate-300 pt-2 border-t border-slate-800 leading-relaxed">
              <strong>Condition Precedents: </strong> {company.agents.cam.keyRationale}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}