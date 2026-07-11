"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, DollarSign, Clock, ChevronRight, TrendingUp } from "lucide-react";

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  gain: string;
  reduction: string;
  saved: string;
}

export default function SuccessStories() {
  const [activeCase, setActiveCase] = useState<number>(0);

  const list: CaseStudy[] = [
    {
      company: "RetinaCare Health",
      industry: "MedTech & Clinical Support",
      challenge: "Manual translation of complex scan files and doctors notes into patient briefings, causing high turnaround delays.",
      solution: "Deployed a RAG-backed pipeline with Vision AI and medical validation agents to automate patient report drafting.",
      gain: "Patient report throughput increased by 420%.",
      reduction: "Intake documentation cycle cut from 4 days to 4 minutes.",
      saved: "Estimated 2,500 clinician hours saved annually."
    },
    {
      company: "ApexFintech",
      industry: "Quantitative Financial Services",
      challenge: "High audit latency while reviewing cross-border ledger reconciliation statements for regulatory compliance.",
      solution: "Orchestrated specialized compliance agents running custom SQL and ledger verification logic in isolated sandboxes.",
      gain: "Audit pipeline accuracy raised to 99.98%.",
      reduction: "Third-party auditing overhead bills cut by 62%.",
      saved: "Auto-reconciles $400M+ transaction ledger monthly."
    },
    {
      company: "LogiLogistics",
      industry: "Global Supply Chain & Logistics",
      challenge: "Managing infinite email query threads concerning ocean container status updates and delivery delays.",
      solution: "Deployed voice and browser-automation agents capable of checking cargo registers and emailing updates automatically.",
      gain: "Auto-resolved 78% of incoming client queries without human touch.",
      reduction: "Average ticket resolution delay reduced from 14 hours to 45 seconds.",
      saved: "Zero operational downtime incidents during seasonal spikes."
    }
  ];

  const active = list[activeCase];

  return (
    <section 
      id="success" 
      className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 ai-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase">
            CASE STUDIES
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Enterprise Client Success
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Read how global engineering and operations teams deploy multi-agent squads to automate business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {list.map((item, index) => {
              const isActive = activeCase === index;
              return (
                <button
                  key={item.company}
                  onClick={() => setActiveCase(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col gap-1.5 cursor-pointer ${
                    isActive 
                      ? "bg-gradient-to-br from-primary to-secondary border-primary text-white shadow-[0_4px_20px_rgba(99,102,241,0.18)]" 
                      : "bg-white/3 hover:bg-white/5 border-white/5 text-gray-300 hover:text-white"
                  }`}
                >
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest ${isActive ? "text-blue-100" : "text-primary"}`}>
                    {item.industry}
                  </span>
                  <span className="text-base font-extrabold leading-tight">
                    {item.company}
                  </span>
                  <div className={`flex items-center gap-1.5 text-xs font-bold pt-1 ${isActive ? "text-white" : "text-gray-400"}`}>
                    <span>View Study Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Card */}
          <div className="lg:col-span-8">
            <div className="glass-card p-8 md:p-10 border-white/6 rounded-2xl shadow-xl h-full flex flex-col justify-between relative overflow-hidden bg-slate-900/60">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <h3 className="text-lg font-bold text-white">{active.company}</h3>
                    <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {active.industry}
                    </span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-extrabold uppercase text-danger tracking-wider">Operational Challenge</span>
                      <p className="text-gray-300 leading-relaxed">{active.challenge}</p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-extrabold uppercase text-primary tracking-wider">Multi-Agent Solution Deployed</span>
                      <p className="text-gray-300 leading-relaxed">{active.solution}</p>
                    </div>
                  </div>

                  {/* Outcomes Statistics Ribbon */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/5 mt-2 font-code">
                    
                    <div className="p-4 bg-white/2 border border-white/5 rounded-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <TrendingUp className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-gray-500 uppercase">Productivity Gain</span>
                        <span className="text-[11px] font-extrabold text-white">{active.gain}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white/2 border border-white/5 rounded-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-success/10 text-success flex items-center justify-center">
                        <DollarSign className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-gray-500 uppercase">Cost Reduction</span>
                        <span className="text-[11px] font-extrabold text-white">{active.reduction}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white/2 border border-white/5 rounded-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-warning/10 text-warning flex items-center justify-center">
                        <Clock className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-gray-500 uppercase">Time Conserved</span>
                        <span className="text-[11px] font-extrabold text-white">{active.saved}</span>
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
