"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is the platform HIPAA compliant?",
    answer: "Yes, HealthCloud™ is fully HIPAA compliant. We enforce end-to-end TLS encryption in transit and AES-256 encryption at rest, enter into Business Associate Agreements (BAA) with healthcare organizations, log comprehensive access audit trails, and host on dedicated HIPAA-eligible cloud servers.",
  },
  {
    question: "Can patients join without installing software?",
    answer: "Absolutely. Our virtual consultation platform operates directly in modern web browsers (Safari, Chrome, Firefox, Edge) on iOS, Android, and desktop devices without requiring any downloads, plugins, or registration layers.",
  },
  {
    question: "Does it support electronic prescriptions?",
    answer: "Yes, our e-prescribing module allows authorized providers to review patient files, check potential drug-to-drug interactions via integrated databases, and send certified electronic orders directly to major pharmacy chains and local pharmacies.",
  },
  {
    question: "Can doctors manage multiple clinics?",
    answer: "Yes. Using our Virtual Clinic portal, administrators can establish separate branch locations, distribute provider licenses across multiple departments, map distinct billing profiles, and direct routing codes from a unified login.",
  },
  {
    question: "Are payments secure?",
    answer: "Yes. Payment processing is powered by Stripe and PayPal which comply with the highest level of payment safety (PCI-DSS Level 1). We also offer co-pay invoice captures, HSA/FSA debit card integrations, and automated receipt dispatches.",
  },
  {
    question: "Can hospitals customize branding?",
    answer: "Yes, our Enterprise tier includes a comprehensive white-label dashboard. You can configure custom domain routing (e.g., telehealth.yourhospital.org), embed custom clinical email layouts, upload hospital brand colors and logos, and adapt intake forms.",
  },
  {
    question: "Is API integration available?",
    answer: "Yes, we support extensive Restful APIs and Webhooks on our Professional and Enterprise tiers. All interfaces strictly match standard HL7/FHIR guidelines, facilitating seamless connections with Epic, Cerner, or in-house billing dashboards.",
  },
  {
    question: "Does it support mobile devices?",
    answer: "Yes, the complete patient and physician portals are fully responsive and optimized for mobile browsers. We also provide native iOS and Android SDK options for concierge clients building dedicated apps.",
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
            Get answers to standard security, compatibility, and integration questions about HealthCloud™.
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
