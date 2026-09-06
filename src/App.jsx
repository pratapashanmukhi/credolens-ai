import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveAuditStudio from './components/LiveAuditStudio';
import ArchitectureView from './components/ArchitectureView';
import BusinessModel from './components/BusinessModel';
import Footer from './components/Footer';
import PitchDeckModal from './components/PitchDeckModal';

export default function App() {
  const [selectedCompanyId, setSelectedCompanyId] = useState('apex');
  const [isDeckOpen, setIsDeckOpen] = useState(false);

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-black">
      {/* Top Navigation */}
      <Navbar
        onOpenDeck={() => setIsDeckOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* Hero Section */}
      <Hero
        selectedCompanyId={selectedCompanyId}
        onSelectCompany={setSelectedCompanyId}
        onScrollToSection={handleScrollToSection}
        onOpenDeck={() => setIsDeckOpen(true)}
      />

      {/* Main Live Multi-Agent Audit Studio */}
      <LiveAuditStudio
        selectedCompanyId={selectedCompanyId}
        onSelectCompany={setSelectedCompanyId}
        onOpenDeck={() => setIsDeckOpen(true)}
      />

      {/* Deep-Dive Multi-Agent Architecture */}
      <ArchitectureView />

      {/* Business Model & Financial Opportunity */}
      <BusinessModel
        onOpenDeck={() => setIsDeckOpen(true)}
      />

      {/* Footer */}
      <Footer
        onOpenDeck={() => setIsDeckOpen(true)}
      />

      {/* 10-Slide Pitch Deck Modal */}
      <PitchDeckModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
      />
    </div>
  );
}