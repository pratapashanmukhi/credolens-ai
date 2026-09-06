import React from 'react';
import { DollarSign, TrendingUp, Target, Users, Globe, Award, ArrowUpRight } from 'lucide-react';

export default function BusinessModel({ onOpenDeck }) {
  return (
    <section id="market" className="py-16 bg-slate-950 text-slate-100 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-xs font-semibold text-emerald-400">
            <Target className="w-3.5 h-3.5" />
            <span>Market Opportunity & Monetization</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            $14.2B Global Credit Intelligence Market
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Targeting 1,400+ NBFCs, FinTech Neo-Lenders, and Private Banks in India and Southeast Asia undergoing digital MSME underwriting modernization.
          </p>
        </div>

        {/* TAM / SAM / SOM */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Total Addressable Market (TAM)</div>
            <div className="text-3xl font-extrabold text-white mt-2">$14.2 Billion</div>
            <p className="text-xs text-slate-400 mt-2">
              Global AI Credit Risk Management & Automated Underwriting Software (CAGR: 24.8%).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-emerald-500/40 text-center shadow-lg shadow-emerald-950/40">
            <div className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">Serviceable Addressable Market (SAM)</div>
            <div className="text-3xl font-extrabold text-emerald-400 mt-2">$3.8 Billion</div>
            <p className="text-xs text-slate-400 mt-2">
              MSME & Commercial Lending Underwriting in India & SEA (63M MSMEs).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Serviceable Obtainable Market (SOM)</div>
            <div className="text-3xl font-extrabold text-white mt-2">$240 Million</div>
            <p className="text-xs text-slate-400 mt-2">
              Target 5% capture of Indian Tier-2/Tier-3 NBFCs and FinTech balance sheets in Year 3.
            </p>
          </div>

        </div>

        {/* Monetization Streams */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <span>Revenue Model & Pricing Tiers</span>
            </h3>
            
            <div className="mt-4 space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-200">Usage-Based API (Fintech Lenders)</div>
                  <div className="text-slate-400 mt-0.5">₹450 ($5.50) per Underwritten Loan Application</div>
                </div>
                <span className="text-emerald-400 font-mono font-bold">Pay-as-you-go</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-200">Enterprise NBFC Cloud License</div>
                  <div className="text-slate-400 mt-0.5">₹24 Lakhs ($28,000) / year + SLA support & On-Prem RAG</div>
                </div>
                <span className="text-emerald-400 font-mono font-bold">Annual Contract</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-200">Custom Forensic Model Training</div>
                  <div className="text-slate-400 mt-0.5">Proprietary risk policies, bureau connectors & custom CAM formats</div>
                </div>
                <span className="text-emerald-400 font-mono font-bold">Implementation Fee</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span>Unit Economics & ROI for Lenders</span>
              </h3>
              <ul className="mt-4 space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Cost Reduction:</strong> Drops lender underwriting cost per file from ₹4,500 ($54) to ₹450 ($5.50) — a 90% direct savings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>NPA Loss Prevention:</strong> Catches multi-crore circular fraud loops before sanction, protecting balance sheets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Disbursement Velocity:</strong> 10x faster approvals boost borrower conversion rate by 34%.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">View complete financial projections:</span>
              <button
                onClick={onOpenDeck}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition shadow-sm"
              >
                <span>Pitch Deck Slides</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}