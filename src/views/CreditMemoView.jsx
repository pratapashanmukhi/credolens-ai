import React from 'react';
import { FileText, Printer, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';

export default function CreditMemoView({ company }) {
  return (
    <div className="space-y-5">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
        <div>
          <h2 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Formal Credit Appraisal Memo (CAM)</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Audit-ready formal sanction dossier compiled for Executive Credit Committee review.
          </p>
        </div>
        
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#111622] hover:bg-[#161f30] border border-[#1a2233] text-slate-200 text-xs font-semibold transition"
        >
          <Printer className="w-3.5 h-3.5 text-blue-400" />
          <span>Print / Export Memo</span>
        </button>
      </div>

      {/* Formal Paper CAM Card */}
      <div className="p-6 rounded-xl bg-[#0e1422] border border-[#1a2233] space-y-5 max-w-4xl mx-auto font-sans text-xs text-slate-200 leading-relaxed">
        
        {/* Memo Letterhead */}
        <div className="border-b border-[#1a2233] pb-3 flex items-center justify-between">
          <div>
            <div className="text-base font-bold text-white tracking-tight uppercase">CREDIT APPRAISAL MEMORANDUM</div>
            <div className="text-[10px] text-slate-400 font-mono">CREDIT RISK & UNDERWRITING DEPARTMENT</div>
          </div>
          <div className="text-right font-mono text-[10px] text-slate-400">
            <div>REF: <strong className="text-slate-200">CAM-2026-{company.id.toUpperCase()}</strong></div>
            <div>DATE: <strong className="text-slate-200">06-SEP-2026</strong></div>
          </div>
        </div>

        {/* Section 1: Borrower Profile */}
        <div>
          <div className="bg-[#090d16] px-3 py-1 font-bold uppercase tracking-wider text-slate-300 font-mono text-[10px] rounded border border-[#1a2233]">
            1. BORROWER PROFILE & REGISTRATION DATA
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-3 text-xs bg-[#090d16]/50 p-3 rounded-lg border border-[#1a2233]/60">
            <div>
              <span className="text-slate-400 block text-[11px]">Borrower Entity:</span>
              <span className="font-bold text-slate-100">{company.name}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Corporate ID (CIN/LLP):</span>
              <span className="font-mono font-bold text-slate-100">{company.cin}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">GSTIN Registration:</span>
              <span className="font-mono font-bold text-slate-100">{company.gstin}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Industry Segment:</span>
              <span className="font-bold text-slate-100">{company.industry}</span>
            </div>
          </div>
        </div>

        {/* Section 2: Financial Assessment */}
        <div>
          <div className="bg-[#090d16] px-3 py-1 font-bold uppercase tracking-wider text-slate-300 font-mono text-[10px] rounded border border-[#1a2233]">
            2. FINANCIAL METRICS & DEBT-SERVICING COVERAGE
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-[#090d16] rounded-lg border border-[#1a2233]">
              <span className="text-slate-400 block text-[10px] font-mono">Annual Turnover:</span>
              <span className="font-bold text-slate-100 text-sm font-mono mt-0.5 block">{company.turnover}</span>
            </div>
            <div className="p-3 bg-[#090d16] rounded-lg border border-[#1a2233]">
              <span className="text-slate-400 block text-[10px] font-mono">Computed DSCR:</span>
              <span className="font-bold text-slate-100 text-sm font-mono mt-0.5 block">{company.dscr}</span>
            </div>
            <div className="p-3 bg-[#090d16] rounded-lg border border-[#1a2233]">
              <span className="text-slate-400 block text-[10px] font-mono">Operating Cashflow:</span>
              <span className="font-bold text-slate-100 text-sm font-mono mt-0.5 block">{company.agents.cashflow.metrics.operatingCashFlow}</span>
            </div>
          </div>
        </div>

        {/* Section 3: Forensic Analysis */}
        <div>
          <div className="bg-[#090d16] px-3 py-1 font-bold uppercase tracking-wider text-slate-300 font-mono text-[10px] rounded border border-[#1a2233]">
            3. FORENSIC AUDIT & COUNTERPARTY RISK SYNTHESIS
          </div>
          <div className="mt-2.5 p-3.5 bg-[#090d16] rounded-lg border border-[#1a2233] space-y-1.5 text-xs">
            <div className="flex justify-between font-mono text-[11px]">
              <span className="text-slate-400">Forensic Risk Score:</span>
              <span className="font-bold text-slate-100">{company.riskScore} / 100</span>
            </div>
            <div className="flex justify-between font-mono text-[11px]">
              <span className="text-slate-400">Estimated Fraud Probability:</span>
              <span className="font-bold text-slate-100">{company.fraudProbability}</span>
            </div>
            <p className="text-slate-300 pt-1.5 border-t border-[#1a2233] text-xs leading-relaxed">
              {company.summary}
            </p>
          </div>
        </div>

        {/* Section 4: Final Recommendation */}
        <div className="border-t border-[#1a2233] pt-3">
          <div className="bg-[#090d16] px-3 py-1 font-bold uppercase tracking-wider text-slate-300 font-mono text-[10px] rounded border border-[#1a2233]">
            4. EXECUTIVE SANCTION RECOMMENDATION
          </div>
          <div className="mt-2.5 p-3.5 bg-[#090d16] text-slate-100 rounded-lg border border-[#1a2233] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Final Credit Recommendation:</span>
              <span className="text-xs font-bold uppercase text-blue-400 font-mono">{company.agents.cam.recommendation}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Approved Sanction Limit:</span>
              <span className="text-sm font-bold font-mono text-emerald-400">{company.agents.cam.sanctionLimit}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Pricing Grid / Interest Rate:</span>
              <span className="text-xs font-bold font-mono text-slate-300">{company.agents.cam.suggestedRate}</span>
            </div>
            <p className="text-xs text-slate-400 pt-1.5 border-t border-[#1a2233] leading-relaxed">
              <strong className="text-slate-200">Condition Precedents: </strong> {company.agents.cam.keyRationale}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}