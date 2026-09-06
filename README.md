# 🛡️ CredoLens AI

## Autonomous SME Credit Underwriting & Forensic Risk Intelligence Engine

> **From 14 days of manual SME credit due diligence to 90 seconds of explainable intelligence.**

CredoLens AI is an autonomous multi-agent platform designed to accelerate **SME/MSME credit underwriting** by combining document intelligence, deterministic financial analysis, forensic graph analytics, and AI-powered Credit Appraisal Memo generation.

Instead of simply predicting whether a borrower is risky, CredoLens investigates the **financial evidence behind the borrower** and produces an explainable, audit-ready credit assessment.

---

## 🚀 Live Prototype

🌐 **Live Demo:** https://credolens-ai.vercel.app

---

# 🎯 The Problem

Traditional SME loan underwriting is:

- 🐌 **Slow** – Due diligence can take days or even weeks.
- 📄 **Document-heavy** – Bank statements, GST returns, ITRs, invoices and financial statements must be manually reviewed.
- 🔄 **Fragmented** – Financial information is spread across multiple sources.
- 🕵️ **Difficult to investigate** – Fraudulent transactions can be hidden across multiple counterparties.
- ⚠️ **Prone to human error** – Manual reconciliation and calculations introduce inconsistencies.
- 📝 **Time-consuming** – Credit managers still need to prepare detailed Credit Appraisal Memos.

The biggest problem is not the lack of data.

> **The problem is turning fragmented financial data into trustworthy credit intelligence quickly.**

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
8. 📄 Creates an audit-ready Credit Appraisal Memo
9. 💬 Allows credit managers to interrogate the analysis through an AI Copilot

### Result

# **14 Days → 90 Seconds**

---

# 🏗️ System Architecture

```mermaid
flowchart TD

    A["📂 Borrower Documents<br/>Bank Statements • GST • ITR • Invoices"]

    A --> B["👁️ Forensic Vision Agent"]

    B --> B1["PDF Layout Extraction"]
    B --> B2["Transaction Extraction"]
    B --> B3["Document Integrity Checks"]
    B --> B4["GST / Tax Reconciliation"]

    B1 --> C["🧠 Unified Financial Evidence Layer"]
    B2 --> C
    B3 --> C
    B4 --> C

    C --> D["🕸️ Graph RAG Agent"]

    D --> D1["Counterparty Graph"]
    D --> D2["Relationship Analysis"]
    D --> D3["Circular Flow Detection"]
    D --> D4["Shell Entity Pattern Detection"]

    C --> E["🧮 Cashflow & Credit Scoring Agent"]

    E --> E1["Operating Cash Flow"]
    E --> E2["DSCR"]
    E --> E3["EMI Bounce Analysis"]
    E --> E4["Liquidity Runway"]
    E --> E5["Debt Service Capacity"]

    D --> F["⚠️ Forensic Risk Engine"]
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

    H --> J["🏦 Executive Credit Committee"]
    I --> J

Yes, understood. You meant Multi-Agent Architecture, not agriculture. 😭

You want the README to explicitly include the multi-agent architecture section and the flow. Use this version for that part:

# 🤖 Multi-Agent Architecture

CredoLens AI is built as an **autonomous multi-agent underwriting system**, where each specialized agent performs a dedicated task in the credit investigation pipeline.

Instead of using one generic AI model for everything, CredoLens separates **document intelligence, forensic investigation, financial computation, risk assessment, and credit reporting** into specialized agents.

```mermaid
flowchart TD

    A["📂 Borrower Documents<br/>Bank Statements • GST • ITR • Invoices"]
    
    A --> B["👁️ Forensic Vision Agent"]
    
    B --> B1["PDF & Layout Understanding"]
    B --> B2["Transaction Extraction"]
    B --> B3["Document Integrity Analysis"]
    B --> B4["GST / Bank Reconciliation"]
    
    B1 --> C["🧠 Unified Financial Evidence"]
    B2 --> C
    B3 --> C
    B4 --> C
    
    C --> D["🕸️ Graph RAG Agent"]
    
    D --> D1["Counterparty Graph"]
    D --> D2["Relationship Mapping"]
    D --> D3["Circular Trading Detection"]
    D --> D4["Shell Entity Analysis"]
    
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

🔹 Agent 1: Forensic Vision Agent

Responsible for understanding and extracting information from unstructured financial documents.

Capabilities

Bank statement parsing

PDF layout understanding

Transaction extraction

GST return extraction

ITR data extraction

Document integrity analysis

Cross-document reconciliation

Detection of suspicious document inconsistencies


Output

Raw Financial Documents
        ↓
Structured Financial Evidence


---

🔹 Agent 2: Graph RAG Forensic Agent

The Graph RAG Agent transforms financial transactions into a counterparty relationship graph.

It investigates relationships that may not be visible when documents are analyzed independently.

Capabilities

Counterparty relationship mapping

Circular transaction detection

Fund-flow analysis

Shell entity pattern detection

Related-party discovery

Transaction network analysis

Graph cycle detection


Example

Borrower
   ↓
Vendor A
   ↓
Vendor B
   ↓
Vendor C
   ↓
Borrower

A circular flow like this can be flagged for further investigation.


---

🔹 Agent 3: Cashflow & Credit Scoring Agent

This agent performs the financial analysis required for credit underwriting.

Key Metrics

Operating Cash Flow

DSCR

Debt Service Capacity

Liquidity Runway

EMI Bounce Frequency

Cashflow Volatility

Revenue Trends

Existing Debt Obligations

Bank Balance Trends


Deterministic Financial Engine

Critical financial calculations are executed using deterministic mathematical logic rather than allowing an LLM to generate financial numbers.

Bank Transactions
       ↓
Cashflow Classification
       ↓
Deterministic Calculations
       ↓
OCF + DSCR + Liquidity + Debt Capacity

> LLMs reason over evidence. Deterministic code calculates the numbers.




---

🔹 Agent 4: Risk & Forensic Engine

This layer combines financial and forensic signals generated by the previous agents.

Financial Signals
       +
Graph Forensic Signals
       +
Document Signals
       ↓
Risk Assessment

Example Risk Signals

GST-bank statement mismatch

High EMI bounce frequency

Low DSCR

Revenue inconsistencies

Counterparty concentration

Circular fund movement

Suspicious entity relationships

Unusual cashflow patterns


The system converts these signals into an explainable risk assessment.


---

🔹 Agent 5: CAM Synthesis Agent

The CAM Synthesis Agent converts the complete underwriting analysis into an executive-ready Credit Appraisal Memo.

Generated Output

Borrower Profile

Business Analysis

Banking Analysis

GST / Tax Reconciliation

Cashflow Analysis

DSCR Analysis

Existing Debt Analysis

Forensic Risk Findings

Key Risk Factors

Mitigating Factors

Recommended Sanction Limit

Suggested Pricing

Conditions Precedent

Final Credit Recommendation


Evidence
   ↓
Financial Analysis
   ↓
Forensic Analysis
   ↓
Risk Assessment
   ↓
Credit Recommendation
   ↓
Automated CAM


---

🔹 Agent 6: AI Credit Copilot

The Credit Copilot allows credit managers to interact with the underwriting results using natural language.

Example Queries

"Why was the DSCR calculated as 1.42?"

"Which transactions triggered the fraud alert?"

"Show me the circular transaction pattern."

"Why was the recommended loan limit ₹35 lakhs?"

"What GST-bank mismatch was detected?"

"What are the major risks in this borrower?"

"What conditions precedent should be imposed?"

The Copilot provides evidence-backed explanations instead of simply generating unsupported answers.


---

🔄 Complete Multi-Agent Flow

flowchart LR

    A["📂 Documents"]
    B["👁️ Vision Agent"]
    C["🧠 Evidence Layer"]
    D["🕸️ Graph RAG Agent"]
    E["🧮 Credit Scoring Agent"]
    F["⚠️ Risk Engine"]
    G["📄 CAM Agent"]
    H["💬 Credit Copilot"]
    I["🏦 Credit Committee"]

    A --> B
    B --> C
    C --> D
    C --> E
    D --> F
    E --> F
    F --> G
    F --> H
    G --> I
    H --> I

Core Philosophy

> One AI does not do everything. Specialized agents investigate different dimensions of the borrower, while deterministic financial computation keeps critical numbers reliable and traceable.



CredoLens AI = Document Intelligence + Graph Forensics + Deterministic Credit Analytics + AI Reasoning + Automated Credit Documentation