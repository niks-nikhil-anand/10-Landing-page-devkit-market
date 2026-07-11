import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import FinancialShowcase from "./components/FinancialShowcase";
import Industries from "./components/Industries";
import SuccessStories from "./components/SuccessStories";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const metadata = {
  title: "Fractional CFO & Financial Advisory | Strategic Finance, Forecasting & Business Growth",
  description: "Empower your business with expert Fractional CFO services, financial planning, cash flow management, budgeting, fundraising support, board reporting, KPI dashboards, and strategic advisory. Book a free financial consultation today.",
  keywords: "Fractional CFO, Financial Advisory, Strategic Finance, Cash Flow Forecasting, Budgeting, Fundraising Support, Board Reporting, KPI Dashboards, FP&A",
  alternates: {
    canonical: "https://financialadvisory.com",
  },
  openGraph: {
    title: "Fractional CFO & Financial Advisory | Strategic Finance & Forecasting",
    description: "Empower your business with expert Fractional CFO services, financial planning, cash flow forecasting, and fundraising support.",
    url: "https://financialadvisory.com",
    siteName: "ApexCFO Financial Advisory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CFO & Financial Advisory | Strategic Finance & Forecasting",
    description: "Empower your business with expert Fractional CFO services, financial planning, cash flow forecasting, and fundraising support.",
  }
};

export default function Home() {
  // Structured SEO JSON-LD schemas
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ApexCFO Financial Advisory",
    "url": "https://financialadvisory.com",
    "logo": "https://financialadvisory.com/logo.png",
    "description": "Empower your business with expert Fractional CFO services, financial planning, cash flow management, budgeting, fundraising support, board reporting, KPI dashboards, and strategic advisory.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Business Plaza",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "telephone": "+1-800-555-0101",
    "priceRange": "$$$",
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Fractional CFO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Fractional CFO provides strategic financial leadership, cash flow forecasting, budgeting, unit economics analysis, and fundraising support on a part-time or project basis."
        }
      },
      {
        "@type": "Question",
        "name": "How often will we meet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on your selected tier, we align weekly, bi-weekly, or monthly for cash reviews, budget audits, and projections."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support fundraising?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we build detailed fundraising models, forecast dilution options, prepare board decks, and support negotiations."
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
        "item": "https://financialadvisory.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://financialadvisory.com#services"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-body selection:bg-primary/20 selection:text-heading relative">
      {/* Background Gradients & Mesh */}
      <div className="absolute inset-0 cfo-mesh pointer-events-none z-0 opacity-90" />

      {/* SEO JSON-LD scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Sticky Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        
        {/* Hero Banner with Executive Dashboard mockups */}
        <Hero />

        {/* Clients/Trustees horizontal bar */}
        <TrustedBy />

        {/* Premium Service Cards (12 Services) */}
        <Services />

        {/* Core differentiators grid (8 Features) */}
        <WhyChooseUs />

        {/* Tabbed Interactive Financial Showcase (Revenue, Burn rate, Runway, MRR charts) */}
        <FinancialShowcase />

        {/* Targeted Industries served cards */}
        <Industries />

        {/* Case Studies details (SaaS, MedTech, Retail outcomes) */}
        <SuccessStories />

        {/* Onboarding roadmap timeline (6 steps) */}
        <Process />

        {/* Pricing packages comparisons (Starter, Growth, Enterprise) */}
        <Pricing />

        {/* CEO / Founders review slides */}
        <Testimonials />

        {/* Accordions FAQ */}
        <FAQ />

        {/* Form booking fields & Calendar scheduler */}
        <Contact />

      </main>

      {/* 6-Column Footer with above-footer CTA and partners block */}
      <Footer />
    </div>
  );
}

