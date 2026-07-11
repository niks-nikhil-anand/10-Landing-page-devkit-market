"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, TrendingUp, DollarSign, Award, ChevronRight } from "lucide-react";

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  impactText: string;
  metrics: {
    revGrowth: string;
    savings: string;
    roi: string;
  };
}

export default function SuccessStories() {
  const [activeCase, setActiveCase] = useState<number>(0);

  const caseStudies: CaseStudy[] = [
    {
      company: "CloudVibe SaaS",
      industry: "Software & SaaS",
      challenge: "High customer churn, unstable cash runway of only 4 months, and a lack of clear unit economic metrics for seed fundraising.",
      solution: "ApexCFO implemented a driver-based cohort model, restructured pricing plans, mapped precise LTV/CAC ratios, and managed seed pitch decks.",
      impactText: "Successfully closed a $3.5M Seed round, extended cash runway to 24 months, and optimized customer acquisition paybacks.",
      metrics: {
        revGrowth: "+148% MRR Growth",
        savings: "$120,000 Unlocked",
        roi: "340% ROI Achieved"
      }
    },
    {
      company: "TheraHealth MedTech",
      industry: "Healthcare & Devices",
      challenge: "Unoptimized accounts receivable cycles and capital equipment bottlenecks holding back clinic expansion plans.",
      solution: "Restructured the billing process, negotiated equipment leases to preserve working capital, and deployed real-time cash flow runway tools.",
      impactText: "Reduced collections duration (DSO) by 32%, unlocked operating cash, and funded 4 new regional clinics without taking on dilution.",
      metrics: {
        revGrowth: "+64% Revenue Growth",
        savings: "$280,000 in CapEx",
        roi: "280% ROI Achieved"
      }
    },
    {
      company: "NovaRetail Brands",
      industry: "E-commerce & Retail",
      challenge: "Low product gross margins due to unoptimized supplier shipping rates and seasonal cash constraints.",
      solution: "ApexCFO led contract renegotiations with logistics providers, restructured COGS allocations, and optimized seasonal budgeting.",
      impactText: "Expanded gross profit margin by 8.2%, eliminated holiday inventory shortages, and stabilized monthly cash buffers.",
      metrics: {
        revGrowth: "+92% E-com Growth",
        savings: "$350,000 Cost Savings",
        roi: "450% ROI Achieved"
      }
    }
  ];

  return (
    <section 
      id="success-stories" 
      className="py-24 px-4 md:px-8 bg-white relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase">
            CLIENT OUTCOMES
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-heading font-sans">
            Measurable Financial Impacts
          </h2>
          <p className="text-body text-base md:text-lg leading-relaxed">
            Read how our strategic advisory and Fractional CFO solutions have helped scale-ups unlock growth and optimize performance.
          </p>
        </div>

        {/* Dynamic Case Studies Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left selectors */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {caseStudies.map((item, index) => {
              const isActive = activeCase === index;
              return (
                <button
                  key={item.company}
                  onClick={() => setActiveCase(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col gap-1.5 cursor-pointer ${
                    isActive 
                      ? "bg-gradient-to-br from-primary to-blue-600 border-primary text-white shadow-lg" 
                      : "bg-slate-50 hover:bg-slate-100/80 border-slate-200/50 text-heading"
                  }`}
                >
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest ${isActive ? "text-blue-100" : "text-primary"}`}>
                    {item.industry}
                  </span>
                  <span className="text-base font-extrabold leading-tight">
                    {item.company}
                  </span>
                  <div className={`flex items-center gap-1.5 text-xs font-bold pt-1 ${isActive ? "text-white" : "text-muted"}`}>
                    <span>View Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-8">
            <div className="glass-card p-8 md:p-10 border-primary/5 shadow-xl h-full flex flex-col justify-between bg-white/90 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-success/5 rounded-full blur-xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  {/* Top Header info */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <h3 className="text-xl font-extrabold text-heading">
                      {caseStudies[activeCase].company}
                    </h3>
                    <span className="text-xs font-bold text-primary px-3.5 py-1 rounded-full bg-primary/10">
                      {caseStudies[activeCase].industry}
                    </span>
                  </div>

                  {/* Challenge vs Solution */}
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-extrabold uppercase text-rose-500 tracking-wider">
                        The Challenge
                      </span>
                      <p className="text-sm text-body leading-relaxed">
                        {caseStudies[activeCase].challenge}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-extrabold uppercase text-primary tracking-wider">
                        The Solution
                      </span>
                      <p className="text-sm text-body leading-relaxed">
                        {caseStudies[activeCase].solution}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-extrabold uppercase text-success tracking-wider">
                        Business Impact
                      </span>
                      <p className="text-sm font-semibold text-heading leading-relaxed">
                        {caseStudies[activeCase].impactText}
                      </p>
                    </div>
                  </div>

                  {/* Metrics Banner */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-100 mt-2">
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <TrendingUp className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-muted">Revenue Result</span>
                        <span className="text-xs font-extrabold text-heading">{caseStudies[activeCase].metrics.revGrowth}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-success/10 text-success flex items-center justify-center">
                        <DollarSign className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-muted">Capital Preserved</span>
                        <span className="text-xs font-extrabold text-heading">{caseStudies[activeCase].metrics.savings}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                        <Award className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-muted">Advisory Yield</span>
                        <span className="text-xs font-extrabold text-heading">{caseStudies[activeCase].metrics.roi}</span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
