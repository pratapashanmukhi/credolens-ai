import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function CashflowView({ company }) {
  const metrics = company.agents.cashflow.metrics;

  return (
    <div className="space-y-5">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
        <div>
          <h2 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span>Cashflow Inflow/Outflow Matrix & DSCR Analytics</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Operating cashflow, debt servicing capacity, and liquidity buffer mapping.
          </p>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#090d16] text-slate-300 font-bold border border-[#1a2233]">
          Status: {company.agents.cashflow.status}
        </span>
      </div>

      {/* 4 Financial KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        
        <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
          <span className="text-[10px] text-slate-400 font-medium">Debt-Service Coverage (DSCR)</span>
          <div className={`text-xl font-bold font-mono mt-1 ${metrics.dscr >= 1.25 ? 'text-emerald-400' : 'text-red-400'}`}>
            {metrics.dscr}x
          </div>
          <span className="text-[9px] text-slate-500">Benchmark Floor: &gt; 1.25x</span>
        </div>

        <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
          <span className="text-[10px] text-slate-400 font-medium">Operating Cash Flow (OCF)</span>
          <div className="text-xl font-bold font-mono text-slate-100 mt-1">
            {metrics.operatingCashFlow}
          </div>
          <span className="text-[9px] text-slate-500">Annualized Run-Rate</span>
        </div>

        <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
          <span className="text-[10px] text-slate-400 font-medium">Average Monthly Balance</span>
          <div className="text-xl font-bold font-mono text-blue-400 mt-1">
            {metrics.averageMonthlyBalance}
          </div>
          <span className="text-[9px] text-slate-500">6-Month Trailing</span>
        </div>

        <div className="p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
          <span className="text-[10px] text-slate-400 font-medium">Cheque / ECS Bounces</span>
          <div className={`text-xl font-bold font-mono mt-1 ${metrics.chequeBounceCount > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
            {metrics.chequeBounceCount}
          </div>
          <span className="text-[9px] text-slate-500">Past 180 Days</span>
        </div>

      </div>

      {/* Monthly Cashflow Bar Comparison */}
      <div className="p-5 rounded-xl bg-[#0e1422] border border-[#1a2233] space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1a2233]">
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
            Monthly Inflow vs Outflow Breakdown (in ₹ Lakhs)
          </h3>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Credits (Inflow)
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" /> Debits (Outflow)
            </span>
          </div>
        </div>

        <div className="space-y-3 pt-1">
          {company.agents.cashflow.monthlyTrends.map((m, idx) => (
            <div key={idx} className="flex items-center gap-3.5 text-xs">
              <span className="w-10 font-mono font-bold text-slate-400 text-[11px]">{m.month}</span>
              
              <div className="flex-1 flex items-center gap-2.5">
                {/* Inflow bar */}
                <div className="flex-1 bg-[#090d16] rounded-full h-2.5 overflow-hidden flex border border-[#1a2233]">
                  <div
                    style={{ width: `${Math.min(m.inflow / 2.5, 100)}%` }}
                    className="bg-emerald-500 h-full rounded-full"
                  />
                </div>
                <span className="w-14 text-right font-mono font-bold text-emerald-400 text-[11px]">₹{m.inflow}L</span>

                {/* Outflow bar */}
                <div className="flex-1 bg-[#090d16] rounded-full h-2.5 overflow-hidden flex border border-[#1a2233]">
                  <div
                    style={{ width: `${Math.min(m.outflow / 2.5, 100)}%` }}
                    className="bg-rose-500 h-full rounded-full"
                  />
                </div>
                <span className="w-14 text-right font-mono font-bold text-rose-400 text-[11px]">₹{m.outflow}L</span>
              </div>

              <span className={`w-14 text-right font-mono font-bold text-[11px] ${m.net >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {m.net >= 0 ? `+₹${m.net}L` : `-₹${Math.abs(m.net)}L`}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}