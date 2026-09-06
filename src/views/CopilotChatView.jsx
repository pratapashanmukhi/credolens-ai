import React, { useState, useEffect } from 'react';
import { Bot, Send, User, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function CopilotChatView({ company }) {
  const [messages, setMessages] = useState([
    {
      sender: 'copilot',
      text: `Hello Shanmukhi. I am your Underwriting Intelligence Copilot. I have audited **${company.name}** (Risk Score: **${company.riskScore}/100**). You can query me on DSCR calculations, circular trading loops, shell entity links, or covenant structuring.`
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
      <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0e1422] border border-[#1a2233]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#111622] border border-[#1a2233] flex items-center justify-center text-blue-400">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-slate-100">Underwriter Intelligence Copilot</h2>
            <p className="text-[10px] text-slate-400 font-mono">Context: {company.name}</p>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 font-bold border border-emerald-900/60">
          ● RAG Online
        </span>
      </div>

      {/* Chat Messages Box */}
      <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233] h-[460px] overflow-y-auto space-y-3 text-xs">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex gap-2.5 max-w-[85%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
          >
            <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 text-xs font-bold ${
              m.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-[#111622] border border-[#1a2233] text-blue-400'
            }`}>
              {m.sender === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
            </div>
            <div className={`p-3 rounded-lg leading-relaxed whitespace-pre-line text-xs ${
              m.sender === 'user'
                ? 'bg-blue-600 text-white font-medium shadow-xs'
                : 'bg-[#090d16] border border-[#1a2233] text-slate-200'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Prompts */}
      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => handlePromptClick('Explain the DSCR and cashflow calculation')}
          className="px-2.5 py-1 rounded-lg bg-[#0e1422] hover:bg-[#111622] border border-[#1a2233] text-slate-300 text-xs font-medium transition"
        >
          📊 Explain DSCR
        </button>
        <button
          onClick={() => handlePromptClick('Show circular trading fraud flags')}
          className="px-2.5 py-1 rounded-lg bg-[#0e1422] hover:bg-[#111622] border border-[#1a2233] text-slate-300 text-xs font-medium transition"
        >
          🔍 Show Fraud Flags
        </button>
        <button
          onClick={() => handlePromptClick('What is the recommended sanction limit and interest rate?')}
          className="px-2.5 py-1 rounded-lg bg-[#0e1422] hover:bg-[#111622] border border-[#1a2233] text-slate-300 text-xs font-medium transition"
        >
          📄 Sanction Recommendation
        </button>
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSendMessage} className="p-1.5 bg-[#0e1422] rounded-xl border border-[#1a2233] flex items-center gap-2">
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="Ask copilot about financial ratios, forensic flags, or loan terms..."
          className="flex-1 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1.5"
        >
          <span>Send</span>
          <Send className="w-3 h-3" />
        </button>
      </form>

    </div>
  );
}