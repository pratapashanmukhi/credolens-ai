import React from 'react';
import { Sliders } from 'lucide-react';
import LoanSimulator from '../components/LoanSimulator';

export default function StressSimulatorView({ company }) {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0e1422] border border-[#1a2233]">
        <div>
          <h2 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
            <Sliders className="w-4 h-4 text-blue-400" />
            <span>Underwriting Sensitivity & Stress-Testing Lab</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Test loan sizing sensitivity, interest rate stress, and macroeconomic revenue shocks in real time.
          </p>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#090d16] text-blue-400 font-bold border border-[#1a2233]">
          Dynamic Math Runtime
        </span>
      </div>

      <div className="p-5 rounded-xl bg-[#0e1422] border border-[#1a2233]">
        <LoanSimulator company={company} />
      </div>
    </div>
  );
}