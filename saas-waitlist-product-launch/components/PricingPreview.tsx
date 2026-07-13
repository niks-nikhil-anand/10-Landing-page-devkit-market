"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter Plan",
    price: "Free",
    period: "During Beta testing",
    description: "Essential dashboard features and task reminders for early adopters.",
    features: [
      "Access to core visual boards",
      "Standard email reminders alerts",
      "3 workflow automation nodes",
      "SaaS Founder Slack group access",
      "Secure account portal logs",
    ],
    popular: false,
    cta: "Join Waitlist Free",
    href: "#waitlist",
  },
  {
    name: "Professional Plan",
    price: "Launching Soon",
    period: "Post public release",
    description: "Advanced automation nodes and AI agents for growing teams.",
    features: [
      "Unlimited visual boards cards",
      "AI Chat Assistant integrations",
      "Unlimited active workflow rules",
      "Priority 24/7 technical support",
      "10+ native API sync pipelines",
      "Detailed progress performance logs",
    ],
    popular: true,
    cta: "Secure Priority Access",
    href: "#waitlist",
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    period: "Talk to our founders",
    description: "Bespoke security configurations, white-label, and custom SLA.",
    features: [
      "Unlimited user licenses & seats",
      "Dedicated Customer Success Partner",
      "White-label dashboard domains",
      "SOC-2 / ITAR security protocols",
      "Custom REST API database sync",
      "99.99% availability commitments",
    ],
    popular: false,
    cta: "Book Live Demo",
    href: "#contact",
  },
];

export default function PricingPreview() {
  return (
    <section id="pricing" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Pricing Models
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Transparent Pricing Preview <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Free Access During Beta
            </span>
          </h2>
          <p className="text-slate-605 dark:text-slate-300 text-base sm:text-lg">
            Register on our waitlist to test advanced features free of charge before the global public launch.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-white dark:bg-slate-800 border-2 border-primary shadow-xl shadow-primary/5 scale-102 lg:scale-105 z-10"
                  : "bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-lg"
              }`}
            >
              {/* Recommended Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 fill-current text-white animate-pulse" /> RECOMMENDED
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-normal leading-relaxed text-left">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex flex-col pb-6 mb-6 border-b border-slate-100 dark:border-slate-800 text-left">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 mt-1">{plan.period}</span>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 font-semibold leading-tight text-left">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <Link
                href={plan.href}
                className={`w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold transition-all flex items-center justify-center gap-1.5 group cursor-pointer ${
                  plan.popular
                    ? "bg-primary text-white shadow-md shadow-primary/10 hover:shadow-lg"
                    : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
                }`}
              >
                {plan.cta} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
