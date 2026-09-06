# 🛡️ CredoLens AI

## Autonomous SME Credit Underwriting & Forensic Risk Intelligence Engine

> **From 14 days of manual SME credit due diligence to 90 seconds of explainable intelligence.**

CredoLens AI is an autonomous multi-agent AI platform built to transform SME/MSME credit underwriting.

It analyzes borrower documents, reconciles financial information, investigates suspicious transaction networks, calculates credit metrics using deterministic logic, and generates an audit-ready Credit Appraisal Memo (CAM).

---

## 🚀 Live Prototype

🌐 **Live Demo:** https://credolens-ai.vercel.app

---

# 🎯 The Problem

Traditional SME credit underwriting is:

- 🐌 Slow and highly manual
- 📄 Dependent on large volumes of financial documents
- 🔄 Fragmented across bank statements, GST, ITR and invoices
- 🕵️ Difficult to investigate for hidden fraud networks
- ⚠️ Prone to manual calculation and reconciliation errors
- 📝 Time-consuming for Credit Appraisal Memo preparation

Credit teams often spend days collecting, validating, reconciling and interpreting borrower information.

> **The problem is not the lack of financial data.  
> The problem is converting fragmented data into trustworthy credit intelligence quickly.**

---

# 💡 Our Solution

CredoLens AI creates an autonomous underwriting pipeline that:

1. 📥 Ingests borrower financial documents
2. 👁️ Extracts and validates financial information
3. 🔄 Reconciles bank transactions with GST and tax data
4. 🕸️ Builds a counterparty relationship graph
5. 🔍 Detects suspicious transaction patterns
6. 🧮 Calculates financial metrics deterministically
7. 📊 Generates an explainable risk assessment
8. 📄 Generates an automated Credit Appraisal Memo
9. 💬 Provides an AI Credit Copilot for credit managers

### ⚡ Result

# **14 Days → 90 Seconds**

---

# 🤖 Multi-Agent Architecture

CredoLens AI uses specialized autonomous agents instead of relying on one generic AI model.

Each agent performs a specific role in the underwriting workflow.

```mermaid
flowchart TD

    A["📂 Borrower Documents<br/>Bank Statements • GST • ITR • Invoices"]

    A --> B["👁️ Forensic Vision Agent"]

    B --> B1["PDF & Layout Understanding"]
    B --> B2["Transaction Extraction"]
    B --> B3["Document Integrity Analysis"]
    B --> B4["GST / Bank Reconciliation"]

    B1 --> C["🧠 Unified Financial Evidence Layer"]
    B2 --> C
    B3 --> C
    B4 --> C

    C --> D["🕸️ Graph RAG Agent"]

    D --> D1["Counterparty Graph"]
    D --> D2["Relationship Mapping"]
    D --> D3["Circular Trading Detection"]
    D --> D4["Shell Entity Pattern Analysis"]

    C --> E["🧮 Cashflow & Credit Scoring Agent"]

    E --> E1["Operating Cash Flow"]
    E --> E2["DSCR"]
    E --> E3["EMI Bounce Analysis"]
    E --> E4["Liquidity Runway"]
    E --> E5["Debt Service Capacity"]

    D --> F["⚠️ Risk & Forensic Engine"]
    E --> F

    F --> G["📊 Explainable Credit Decision"]

    G --> H["📄 CAM Synthesis Agent"]

    H --> H1["Credit Appraisal Memo"]
    H --> H2["Recommended Sanction Limit"]
    H --> H3["Risk Flags"]
    H --> H4["Conditions Precedent"]

    G --> I["💬 AI Credit Copilot"]

    I --> I1["Policy Queries"]
    I --> I2["Fraud Investigation"]
    I --> I3["Credit Metric Explanation"]

    H --> J["🏦 Executive Credit Decision"]
    I --> J
 ```

---

# 🔍 How CredoLens AI Works

CredoLens AI follows a structured underwriting pipeline where every stage contributes evidence to the final credit decision.

### Step 1: Document Intelligence

Borrower documents such as bank statements, GST returns, ITRs and invoices are uploaded into the system.

The Forensic Vision Agent extracts structured financial information while preserving the relationship between the extracted values and their source documents.

### Step 2: Financial Reconciliation

Extracted information is cross-checked across different financial sources.

```text
Bank Transactions
        ↓
GST Reported Revenue
        ↓
ITR / Declared Income
        ↓
Financial Consistency Check