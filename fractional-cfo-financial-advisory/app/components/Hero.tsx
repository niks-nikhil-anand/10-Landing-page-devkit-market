"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Calendar, TrendingUp, Sparkles, ShieldCheck, CheckCircle } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Businesses Advised", value: "500+" },
    { label: "Capital Raised", value: "$750M+" },
    { label: "Client Retention", value: "98%" },
    { label: "Years Experience", value: "20+" }
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-16 px-4 md:px-8 overflow-hidden cfo-grid">
      
      {/* Background glowing gradients representing financial clouds */}
      <div className="absolute top-10 right-10 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Text & Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          
          {/* Growth Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-success/10 border border-success/20 text-xs font-bold text-success w-fit tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>EXECUTIVE ADVISORY & STRATEGIC FP&A</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.12] text-heading font-sans"
          >
            Strategic Financial Leadership <br />
            <span className="text-hero-gradient">Without the Overhead</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-body font-sans leading-relaxed max-w-2xl"
          >
            Drive smarter decisions with expert financial planning, forecasting, cash flow optimization, fundraising support, and executive financial strategy tailored to your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 rounded-2xl text-white font-bold shadow-[0_10px_25px_rgba(37,99,235,0.25)] hover:shadow-[0_10px_35px_rgba(37,99,235,0.4)] hover:scale-[1.02] transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4.5 h-4.5" />
              Book a Free Consultation
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl text-heading font-bold shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              View Our Services
            </a>
          </motion.div>

          {/* Demo stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-slate-200/60 mt-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                className="flex flex-col gap-1.5"
              >
                <span className="text-3xl font-extrabold text-heading tracking-tight">{s.value}</span>
                <span className="text-xs font-semibold text-muted uppercase tracking-wider leading-snug">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right: Mockup Dashboard Graphics */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[460px] aspect-[4/3] glass-card p-6 border-primary/8 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)] flex flex-col justify-between overflow-hidden"
          >
            
            {/* Header of Mockup */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-heading">Financial Overview</h4>
                  <span className="text-[9px] font-semibold text-muted">Real-time projections</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1 bg-success/10 border border-success/20 px-2 py-0.5 rounded-full text-success text-[10px] font-bold">
                <span className="w-1 h-1 rounded-full bg-success animate-ping" />
                ACTIVE GROWTH
              </div>
            </div>

            {/* Simulated Charts and Metrics */}
            <div className="flex-1 py-4 flex flex-col gap-3.5">
              
              {/* Row of stats cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50/50 border border-slate-100 rounded-xl">
                  <span className="text-[10px] font-semibold text-muted block mb-1">Monthly Growth</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-extrabold text-heading">+14.2%</span>
                    <span className="text-[9px] font-bold text-success">Target met</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50/50 border border-slate-100 rounded-xl">
                  <span className="text-[10px] font-semibold text-muted block mb-1">EBITDA Margin</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-extrabold text-heading">26.8%</span>
                    <span className="text-[9px] font-bold text-success">+3.5% QoQ</span>
                  </div>
                </div>
              </div>

              {/* SVG Line Graph simulating Revenue */}
              <div className="p-3.5 bg-slate-50/50 border border-slate-100 rounded-xl flex flex-col gap-2 flex-1 justify-between">
                <div className="flex items-center justify-between text-[10px] font-semibold text-muted">
                  <span>Revenue Trend (Annual Projections)</span>
                  <span className="text-primary font-bold">$12.4M Proj.</span>
                </div>
                {/* SVG Drawing */}
                <div className="w-full h-16 flex items-end">
                  <svg className="w-full h-full text-primary" viewBox="0 0 200 60" fill="none">
                    <path
                      d="M0,50 Q30,45 60,35 T120,25 T180,10 L200,5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,50 Q30,45 60,35 T120,25 T180,10 L200,5 L200,60 L0,60 Z"
                      fill="url(#rev-grad)"
                    />
                    <defs>
                      <linearGradient id="rev-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

            </div>

            {/* Footer of Mockup */}
            <div className="flex items-center justify-between pt-3.5 border-t border-slate-100 text-[9px] font-semibold text-muted">
              <span>Financial Audit Status: Investor Ready</span>
              <span>Updated seconds ago</span>
            </div>

          </motion.div>

          {/* Floating widget 1: Cash Runway */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 -left-6 z-20 glass-card px-4 py-3 border-primary/5 flex items-center gap-3 shadow-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <DollarSign className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="block text-[9px] font-bold text-muted uppercase tracking-wider">Cash Runway</span>
              <span className="text-xs font-extrabold text-heading">18.5 Months</span>
            </div>
          </motion.div>

          {/* Floating widget 2: Client Success Badge */}
          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-6 -right-4 z-20 flex items-center gap-2 bg-white border border-success/15 shadow-xl px-4 py-3 rounded-2xl"
          >
            <CheckCircle className="w-5 h-5 text-success fill-success/10 shrink-0" />
            <div>
              <span className="block text-[9px] font-bold text-muted uppercase tracking-wider">Client Outcome</span>
              <span className="text-xs font-extrabold text-heading">98.4% ROI Achieved</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
