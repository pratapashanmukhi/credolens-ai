# 🛡️ CredoLens AI - Autonomous SME Credit Underwriting & Forensic Risk Engine

> **BITSoM Vertex Builders Pitch Fest 2026**  
> **Track:** BFSI AI Problems / Innovation AI Agents  
> **Team:** Les Créateurs (Shanmukhi Pratapa & Team)

---

## 🚀 Live Prototype & Overview

**CredoLens AI** transforms traditional 14-day SME loan due diligence into **90-second explainable intelligence**. It deploys an ensemble of autonomous multi-agent systems to parse bank statements, cross-reconcile GST returns, detect circular trading and shell entity loops via Graph RAG, and formulate audit-ready Credit Appraisal Memos (CAM).

---

## 🌟 Key Features

1. **⚡ 90-Second Instant Underwriting:** Extracts line-item cash inflows and computes DSCR, Operating Cash Flow, and liquidity runways instantly.
2. **🔍 Deep Graph RAG Forensics:** Discovers circular trading loops and shell vendor networks using graph cycle detection in Neo4j.
3. **📄 1-Click Credit Appraisal Memo (CAM):** Auto-synthesizes formal 5-page credit memos with recommended sanction limits, interest rates, and condition precedents.
4. **💬 Interactive AI Credit Copilot:** RAG-powered natural language copilot for credit managers to query policy exceptions, debt-service capacity, and fraud flags.
5. **🔒 Zero-Hallucination Deterministic Math:** All financial calculations are executed in sandboxed mathematical runtimes.

---

## 🏗️ Multi-Agent Architecture

```
[Borrower Documents: Bank PDFs, GSTR-1/3B, ITR]
                       │
                       ▼
         ┌───────────────────────────┐
         │   Forensic Vision Agent   │ (PDF LayoutLMv3, Font Tampering & Tax Reconciliation)
         └─────────────┬─────────────┘
                       │
         ┌─────────────▼─────────────┐
         │      Graph RAG Agent      │ (Neo4j Counterparty Graph, Circular Flow Detection)
         └─────────────┬─────────────┘
                       │
         ┌─────────────▼─────────────┐
         │   Cashflow & DSCR Scorer  │ (Deterministic OCF, DSCR, EMI Bounce Analysis)
         └─────────────┬─────────────┘
                       │
         ┌─────────────▼─────────────┐
         │    CAM Synthesis Agent    │ (ReportLab PDF / Executive Committee Dossier)
         └─────────────┬─────────────┘
                       │
                       ▼
       [Executive Credit Decision & Sanction]
```

---

## 💻 Local Setup & Development

```bash
# Clone repository
git clone https://github.com/<your-username>/credolens-ai.git
cd credolens-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to interact with the live multi-agent sandbox!

---

## 📊 Market Opportunity & Unit Economics

* **TAM:** $14.2 Billion (Global Credit Risk & Underwriting AI)
* **SAM:** $3.8 Billion (MSME Lending Underwriting in India & SEA)
* **SOM:** $240 Million (5% of Indian NBFC & FinTech market in Year 3)
* **Pricing Model:** ₹450 ($5.50) per underwritten file API tier + ₹24 Lakhs ($28,000)/year Enterprise Cloud License.