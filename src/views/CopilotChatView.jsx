import React, { useState, useEffect } from 'react';
import { Bot, Send, Sparkles, User, ShieldAlert, CheckCircle2, DollarSign, Calculator } from 'lucide-react';

export default function CopilotChatView({ company }) {
  const [messages, setMessages] = useState([
    {
      sender: 'copilot',
      text: `Hello Shanmukhi. I am your autonomous Underwriter Copilot. I have completed the forensic multi-agent audit for **${company.name}** (Risk Score: **${company.riskScore}/100**). You can ask me to explain specific fraud anomalies, simulate covenant terms, or check DSCR debt capacity.`
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  useEffect(() => {
    setMessages([
      {
        sender: 'copilot',
        text: `Switched context to **${company.name}** (${company.cin}). Status: **${company.status}** with DSCR **${company.dscr}**. How can I assist with this credit evaluation?`
      }
    ]);
  }, [company.id]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const userText = inputQuery;
    const newMsgs = [...messages, { sender: 'user', text: userText }];
    setMessages(newMsgs);
    setInputQuery('');

    setTimeout(() => {
      let reply = '';
      const q = userText.toLowerCase();

      if (q.includes('dscr') || q.includes('cashflow') || q.includes('ebitda')) {
        reply = `The DSCR for ${company.name} stands at **${company.dscr}**.\n\n- Annual Turnover: **${company.turnover}**\n- Operating Cashflow: **${company.agents.cashflow.metrics.operatingCashFlow}**\n- Average Bank Balance: **${company.agents.cashflow.metrics.averageMonthlyBalance}**\n- Bounce Track: **${company.agents.cashflow.metrics.chequeBounceCount} cheque bounces** in last 180 days.\n\n${company.id === 'apex' ? '⚠️ This is critically below the 1.25x policy floor, meaning the entity is in cash deficit.' : '✅ This comfortably meets credit policy criteria.'}`;
      } else if (q.includes('fraud') || q.includes('circular') || q.includes('shell') || q.includes('alert')) {
        reply = company.id === 'apex' 
          ? `⚠️ **Critical Forensic Alert**:\n1. Round-tripping loop identified: Apex Logistics → Kuber Exim (₹28L) → Shanti Traders (₹27.5L) → Apex Logistics within 48 hours.\n2. GSTR-3B reported turnover is 42.8% lower than bank account credit summations.\n3. PDF Forensic Engine detected altered font layers on Page 4 of the bank statement.`
          : company.id === 'nexus'
          ? `✅ **Zero Forensic Risk**:\n1. 92% of receivables verified with Fortune 500 pharma companies (Sun Pharma, Cipla, Biocon).\n2. 99.4% correlation between GST filings and bank inflows.\n3. Cryptographic bank watermark authentic.`
          : `⚠️ **Moderate Flag**:\n1. 68% client concentration in state municipal contracts.\n2. Average DSO is 78 days (govt milestone payments). Escrow account required.`;
      } else if (q.includes('sanction') || q.includes('rate') || q.includes('limit') || q.includes('approve') || q.includes('reject')) {
        reply = `**Credit Committee Recommendation**:\n- Final Status: **${company.agents.cam.recommendation}**\n- Recommended Sanction: **${company.agents.cam.sanctionLimit}**\n- Suggested Pricing (ROI): **${company.agents.cam.suggestedRate}**\n- Key Rationale: ${company.agents.cam.keyRationale}`;
      } else {
        reply = `Based on the 4-agent ensemble telemetry for **${company.name}**:\n\n${company.summary}\n\nThe formal recommendation is **${company.agents.cam.recommendation}** with a credit risk score of **${company.riskScore}/100**.`;
      }

      setMessages([...newMsgs, { sender: 'copilot', text: reply }]);
    }, 500);
  };

  const handlePromptClick = (text) => {
    setInputQuery(text);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Underwriter Copilot Assistant</h2>
            <p className="text-xs text-slate-500 font-mono">Target Context: {company.name} ({company.cin})</p>
          </div>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
          ● RAG Engine Online
        </span>
      </div>

      {/* Chat Messages Box */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs h-[480px] overflow-y-auto space-y-4 text-xs">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex gap-3 max-w-[85%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
              m.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-100 border border-slate-200 text-blue-600'
            }`}>
              {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
            </div>
            <div className={`p-4 rounded-2xl leading-relaxed whitespace-pre-line text-xs ${
              m.sender === 'user'
                ? 'bg-blue-600 text-white font-medium shadow-xs'
                : 'bg-slate-50 border border-slate-200 text-slate-800'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Prompts */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handlePromptClick('Explain the DSCR and cashflow calculation')}
          className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium transition shadow-xs"
        >
          📊 Explain DSCR & Cashflow
        </button>
        <button
          onClick={() => handlePromptClick('Show circular trading fraud flags')}
          className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium transition shadow-xs"
        >
          🔍 Show Fraud & Shell Flags
        </button>
        <button
          onClick={() => handlePromptClick('What is the recommended sanction limit and interest rate?')}
          className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium transition shadow-xs"
        >
          📄 Sanction Recommendation
        </button>
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSendMessage} className="p-2 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2">
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="Ask copilot about financial ratios, forensic flags, or loan terms..."
          className="flex-1 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5"
        >
          <span>Send</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

    </div>
  );
}