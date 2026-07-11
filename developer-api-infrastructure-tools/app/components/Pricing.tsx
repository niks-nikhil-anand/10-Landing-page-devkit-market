"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Info } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const tiers = [
    {
      name: "Starter",
      monthlyPrice: "$0",
      annualPrice: "$0",
      description: "Ideal for individual developers launching side projects and testing APIs.",
      limits: {
        apiRequests: "50,000 / mo",
        bandwidth: "10 GB / mo",
        storage: "2 GB",
        members: "1 Member",
        support: "Community Support"
      },
      features: [
        "Access to REST & GraphQL APIs",
        "Edge Functions (Standard)",
        "Database Client Connection",
        "Standard Webhook dispatch",
        "Basic telemetry logs (3 days)"
      ],
      cta: "Sign Up Free",
      highlight: false
    },
    {
      name: "Pro",
      monthlyPrice: "$29",
      annualPrice: "$24",
      description: "Best for growing startups and professional engineering teams deploying products.",
      limits: {
        apiRequests: "2,000,000 / mo",
        bandwidth: "100 GB / mo",
        storage: "25 GB",
        members: "Up to 5 Members",
        support: "Priority Slack Support"
      },
      features: [
        "Everything in Starter",
        "Auto-Scaling Database capacity",
        "High-performance Edge clusters",
        "Detailed API rate limits controls",
        "Advanced observability logs (30 days)",
        "Zero-Downtime deployments pipeline"
      ],
      cta: "Start Pro Trial",
      highlight: true
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      description: "Dedicated infrastructure, compliance security, and SLAs for corporate scale.",
      limits: {
        apiRequests: "Unlimited",
        bandwidth: "Custom",
        storage: "Dedicated SSD",
        members: "Unlimited Members",
        support: "24/7 Phone & TAM Support"
      },
      features: [
        "Everything in Pro",
        "Dedicated database clusters",
        "Custom SSL certificate uploads",
        "ISO 27001 & SOC 2 security decks",
        "99.99% Guaranteed SLA credit",
        "Dedicated VPC setup advisory"
      ],
      cta: "Contact Enterprise Sales",
      highlight: false
    }
  ];

  return (
    <section 
      ref={ref}
      id="pricing" 
      className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase">
            PRICING PLANS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Flexible Developer Plans
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Choose a plan that fits your execution volume. All packages feature developer-first SLA standards.
          </p>

          {/* Toggle */}
          <div className="flex items-center gap-2.5 bg-white/3 border border-white/6 rounded-full p-1 mt-4">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                billingCycle === "monthly" ? "bg-primary text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                billingCycle === "annual" ? "bg-primary text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Annual Billing (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => {
            const price = billingCycle === "monthly" ? tier.monthlyPrice : tier.annualPrice;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card p-8 rounded-2xl flex flex-col justify-between relative ${
                  tier.highlight 
                    ? "border-primary shadow-[0_0_40px_rgba(59,130,246,0.15)] bg-slate-900/90 scale-[1.02] ring-2 ring-primary/20" 
                    : "border-white/6 bg-slate-950/70"
                }`}
              >
                {/* Popular Badge */}
                {tier.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                )}

                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">{tier.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1 py-4 border-y border-white/5 mt-2">
                    <span className="text-4xl font-extrabold text-white tracking-tight">{price}</span>
                    {price !== "Custom" && (
                      <span className="text-xs font-semibold text-gray-500">/ month</span>
                    )}
                  </div>

                  {/* Operational Limits */}
                  <div className="flex flex-col gap-2.5 p-3.5 bg-black/40 border border-white/5 rounded-xl text-[11px] leading-relaxed">
                    <div className="flex justify-between font-semibold"><span className="text-gray-500">API Volume:</span><span className="text-white">{tier.limits.apiRequests}</span></div>
                    <div className="flex justify-between font-semibold"><span className="text-gray-500">Bandwidth:</span><span className="text-white">{tier.limits.bandwidth}</span></div>
                    <div className="flex justify-between font-semibold"><span className="text-gray-500">Storage Size:</span><span className="text-white">{tier.limits.storage}</span></div>
                    <div className="flex justify-between font-semibold"><span className="text-gray-500">Developers:</span><span className="text-white">{tier.limits.members}</span></div>
                    <div className="flex justify-between font-semibold"><span className="text-gray-500">Support:</span><span className="text-white">{tier.limits.support}</span></div>
                  </div>

                  {/* Features list */}
                  <ul className="flex flex-col gap-3 py-4 text-xs font-semibold text-gray-300">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <a
                    href="#contact"
                    className={`w-full py-3.5 rounded-xl font-bold text-center block text-sm transition-all duration-300 ${
                      tier.highlight
                        ? "bg-primary hover:bg-blue-600 text-white shadow-[0_8px_20px_rgba(59,130,246,0.25)]"
                        : "bg-white/5 hover:bg-white/10 border border-white/8 text-white"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10 text-[10px] text-gray-500 flex items-center justify-center gap-1.5 font-bold">
          <Info className="w-4 h-4 text-primary shrink-0" />
          <span>All plans are subject to Fair Use policies. Custom volume scaling is automatically accommodated.</span>
        </div>

      </div>
    </section>
  );
}
