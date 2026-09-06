import React from 'react';
import { Sliders, Calculator, ShieldCheck } from 'lucide-react';
import LoanSimulator from '../components/LoanSimulator';

export default function StressSimulatorView({ company }) {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Sliders className="w-5 h-5 text-blue-600" />
            <span>Interactive Underwriting & Stress-Testing Lab</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Test loan sizing sensitivity, interest rate stress, and macroeconomic revenue shocks in real time.
          </p>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold border border-blue-200">
          Deterministic Dynamic Math
        </span>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <LoanSimulator company={company} />
      </div>

    </div>
  );
}