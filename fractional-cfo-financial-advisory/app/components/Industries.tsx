"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code, 
  HeartPulse, 
  Factory, 
  ShoppingBag, 
  Globe, 
  Truck, 
  Home, 
  HardHat, 
  Cpu, 
  Briefcase 
} from "lucide-react";

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    { name: "Software & SaaS", description: "Optimize MRR models, analyze unit economics, retention cohorts, LTV/CAC paths, and prep for VC raises.", icon: <Code className="w-5 h-5" /> },
    { name: "Healthcare & MedTech", description: "Manage capital expenditure budgets, coordinate R&D financing, and align operations to Medicare guidelines.", icon: <HeartPulse className="w-5 h-5" /> },
    { name: "Manufacturing", description: "Improve gross margin yields by structuring COGS, managing asset expenditures, and optimizing inventory.", icon: <Factory className="w-5 h-5" /> },
    { name: "Retail Brands", description: "Build scalable cash flow forecasts to manage seasonal retail pipelines, lease holds, and brick-and-mortar overheads.", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "E-commerce & DTC", description: "Track marketing paybacks, manage multi-channel gross margins, coordinate working capital, and audit payment fees.", icon: <Globe className="w-5 h-5" /> },
    { name: "Logistics & Supply Chain", description: "Model capital acquisition ROI for fleet expansions, warehouse spacing audits, and shipping fuel index buffers.", icon: <Truck className="w-5 h-5" /> },
    { name: "Real Estate & Dev", description: "Forecast debt-to-equity ratios, model construction cash flows, audit property metrics, and optimize loan structures.", icon: <Home className="w-5 h-5" /> },
    { name: "Construction & Infrastructure", description: "Track project-by-project margins, manage subcontractor payments, and forecast equipment leases.", icon: <HardHat className="w-5 h-5" /> },
    { name: "Hardware & DeepTech", description: "Balance long development cycles, coordinate multi-phase R&D credits, and manage capital liquidity grids.", icon: <Cpu className="w-5 h-5" /> },
    { name: "Professional Services", description: "Analyze labor utilization margins, forecast headcount models, and optimize billing structures.", icon: <Briefcase className="w-5 h-5" /> }
  ];

  return (
    <section 
      ref={ref}
      id="industries" 
      className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 cfo-grid-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-18 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-success/10 border border-success/20 text-xs font-bold text-success tracking-wide uppercase">
            INDUSTRIES WE SERVE
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-heading font-sans">
            Tailored Financial Solutions for Your Sector
          </h2>
          <p className="text-body text-base md:text-lg leading-relaxed">
            Every sector has unique financial dynamics. Our specialist Fractional CFOs bring deep vertical expertise to guide your growth.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 border-primary/5 flex flex-col gap-4 justify-between bg-white"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary">
                  {ind.icon}
                </div>
                <h3 className="text-sm font-bold text-heading">
                  {ind.name}
                </h3>
                <p className="text-[11px] text-body leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
