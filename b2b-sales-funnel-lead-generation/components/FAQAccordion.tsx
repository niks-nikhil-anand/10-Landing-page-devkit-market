"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does AI lead scoring work?",
    answer: "Our AI lead scoring analyzes demographic details, company size, and real-time behavioral data (such as email opens, page visits, and form clicks) to calculate an interest score from 1 to 100, isolating targets most likely to buy.",
  },
  {
    question: "Can I import my CRM data?",
    answer: "Yes, you can import data directly via CSV files or establish dynamic synchronizations with Salesforce, HubSpot, Zoho, and Pipedrive in a few clicks.",
  },
  {
    question: "Does it integrate with Salesforce?",
    answer: "Yes, we support a bi-directional, real-time sync with Salesforce, updating contact lists, scores, outreach logs, and task reminders instantly.",
  },
  {
    question: "Can I automate follow-up emails?",
    answer: "Yes. You can write custom email outreach sequences triggered automatically by prospect behavioral milestones, like page visits, score changes, or form checkouts.",
  },
  {
    question: "Is there an API?",
    answer: "Yes, our REST API provides standard JSON-based endpoints to query lead databases, create campaigns, export analytics metrics, and manage user permissions.",
  },
  {
    question: "Do you offer enterprise plans?",
    answer: "Yes. Our Enterprise tier features custom pricing plans, white-label portals, IT single sign-on (SSO), ITAR compliance, SOC-2 guards, and dedicated customer success partners.",
  },
  {
    question: "Can multiple teams collaborate?",
    answer: "Yes, you can define custom roles and permissions, sharing lead files, handoff pipelines, task schedules, and metrics boards across marketing and sales teams.",
  },
  {
    question: "How secure is customer data?",
    answer: "Data is secured at rest and in transit using AES-256 encryption. Our secure cloud infrastructure operates on redundant clusters compliant with SOC-2 guidelines.",
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
            Get answers to standard security, setup, and pipeline management questions.
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
                    <HelpCircle className="w-4.5 h-4.5 text-primary flex-shrink-0" />
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
