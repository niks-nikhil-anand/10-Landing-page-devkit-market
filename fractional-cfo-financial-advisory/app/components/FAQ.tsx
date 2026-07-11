"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is a Fractional CFO?",
      answer: "A Fractional CFO provides strategic financial leadership, cash flow forecasting, budgeting, unit economics analysis, and fundraising support on a part-time or project basis. Startups and SMEs get executive-level corporate expertise without the salary and overhead of a full-time executive hire."
    },
    {
      question: "How often will we meet?",
      answer: "Depending on your selected tier, we align weekly, bi-weekly, or monthly for cash reviews, budget vs. actual audits, and executive projections. Growth CFO clients also receive unlimited Slack and phone access for priority real-time questions."
    },
    {
      question: "Do you support fundraising?",
      answer: "Yes, extensively. We build detailed fundraising models, forecast dilution options, compile investor-ready data rooms, prepare board decks, and support negotiations for Seed, Series A, or Series B debt and equity raises."
    },
    {
      question: "Can you work with our accountant or bookkeeper?",
      answer: "Absolutely. We do not replace your day-to-day bookkeepers or tax accountants. Instead, we act as the strategic layer above them, utilizing their ledger data to build projections, scenarios, and board materials."
    },
    {
      question: "What industries do you specialize in?",
      answer: "Our primary expertise spans Software & SaaS, Healthcare & MedTech, E-commerce, Retail Brands, Manufacturing, Real Estate, and Professional Services. We pair you with an advisor who has deep vertical experience in your exact sector."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section 
      id="faq" 
      className="py-24 px-4 md:px-8 bg-white relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent tracking-wide uppercase">
            COMMON QUESTIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-heading font-sans">
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
                className="glass-card border-slate-200/50 bg-white/70 overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left font-sans font-bold text-heading text-sm md:text-base hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-slate-100 p-6 bg-slate-50/50" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="text-xs md:text-sm text-body leading-relaxed">
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
