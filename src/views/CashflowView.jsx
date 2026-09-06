import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function CashflowView({ company }) {
  const metrics = company.agents.cashflow.metrics;

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span>Cashflow Inflow/Outflow Matrix & DSCR Analytics</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Analyzes true operating cashflow, debt servicing capacity, and liquidity buffer.
          </p>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold border border-slate-200">
          Status: {company.agents.cashflow.status}
        </span>
      </div>

      {/* 4 Financial Health KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">Debt-Service Coverage (DSCR)</span>
          <div className={`text-2xl font-black font-mono mt-1 ${metrics.dscr >= 1.25 ? 'text-emerald-600' : 'text-red-600'}`}>
            {metrics.dscr}x
          </div>
          <span className="text-[10px] text-slate-400">Policy Cutoff: Min 1.25x</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">Operating Cash Flow (OCF)</span>
          <div className="text-2xl font-black font-mono text-slate-900 mt-1">
            {metrics.operatingCashFlow}
          </div>
          <span className="text-[10px] text-slate-400">Annualized Run-Rate</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">Average Monthly Balance</span>
          <div className="text-2xl font-black font-mono text-blue-600 mt-1">
            {metrics.averageMonthlyBalance}
          </div>
          <span className="text-[10px] text-slate-400">6-Month Trailing Average</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">Cheque / ECS Bounces</span>
          <div className={`text-2xl font-black font-mono mt-1 ${metrics.chequeBounceCount > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
            {metrics.chequeBounceCount}
          </div>
          <span className="text-[10px] text-slate-400">Past 180 Days</span>
        </div>

      </div>

      {/* Monthly Cashflow Bar Comparison */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
            Monthly Inflow vs Outflow Breakdown (in ₹ Lakhs)
          </h3>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <span className="w-3 h-3 rounded bg-emerald-500 inline-block" /> Total Credits (Inflow)
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <span className="w-3 h-3 rounded bg-rose-500 inline-block" /> Total Debits (Outflow)
            </span>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          {company.agents.cashflow.monthlyTrends.map((m, idx) => (
            <div key={idx} className="flex items-center gap-4 text-xs">
              <span className="w-12 font-mono font-bold text-slate-600">{m.month}</span>
              
              <div className="flex-1 flex items-center gap-3">
                {/* Inflow bar */}
                <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden flex">
                  <div
                    style={{ width: `${Math.min(m.inflow / 2.5, 100)}%` }}
                    className="bg-emerald-500 h-full rounded-full"
                  />
                </div>
                <span className="w-16 text-right font-mono font-bold text-emerald-600">₹{m.inflow}L</span>

                {/* Outflow bar */}
                <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden flex">
                  <div
                    style={{ width: `${Math.min(m.outflow / 2.5, 100)}%` }}
                    className="bg-rose-500 h-full rounded-full"
                  />
                </div>
                <span className="w-16 text-right font-mono font-bold text-rose-600">₹{m.outflow}L</span>
              </div>

              <span className={`w-16 text-right font-mono font-bold ${m.net >= 0 ? 'text-emerald-700' : 'text-red-700'}`}>
                {m.net >= 0 ? `+₹${m.net}L` : `-₹${Math.abs(m.net)}L`}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}