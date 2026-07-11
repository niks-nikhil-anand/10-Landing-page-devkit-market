"use client";

import React from "react";
import { ShieldCheck, ShieldAlert, Sparkles, Activity, ShieldCheck as Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden cyber-grid">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-brand-indigo/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column text */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-blue tracking-wide uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Automated Compliance Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white font-sans"
          >
            Continuous Security <br />
            <span className="text-gradient">SOC 2 & ISO 27001</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-lg md:text-xl text-gray-400 font-sans leading-relaxed"
          >
            Automate evidence collection, map internal policies to security controls, monitor risk continuously, and achieve audit readiness in weeks, not months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
          >
            <a
              href="#demo"
              className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-xl text-white font-semibold shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:shadow-[0_0_35px_rgba(14,165,233,0.5)] transition-all duration-300 text-center"
            >
              Get Started Free
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-xl text-gray-300 hover:text-white font-semibold transition-all duration-300 text-center"
            >
              View Pricing Plans
            </a>
          </motion.div>
        </div>

        {/* Right column dashboard mock */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[450px] aspect-[4/3] glass-panel rounded-2xl p-6 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden"
          >
            <div className="scanline-overlay" />
            
            {/* Mock Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Trust Dashboard</h4>
                  <span className="text-[10px] text-gray-500">Auto-sync active</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SECURE
              </div>
            </div>

            {/* Mock Body */}
            <div className="flex-1 py-4 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                  <span className="text-[10px] text-gray-500 block mb-1">SOC 2 Controls</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-white">98%</span>
                    <span className="text-[9px] text-emerald-400 font-semibold">+1.2%</span>
                  </div>
                </div>
                <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                  <span className="text-[10px] text-gray-500 block mb-1">ISO 27001 Status</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-white">Ready</span>
                    <span className="text-[9px] text-emerald-400 font-semibold">120/120</span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="p-3 bg-white/2 rounded-xl border border-white/5 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[10px] text-gray-400">
                  <span>Evidence Collected</span>
                  <span>456 / 458</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[99%] h-full bg-gradient-to-r from-brand-blue to-emerald-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Mock Footer Status */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[10px] text-gray-500">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-brand-blue" />
                <span>API integrations active (24/25)</span>
              </div>
              <span>Updated 2m ago</span>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-6 -left-6 glass-panel px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-lg"
          >
            <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Active Monitoring</span>
              <span className="text-xs font-bold text-white">Continuous Threat Scan</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
