import React, { useState } from 'react';
import { Sliders, Calculator, DollarSign, Activity, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export default function LoanSimulator({ company }) {
  const [loanAmount, setLoanAmount] = useState(company.requestedAmountNum || 10000000);
  const [interestRate, setInterestRate] = useState(11.5);
  const [tenorMonths, setTenorMonths] = useState(36);
  const [revenueShock, setRevenueShock] = useState(0);

  // EMI: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = (interestRate / 100) / 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenorMonths)) /
    (Math.pow(1 + monthlyRate, tenorMonths) - 1)
  );

  const baseAnnualTurnover = company.turnoverNum || 10000000;
  const shockedTurnover = baseAnnualTurnover * (1 + revenueShock / 100);
  const estimatedAnnualEbitda = shockedTurnover * 0.18;
  const annualDebtService = emi * 12;
  const simulatedDscr = (estimatedAnnualEbitda / Math.max(annualDebtService, 1)).toFixed(2);

  let simStatus = 'APPROVED';
  let simBadgeColor = 'text-emerald-400 bg-emerald-950/60 border-emerald-800/80';

  if (company.id === 'apex' || simulatedDscr < 1.0) {
    simStatus = 'REJECTED';
    simBadgeColor = 'text-red-400 bg-red-950/60 border-red-800/80';
  } else if (simulatedDscr < 1.35) {
    simStatus = 'CONDITIONAL';
    simBadgeColor = 'text-amber-400 bg-amber-950/60 border-amber-800/80';
  }

  const formatINR = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    return `₹${(val / 100000).toFixed(1)} Lakhs`;
  };

  return (
    <div className="space-y-5 text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[#1a2233]">
        <div>
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Calculator className="w-4 h-4 text-blue-400" />
            <span>Underwriting Sensitivity & Debt Stress Model</span>
          </h4>
          <p className="text-[11px] text-slate-400">
            Real-time sensitivity analysis for debt servicing capacity under varying interest rates and revenue contractions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-4 bg-[#090d16] p-4 rounded-xl border border-[#1a2233]">
          
          {/* Slider 1: Loan Amount */}
          <div>
            <div className="flex justify-between text-slate-300 font-semibold mb-1 text-xs">
              <span>Facility Amount:</span>
              <span className="font-mono text-blue-400 text-sm font-bold">{formatINR(loanAmount)}</span>
            </div>
            <input
              type="range"
              min={1000000}
              max={30000000}
              step={500000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-blue-500 bg-[#161f30] rounded-lg h-1.5 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>₹10 Lakhs</span>
              <span>₹1.5 Cr</span>
              <span>₹3.0 Cr</span>
            </div>
          </div>

          {/* Slider 2: Interest Rate */}
          <div>
            <div className="flex justify-between text-slate-300 font-semibold mb-1 text-xs">
              <span>Annual Rate (ROI):</span>
              <span className="font-mono text-cyan-400 text-sm font-bold">{interestRate}% p.a.</span>
            </div>
            <input
              type="range"
              min={8.5}
              max={18.0}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-[#161f30] rounded-lg h-1.5 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>8.5% (Prime)</span>
              <span>13.0%</span>
              <span>18.0% (Sub-Prime)</span>
            </div>
          </div>

          {/* Slider 3: Tenor */}
          <div>
            <div className="flex justify-between text-slate-300 font-semibold mb-1 text-xs">
              <span>Repayment Tenor:</span>
              <span className="font-mono text-amber-400 text-sm font-bold">{tenorMonths} Months ({Math.round(tenorMonths/12 * 10)/10} yrs)</span>
            </div>
            <input
              type="range"
              min={12}
              max={60}
              step={6}
              value={tenorMonths}
              onChange={(e) => setTenorMonths(Number(e.target.value))}
              className="w-full accent-amber-500 bg-[#161f30] rounded-lg h-1.5 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>12 Months</span>
              <span>36 Months</span>
              <span>60 Months</span>
            </div>
          </div>

          {/* Slider 4: Revenue Shock */}
          <div className="pt-2 border-t border-[#1a2233]">
            <div className="flex justify-between text-slate-300 font-semibold mb-1 text-xs">
              <span>Revenue Shock:</span>
              <span className={`font-mono text-sm font-bold ${revenueShock < 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                {revenueShock > 0 ? `+${revenueShock}%` : `${revenueShock}%`}
              </span>
            </div>
            <input
              type="range"
              min={-30}
              max={30}
              step={5}
              value={revenueShock}
              onChange={(e) => setRevenueShock(Number(e.target.value))}
              className="w-full accent-purple-500 bg-[#161f30] rounded-lg h-1.5 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>-30% (Stress)</span>
              <span>0% (Base)</span>
              <span>+30% (Growth)</span>
            </div>
          </div>

        </div>

        {/* Real-Time Computed Telemetry */}
        <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
          
          <div className="p-4 rounded-xl bg-[#090d16] border border-[#1a2233] text-center space-y-1.5">
            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 font-mono">
              Projected Monthly EMI
            </span>
            <div className="text-2xl font-black text-blue-400 font-mono">
              ₹{emi.toLocaleString('en-IN')} <span className="text-xs text-slate-500 font-normal">/ mo</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              Annual Debt Service: ₹{((emi * 12) / 100000).toFixed(2)} Lakhs
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#090d16] border border-[#1a2233] space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Simulated DSCR:</span>
              <span className={`font-bold ${simulatedDscr >= 1.25 ? 'text-emerald-400' : 'text-red-400'}`}>
                {simulatedDscr}x
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Policy Floor:</span>
              <span className="text-slate-300">Min 1.25x</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Shocked Revenue:</span>
              <span className="text-slate-300">{formatINR(shockedTurnover)}</span>
            </div>
          </div>

          <div className={`p-3 rounded-lg border text-center font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 font-mono ${simBadgeColor}`}>
            {simStatus === 'APPROVED' ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Simulated: Approved for Sanction</span>
              </>
            ) : simStatus === 'CONDITIONAL' ? (
              <>
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Simulated: Conditional (Escrow Needed)</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-red-400" />
                <span>Simulated: Debt Service Deficit</span>
              </>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}