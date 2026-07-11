"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Do you support REST and GraphQL?",
      answer: "Yes, fully. The platform automatically exposes both REST endpoints and GraphQL schemas for all databases and edge functions. You can query your data via GraphQL federated nodes or make standard HTTPS REST requests."
    },
    {
      question: "Can I self-host the platform tools?",
      answer: "Yes. Our core API gateway, edge runtime, and database connection pooling tools are open-source. You can self-host them using our Docker Compose files or Kubernetes charts, though our hosted cloud offers multi-region auto-scaling automatically."
    },
    {
      question: "How secure are the APIs and data connections?",
      answer: "We employ banking-grade AES-256 encryption at rest, TLS 1.3 in transit, and hardware-backed JWT signatures. Our cloud infrastructure is SOC 2 Type II certified and complies fully with ISO 27001 and GDPR privacy standards."
    },
    {
      question: "Is there a free tier available for developers?",
      answer: "Yes, our Starter plan is 100% free forever and includes 50,000 monthly API requests, 10 GB of bandwidth, and a shared PostgreSQL database. No credit card is required to sign up."
    },
    {
      question: "Which programming languages are supported?",
      answer: "We support Node.js, TypeScript, Python, Go, Java, and cURL requests out of the box. Our SDK repositories are open-source and include full TypeScript typings and usage guides."
    },
    {
      question: "Do you provide SDK packages?",
      answer: "Yes. We maintain and automatically publish npm, pip, go, and maven packages for all languages. They handle payload serialization, signature verification, connection retries, and API key authentications."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section 
      id="faq" 
      className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent tracking-wide uppercase">
            TECHNICAL FAQS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.question}
                className="glass-card border-white/5 bg-slate-900/40 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left font-sans font-bold text-white text-sm md:text-base hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-white/5 p-6 bg-black/30" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-semibold">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
