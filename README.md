# CredoLens AI - Autonomous SME Credit Underwriting & Forensic Risk Intelligence

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg?logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB.svg?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://credolens-ai.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **"From 14 days of manual SME credit due diligence to 90 seconds of explainable intelligence."**

CredoLens AI is an autonomous AI platform built to transform SME/MSME credit underwriting. It ingests borrower financial documents, reconciles banking statements against GST filings, investigates suspicious transaction networks, calculates deterministic solvency and liquidity metrics, and compiles an audit-ready Credit Appraisal Memo (CAM).

---

## Live Prototype & Pitch Deck

- **Live Prototype Application**: [credolens-ai.vercel.app](https://credolens-ai.vercel.app)
- **Executive Pitch Deck**: [docs/BPF2026_PitchDeck_CredoLensAI.pdf](docs/BPF2026_PitchDeck_CredoLensAI.pdf)

---

## Visual Dashboard Showcase

| Underwriting Overview | Credit Appraisal Memo (CAM) |
| :---: | :---: |
| ![Underwriting Overview](screenshot_overview.png) | ![Credit Appraisal Memo](screenshot_cam.png) |

| Forensic Fraud & Round-Tripping | Cash Flow & Revenue Reconciliation |
| :---: | :---: |
| ![Forensic Network Graph](screenshot_forensic.png) | ![Cash Flow Analysis](screenshot_cashflow.png) |

| Solvency & Shock Stress Testing | Underwriting Policy Verification |
| :---: | :---: |
| ![Stress Testing Engine](screenshot_stress.png) | ![Policy Verification](screenshot_policy.png) |

---

## The Problem

Traditional SME commercial credit underwriting is:
- **Painfully Slow**: Requires 10 to 14 business days of manual review per enterprise borrower.
- **Fragmented Across Siloed Formats**: Bank statements, GST tax returns, audited balance sheets, and vendor invoices arrive in disparate formats.
- **Vulnerable to Hidden Fraud**: Circular transaction rings, round-tripping, and dummy shell counterparties easily evade manual spot sampling.
- **Labor-Intensive**: Credit analysts spend 80% of their time cross-referencing numbers and compiling memos rather than evaluating credit risk.

---

## Solution & Architecture

CredoLens AI deploys a coordinated pipeline of specialized analytical engines:

```
[ Borrower Financial Ingestion ]
  ├── Bank Statements (PDF / CSV)
  ├── GST Returns (GSTR-1, GSTR-3B)
  └── Income Tax Returns (ITR-5/6)
              │
              ▼
[ Cross-Document Reconciliation Engine ]
  ├── Revenue Verification (Reported vs. Realized Bank Inflows)
  ├── Tax Gap Analysis (Sales vs. GST Deposited)
  └── Cash-to-Accrual Mismatch Detection
              │
              ▼
[ Forensic Network Graph Analyzer ]
  ├── Entity-Relationship Mapping
  ├── Circular Round-Tripping Ring Detection
  └── High-Risk Counterparty / Mule Flagging
              │
              ▼
[ Financial Solvency & Stress Engine ]
  ├── DSCR (Debt Service Coverage Ratio)
  ├── Current, Quick, and Leverage Ratios
  └── Cash Burn & Working Capital Runway Stress Shocks
              │
              ▼
[ Automated Credit Appraisal Memo (CAM) Generator ]
  ├── Executive Decision Recommendation
  ├── Risk Scorecard Breakdown
  └── Audit-Ready PDF / JSON Output
```

---

## Key Features

- **Automated Cross-Reconciliation**: Reconciles revenue claimed on tax filings against actual banking deposits with automated discrepancy flagging.
- **Forensic Graph Investigation**: Detects round-tripping money rings and shell counterparties across commercial transaction networks.
- **Cash Flow Stress Testing**: Simulates revenue shocks, delayed debtor payments, and raw material price spikes to evaluate liquidity resilience.
- **Configurable Policy Engine**: Enforces underwriting policy rules (minimum vintage, debt-to-equity thresholds, maximum allowable leverage).
- **Instant Bank-Grade CAM**: Generates comprehensive Credit Appraisal Memos complete with charts, risk scoring, and explanatory footnotes.

---

## Project Structure

```
credolens-ai/
├── src/                        # React + Vite frontend source code
│   ├── components/             # Reusable UI widgets, forensic charts
│   ├── data/                   # Mock financial cases & schema models
│   └── App.jsx                 # Dashboard router and view layout
├── public/                     # Static public assets
├── docs/                       # Architectural specs and pitch deck PDF
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS design system tokens
├── screenshot_*.png            # High-resolution dashboard screenshots
├── .gitignore                  # Exclusion rules
└── README.md                   # Technical documentation
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- `npm` or `pnpm`

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pratapashanmukhi/credolens-ai.git
   cd credolens-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open `http://localhost:5173` in your browser.

---

## Deployment

The application is optimized for continuous deployment on Vercel and Netlify:
```bash
npm run build
```
Build output is generated into the `dist/` directory, excluded from version control per `.gitignore`.

---

## Author

**Shanmukhi Pratapa**  
B.Tech Computer Science & Engineering (Artificial Intelligence & Machine Learning)  
VIT-AP University  
GitHub: [@pratapashanmukhi](https://github.com/pratapashanmukhi)
