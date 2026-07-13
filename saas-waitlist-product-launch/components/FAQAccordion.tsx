"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "When will the platform launch?",
    answer: "LaunchCloud™ is scheduled for official public launch in Q4 2026. Private beta invitations will be delivered starting Q2 2026.",
  },
  {
    question: "Is joining the waitlist free?",
    answer: "Yes, joining the early access waitlist is 100% free and registers your spot for initial testing cohorts.",
  },
  {
    question: "How do I get beta access?",
    answer: "Beta invitations are sent out in chronological order. You can increase your queue position by referring team members using your custom invite link.",
  },
  {
    question: "Will pricing increase after launch?",
    answer: "Early adopters who register during our beta program will lock in our special founder discount tier, protecting you from future subscription adjustments.",
  },
  {
    question: "Can enterprise teams apply?",
    answer: "Yes, enterprise founders and managers can request dedicated onboarding slots by clicking 'Book Demo' in our contact section.",
  },
  {
    question: "Do you provide API access?",
    answer: "Yes, our developer portal and REST API endpoints will be accessible starting the Q3 Public Beta phase.",
  },
  {
    question: "Will mobile apps be available?",
    answer: "Yes, native iOS and Android companion apps are scheduled for release alongside the global launch in Q4 2026.",
  },
  {
    question: "How will founders receive updates?",
    answer: "We dispatch weekly updates containing changelog details, beta invitations logs, and community news straight to your registered work email.",
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
          <p className="text-slate-655 dark:text-slate-300 text-sm sm:text-base">
            Get answers to standard roadmap, beta, API access, and founder discount pricing questions.
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
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-100 dark:border-slate-800 text-left">
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
