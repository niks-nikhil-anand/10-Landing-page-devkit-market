"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  UserCheck, 
  BarChart3, 
  Activity, 
  Calendar, 
  LineChart, 
  BadgeDollarSign, 
  FileText, 
  Users, 
  Layers, 
  Percent, 
  Shuffle, 
  Milestone,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <UserCheck className="w-6 h-6 text-primary" />,
      title: "Fractional CFO Services",
      description: "Get executive financial oversight, strategic planning, and leadership for your business at a fraction of the cost of a full-time hire."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-accent" />,
      title: "Financial Planning & Analysis (FP&A)",
      description: "Analyze historical performance and design driver-based financial plans that set your business on the path to optimized growth."
    },
    {
      icon: <Activity className="w-6 h-6 text-success" />,
      title: "Cash Flow Management",
      description: "Keep your business liquid with comprehensive working capital management, cash flow analysis, and runway extensions."
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Budgeting & Forecasting",
      description: "Create robust, flexible budgets and roll-forward forecasts that reflect real-time business conditions and objectives."
    },
    {
      icon: <LineChart className="w-6 h-6 text-accent" />,
      title: "Financial Modeling",
      description: "Build custom, dynamic models to evaluate business decisions, product lines, international expansions, or hiring pipelines."
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6 text-success" />,
      title: "Fundraising Support",
      description: "Prepare investor pitches, organize clean data rooms, model dilutions, and navigate seed-to-series capital raises."
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Investor Reporting",
      description: "Maintain transparent communications with your backers via timely, accurate, and professional investor reports."
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Board Meeting Preparation",
      description: "Structure clear financial board decks and prepare board materials to lead productive and strategic director discussions."
    },
    {
      icon: <Layers className="w-6 h-6 text-success" />,
      title: "KPI Dashboard Development",
      description: "Unify metrics by creating dashboard displays that track SaaS, e-commerce, or operational KPIs in real time."
    },
    {
      icon: <Percent className="w-6 h-6 text-primary" />,
      title: "Profitability Analysis",
      description: "Deconstruct unit economics, margin structures, and pricing models to unlock hidden profit centers in your business."
    },
    {
      icon: <Shuffle className="w-6 h-6 text-accent" />,
      title: "Mergers & Acquisitions Advisory",
      description: "Navigate corporate transitions with complete financial due diligence, asset evaluations, and post-merger integrations."
    },
    {
      icon: <Milestone className="w-6 h-6 text-success" />,
      title: "Strategic Business Planning",
      description: "Synthesize corporate strategy with executive financial advisory to map scalable avenues for organizational expansion."
    }
  ];

  return (
    <section 
      ref={ref}
      id="services" 
      className="py-24 px-4 md:px-8 bg-white relative overflow-hidden"
    >
      {/* Background soft gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-success/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-18 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase"
          >
            OUR CAPABILITIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-heading font-sans"
          >
            Enterprise-Grade Financial Advisory
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body text-base md:text-lg leading-relaxed"
          >
            From cash flow survival strategies to strategic board planning and M&A exits, we provide full-stack financial leadership.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="glass-card glass-card-hover p-8 border-primary/5 flex flex-col gap-5 justify-between relative group cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-colors group-hover:bg-white group-hover:border-primary/20 duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-extrabold text-primary pt-2 group-hover:translate-x-1 transition-transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
