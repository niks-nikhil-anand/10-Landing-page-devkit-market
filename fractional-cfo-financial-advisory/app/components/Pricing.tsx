"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Info, Calendar } from "lucide-react";

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const tiers = [
    {
      name: "Starter CFO",
      price: "$2,500",
      period: "per month",
      description: "Essential CFO advisory for seed-stage startups and small businesses looking to stabilize metrics.",
      features: [
        "Monthly Cash Runway Projections",
        "Standard KPI Dashboard Setup",
        "Annual Budgeting & Forecasting",
        "1 Monthly Strategic CFO Meeting",
        "Email support (24hr response)",
        "Review by Certified CPA/Analyst"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Growth CFO",
      price: "$5,500",
      period: "per month",
      description: "Comprehensive financial planning and strategic board advisory for Series A scaleups and SMEs.",
      features: [
        "Everything in Starter CFO",
        "Driver-Based Scenario modeling",
        "Monthly Burn Rate Optimization",
        "Board Meeting Deck Preparation",
        "Weekly Executive Advisory Check-ins",
        "Unlimited Slack & Phone Access",
        "Investor Data Room Organization"
      ],
      cta: "Schedule Advisory Call",
      highlight: true
    },
    {
      name: "Enterprise Advisory",
      price: "Custom",
      period: "variable scoping",
      description: "Direct full-stack financial leadership for mid-market and corporate firms with complex setups.",
      features: [
        "Custom ERP Integrations (NetSuite/SAP)",
        "Onsite Board Meeting Representation",
        "Full Mergers & Acquisitions Advisory",
        "Capital Raising Strategy & Diligence",
        "Dedicated M&A Advisory Team",
        "24/7 Priority Executive Line"
      ],
      cta: "Contact Enterprise Advisor",
      highlight: false
    }
  ];

  return (
    <section 
      ref={ref}
      id="pricing" 
      className="py-24 px-4 md:px-8 bg-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase">
            PRICING PLANS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-heading font-sans">
            Value-Based Pricing Structures
          </h2>
          <p className="text-body text-base md:text-lg leading-relaxed">
            Choose a plan aligned with your operational stage. Get strategic CFO advisory without the cost of a full-time hire.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-8 flex flex-col justify-between relative ${
                tier.highlight 
                  ? "border-primary shadow-2xl bg-white scale-[1.02] ring-2 ring-primary/20" 
                  : "border-slate-200/60 bg-white/70"
              }`}
            >
              {/* Popular Badge */}
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </span>
              )}

              {/* Title & Price */}
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold text-heading">{tier.name}</h3>
                  <p className="text-xs text-body mt-2 leading-relaxed">{tier.description}</p>
                </div>

                <div className="flex items-baseline gap-1 py-4 border-y border-slate-100 mt-2">
                  <span className="text-4xl font-extrabold text-heading tracking-tight">{tier.price}</span>
                  <span className="text-xs font-semibold text-muted">/ {tier.period}</span>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-3 py-4 text-xs font-semibold text-body">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <div className="pt-6">
                <a
                  href="#contact"
                  className={`w-full py-3.5 rounded-xl font-bold text-center block text-sm transition-all duration-300 ${
                    tier.highlight
                      ? "bg-primary hover:bg-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)]"
                      : "bg-slate-50 hover:bg-slate-100 border border-slate-200 text-heading"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Pricing notice */}
        <div className="text-center mt-10 text-[10px] text-muted flex items-center justify-center gap-1.5 font-semibold">
          <Info className="w-4 h-4 text-primary shrink-0" />
          <span>All packages include initial ledger cleaning. Custom scoping is available on request. Review our billing policies.</span>
        </div>

      </div>
    </section>
  );
}
