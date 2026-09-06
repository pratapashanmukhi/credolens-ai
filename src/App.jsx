import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import OverviewDashboard from './views/OverviewDashboard';
import ForensicRadarView from './views/ForensicRadarView';
import CashflowView from './views/CashflowView';
import StressSimulatorView from './views/StressSimulatorView';
import PolicyComplianceView from './views/PolicyComplianceView';
import CreditMemoView from './views/CreditMemoView';
import CopilotChatView from './views/CopilotChatView';
import DocumentIngestionModal from './components/DocumentIngestionModal';
import { COMPANIES_DATA } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCompanyId, setSelectedCompanyId] = useState('apex');
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isAuditing, setIsAuditing] = useState(false);

  const company = COMPANIES_DATA[selectedCompanyId] || COMPANIES_DATA.apex;

  const handleReAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex antialiased">
      
      {/* 1. Left Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCompany={company}
        onOpenUpload={() => setIsUploadOpen(true)}
      />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <TopHeader
          selectedCompanyId={selectedCompanyId}
          onSelectCompany={setSelectedCompanyId}
          onOpenUpload={() => setIsUploadOpen(true)}
          onReAudit={handleReAudit}
          isAuditing={isAuditing}
        />

        {/* Dynamic View Workspace */}
        <main className="p-8 flex-1 overflow-y-auto max-w-7xl w-full mx-auto">
          {activeTab === 'overview' && (
            <OverviewDashboard
              company={company}
              setActiveTab={setActiveTab}
              onOpenUpload={() => setIsUploadOpen(true)}
            />
          )}

          {activeTab === 'forensics' && (
            <ForensicRadarView
              company={company}
            />
          )}

          {activeTab === 'cashflow' && (
            <CashflowView
              company={company}
            />
          )}

          {activeTab === 'simulator' && (
            <StressSimulatorView
              company={company}
            />
          )}

          {activeTab === 'policy' && (
            <PolicyComplianceView
              company={company}
            />
          )}

          {activeTab === 'cam' && (
            <CreditMemoView
              company={company}
            />
          )}

          {activeTab === 'copilot' && (
            <CopilotChatView
              company={company}
            />
          )}
        </main>

      </div>

      {/* Ingestion & OCR Scanner Modal */}
      <DocumentIngestionModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
      />

    </div>
  );
}