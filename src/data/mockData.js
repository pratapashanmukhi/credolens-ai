export const COMPANIES_DATA = {
  apex: {
    id: 'apex',
    name: 'Apex Global Logistics Pvt Ltd',
    industry: 'Freight Forwarding & Supply Chain',
    cin: 'U60231DL2021PTC384910',
    gstin: '07AAACA1234F1Z8',
    founded: '2021',
    headquarters: 'New Delhi, India',
    loanRequested: '₹85,00,000',
    requestedAmountNum: 8500000,
    loanPurpose: 'Unsecured Working Capital Limit',
    turnover: '₹4.20 Cr',
    turnoverNum: 42000000,
    status: 'REJECTED',
    statusColor: 'red',
    riskScore: 34,
    riskLevel: 'Severe Forensic Risk',
    dscr: '0.82x',
    dscrNum: 0.82,
    currentRatio: '0.91',
    fraudProbability: '89.4%',
    tatTime: '82 seconds',
    summary: 'High probability of circular trading and revenue inflation detected. 3 related party shell vendors identified with same registered address. Bank statement PDF shows modified text layers on transaction tables.',
    loanTerms: {
      suggestedAmount: 0,
      suggestedRate: 0,
      suggestedTenor: 0,
      maxEligible: 0
    },
    agents: {
      forensic: {
        status: 'CRITICAL ALERTS DETECTED',
        score: '32/100',
        alerts: [
          { type: 'CIRCULAR_TRADING', severity: 'critical', message: 'Round-tripping loop identified: Apex Logistics → Kuber Exim (₹28L) → Shanti Traders (₹27.5L) → Apex Logistics within 48 hours.' },
          { type: 'TAX_MISMATCH', severity: 'high', message: 'GSTR-3B reported turnover is 42.8% lower than bank account credit summations (unexplained inflows).' },
          { type: 'DOC_TAMPERING', severity: 'critical', message: 'PDF Forensic Vision detected font substitution and metadata discrepancy in HDFC bank statement Page 4.' }
        ],
        graphNodes: [
          { id: 'Apex Logistics', type: 'Target Entity', status: 'suspect', x: 220, y: 140, details: 'Target Borrower | CIN: U60231DL2021PTC384910 | High Inflow Volatility' },
          { id: 'Kuber Exim', type: 'Suspect Shell', status: 'shell', x: 80, y: 50, details: 'Zero employee shell company | Registered at same residential address | ₹28L Inflow' },
          { id: 'Shanti Traders', type: 'Related Party', status: 'shell', x: 360, y: 50, details: 'Common Director PAN detected | ₹27.5L Outflow within 48h loop' },
          { id: 'Zenith Fleet', type: 'Legit Vendor', status: 'clean', x: 220, y: 240, details: 'Verified Fleet Logistics Partner | ₹4.2L Monthly payments' }
        ],
        graphEdges: [
          { from: 'Apex Logistics', to: 'Kuber Exim', amount: '₹28.0 Lakhs', label: 'Round-trip Leg 1 (Day 1)', suspect: true },
          { from: 'Kuber Exim', to: 'Shanti Traders', amount: '₹27.8 Lakhs', label: 'Layering (Day 2)', suspect: true },
          { from: 'Shanti Traders', to: 'Apex Logistics', amount: '₹27.5 Lakhs', label: 'Integration (Day 2)', suspect: true },
          { from: 'Apex Logistics', to: 'Zenith Fleet', amount: '₹4.2 Lakhs', label: 'Diesel/Fleet OPEX', suspect: false }
        ]
      },
      cashflow: {
        status: 'UNSUSTAINABLE LIQUIDITY',
        score: '41/100',
        metrics: {
          dscr: 0.82,
          operatingCashFlow: '-₹18.4 Lakhs',
          averageMonthlyBalance: '₹1.85 Lakhs',
          chequeBounceCount: 7,
          inwardOutwardRatio: 1.01
        },
        monthlyTrends: [
          { month: 'Apr', inflow: 38, outflow: 37, net: 1 },
          { month: 'May', inflow: 42, outflow: 45, net: -3 },
          { month: 'Jun', inflow: 31, outflow: 34, net: -3 },
          { month: 'Jul', inflow: 52, outflow: 51, net: 1 },
          { month: 'Aug', inflow: 29, outflow: 35, net: -6 },
          { month: 'Sep', inflow: 36, outflow: 42, net: -6 }
        ]
      },
      policy: {
        status: 'NON-COMPLIANT',
        score: '28/100',
        findings: [
          { rule: 'Minimum DSCR >= 1.25x', passed: false, detail: 'Calculated 0.82x (Severe repayment deficit)' },
          { rule: 'Cheque/ECS Bounces <= 1 in 6M', passed: false, detail: '7 bounces recorded across active accounts' },
          { rule: 'Director CIBIL >= 680', passed: false, detail: 'Director score: CIBIL 612' },
          { rule: 'GST vs Banking Variance <= 15%', passed: false, detail: 'Variance is 42.8% (Unexplained gap)' }
        ]
      },
      cam: {
        recommendation: 'STRONG REJECTION',
        sanctionLimit: '₹0.00',
        suggestedRate: 'N/A',
        keyRationale: 'Severe Forensic Risk: High probability of fabricated revenue via circular invoicing network. DSCR 0.82x is unsustainable for debt servicing. Altered PDF bank records detected.'
      }
    }
  },
  nexus: {
    id: 'nexus',
    name: 'Nexus BioTech Solutions LLP',
    industry: 'Specialty Formulations & Life Sciences',
    cin: 'AAT-8921-MH2019',
    gstin: '27AABCN8921M1Z4',
    founded: '2019',
    headquarters: 'Pune, Maharashtra',
    loanRequested: '₹1,20,00,000',
    requestedAmountNum: 12000000,
    loanPurpose: 'High-Throughput Cleanroom Expansion',
    turnover: '₹14.80 Cr',
    turnoverNum: 148000000,
    status: 'APPROVED',
    statusColor: 'emerald',
    riskScore: 92,
    riskLevel: 'Prime Grade (A+)',
    dscr: '2.65x',
    dscrNum: 2.65,
    currentRatio: '2.14',
    fraudProbability: '0.4%',
    tatTime: '68 seconds',
    summary: 'Exceptional financial discipline. Verified revenue streams with Tier-1 pharmaceutical enterprises. Clean GSTR-2A/3B reconciliation and robust operating cash flow coverage.',
    loanTerms: {
      suggestedAmount: 12000000,
      suggestedRate: 10.25,
      suggestedTenor: 36,
      maxEligible: 18000000
    },
    agents: {
      forensic: {
        status: 'ALL INTEGRITY CHECKS PASSED',
        score: '96/100',
        alerts: [
          { type: 'VERIFIED_CLIENTS', severity: 'positive', message: '92% of receivables backed by Fortune 500 pharma enterprises (Sun Pharma, Cipla, Biocon).' },
          { type: 'TAX_RECONCILIATION', severity: 'positive', message: '99.4% correlation between GST filings, E-Way bills, and ICICI bank statement credits.' },
          { type: 'NO_TAMPERING', severity: 'positive', message: 'Cryptographic PDF watermark and digital signature verification passed.' }
        ],
        graphNodes: [
          { id: 'Nexus BioTech', type: 'Target Entity', status: 'verified', x: 220, y: 140, details: 'Prime MSME Borrower | Clean CIBIL 785 | Robust OCF' },
          { id: 'Sun Pharma Ltd', type: 'Blue-Chip Client', status: 'prime', x: 80, y: 50, details: 'Long-term procurement contract | ₹48L quarterly receivables' },
          { id: 'Biocon Labs', type: 'Blue-Chip Client', status: 'prime', x: 360, y: 50, details: 'Verified enterprise client | Prompt 21-day average settlement' },
          { id: 'Thermo Fisher', type: 'Tier-1 Supplier', status: 'prime', x: 220, y: 240, details: 'Authorized lab reagents supplier | Consistent vendor payments' }
        ],
        graphEdges: [
          { from: 'Sun Pharma Ltd', to: 'Nexus BioTech', amount: '₹48.0 Lakhs', label: 'Commercial Sales Invoice', suspect: false },
          { from: 'Biocon Labs', to: 'Nexus BioTech', amount: '₹34.5 Lakhs', label: 'Formulation Supply Contract', suspect: false },
          { from: 'Nexus BioTech', to: 'Thermo Fisher', amount: '₹18.2 Lakhs', label: 'Raw Material OPEX', suspect: false }
        ]
      },
      cashflow: {
        status: 'STRONG LIQUIDITY BUFFER',
        score: '94/100',
        metrics: {
          dscr: 2.65,
          operatingCashFlow: '+₹1.92 Cr',
          averageMonthlyBalance: '₹42.50 Lakhs',
          chequeBounceCount: 0,
          inwardOutwardRatio: 1.28
        },
        monthlyTrends: [
          { month: 'Apr', inflow: 112, outflow: 88, net: 24 },
          { month: 'May', inflow: 125, outflow: 95, net: 30 },
          { month: 'Jun', inflow: 118, outflow: 90, net: 28 },
          { month: 'Jul', inflow: 138, outflow: 102, net: 36 },
          { month: 'Aug', inflow: 142, outflow: 108, net: 34 },
          { month: 'Sep', inflow: 155, outflow: 115, net: 40 }
        ]
      },
      policy: {
        status: 'FULLY COMPLIANT',
        score: '95/100',
        findings: [
          { rule: 'Minimum DSCR >= 1.25x', passed: true, detail: 'Calculated 2.65x (Healthy surplus buffer)' },
          { rule: 'Cheque/ECS Bounces <= 1 in 6M', passed: true, detail: 'Zero bounces recorded across 24 months' },
          { rule: 'Director CIBIL >= 680', passed: true, detail: 'Director score: CIBIL 785' },
          { rule: 'GST vs Banking Variance <= 15%', passed: true, detail: '0.6% variance (99.4% perfect match)' }
        ]
      },
      cam: {
        recommendation: 'SANCTION APPROVED',
        sanctionLimit: '₹1,20,00,000 (100% of Request)',
        suggestedRate: '10.25% p.a. (Prime Concession)',
        keyRationale: 'Low credit risk, highly diversified blue-chip buyer base, healthy 2.65x DSCR, and complete forensic audit clearance.'
      }
    }
  },
  zenith: {
    id: 'zenith',
    name: 'Zenith Infra Buildcon Ltd',
    industry: 'Commercial Construction & EPC',
    cin: 'L45200MH2018PLC309112',
    gstin: '27AABCZ5512K1Z9',
    founded: '2018',
    headquarters: 'Mumbai, India',
    loanRequested: '₹2,50,00,000',
    requestedAmountNum: 25000000,
    loanPurpose: 'Project Overdraft & Equipment Lease',
    turnover: '₹28.40 Cr',
    turnoverNum: 284000000,
    status: 'CONDITIONAL',
    statusColor: 'amber',
    riskScore: 68,
    riskLevel: 'Moderate Credit Risk',
    dscr: '1.42x',
    dscrNum: 1.42,
    currentRatio: '1.25',
    fraudProbability: '12.8%',
    tatTime: '74 seconds',
    summary: 'Sound operational viability but high working capital cycle due to 80-day govt receivable turnaround. Requires structured escrow control and secondary collateral.',
    loanTerms: {
      suggestedAmount: 18000000,
      suggestedRate: 12.50,
      suggestedTenor: 24,
      maxEligible: 20000000
    },
    agents: {
      forensic: {
        status: 'MODERATE CONCENTRATION RISK',
        score: '71/100',
        alerts: [
          { type: 'CLIENT_CONCENTRATION', severity: 'warning', message: '68% of outstanding orders concentrated in 2 state municipal contracts.' },
          { type: 'DELAYED_RECEIVABLES', severity: 'warning', message: 'Average Days Sales Outstanding (DSO) increased from 52 to 78 days in Q2.' },
          { type: 'VERIFIED_CONTRACTS', severity: 'positive', message: 'Work orders authenticated against state procurement portal.' }
        ],
        graphNodes: [
          { id: 'Zenith Infra', type: 'Target Entity', status: 'moderate', x: 220, y: 140, details: 'EPC Contractor | Heavy Equipment Assets: ₹3.8 Cr' },
          { id: 'State PWD Dept', type: 'Govt Client', status: 'slow_payer', x: 80, y: 50, details: 'State Highway Contract | High credit quality but 78-day delay' },
          { id: 'Metro Rail Corp', type: 'Govt Client', status: 'prime', x: 360, y: 50, details: 'Milestone-based contract | Escrow mechanism viable' },
          { id: 'Tata Steel', type: 'Raw Material Supplier', status: 'prime', x: 220, y: 240, details: 'Steel supplier | Clean repayment track' }
        ],
        graphEdges: [
          { from: 'State PWD Dept', to: 'Zenith Infra', amount: '₹95.0 Lakhs', label: 'Milestone 3 Disbursement (Delayed)', suspect: false },
          { from: 'Metro Rail Corp', to: 'Zenith Infra', amount: '₹1.10 Cr', label: 'Escrow Receivable', suspect: false },
          { from: 'Zenith Infra', to: 'Tata Steel', amount: '₹42.0 Lakhs', label: 'Structural Steel OPEX', suspect: false }
        ]
      },
      cashflow: {
        status: 'ADEQUATE WITH VOLATILITY',
        score: '69/100',
        metrics: {
          dscr: 1.42,
          operatingCashFlow: '+₹74 Lakhs',
          averageMonthlyBalance: '₹14.20 Lakhs',
          chequeBounceCount: 1,
          inwardOutwardRatio: 1.09
        },
        monthlyTrends: [
          { month: 'Apr', inflow: 210, outflow: 195, net: 15 },
          { month: 'May', inflow: 180, outflow: 190, net: -10 },
          { month: 'Jun', inflow: 240, outflow: 215, net: 25 },
          { month: 'Jul', inflow: 195, outflow: 200, net: -5 },
          { month: 'Aug', inflow: 270, outflow: 230, net: 40 },
          { month: 'Sep', inflow: 235, outflow: 220, net: 15 }
        ]
      },
      policy: {
        status: 'CONDITIONALLY APPROVED',
        score: '72/100',
        findings: [
          { rule: 'Minimum DSCR >= 1.25x', passed: true, detail: 'Calculated 1.42x (Meets policy threshold)' },
          { rule: 'Cheque/ECS Bounces <= 1 in 6M', passed: true, detail: '1 technical bounce due to govt payment delay' },
          { rule: 'Director CIBIL >= 680', passed: true, detail: 'Director score: CIBIL 718' },
          { rule: 'Collateral Coverage >= 1.2x', passed: true, detail: '₹3.8 Cr Machinery collateral provides 1.52x cover' }
        ]
      },
      cam: {
        recommendation: 'CONDITIONAL SANCTION',
        sanctionLimit: '₹1,80,00,000 (72% of Request)',
        suggestedRate: '12.50% p.a.',
        keyRationale: 'Approval subject to: (1) Mandatory Escrow Account for Municipal receivables, (2) Exclusive first charge on heavy machinery (1.3x cover).'
      }
    }
  }
};