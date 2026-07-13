"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is intellectual property?",
    answer: "Intellectual property (IP) refers to creations of the mind, such as inventions; literary and artistic works; designs; and symbols, names, and images used in commerce. It is protected in law by patents, copyright, and trademarks, which enable people to earn recognition or financial benefit from what they invent or create.",
  },
  {
    question: "How long does patent registration take?",
    answer: "The patent registration process generally takes between 18 to 36 months depending on the complexity of the technology, the backlog at the patent office, and whether examiner interviews or accelerated examination programs (like USPTO Track One) are utilized.",
  },
  {
    question: "Can you file international patents?",
    answer: "Yes, we file international patents using the Patent Cooperation Treaty (PCT) route, which provides a unified procedure for filing patent applications to protect inventions in up to 157 contracting countries.",
  },
  {
    question: "Do you offer trademark monitoring?",
    answer: "Yes, our Professional and Enterprise tiers include active trademark monitoring databases, alerting you to conflicting trademark filings and unauthorized uses of your marks internationally.",
  },
  {
    question: "How is client data secured?",
    answer: "Data is secured in transit and at rest using AES-256 encryption. Our legal vault operates on redundant, HIPAA-eligible cloud servers backed by SOC-2 audited compliance policies and ITAR guidelines.",
  },
  {
    question: "Do you support startups?",
    answer: "Yes, we work extensively with technology startups and seed-stage entities. We offer tailored flat-fee assessment plans and Starter subscription portals to help launch IP strategies cost-effectively.",
  },
  {
    question: "Can businesses manage multiple portfolios?",
    answer: "Yes. Our cloud dashboard facilitates multi-entity mappings. Legal teams and corporate CTOs can segment patents, trademarks, and dockets across subsidiaries and distinct corporate holdings.",
  },
  {
    question: "Do you provide litigation support?",
    answer: "Yes, we offer comprehensive litigation services. Our experienced attorneys handle USPTO Patent Trial and Appeal Board (PTAB) filings, trademark dispute cases, copyright challenges, and intellectual property enforcement.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-dot-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            FAQ Help
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Get answers to standard security, registration timelines, and litigation questions.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-slate-900 dark:text-white font-display font-extrabold text-sm sm:text-base group-hover:text-primary transition-colors">
                    <HelpCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-100 dark:border-slate-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
