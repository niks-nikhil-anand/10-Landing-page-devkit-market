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
      description: "Ideal for individual developers building initial agent flows and testing RAG.",
      limits: {
        tokens: "5 Million / mo",
        agents: "Up to 3 Active Agents",
        executions: "10,000 runs / mo",
        integrations: "Standard (Slack, Discord)",
        support: "Developer Forum"
      },
      features: [
        "Access to visual workflow builder",
        "Short-term session memory key",
        "Basic RAG data imports (up to 5 files)",
        "Multi-model execution pool",
        "Basic telemetry logs (3 days)"
      ],
      cta: "Get Started Free",
      highlight: false
    },
    {
      name: "Professional",
      monthlyPrice: "$99",
      annualPrice: "$79",
      description: "Best for growing software startups and automation squads deploying products.",
      limits: {
        tokens: "50 Million / mo",
        agents: "Up to 25 Active Agents",
        executions: "250,000 runs / mo",
        integrations: "All Integrations Included",
        support: "Priority Slack & Email"
      },
      features: [
        "Everything in Starter",
        "Long-term memory state store",
        "Vector database connection pooler",
        "Sandboxed browser automation tools",
        "Human-in-the-loop validation gates",
        "Observability dashboard telemetry"
      ],
      cta: "Start Pro Trial",
      highlight: true
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      description: "Dedicated H100 computing, compliance architectures, and SLAs for corporate scale.",
      limits: {
        tokens: "Unlimited (BYOK)",
        agents: "Unlimited Agents",
        executions: "Unlimited executions",
        integrations: "Custom API development",
        support: "Dedicated TAM & 24/7 Phone"
      },
      features: [
        "Everything in Professional",
        "Dedicated model execution clusters",
        "Custom SSL & VPC subnet deployments",
        "HIPAA, SOC 2, and ISO certifications",
        "99.99% Guaranteed SLA credits",
        "Prompts security auditing protocols"
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

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
            Choose a plan that fits your computational scaling. All plans feature prompt protection guidelines.
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
                    ? "border-primary shadow-[0_0_40px_rgba(99,102,241,0.15)] bg-slate-900/90 scale-[1.02] ring-2 ring-primary/20" 
                    : "border-white/6 bg-slate-950/70"
                }`}
              >
                {/* Popular Badge */}
                {tier.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
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

                  {/* Limits Table */}
                  <div className="flex flex-col gap-2.5 p-3.5 bg-black/40 border border-white/5 rounded-xl text-[11px] leading-relaxed">
                    <div className="flex justify-between font-semibold"><span className="text-gray-500">Token Pool:</span><span className="text-white">{tier.limits.tokens}</span></div>
                    <div className="flex justify-between font-semibold"><span className="text-gray-500">Max Agents:</span><span className="text-white">{tier.limits.agents}</span></div>
                    <div className="flex justify-between font-semibold"><span className="text-gray-500">Executions:</span><span className="text-white">{tier.limits.executions}</span></div>
                    <div className="flex justify-between font-semibold"><span className="text-gray-500">Integrations:</span><span className="text-white">{tier.limits.integrations}</span></div>
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
                        ? "bg-primary hover:bg-blue-600 text-white shadow-[0_8px_20px_rgba(99,102,241,0.25)]"
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
          <span>All plans are subject to token usage limits. Custom LLM keys (BYOK) can be linked at any time.</span>
        </div>

      </div>
    </section>
  );
}
