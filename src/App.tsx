/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientTrust } from './components/ClientTrust';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TrackRecordSection } from './components/TrackRecordSection';
import { CalculatorSection } from './components/CalculatorSection';
import { StandardsSection } from './components/StandardsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { EmergencyModal } from './components/EmergencyModal';
import { PROJECTS, ProjectItem } from './data/companyData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [clientFilter, setClientFilter] = useState<string>('');

  // RFQ Pre-fill state
  const [rfqInitialService, setRfqInitialService] = useState<string>('coldroom');
  const [rfqInitialDetails, setRfqInitialDetails] = useState<string>('');

  // Handle smooth navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRequestQuote = () => {
    handleNavigate('contact');
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    let serviceKey = 'coldroom';
    if (serviceTitle.includes('แอร์') || serviceTitle.includes('ปรับอากาศ')) serviceKey = 'hvac';
    else if (serviceTitle.includes('ท่อลม')) serviceKey = 'duct';
    else if (serviceTitle.includes('Chiller')) serviceKey = 'chiller';

    setRfqInitialService(serviceKey);
    setRfqInitialDetails(`สนใจขอคำปรึกษาและใบเสนอราคาสำหรับ: ${serviceTitle}`);
    handleNavigate('contact');
  };

  const handleSelectProjectForQuote = (projectTitle: string) => {
    setRfqInitialDetails(`สนใจขอใบเสนอราคาและปรึกษางานลักษณะเดียวกับโครงการ: "${projectTitle}"`);
    handleNavigate('contact');
  };

  const handleExportFromCalculator = (details: string, serviceCategory: string) => {
    setRfqInitialService(serviceCategory);
    setRfqInitialDetails(details);
    handleNavigate('contact');
  };

  const handleFilterByClient = (clientName: string) => {
    setClientFilter(clientName);
    handleNavigate('track-record');
  };

  // Scroll spy to update active nav tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'standards', 'calculator', 'track-record', 'services', 'about', 'home'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section === 'home' && window.scrollY < 300) {
          setActiveSection('home');
          break;
        }
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface flex flex-col selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Top Fixed Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onRequestQuote={handleRequestQuote}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Top Anchor */}
          <div className="scroll-mt-24" id="home"></div>

          {/* Hero Section */}
          <Hero
            onQuoteClick={handleRequestQuote}
            onExploreProjects={() => handleNavigate('track-record')}
            onSelectFeaturedProject={(proj) => setSelectedProject(proj)}
            featuredProject={PROJECTS[0]}
          />

          {/* Client Trust Bar */}
          <ClientTrust onFilterByClient={handleFilterByClient} />

          {/* About Us Section */}
          <AboutSection />

          {/* Core Services Section */}
          <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

          {/* Track Record & Project Showcase */}
          <TrackRecordSection
            onSelectProject={(proj) => setSelectedProject(proj)}
            selectedClientFilter={clientFilter}
            onClearClientFilter={() => setClientFilter('')}
          />

          {/* Interactive BTU & Cold Room Engineering Sizer */}
          <CalculatorSection onExportToQuote={handleExportFromCalculator} />

          {/* Standards & Quality Protocols */}
          <StandardsSection />

          {/* Contact & RFQ Form */}
          <ContactSection
            initialService={rfqInitialService}
            initialDetails={rfqInitialDetails}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuoteForProject={handleSelectProjectForQuote}
      />

      {/* 24/7 Emergency Dispatch Modal */}
      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />
    </div>
  );
}
