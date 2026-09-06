import React from 'react';
import { Scale, CheckCircle2, XCircle } from 'lucide-react';

export default function PolicyComplianceView({ company }) {
  return (
    <div className="space-y-5">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
        <div>
          <h2 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
            <Scale className="w-4 h-4 text-blue-400" />
            <span>Institutional Lending Policy & Regulatory Audit</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Automated verification against RBI MSME guidelines, bureau cutoffs, and institutional underwriting covenants.
          </p>
        </div>
        <span className={`text-xs font-mono px-2.5 py-1 rounded font-bold border ${
          company.status === 'APPROVED' ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' :
          company.status === 'REJECTED' ? 'bg-red-950/60 text-red-400 border-red-800' :
          'bg-amber-950/60 text-amber-400 border-amber-800'
        }`}>
          Score: {company.agents.policy.score} ({company.agents.policy.status})
        </span>
      </div>

      {/* Checklist Table */}
      <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233] space-y-3">
        <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
          Underwriting Policy Evaluation Matrix
        </h3>

        <div className="space-y-2">
          {company.agents.policy.findings.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-[#090d16] border border-[#1a2233] flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-2.5 text-xs">
                {item.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <span className="font-bold text-slate-100 block text-xs">{item.rule}</span>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">{item.detail}</span>
                </div>
              </div>

              <span className={`text-[9px] font-bold px-2 py-0.5 rounded font-mono uppercase shrink-0 ${
                item.passed
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  : 'bg-red-950 text-red-400 border border-red-800'
              }`}>
                {item.passed ? 'COMPLIANT' : 'BREACHED'}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}