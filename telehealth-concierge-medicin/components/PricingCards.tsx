"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    priceMonthly: 49,
    priceAnnually: 39,
    description: "Ideal for small clinics and independent private practices initiating telehealth.",
    features: [
      "Up to 2 Doctor licenses",
      "Up to 500 active Patient records",
      "HD Virtual Video Consultations",
      "Basic Analytics reports",
      "Standard email customer support",
      "HIPAA-compliant hosting",
    ],
    popular: false,
    cta: "Start Free Trial",
    href: "#contact",
  },
  {
    name: "Professional",
    priceMonthly: 149,
    priceAnnually: 119,
    description: "Best for growing medical clinics and regional concierge groups requiring automation.",
    features: [
      "Up to 20 Doctor licenses",
      "Unlimited active Patient records",
      "AI Health & Medical Assistant",
      "Advanced Operations reports",
      "Restful API access key",
      "SMS & WhatsApp reminders",
      "Stripe payment billing engine",
      "Priority 24/7 email & phone support",
    ],
    popular: true,
    cta: "Start Free Trial",
    href: "#contact",
  },
  {
    name: "Enterprise",
    priceMonthly: "Custom",
    priceAnnually: "Custom",
    description: "Designed for hospital networks, enterprise clinical systems, and virtual brands.",
    features: [
      "Unlimited Doctor & Staff licenses",
      "Unlimited Patient records & storage",
      "Dedicated account engineer",
      "Custom systems integrations (Epic/Cerner)",
      "White-label branding options",
      "Single Sign-On (SSO) login layers",
      "Custom business associate agreement (BAA)",
      "99.99% availability SLA agreement",
    ],
    popular: false,
    cta: "Contact Enterprise Sales",
    href: "#contact",
  },
];

export default function PricingCards() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");

  return (
    <section id="pricing" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Pricing Plans
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Transparent Pricing Built <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              for Healthcare Scale
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Start small and expand. Choose a subscription model tailored to the clinician structure of your medical organization.
          </p>

          {/* Billing Switch Toggle */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <span className={`text-sm font-semibold transition-colors ${billingPeriod === "monthly" ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annually" : "monthly")}
              className="relative w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-800 p-0.5 transition-colors focus:outline-none"
              aria-label="Toggle billing duration"
            >
              <div
                className={`w-5 h-5 rounded-full bg-primary shadow-sm transform transition-transform ${
                  billingPeriod === "annually" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${billingPeriod === "annually" ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>
              Annually <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] font-bold text-green-500 uppercase">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const isCustom = typeof plan.priceMonthly === "string";
            const price = billingPeriod === "monthly" ? plan.priceMonthly : plan.priceAnnually;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-white dark:bg-slate-800/80 border-2 border-primary shadow-xl shadow-primary/5 dark:shadow-primary/2 scale-102 lg:scale-105 z-10"
                    : "bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 fill-current text-white animate-pulse" /> Most Popular
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-6">
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 font-normal leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Plan Price */}
                  <div className="flex items-baseline gap-1 pb-6 mb-6 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {isCustom ? price : `$${price}`}
                    </span>
                    {!isCustom && (
                      <span className="text-xs font-semibold text-slate-400">/month</span>
                    )}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 font-semibold leading-tight">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Button */}
                <Link
                  href={plan.href}
                  className={`w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold transition-all flex items-center justify-center gap-1.5 group cursor-pointer ${
                    plan.popular
                      ? "bg-primary text-white shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20"
                      : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
