"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PhoneCall, FileSearch, Map, Settings, CalendarRange, LineChart, ChevronRight } from "lucide-react";

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: <PhoneCall className="w-5 h-5 text-primary" />,
      title: "Discovery Call",
      description: "A 30-minute alignment session to review your business model, cash goals, fundraising roadmap, and operational bottlenecks."
    },
    {
      number: "02",
      icon: <FileSearch className="w-5 h-5 text-accent" />,
      title: "Financial Assessment",
      description: "We conduct a thorough audit of your existing balance sheets, P&L statements, ledger structures, and accounts pipeline."
    },
    {
      number: "03",
      icon: <Map className="w-5 h-5 text-success" />,
      title: "Strategic Roadmap",
      description: "We deliver a custom financial blueprint mapping out runway guidelines, forecasting models, and proposed CFO milestones."
    },
    {
      number: "04",
      icon: <Settings className="w-5 h-5 text-primary" />,
      title: "System Integration",
      description: "We integrate your ERP, billing platforms, and payroll logs into cloud-based metrics dashboards (QuickBooks, NetSuite)."
    },
    {
      number: "05",
      icon: <CalendarRange className="w-5 h-5 text-accent" />,
      title: "Monthly CFO Advisory",
      description: "Regular executive meetings to review budget vs. actual deviations, plan cash runways, and prepare investor reports."
    },
    {
      number: "06",
      icon: <LineChart className="w-5 h-5 text-success" />,
      title: "Performance Review",
      description: "Detailed quarterly board preparation, profitability analytics audits, and systematic optimization of unit economics."
    }
  ];

  return (
    <section 
      ref={ref}
      id="process" 
      className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 cfo-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-success/10 border border-success/20 text-xs font-bold text-success tracking-wide uppercase">
            ENGAGEMENT PIPELINE
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-heading font-sans">
            Our Onboarding Process
          </h2>
          <p className="text-body text-base md:text-lg leading-relaxed">
            A structured framework designed to audit your current books, align forecasting metrics, and deliver strategic financial advisory.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-[45px] left-10 right-10 h-0.5 bg-slate-200/60 z-0 pointer-events-none" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col gap-4 relative z-10"
            >
              {/* Step indicator block */}
              <div className="flex items-center gap-4">
                {/* Numeric index circle */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center text-sm font-extrabold text-heading shrink-0">
                  {step.number}
                </div>

                {/* Vector arrow indicator between cards */}
                {index < 5 && (
                  <div className="hidden md:flex lg:hidden text-slate-300">
                    <ChevronRight className="w-5 h-5 animate-pulse" />
                  </div>
                )}

                {/* Small icon badge overlay */}
                <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary">
                  {step.icon}
                </div>
              </div>

              {/* Text info */}
              <div className="glass-card p-6.5 border-primary/5 bg-white h-full flex flex-col gap-2">
                <h3 className="text-base font-bold text-heading">
                  {step.title}
                </h3>
                <p className="text-xs text-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
