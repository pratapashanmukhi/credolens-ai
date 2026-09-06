import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, ShieldCheck, AlertTriangle, FileText, CheckCircle2, XCircle, 
  Search, Bot, ArrowUpRight, ArrowDownRight, RefreshCw, Send, Sparkles, 
  Printer, Activity, Network, DollarSign, Scale, Layers, ChevronRight
} from 'lucide-react';
import { COMPANIES_DATA } from '../data/mockData';

export default function LiveAuditStudio({ selectedCompanyId, onSelectCompany, onOpenDeck }) {
  const company = COMPANIES_DATA[selectedCompanyId] || COMPANIES_DATA.apex;
  const [activeTab, setActiveTab] = useState('forensic');
  const [isAuditing, setIsAuditing] = useState(false);
  const [activeAgentIndex, setActiveAgentIndex] = useState(3);

  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'copilot',
      text: `Hello! I am your AI Credit Copilot. I have audited **${company.name}**. Ask me about DSCR, circular trading flags, forensic anomalies, or CAM recommendations.`
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  const handleRunAudit = () => {
    setIsAuditing(true);
    setActiveAgentIndex(0);
    setTimeout(() => setActiveAgentIndex(1), 300);
    setTimeout(() => setActiveAgentIndex(2), 600);
    setTimeout(() => {
      setActiveAgentIndex(3);
      setIsAuditing(false);
    }, 900);
  };

  useEffect(() => {
    setChatMessages([
      {
        sender: 'copilot',
        text: `Switched context to **${company.name}**. Risk Score: **${company.riskScore}/100** (${company.status}). Ask me for underwriting clarification or policy simulations.`
      }
    ]);
  }, [selectedCompanyId]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const userText = inputQuery;
    const newMsgs = [...chatMessages, { sender: 'user', text: userText }];
    setChatMessages(newMsgs);
    setInputQuery('');

    setTimeout(() => {
      let reply = '';
      const q = userText.toLowerCase();

      if (q.includes('dscr') || q.includes('cashflow') || q.includes('ebitda')) {
        reply = `The DSCR for ${company.name} stands at **${company.dscr}**. ${
          company.id === 'apex' 
            ? 'This is critically below the 1.25x policy floor, meaning the business cannot service additional debt.' 
            : company.id === 'nexus' 
            ? 'This provides massive 2.65x coverage, allowing safe expansion debt.'
            : 'At 1.42x, it is viable but requires escrow of state govt receivables.'
        }`;
      } else if (q.includes('fraud') || q.includes('circular') || q.includes('shell') || q.includes('alert')) {
        reply = company.id === 'apex' 
          ? `⚠️ Critical Forensic Alert: We detected a round-tripping loop of ₹28 Lakhs through Kuber Exim and Shanti Traders within 48 hours. Furthermore, Page 4 of the bank statement contains modified font layers.`
          : company.id === 'nexus'
          ? `✅ Zero Fraud: Cryptographic PDF signatures verified. 92% of receivables cross-matched with GSTR-2A records of Sun Pharma & Biocon.`
          : `⚠️ Moderate Flag: 68% client concentration in state municipal orders. DSO is 78 days. No circular trading detected.`;
      } else if (q.includes('sanction') || q.includes('rate') || q.includes('limit') || q.includes('approve') || q.includes('reject')) {
        reply = `**Recommendation**: **${company.agents.cam.recommendation}**.\n- Sanction Limit: **${company.agents.cam.sanctionLimit}**\n- Suggested Rate: **${company.agents.cam.suggestedRate}**\n- Rationale: ${company.agents.cam.keyRationale}`;
      } else {
        reply = `Based on the multi-agent synthesis: ${company.summary} The recommended action is **${company.agents.cam.recommendation}** with a credit risk score of **${company.riskScore}/100**.`;
      }

      setChatMessages([...newMsgs, { sender: 'copilot', text: reply }]);
    }, 500);
  };

  const getScoreBadgeColor = (score) => {
    if (score >= 80) return 'text-emerald-400 border-emerald-500/50 bg-emerald-950/40';
    if (score >= 60) return 'text-amber-400 border-amber-500/50 bg-amber-950/40';
    return 'text-red-400 border-red-500/50 bg-red-950/40';
  };

  return (
    <section id="sandbox" className="py-12 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Activity className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Autonomous Multi-Agent Credit Studio
                </h2>
                <p className="text-xs text-slate-400">
                  Target Entity: <span className="font-semibold text-slate-200">{company.name}</span> ({company.cin})
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRunAudit}
              disabled={isAuditing}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 transition shadow-sm"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-emerald-400 ${isAuditing ? 'animate-spin' : ''}`} />
              <span>{isAuditing ? 'Auditing Agents...' : 'Re-run Agent Ensemble'}</span>
            </button>

            <button
              onClick={() => setActiveTab('cam')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-md shadow-emerald-500/25"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View & Export CAM</span>
            </button>
          </div>
        </div>

        {/* Multi-Agent Orchestration Pipeline Visualizer */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-3 px-1">
            <span className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-emerald-400" />
              <span>LangGraph Multi-Agent Ensemble Pipeline</span>
            </span>
            <span className="text-slate-400 font-mono text-[11px]">TAT: {company.tatTime} | Zero Hallucination Guard</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            <div className={`p-3 rounded-xl border transition-all ${
              activeAgentIndex >= 0 ? 'bg-slate-950 border-slate-700' : 'bg-slate-950/40 border-slate-800/50 opacity-60'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
                  Forensic Agent
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono">
                  {company.agents.forensic.score}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">Circular Trading & PDF Integrity</p>
              <div className="mt-2 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Graph Parsed
              </div>
            </div>

            <div className={`p-3 rounded-xl border transition-all ${
              activeAgentIndex >= 1 ? 'bg-slate-950 border-slate-700' : 'bg-slate-950/40 border-slate-800/50 opacity-60'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  Cashflow Agent
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono">
                  {company.agents.cashflow.score}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">DSCR {company.dscr} & Liquidity</p>
              <div className="mt-2 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 6M Inflows Mapped
              </div>
            </div>

            <div className={`p-3 rounded-xl border transition-all ${
              activeAgentIndex >= 2 ? 'bg-slate-950 border-slate-700' : 'bg-slate-950/40 border-slate-800/50 opacity-60'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-amber-400" />
                  Policy & Bureau Agent
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 font-mono">
                  {company.agents.policy.score}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">RBI Norms & CIBIL Match</p>
              <div className="mt-2 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Rules Evaluated
              </div>
            </div>

            <div className={`p-3 rounded-xl border transition-all ${
              activeAgentIndex >= 3 ? 'bg-slate-950 border-emerald-500/60 shadow-md shadow-emerald-950/40' : 'bg-slate-950/40 border-slate-800/50 opacity-60'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-purple-400" />
                  CAM Synthesis Agent
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 font-mono">
                  Synthesized
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{company.agents.cam.recommendation}</p>
              <div className="mt-2 text-[10px] text-purple-400 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Audit Dossier Ready
              </div>
            </div>

          </div>
        </div>

        {/* Executive Decision Banner */}
        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-5">
            <div className={`w-20 h-20 rounded-2xl border-2 flex flex-col items-center justify-center font-bold shadow-inner ${getScoreBadgeColor(company.riskScore)}`}>
              <span className="text-2xl leading-none">{company.riskScore}</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 mt-1">Score / 100</span>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-lg sm:text-xl font-extrabold text-white">{company.name}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${
                  company.status === 'APPROVED' ? 'bg-emerald-950 text-emerald-300 border-emerald-600' :
                  company.status === 'REJECTED' ? 'bg-red-950 text-red-300 border-red-600' :
                  'bg-amber-950 text-amber-300 border-amber-600'
                }`}>
                  {company.status}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Loan Request: <span className="font-semibold text-slate-200">{company.loanRequested}</span> ({company.loanPurpose}) | Turnover: <span className="text-slate-200 font-semibold">{company.turnover}</span>
              </p>
              <p className="text-xs text-slate-300 mt-2 max-w-2xl">
                <span className="text-emerald-400 font-semibold">Executive Verdict: </span>
                {company.agents.cam.keyRationale}
              </p>
            </div>
          </div>

          <div className="flex md:flex-col items-end gap-2 shrink-0">
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Sanction Recommendation</div>
              <div className="text-base font-bold text-white">{company.agents.cam.sanctionLimit}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Indicative ROI</div>
              <div className="text-sm font-semibold text-emerald-400">{company.agents.cam.suggestedRate}</div>
            </div>
          </div>

        </div>

        {/* Interactive Workspace Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Forensic Tabs */}
          <div className="lg:col-span-8 flex flex-col">
            
            <div className="flex border-b border-slate-800 space-x-2 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('forensic')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition ${
                  activeTab === 'forensic'
                    ? 'border-emerald-400 text-emerald-400 bg-slate-900/40'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Forensic & Fraud Graph</span>
              </button>

              <button
                onClick={() => setActiveTab('cashflow')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition ${
                  activeTab === 'cashflow'
                    ? 'border-emerald-400 text-emerald-400 bg-slate-900/40'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>Cashflow & DSCR ({company.dscr})</span>
              </button>

              <button
                onClick={() => setActiveTab('policy')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition ${
                  activeTab === 'policy'
                    ? 'border-emerald-400 text-emerald-400 bg-slate-900/40'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Scale className="w-4 h-4" />
                <span>Policy & Bureau Rules</span>
              </button>

              <button
                onClick={() => setActiveTab('cam')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition ${
                  activeTab === 'cam'
                    ? 'border-emerald-400 text-emerald-400 bg-slate-900/40'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Credit Memo (CAM)</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-6 rounded-b-2xl bg-slate-900/40 border border-t-0 border-slate-800 flex-1">
              
              {activeTab === 'forensic' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center justify-between">
                      <span>Forensic Audit Findings</span>
                      <span className="text-xs font-mono text-slate-400">Fraud Risk: <strong className="text-red-400">{company.fraudProbability}</strong></span>
                    </h4>
                    <div className="mt-3 space-y-2">
                      {company.agents.forensic.alerts.map((alert, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border text-xs flex items-start gap-3 ${
                            alert.severity === 'critical'
                              ? 'bg-red-950/40 border-red-800/80 text-red-200'
                              : alert.severity === 'warning'
                              ? 'bg-amber-950/40 border-amber-800/80 text-amber-200'
                              : 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200'
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
                            <span className="font-bold uppercase tracking-wider text-[10px] block mb-0.5 font-mono">
                              [{alert.type}]
                            </span>
                            {alert.message}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-xs font-semibold text-slate-400 mb-3 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Network className="w-4 h-4 text-cyan-400" />
                        Counterparty Graph RAG & Fund-Flow Analysis
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">Neo4j Sub-graph</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {company.agents.forensic.graphNodes.map((node, i) => (
                        <div
                          key={i}
                          className={`p-3 rounded-xl border text-center ${
                            node.status === 'suspect' || node.status === 'shell'
                              ? 'bg-red-950/30 border-red-800 text-red-300'
                              : node.status === 'moderate' || node.status === 'slow_payer'
                              ? 'bg-amber-950/30 border-amber-800 text-amber-300'
                              : 'bg-emerald-950/30 border-emerald-800 text-emerald-300'
                          }`}
                        >
                          <div className="text-xs font-bold">{node.id}</div>
                          <div className="text-[10px] uppercase font-mono text-slate-400 mt-0.5">{node.type}</div>
                          {node.flag && (
                            <div className="text-[9px] mt-1 font-semibold px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700">
                              {node.flag}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'cashflow' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">DSCR Coverage</div>
                      <div className="text-lg font-bold text-white mt-1">{company.agents.cashflow.metrics.dscr}x</div>
                      <div className="text-[10px] text-slate-500">Benchmark: &gt; 1.25x</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Operating Cash Flow</div>
                      <div className="text-lg font-bold text-emerald-400 mt-1">{company.agents.cashflow.metrics.operatingCashFlow}</div>
                      <div className="text-[10px] text-slate-500">Annualized Run-rate</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Avg Monthly Balance</div>
                      <div className="text-lg font-bold text-cyan-400 mt-1">{company.agents.cashflow.metrics.averageMonthlyBalance}</div>
                      <div className="text-[10px] text-slate-500">6-Month Trailing</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Cheque Bounces</div>
                      <div className={`text-lg font-bold mt-1 ${company.agents.cashflow.metrics.chequeBounceCount > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                        {company.agents.cashflow.metrics.chequeBounceCount}
                      </div>
                      <div className="text-[10px] text-slate-500">Last 180 Days</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-xs font-semibold text-slate-300 mb-4 flex items-center justify-between">
                      <span>Monthly Banking Inflows vs Outflows (in ₹ Lakhs)</span>
                      <span className="text-[10px] text-slate-400">Verified from Bank PDFs</span>
                    </div>

                    <div className="space-y-3">
                      {company.agents.cashflow.monthlyTrends.map((m, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-xs">
                          <span className="w-8 font-mono text-slate-400 font-semibold">{m.month}</span>
                          <div className="flex-1 flex items-center gap-2">
                            <div className="flex-1 bg-slate-900 rounded-full h-3 overflow-hidden flex">
                              <div
                                style={{ width: `${Math.min(m.inflow / 2.5, 100)}%` }}
                                className="bg-emerald-500 h-full rounded-full"
                              />
                            </div>
                            <span className="w-14 text-right font-mono text-emerald-400">₹{m.inflow}L</span>
                            
                            <div className="flex-1 bg-slate-900 rounded-full h-3 overflow-hidden flex">
                              <div
                                style={{ width: `${Math.min(m.outflow / 2.5, 100)}%` }}
                                className="bg-rose-500 h-full rounded-full"
                              />
                            </div>
                            <span className="w-14 text-right font-mono text-rose-400">₹{m.outflow}L</span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              )}

              {activeTab === 'policy' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white">Lending Policy & Regulatory Compliance</h4>
                  <div className="space-y-2">
                    {company.agents.policy.findings.map((f, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'cam' && (
                <div className="space-y-4 text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h4 className="text-sm font-bold text-white">Generated Credit Appraisal Memo (CAM)</h4>
                      <p className="text-[11px] text-slate-400">System Ref: CAM-2026-{company.id.toUpperCase()}-0906</p>
                    </div>
                    <button
                      onClick={() => window.print()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[11px] font-semibold"
                    >
                      <Printer className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Print / Save CAM</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-[11px] text-slate-300">
                    <div className="text-emerald-400 font-bold">// 1. BORROWER PROFILE</div>
                    <p>Company: {company.name} | CIN: {company.cin} | GSTIN: {company.gstin}</p>
                    <p>Industry: {company.industry} | HQ: {company.headquarters}</p>
                    
                    <div className="text-emerald-400 font-bold pt-2">// 2. FINANCIAL & DSCR SUMMARY</div>
                    <p>Annual Turnover: {company.turnover} | Requested Facility: {company.loanRequested}</p>
                    <p>Computed DSCR: {company.dscr} | Current Ratio: {company.currentRatio}</p>

                    <div className="text-emerald-400 font-bold pt-2">// 3. MULTI-AGENT FORENSIC VERDICT</div>
                    <p>Forensic Risk Score: {company.riskScore}/100 | Fraud Probability: {company.fraudProbability}</p>
                    <p>Key Findings: {company.summary}</p>

                    <div className="text-emerald-400 font-bold pt-2">// 4. CREDIT COMMITTEE RECOMMENDATION</div>
                    <p>Final Status: <strong className="text-white">{company.agents.cam.recommendation}</strong></p>
                    <p>Approved Sanction: <strong className="text-emerald-400">{company.agents.cam.sanctionLimit}</strong></p>
                    <p>Pricing / Interest Rate: {company.agents.cam.suggestedRate}</p>
                    <p>Condition Precedent: {company.agents.cam.keyRationale}</p>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: AI Credit Copilot Chat */}
          <div className="lg:col-span-4 flex flex-col h-[520px] rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl overflow-hidden">
            
            <div className="p-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">CredoLens Copilot</div>
                  <div className="text-[10px] text-emerald-400">Context: {company.name}</div>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-400 font-mono">
                RAG Active
              </span>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl max-w-[90%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-emerald-600 text-slate-950 font-medium'
                      : 'bg-slate-950 border border-slate-800 text-slate-200'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
              ))}
            </div>

            <div className="p-2 border-t border-slate-800/80 bg-slate-950/50 flex flex-wrap gap-1.5">
              <button
                onClick={() => setInputQuery('Why is DSCR flagged?')}
                className="text-[10px] px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 transition"
              >
                Explain DSCR
              </button>
              <button
                onClick={() => setInputQuery('Show forensic fraud alerts')}
                className="text-[10px] px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 transition"
              >
                Fraud Alerts
              </button>
              <button
                onClick={() => setInputQuery('What is the recommended sanction limit?')}
                className="text-[10px] px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 transition"
              >
                Sanction Terms
              </button>
            </div>

            <form onSubmit={handleSendMessage} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask underwriting copilot..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition font-bold"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}