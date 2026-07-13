"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Are your supplements clinically tested?",
    answer: "Yes, all LifeNova™ formulations utilize clinically researched, peer-reviewed active compounds delivered at therapeutic dosages. Our products undergo rigorous third-party lab testing for purity and potency.",
  },
  {
    question: "Do you offer personalized recommendations?",
    answer: "Yes, our onboarding digital health quiz and optional biomarker testing kits analyze sleep, metabolic, and energy markers to build a tailored longevity supplement program.",
  },
  {
    question: "How does biomarker tracking work?",
    answer: "LifeNova™ connects natively with Apple Health, WHOOP, Oura, and Google Fit. We track biomarker patterns (HRV, resting heart rate, sleep phases) to optimize your daily recommendations.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, subscriptions can be managed, paused, or cancelled at any time directly through your Member Dashboard without penalty fees.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 85 countries globally from temperature-controlled logistics hubs to preserve molecular integrity during transit.",
  },
  {
    question: "Are products vegan?",
    answer: "Our core capsules (NAD+ Booster, Longevity Daily) are 100% vegan, utilizing plant-based cellulose capsules. Some specific blends, like Collagen Peptides, are bovine-sourced.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee on your initial order if you do not feel noticeable improvements in focus, recovery, or daily energy.",
  },
  {
    question: "Can I connect my wearable devices?",
    answer: "Yes, our platform supports direct integrations with Oura Ring, WHOOP Strap, Garmin, Fitbit, Apple Watch, and Google Fit scales.",
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
          <p className="text-slate-650 dark:text-slate-300 text-sm sm:text-base">
            Get answers to standard security, formulation, shipping, and wearable integration questions.
          </p>
        </div>

        {/* Accordion list */}
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
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-650 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-100 dark:border-slate-800 text-left">
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
