import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import WorkflowBuilder from "./components/WorkflowBuilder";
import AgentMarketplace from "./components/AgentMarketplace";
import DashboardPreview from "./components/DashboardPreview";
import Integrations from "./components/Integrations";
import Compliance from "./components/Compliance";
import SuccessStories from "./components/SuccessStories";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const metadata = {
  title: "AI Multi-Agent Orchestration Platform | Build, Deploy & Scale Autonomous AI Agents",
  description: "Build intelligent AI agents that collaborate, automate workflows, integrate with enterprise systems, and scale securely using a powerful cloud-native multi-agent orchestration platform.",
  keywords: "Enterprise AI, Agentic Workflows, Autonomous AI, LLM Orchestration, Multi-Agent Collaboration, AI Automation, Cloud Native Infrastructure",
  alternates: {
    canonical: "https://agentsync.ai",
  },
  openGraph: {
    title: "AI Multi-Agent Orchestration Platform | Build, Deploy & Scale Autonomous AI Agents",
    description: "Build intelligent AI agents that collaborate, automate workflows, and scale securely with a powerful multi-agent orchestration platform.",
    url: "https://agentsync.ai",
    siteName: "AgentSync Orchestration Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Multi-Agent Orchestration Platform | Build, Deploy & Scale Autonomous AI Agents",
    description: "Build intelligent AI agents that collaborate, automate workflows, and scale securely with a powerful multi-agent orchestration platform.",
  }
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AgentSync AI Corp",
    "url": "https://agentsync.ai",
    "logo": "https://agentsync.ai/logo.png",
    "sameAs": [
      "https://github.com",
      "https://linkedin.com"
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AgentSync Orchestration Engine",
    "url": "https://agentsync.ai",
    "description": "Design, orchestrate, deploy, and monitor intelligent AI agents that collaborate across business workflows.",
    "applicationCategory": "AIApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Multi-Agent AI Orchestration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Multi-Agent AI refers to a system design where multiple, specialized AI agents collaborate to solve complex goals together."
        }
      },
      {
        "@type": "Question",
        "name": "Can I self-host the AgentSync platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our core runtime is open-source and can be self-hosted using Docker Compose or Kubernetes charts."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://agentsync.ai"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Workflow Canvas",
        "item": "https://agentsync.ai#workflow"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-dark font-sans text-gray-300 selection:bg-primary/20 selection:text-white relative">
      {/* Background glow overlay */}
      <div className="absolute inset-0 api-mesh pointer-events-none z-0 opacity-80" />

      {/* SEO schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <Header />

      <main className="flex-1 relative z-10">
        
        {/* Hero Section */}
        <Hero />

        {/* Client Sectors Logo strip */}
        <TrustedBy />

        {/* 18 Features Card Grid */}
        <Features />

        {/* Interactive connection canvas flow */}
        <WorkflowBuilder />

        {/* 10 prebuilt agents marketplace */}
        <AgentMarketplace />

        {/* GPU and token telemetry status graphs */}
        <DashboardPreview />

        {/* 22 model integrations grid */}
        <Integrations />

        {/* Compliance credentials panel */}
        <Compliance />

        {/* Case Studies stats highlights */}
        <SuccessStories />

        {/* Plan comparative tables */}
        <Pricing />

        {/* FAQs collapsible list */}
        <FAQ />

        {/* Contact demo submission form */}
        <Contact />

      </main>

      {/* Large 7-column footer */}
      <Footer />
    </div>
  );
}

