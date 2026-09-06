import React from 'react';
import { 
  Building2, ShieldAlert, CheckCircle2, XCircle, AlertTriangle, 
  TrendingUp, ArrowUpRight, DollarSign, Activity, FileText, Cpu, Clock, Layers
} from 'lucide-react';

export default function OverviewDashboard({ company, setActiveTab, onOpenUpload }) {
  const isApproved = company.status === 'APPROVED';
  const isRejected = company.status === 'REJECTED';

  return (
    <div className="space-y-6">
      
      {/* Borrower Profile & Executive Verdict Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        <div className="flex items-center gap-5">
          {/* Risk Score Circle */}
          <div className={`w-20 h-20 rounded-2xl border-2 flex flex-col items-center justify-center font-bold shrink-0 ${
            isApproved ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
            isRejected ? 'border-red-500 bg-red-50 text-red-700' :
            'border-amber-500 bg-amber-50 text-amber-700'
          }`}>
            <span className="text-2xl font-black font-mono leading-none">{company.riskScore}</span>
            <span className="text-[9px] uppercase tracking-wider font-semibold mt-1">Score / 100</span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">{company.name}</h1>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider border ${
                isApproved ? 'bg-emerald-50 text-emerald-700 border-emerald-300' :
                isRejected ? 'bg-red-50 text-red-700 border-red-300' :
                'bg-amber-50 text-amber-700 border-amber-300'
              }`}>
                {company.status}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-1.5 font-medium">
              <span>CIN: <strong className="text-slate-700 font-mono">{company.cin}</strong></span>
              <span>•</span>
              <span>GSTIN: <strong className="text-slate-700 font-mono">{company.gstin}</strong></span>
              <span>•</span>
              <span>Industry: <strong className="text-slate-700">{company.industry}</strong></span>
              <span>•</span>
              <span>Location: <strong className="text-slate-700">{company.headquarters}</strong></span>
            </div>

            <p className="text-xs text-slate-600 mt-2.5 max-w-3xl leading-relaxed">
              <strong className="text-slate-900">Executive Credit Verdict: </strong>
              {company.agents.cam.keyRationale}
            </p>
          </div>
        </div>

        {/* Sanction Recommendation Block */}
        <div className="flex lg:flex-col items-end gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200 shrink-0 w-full lg:w-auto">
          <div className="text-right flex-1 lg:flex-none">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Sanction Recommendation</span>
            <span className="text-lg font-black text-slate-900 font-mono">{company.agents.cam.sanctionLimit}</span>
          </div>
          <div className="text-right flex-1 lg:flex-none">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Indicative Pricing</span>
            <span className="text-xs font-bold text-blue-600 font-mono">{company.agents.cam.suggestedRate}</span>
          </div>
        </div>

      </div>

      {/* 4 Core Financial KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Facility Request */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Requested Facility</span>
            <DollarSign className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-xl font-black text-slate-900 font-mono mt-2">{company.loanRequested}</div>
          <div className="text-[11px] text-slate-500 mt-1 truncate">{company.loanPurpose}</div>
        </div>

        {/* Card 2: DSCR Coverage */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>DSCR Coverage</span>
            <Activity className="w-4 h-4 text-slate-400" />
          </div>
          <div className={`text-xl font-black font-mono mt-2 ${company.dscrNum >= 1.25 ? 'text-emerald-600' : 'text-red-600'}`}>
            {company.dscr}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Policy Benchmark: &gt; 1.25x</div>
        </div>

        {/* Card 3: Annual Turnover */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Annual Revenue</span>
            <TrendingUp className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-xl font-black text-slate-900 font-mono mt-2">{company.turnover}</div>
          <div className="text-[11px] text-slate-500 mt-1">Audited Financial Year Trailing</div>
        </div>

        {/* Card 4: Forensic Fraud Risk */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Forensic Fraud Probability</span>
            <ShieldAlert className="w-4 h-4 text-slate-400" />
          </div>
          <div className={`text-xl font-black font-mono mt-2 ${company.id === 'apex' ? 'text-red-600' : 'text-emerald-600'}`}>
            {company.fraudProbability}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">{company.riskLevel}</div>
        </div>

      </div>

      {/* Multi-Agent Underwriting Engine Status */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Autonomous Multi-Agent Underwriting Status
            </h3>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Total TAT: <strong className="text-slate-800">{company.tatTime}</strong> (Zero Hallucination Verified)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Agent 1 */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">1. Forensic Vision</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-slate-200 font-bold">
                {company.agents.forensic.score}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 truncate">PDF & Font Layer Integrity</p>
            <div className="mt-2 text-[10px] font-bold text-blue-600 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Graph Parsed
            </div>
          </div>

          {/* Agent 2 */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">2. Cashflow & DSCR</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-slate-200 font-bold">
                {company.agents.cashflow.score}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 truncate">Liquidity & Debt Service</p>
            <div className="mt-2 text-[10px] font-bold text-blue-600 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 6M Statements Mapped
            </div>
          </div>

          {/* Agent 3 */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">3. Policy & Bureau</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-slate-200 font-bold">
                {company.agents.policy.score}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 truncate">RBI MSME & CIBIL Rules</p>
            <div className="mt-2 text-[10px] font-bold text-blue-600 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 12 Rules Checked
            </div>
          </div>

          {/* Agent 4 */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">4. CAM Synthesis</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                Synthesized
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 truncate">{company.agents.cam.recommendation}</p>
            <div className="mt-2 text-[10px] font-bold text-blue-600 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Memo Ready
            </div>
          </div>

        </div>
      </div>

      {/* Critical Forensic Highlights & Quick Action Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Forensic Highlights */}
        <div className="lg:col-span-8 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Critical Forensic Risk Audit Findings
            </h3>
            <button
              onClick={() => setActiveTab('forensics')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>Explore Full Radar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {company.agents.forensic.alerts.map((alert, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl border flex items-start gap-3 ${
                  alert.severity === 'critical'
                    ? 'bg-red-50/70 border-red-200 text-red-800'
                    : alert.severity === 'warning'
                    ? 'bg-amber-50/70 border-amber-200 text-amber-800'
                    : 'bg-emerald-50/70 border-emerald-200 text-emerald-800'
                }`}
              >
                {alert.severity === 'critical' ? (
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                ) : alert.severity === 'warning' ? (
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <span className="font-bold font-mono text-[10px] uppercase block">[{alert.type}]</span>
                  <span className="text-[11px] leading-relaxed">{alert.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Tools Navigation Card */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900 text-white shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider font-mono">
              <Layers className="w-4 h-4" />
              <span>Deep-Dive Workflows</span>
            </div>
            <h4 className="text-sm font-bold text-white mt-2">Next Underwriting Actions</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Drill into counterparty networks, stress test debt limits under revenue shocks, or export the committee memo.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <button
              onClick={() => setActiveTab('simulator')}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition"
            >
              <span>Stress-Test Facility Sizing</span>
              <ArrowUpRight className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => setActiveTab('cam')}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-sm"
            >
              <span>Export Formal CAM Dossier</span>
              <FileText className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}