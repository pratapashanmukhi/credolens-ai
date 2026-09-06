import React from 'react';
import { Scale, CheckCircle2, XCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function PolicyComplianceView({ company }) {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-600" />
            <span>Institutional Lending Policy & Regulatory Audit</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Automated verification against RBI MSME guidelines, bureau cutoffs, and institutional underwriting covenants.
          </p>
        </div>
        <span className={`text-xs font-mono px-3 py-1 rounded-lg font-bold border ${
          company.status === 'APPROVED' ? 'bg-emerald-50 text-emerald-700 border-emerald-300' :
          company.status === 'REJECTED' ? 'bg-red-50 text-red-700 border-red-300' :
          'bg-amber-50 text-amber-700 border-amber-300'
        }`}>
          Score: {company.agents.policy.score} ({company.agents.policy.status})
        </span>
      </div>

      {/* Checklist Table */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
          Underwriting Policy Evaluation Matrix
        </h3>

        <div className="space-y-2.5">
          {company.agents.policy.findings.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3 text-xs">
                {item.passed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <span className="font-bold text-slate-900 text-sm block">{item.rule}</span>
                  <span className="text-slate-500 mt-0.5 block">{item.detail}</span>
                </div>
              </div>

              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full font-mono uppercase shrink-0 ${
                item.passed
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : 'bg-red-100 text-red-800 border border-red-200'
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