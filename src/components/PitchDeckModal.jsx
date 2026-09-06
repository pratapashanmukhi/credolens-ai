import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, FileText, Sparkles, CheckCircle2, ShieldCheck, Target, TrendingUp, Cpu } from 'lucide-react';

export default function PitchDeckModal({ isOpen, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      number: 1,
      title: "CredoLens AI",
      subtitle: "Autonomous SME Credit Underwriting & Forensic Financial Risk Engine",
      badge: "Enterprise FinTech Solution | Category: AI Credit Decisioning",
      content: (
        <div className="text-center py-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-xs text-emerald-400 font-semibold">
            Executive Product Deck
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">CredoLens<span className="text-emerald-400">.AI</span></h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto">
            Turning 14-Day SME Loan Underwriting into 90-Second Explainable Intelligence.
          </p>
          <div className="pt-6 grid grid-cols-2 max-w-md mx-auto gap-4 text-left text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div>
              <span className="text-slate-500 block">Focus Sector:</span>
              <span className="text-slate-200 font-bold">BFSI & SME Commercial Lending</span>
            </div>
            <div>
              <span className="text-slate-500 block">Product Readiness:</span>
              <span className="text-emerald-400 font-bold">Functional Prototype & Sandbox</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: "The Problem",
      subtitle: "SME Underwriting is Broken, Slow, and Prone to Multi-Crore Fraud",
      badge: "Critical Industry Pain Point",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 text-xs">
          <div className="p-4 rounded-xl bg-red-950/30 border border-red-800/60">
            <div className="text-red-400 font-bold text-sm mb-1">⏱️ 5 to 14 Days TAT</div>
            <p className="text-slate-300 leading-relaxed">
              Credit managers manually comb through hundreds of pages of bank statements, GSTR-1/3B PDFs, and ITR filings in Excel spreadsheets.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-red-950/30 border border-red-800/60">
            <div className="text-red-400 font-bold text-sm mb-1">🎭 Undetected Fraud & NPAs</div>
            <p className="text-slate-300 leading-relaxed">
              Circular invoicing rings, shell entities, and modified PDF transaction tables slip past human audits, causing multi-crore bad debt write-offs.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-red-950/30 border border-red-800/60">
            <div className="text-red-400 font-bold text-sm mb-1">📉 $500B Credit Gap</div>
            <p className="text-slate-300 leading-relaxed">
              High underwriting costs (₹4,500/file) make sub-₹50 Lakh loans unprofitable for banks, leaving millions of creditworthy MSMEs unserved.
            </p>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "The Solution: CredoLens AI",
      subtitle: "Autonomous Multi-Agent Forensic Credit Engine",
      badge: "Breakthrough Agentic AI",
      content: (
        <div className="py-2 space-y-3 text-xs">
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/60 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white text-sm block">90-Second Instant Underwriting</strong>
              <span className="text-slate-300">Ingests raw bank statements & GST filings, generating complete DSCR metrics & risk classification instantly.</span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/60 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white text-sm block">Deep Graph RAG Forensics</strong>
              <span className="text-slate-300">Constructs Neo4j counterparty transaction graphs to uncover circular trading loops, shell vendors, and PDF font tampering.</span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/60 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white text-sm block">1-Click Credit Appraisal Memo (CAM)</strong>
              <span className="text-slate-300">Auto-synthesizes an audit-ready, 5-page CAM document complete with sanction limits, covenants, and risk score.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: "Market Opportunity",
      subtitle: "A $14.2B Global Market Ripe for Disruption",
      badge: "TAM / SAM / SOM",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 text-center">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase font-semibold">TAM</div>
            <div className="text-2xl font-bold text-white mt-1">$14.2 Billion</div>
            <div className="text-[11px] text-slate-400 mt-2">Global AI Credit Risk Management software market</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/50">
            <div className="text-xs text-emerald-400 uppercase font-semibold">SAM</div>
            <div className="text-2xl font-bold text-emerald-400 mt-1">$3.8 Billion</div>
            <div className="text-[11px] text-slate-300 mt-2">MSME & Commercial Lending Underwriting in India & SEA</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase font-semibold">SOM</div>
            <div className="text-2xl font-bold text-white mt-1">$240 Million</div>
            <div className="text-[11px] text-slate-400 mt-2">Targeting 5% capture of Indian Tier-2/Tier-3 NBFCs & Fintechs</div>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: "Multi-Agent System Architecture",
      subtitle: "Deterministic Zero-Trust AI Framework",
      badge: "Technical Innovation",
      content: (
        <div className="grid grid-cols-2 gap-3 py-2 text-xs">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="font-bold text-cyan-400">1. Forensic Vision Agent</div>
            <p className="text-slate-400 mt-1 text-[11px]">PDF layout parsing, font tamper analysis, and GST-bank credit reconciliation.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="font-bold text-emerald-400">2. Graph RAG Agent</div>
            <p className="text-slate-400 mt-1 text-[11px]">Neo4j transaction graph mapping to isolate circular loops & related-party shell rings.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="font-bold text-amber-400">3. Cashflow & DSCR Scorer</div>
            <p className="text-slate-400 mt-1 text-[11px]">Mathematical OCF, DSCR, EMI bounce history, and liquidity runway computation.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="font-bold text-purple-400">4. CAM Synthesis Agent</div>
            <p className="text-slate-400 mt-1 text-[11px]">Aggregates agent telemetry into structured, committee-ready credit appraisal memos.</p>
          </div>
        </div>
      )
    },
    {
      number: 6,
      title: "Competitive Advantage & Moat",
      subtitle: "Why CredoLens AI Outperforms Traditional Credit Bureaus & Generic LLMs",
      badge: "Defensible Moat",
      content: (
        <div className="py-2 overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="p-2">Feature</th>
                <th className="p-2 text-slate-500">Traditional CIBIL/Manual</th>
                <th className="p-2 text-slate-500">Generic LLM Wrappers</th>
                <th className="p-2 text-emerald-400 font-bold">CredoLens AI</th>
              </tr>
            </thead>
            <tbody className="divide-y border-slate-800/60 text-slate-300">
              <tr>
                <td className="p-2 font-semibold">Underwriting Speed</td>
                <td className="p-2 text-slate-500">5-14 Days</td>
                <td className="p-2 text-slate-500">~5 Minutes</td>
                <td className="p-2 text-emerald-400 font-bold">&lt; 90 Seconds</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Circular Trading Detection</td>
                <td className="p-2 text-slate-500">❌ Rare / Manual</td>
                <td className="p-2 text-slate-500">❌ Cannot parse graphs</td>
                <td className="p-2 text-emerald-400 font-bold">✅ 99.4% Graph RAG</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Mathematical Accuracy</td>
                <td className="p-2 text-slate-500">Manual errors</td>
                <td className="p-2 text-slate-500">Hallucinates numbers</td>
                <td className="p-2 text-emerald-400 font-bold">✅ 100% Deterministic</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">1-Click CAM Generation</td>
                <td className="p-2 text-slate-500">❌ Word template typing</td>
                <td className="p-2 text-slate-500">❌ Text summary only</td>
                <td className="p-2 text-emerald-400 font-bold">✅ Full PDF CAM Dossier</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      number: 7,
      title: "Business Model & Monetization",
      subtitle: "High-Margin SaaS + Usage-Based Revenue Engine",
      badge: "Unit Economics",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="font-bold text-emerald-400 text-sm">Revenue Streams</div>
            <p className="text-slate-300">• <strong>Pay-per-Audit API:</strong> ₹450 ($5.50) / loan application for high-volume FinTech lenders.</p>
            <p className="text-slate-300">• <strong>Enterprise Cloud License:</strong> ₹24 Lakhs ($28,000) / year per NBFC / Bank.</p>
            <p className="text-slate-300">• <strong>Custom Policy Integration:</strong> ₹5-10 Lakhs one-time onboarding fee.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="font-bold text-cyan-400 text-sm">Unit Economics</div>
            <p className="text-slate-300">• <strong>Gross Margin:</strong> ~88% (Low compute cost via optimized OCR & graph caching).</p>
            <p className="text-slate-300">• <strong>Customer Payback:</strong> &lt; 2 months (Lender saves ₹4,050 per application audited).</p>
            <p className="text-slate-300">• <strong>LTV / CAC Ratio:</strong> Estimated 6.2x.</p>
          </div>
        </div>
      )
    },
    {
      number: 8,
      title: "Traction & Roadmap",
      subtitle: "From MVP to Enterprise Commercialization",
      badge: "Execution Plan",
      content: (
        <div className="space-y-3 py-2 text-xs">
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800 flex items-center justify-between">
            <div>
              <span className="font-bold text-emerald-400">Phase 1 (Current): Core Engine & Sandbox</span>
              <p className="text-slate-300 text-[11px]">Multi-agent engine built with validated test scenarios, Graph RAG, and instant CAM generation.</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-900 text-emerald-300 font-bold">COMPLETED</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="font-bold text-white">Phase 2: NBFC Pilot Testing</span>
              <p className="text-slate-400 text-[11px]">Deploy sandbox with partner NBFCs; integrate Account Aggregator (AA) & GSTN live APIs.</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">IN PROGRESS</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="font-bold text-white">Phase 3: Enterprise Scale</span>
              <p className="text-slate-400 text-[11px]">Scale to 25+ lenders, target 100,000 underwritten loan applications ($550k ARR).</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">PLANNED</span>
          </div>
        </div>
      )
    },
    {
      number: 9,
      title: "Team & Vision",
      subtitle: "Building the Operating System for Modern Commercial Credit",
      badge: "Founding Team",
      content: (
        <div className="text-center py-6 space-y-4 text-xs">
          <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="text-base font-bold text-white">CredoLens Engineering & Finance Team</h4>
            <p className="text-slate-400 mt-1">Specializing in Multi-Agent AI, Graph Neural Networks, and Financial Risk Analytics.</p>
            <div className="mt-3 pt-3 border-t border-slate-800 flex justify-center gap-4 text-slate-300 font-mono text-[11px]">
              <span>• Multi-Agent Systems</span>
              <span>• FinTech Graph RAG</span>
              <span>• Enterprise Cloud</span>
            </div>
          </div>
          <p className="text-slate-400 max-w-lg mx-auto">
            "Democratizing fast, fair, and forensic-grade credit for global MSMEs while protecting financial institutions against fraud."
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm text-white">CredoLens AI - Executive Deck</span>
            <span className="text-xs text-slate-400 font-mono">({currentSlide + 1} / {slides.length})</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Content */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
            {slides[currentSlide].badge}
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            {slides[currentSlide].title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            {slides[currentSlide].subtitle}
          </p>

          <div className="mt-6">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <button
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-200 text-xs font-semibold border border-slate-800 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === idx ? 'bg-emerald-400 w-6' : 'bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 text-xs font-bold transition shadow-sm"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}