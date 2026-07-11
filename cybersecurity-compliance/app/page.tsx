import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TechnologyPartners from "./components/TechnologyPartners";
import SecurityPromise from "./components/SecurityPromise";
import CustomerTrustMetrics from "./components/CustomerTrustMetrics";
import GlobalMap from "./components/GlobalMap";
import TrustCertifications from "./components/TrustCertifications";
import AboveFooterCTA from "./components/AboveFooterCTA";
import Footer from "./components/Footer";

export const metadata = {
  title: "SecureComply - Continuous SOC 2 & ISO 27001 Compliance Automation",
  description: "Achieve SOC 2, ISO 27001, GDPR, and HIPAA compliance faster. SECURECOMPLY automates evidence collection, continuous monitoring, and security auditing for modern cloud enterprises.",
  keywords: "SOC 2 compliance, ISO 27001 certification, GDPR compliance, HIPAA ready, compliance automation, cloud security, security audits",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cyber-dark font-sans text-gray-200 selection:bg-brand-blue/30 selection:text-white relative">
      {/* Background Mesh Overlay across the page */}
      <div className="absolute inset-0 cyber-mesh pointer-events-none z-0 opacity-80" />

      {/* Responsive Glass Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        
        {/* Hero Section */}
        <HeroSection />

        {/* Grayscale Technology Partners Logo Strip */}
        <TechnologyPartners />

        {/* Security Promise (Zero Trust, Encryption, Operations Cards) */}
        <SecurityPromise />

        {/* Customer Trust Metrics (Animated Counter Statistics) */}
        <CustomerTrustMetrics />

        {/* Global Compliance Coverage Map */}
        <GlobalMap />

        {/* Clickable Trust Badge Cards */}
        <TrustCertifications />

        {/* Above Footer CTA Section */}
        <AboveFooterCTA />

      </main>

      {/* Large 7-Column Enterprise Footer */}
      <Footer />
    </div>
  );
}

