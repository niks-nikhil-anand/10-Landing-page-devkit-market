import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import CodeExamples from "./components/CodeExamples";
import Dashboard from "./components/Dashboard";
import WhyChooseUs from "./components/WhyChooseUs";
import Integrations from "./components/Integrations";
import Pricing from "./components/Pricing";
import SuccessStories from "./components/SuccessStories";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const metadata = {
  title: "Developer API & Infrastructure Tools | Fast, Secure & Scalable Cloud Platform",
  description: "Build, deploy, and scale faster with enterprise APIs, cloud infrastructure, authentication, storage, webhooks, observability, and developer tools. Trusted by engineering teams worldwide.",
  keywords: "Developer APIs, cloud infrastructure, DevOps, backend services, SDKs, authentication, webhooks, monitoring, edge computing",
  alternates: {
    canonical: "https://developerplatform.com",
  },
  openGraph: {
    title: "Developer API & Infrastructure Tools | Fast, Secure & Scalable Cloud Platform",
    description: "Build, deploy, and scale faster with enterprise APIs, cloud infrastructure, authentication, and observability.",
    url: "https://developerplatform.com",
    siteName: "DevInfra Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer API & Infrastructure Tools | Fast, Secure & Scalable Cloud Platform",
    description: "Build, deploy, and scale faster with enterprise APIs, cloud infrastructure, authentication, and observability.",
  }
};

export default function Home() {
  // Structured SEO schemas
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DevInfra Platform",
    "url": "https://developerplatform.com",
    "logo": "https://developerplatform.com/logo.png",
    "description": "Build, deploy, and scale faster with enterprise APIs, cloud infrastructure, authentication, storage, webhooks, observability, and developer tools.",
    "applicationCategory": "DeveloperApplication",
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
        "name": "Do you support REST and GraphQL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, fully. The platform automatically exposes both REST endpoints and GraphQL schemas for all databases and edge functions."
        }
      },
      {
        "@type": "Question",
        "name": "Can I self-host the platform tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our core API gateway, edge runtime, and database connection pooling tools are open-source and support Docker/Kubernetes setups."
        }
      },
      {
        "@type": "Question",
        "name": "How secure are the APIs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We employ banking-grade AES-256 encryption at rest, TLS 1.3 in transit, and hardware-backed JWT signatures."
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
        "item": "https://developerplatform.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Playground",
        "item": "https://developerplatform.com#code-playground"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-dark font-sans text-gray-300 selection:bg-primary/20 selection:text-white relative">
      {/* Background Glow Mesh */}
      <div className="absolute inset-0 api-mesh pointer-events-none z-0 opacity-80" />

      {/* SEO schemas */}
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

      {/* Sticky dark Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        
        {/* Hero Banner with animated typewriter terminal mockup */}
        <Hero />

        {/* Gray logo strip partners */}
        <TrustedBy />

        {/* Premium Platform capability grid cards (12 features) */}
        <Features />

        {/* Live Monaco Editor syntax code tabs */}
        <CodeExamples />

        {/* Telemetry infrastructure status charts */}
        <Dashboard />

        {/* Differentiators cards (8 features) */}
        <WhyChooseUs />

        {/* Native DevOps / Obs tools integrations */}
        <Integrations />

        {/* Comparison pricing cards (Starter, Pro, Enterprise) */}
        <Pricing />

        {/* Case Studies details summaries */}
        <SuccessStories />

        {/* technical accordion QA details */}
        <FAQ />

        {/* Lead capturing form bookings */}
        <Contact />

      </main>

      {/* Large 7-column developer footer */}
      <Footer />
    </div>
  );
}

