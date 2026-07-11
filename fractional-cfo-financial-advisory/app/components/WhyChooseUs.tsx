"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Crown, 
  GraduationCap, 
  Maximize2, 
  Gauge, 
  Eye, 
  Cloud, 
  FileSpreadsheet, 
  HeartHandshake 
} from "lucide-react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Crown className="w-6 h-6 text-primary" />,
      title: "Executive-Level Expertise",
      description: "Our advisors are former CFOs and VP of Finance leaders from venture-backed startups and multinational corporations."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
      title: "Industry Specialists",
      description: "We pair your business with a CFO expert who specializes in your exact sector, whether it's SaaS, healthcare, or retail."
    },
    {
      icon: <Maximize2 className="w-6 h-6 text-success" />,
      title: "Scalable Financial Solutions",
      description: "Scale our engagement up or down based on your business stage—from light monthly forecasting to high-intensity series raises."
    },
    {
      icon: <Gauge className="w-6 h-6 text-primary" />,
      title: "Data-Driven Decisions",
      description: "Shift from gut-feeling planning to structured financial modeling driven by clean, historical, and cohort analysis."
    },
    {
      icon: <Eye className="w-6 h-6 text-accent" />,
      title: "Transparent Reporting",
      description: "Get complete transparency into our processes, financial metrics, and operational audits. No hidden adjustments."
    },
    {
      icon: <Cloud className="w-6 h-6 text-success" />,
      title: "Cloud-Based Systems",
      description: "We deploy modern, automated bookkeeping and ERP platforms like NetSuite, QuickBooks, and Stripe to ensure fast close times."
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-primary" />,
      title: "Investor-Ready Reporting",
      description: "Receive audit-worthy models, decks, and financial statements optimized for presentation to VC, PE, or bank backers."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-accent" />,
      title: "Dedicated Advisor",
      description: "Your business is assigned a primary executive advisor. You get direct support, weekly check-ins, and board representation."
    }
  ];

  return (
    <section 
      ref={ref}
      id="why-choose-us" 
      className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 cfo-grid-dots opacity-50" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-18 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent tracking-wide uppercase"
          >
            OUR ADVANTAGE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-heading font-sans"
          >
            Why Strategic Leaders Choose ApexCFO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body text-base md:text-lg leading-relaxed"
          >
            We merge corporate rigor with startup agility to set up a financial architecture built for scale.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6.5 border-primary/5 flex flex-col gap-4 relative group"
            >
              <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center transition-colors group-hover:border-primary/20 duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.01)]">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-heading group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-xs text-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
