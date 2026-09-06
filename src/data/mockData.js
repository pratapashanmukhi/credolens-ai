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
    loanPurpose: 'Unsecured Working Capital Limit',
    turnover: '₹4.20 Cr',
    status: 'REJECTED',
    statusColor: 'red',
    riskScore: 34,
    riskLevel: 'Severe Forensic Risk',
    dscr: '0.82x',
    currentRatio: '0.91',
    fraudProbability: '89.4%',
    tatTime: '82 seconds',
    summary: 'High probability of circular trading and revenue inflation detected. 3 related party shell vendors identified with same registered address. Bank statement PDF shows modified text layers on transaction tables.',
    agents: {
      forensic: {
        status: 'CRITICAL ALERTS DETECTED',
        score: '32/100',
        alerts: [
          { type: 'CIRCULAR_TRADING', severity: 'critical', message: 'Round-tripping loop identified: Apex Logistics -> Kuber Exim (₹28L) -> Shanti Traders (₹27.5L) -> Apex Logistics within 48 hours.' },
          { type: 'TAX_MISMATCH', severity: 'high', message: 'GSTR-3B reported turnover is 42.8% lower than bank account credit summations (unexplained inflows).' },
          { type: 'DOC_TAMPERING', severity: 'critical', message: 'PDF Forensic Engine detected font substitution and metadata discrepancy in HDFC bank statement Page 4.' }
        ],
        graphNodes: [
          { id: 'Apex Logistics', type: 'target', status: 'suspect' },
          { id: 'Kuber Exim', type: 'counterparty', status: 'shell', flag: 'Zero Employee Shell Entity' },
          { id: 'Shanti Traders', type: 'counterparty', status: 'shell', flag: 'Same Director PAN' },
          { id: 'Zenith Fleet', type: 'vendor', status: 'clean' }
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
          'DSCR 0.82x violates internal credit policy threshold (Min 1.25x).',
          '7 EMI/Cheque bounces in last 6 months (Max allowed: 1).',
          'Director credit score: CIBIL 612 (Below minimum cutoff 680).'
        ]
      },
      cam: {
        recommendation: 'STRONG REJECTION',
        sanctionLimit: '₹0.00',
        suggestedRate: 'N/A',
        keyRationale: 'Fraud Risk: High forensic probability of fabricated revenue via circular invoicing network. Severe debt service deficit and falsified PDF bank records.'
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
    loanPurpose: 'High-Throughput Cleanroom Expansion',
    turnover: '₹14.80 Cr',
    status: 'APPROVED',
    statusColor: 'emerald',
    riskScore: 92,
    riskLevel: 'Prime Grade (A+)',
    dscr: '2.65x',
    currentRatio: '2.14',
    fraudProbability: '0.4%',
    tatTime: '68 seconds',
    summary: 'Exceptional financial discipline. Verified revenue streams with Tier-1 pharmaceutical enterprises. Clean GSTR-2A/3B reconciliation and robust operating cash flow coverage.',
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
          { id: 'Nexus BioTech', type: 'target', status: 'verified' },
          { id: 'Sun Pharma Ltd', type: 'client', status: 'prime', flag: 'Verified Enterprise Client' },
          { id: 'Biocon Labs', type: 'client', status: 'prime', flag: 'Prompt 21-Day Payer' },
          { id: 'Thermo Fisher', type: 'supplier', status: 'prime', flag: 'Raw Material Supplier' }
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
          'DSCR 2.65x comfortably exceeds benchmark (Min 1.25x).',
          'Zero cheque bounces across all active current accounts in 24 months.',
          'Eligible for RBI Priority Sector Lending (MSME Manufacturing Category).'
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
    loanPurpose: 'Project Overdraft & Equipment Lease',
    turnover: '₹28.40 Cr',
    status: 'CONDITIONAL',
    statusColor: 'amber',
    riskScore: 68,
    riskLevel: 'Moderate Credit Risk',
    dscr: '1.42x',
    currentRatio: '1.25',
    fraudProbability: '12.8%',
    tatTime: '74 seconds',
    summary: 'Sound operational viability but high working capital cycle due to 80-day govt receivable turnaround. Requires structured escrow control and secondary collateral.',
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
          { id: 'Zenith Infra', type: 'target', status: 'moderate' },
          { id: 'State PWD Dept', type: 'client', status: 'slow_payer', flag: '78-Day DSO' },
          { id: 'Metro Rail Corp', type: 'client', status: 'prime', flag: 'Milestone Payments' },
          { id: 'Tata Steel', type: 'supplier', status: 'prime', flag: 'Raw Materials' }
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
          'DSCR 1.42x meets minimum threshold (1.25x).',
          'Receivable delay requires structural protection.',
          'Sufficient fixed plant & machinery collateral available (₹3.8 Cr valuation).'
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
