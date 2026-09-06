import React from 'react';
import { 
  Building2, ShieldAlert, CheckCircle2, XCircle, AlertTriangle, 
  TrendingUp, ArrowUpRight, DollarSign, Activity, FileText, Cpu, Clock, Layers
} from 'lucide-react';

export default function OverviewDashboard({ company, setActiveTab, onOpenUpload }) {
  const isApproved = company.status === 'APPROVED';
  const isRejected = company.status === 'REJECTED';

  return (
    <div className="space-y-5">
      
      {/* Borrower Profile & Verdict Banner */}
      <div className="p-5 rounded-xl bg-[#0e1422] border border-[#1a2233] shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        
        <div className="flex items-center gap-4">
          {/* Risk Score Box */}
          <div className={`w-18 h-18 rounded-xl border flex flex-col items-center justify-center font-mono font-bold shrink-0 ${
            isApproved ? 'border-emerald-800/80 bg-emerald-950/40 text-emerald-400' :
            isRejected ? 'border-red-800/80 bg-red-950/40 text-red-400' :
            'border-amber-800/80 bg-amber-950/40 text-amber-400'
          }`}>
            <span className="text-2xl font-black leading-none">{company.riskScore}</span>
            <span className="text-[8px] uppercase tracking-wider text-slate-400 mt-1">Score / 100</span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-lg font-bold text-white tracking-tight">{company.name}</h1>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md font-mono uppercase tracking-wider border ${
                isApproved ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80' :
                isRejected ? 'bg-red-950/60 text-red-400 border-red-800/80' :
                'bg-amber-950/60 text-amber-400 border-amber-800/80'
              }`}>
                {company.status}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
              <span>CIN: <strong className="text-slate-300 font-mono">{company.cin}</strong></span>
              <span className="text-slate-600">•</span>
              <span>GSTIN: <strong className="text-slate-300 font-mono">{company.gstin}</strong></span>
              <span className="text-slate-600">•</span>
              <span>Segment: <strong className="text-slate-300">{company.industry}</strong></span>
            </div>

            <p className="text-xs text-slate-400 mt-2 max-w-3xl leading-relaxed">
              <span className="text-slate-200 font-semibold">Underwriting Rationale: </span>
              {company.agents.cam.keyRationale}
            </p>
          </div>
        </div>

        {/* Sanction Recommendation Block */}
        <div className="flex lg:flex-col items-end gap-1.5 bg-[#090d16] p-3.5 rounded-lg border border-[#1a2233] shrink-0 w-full lg:w-auto">
          <div className="text-right flex-1 lg:flex-none">
            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono font-semibold block">Recommended Sanction</span>
            <span className="text-base font-black text-slate-100 font-mono">{company.agents.cam.sanctionLimit}</span>
          </div>
          <div className="text-right flex-1 lg:flex-none">
            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono font-semibold block">Indicative Pricing</span>
            <span className="text-xs font-bold text-blue-400 font-mono">{company.agents.cam.suggestedRate}</span>
          </div>
        </div>

      </div>

      {/* 4 Financial KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        
        {/* Card 1: Facility Request */}
        <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Requested Facility</span>
            <DollarSign className="w-3.5 h-3.5 text-slate-500" />
          </div>
          <div className="text-xl font-bold text-slate-100 font-mono mt-1.5">{company.loanRequested}</div>
          <div className="text-[10px] text-slate-500 mt-1 truncate">{company.loanPurpose}</div>
        </div>

        {/* Card 2: DSCR Coverage */}
        <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>DSCR Coverage</span>
            <Activity className="w-3.5 h-3.5 text-slate-500" />
          </div>
          <div className={`text-xl font-bold font-mono mt-1.5 ${company.dscrNum >= 1.25 ? 'text-emerald-400' : 'text-red-400'}`}>
            {company.dscr}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Benchmark Floor: &gt; 1.25x</div>
        </div>

        {/* Card 3: Annual Turnover */}
        <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Annual Revenue</span>
            <TrendingUp className="w-3.5 h-3.5 text-slate-500" />
          </div>
          <div className="text-xl font-bold text-slate-100 font-mono mt-1.5">{company.turnover}</div>
          <div className="text-[10px] text-slate-500 mt-1">Audited Financials Trailing</div>
        </div>

        {/* Card 4: Forensic Fraud Risk */}
        <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Fraud Risk Probability</span>
            <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
          </div>
          <div className={`text-xl font-bold font-mono mt-1.5 ${company.id === 'apex' ? 'text-red-400' : 'text-emerald-400'}`}>
            {company.fraudProbability}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">{company.riskLevel}</div>
        </div>

      </div>

      {/* Multi-Agent Orchestration Telemetry */}
      <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
              Agent Ensemble Telemetry
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500">
            Total Audit Latency: <strong className="text-slate-300">{company.tatTime}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          
          <div className="p-3 rounded-lg bg-[#090d16] border border-[#1a2233]">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">1. Forensic Vision</span>
              <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[#111622] text-slate-300 border border-[#1e293b]">
                {company.agents.forensic.score}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 truncate">PDF & Font Layer Scanned</p>
            <div className="mt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Graph Parsed
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#090d16] border border-[#1a2233]">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">2. Cashflow & DSCR</span>
              <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[#111622] text-slate-300 border border-[#1e293b]">
                {company.agents.cashflow.score}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 truncate">Liquidity & Debt Service</p>
            <div className="mt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 6M Inflows Analyzed
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#090d16] border border-[#1a2233]">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">3. Policy Checklist</span>
              <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[#111622] text-slate-300 border border-[#1e293b]">
                {company.agents.policy.score}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 truncate">RBI MSME & CIBIL Match</p>
            <div className="mt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 12 Rules Evaluated
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#090d16] border border-[#1a2233]">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">4. CAM Synthesis</span>
              <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-blue-950 text-blue-300 border border-blue-900">
                Ready
              </span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 truncate">{company.agents.cam.recommendation}</p>
            <div className="mt-2 text-[10px] font-mono text-blue-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Dossier Formatted
            </div>
          </div>

        </div>
      </div>

      {/* Forensic Risk Findings & Quick Action Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left: Forensic Highlights */}
        <div className="lg:col-span-8 p-4 rounded-xl bg-[#0e1422] border border-[#1a2233] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#1a2233]">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
              Critical Forensic Risk Audit Findings
            </h3>
            <button
              onClick={() => setActiveTab('forensics')}
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono"
            >
              <span>Explore Graph Radar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {company.agents.forensic.alerts.map((alert, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg border flex items-start gap-2.5 ${
                  alert.severity === 'critical'
                    ? 'bg-red-950/40 border-red-900/60 text-red-300'
                    : alert.severity === 'warning'
                    ? 'bg-amber-950/40 border-amber-900/60 text-amber-300'
                    : 'bg-emerald-950/40 border-emerald-900/60 text-emerald-300'
                }`}
              >
                {alert.severity === 'critical' ? (
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                ) : alert.severity === 'warning' ? (
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <span className="font-bold font-mono text-[9px] uppercase block">[{alert.type}]</span>
                  <span className="text-[11px] leading-relaxed">{alert.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Tools Card */}
        <div className="lg:col-span-4 p-4 rounded-xl bg-[#0e1422] border border-[#1a2233] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Next Actions</span>
            </div>
            <h4 className="text-sm font-bold text-slate-100 mt-2">Underwriting Workflows</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Run debt sensitivity stress tests or compile the formal Credit Committee Dossier.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <button
              onClick={() => setActiveTab('simulator')}
              className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#111622] hover:bg-[#161f30] border border-[#1a2233] text-slate-200 font-medium transition"
            >
              <span>Stress-Test Debt Sizing</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
            </button>
            <button
              onClick={() => setActiveTab('cam')}
              className="w-full flex items-center justify-between p-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-xs"
            >
              <span>Export Committee CAM</span>
              <FileText className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}