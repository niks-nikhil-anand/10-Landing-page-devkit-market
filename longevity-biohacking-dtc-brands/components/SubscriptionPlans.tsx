"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter Wellness",
    priceMonthly: 39,
    priceAnnually: 31,
    description: "Ideal for beginners looking to establish essential longevity baselines.",
    features: [
      "Monthly supplement replenishment",
      "Access to basic Health Dashboard",
      "Digital health assessment quiz",
      "Standard email support",
      "Secure account portal access",
    ],
    popular: false,
    cta: "Select Starter Plan",
    href: "#contact",
  },
  {
    name: "Premium Wellness",
    priceMonthly: 89,
    priceAnnually: 71,
    description: "Advanced daily biomarker tracking paired with targeted clinical supplements.",
    features: [
      "Custom personalized supplement plan",
      "Native biomarker wearable sync",
      "Detailed monthly progress reports",
      "Bi-annual health consultations",
      "Priority customer email support",
      "Expert health guidelines access",
    ],
    popular: true,
    cta: "Start Free Trial",
    href: "#contact",
  },
  {
    name: "Elite Longevity",
    priceMonthly: 199,
    priceAnnually: 159,
    description: "Fully managed healthspan protocol guided by medical specialists & AI.",
    features: [
      "Complete custom longevity protocol",
      "Dedicated 1-on-1 AI health coach",
      "Quarterly lab biomarker testing",
      "Access to exclusive product tiers",
      "VIP medical panel consultations",
      "Priority 24/7/365 chat support",
      "Free global express shipping",
    ],
    popular: false,
    cta: "Apply for Elite Membership",
    href: "#contact",
  },
];

export default function SubscriptionPlans() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");

  return (
    <section id="pricing" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Nova Memberships
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Transparent Memberships <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built for Longevity Goals
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Choose the membership tier matching your wellness and biohacking objectives.
          </p>

          {/* Toggle switcher */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <span className={`text-sm font-semibold transition-colors ${billingPeriod === "monthly" ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annually" : "monthly")}
              className="relative w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-800 p-0.5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle billing interval"
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
                    ? "bg-white dark:bg-slate-800 border-2 border-primary shadow-xl shadow-primary/5 scale-102 lg:scale-105 z-10"
                    : "bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Popular badge */}
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
                  <div className="flex items-baseline gap-1 pb-6 mb-6 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">/month</span>
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
