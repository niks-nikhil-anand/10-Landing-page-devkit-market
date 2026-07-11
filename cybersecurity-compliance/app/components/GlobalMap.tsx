"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, CloudLightning, ShieldCheck } from "lucide-react";

export default function GlobalMap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const regions = [
    { name: "North America", x: "25%", y: "35%", status: "Active Region", latency: "12ms" },
    { name: "Europe", x: "50%", y: "30%", status: "Active Region", latency: "28ms" },
    { name: "Middle East", x: "62%", y: "42%", status: "Active Region", latency: "42ms" },
    { name: "Asia Pacific", x: "78%", y: "45%", status: "Active Region", latency: "56ms" },
    { name: "Australia", x: "85%", y: "75%", status: "Active Region", latency: "64ms" }
  ];

  return (
    <section 
      ref={ref}
      id="coverage" 
      className="py-24 px-4 md:px-8 bg-cyber-dark/80 relative overflow-hidden"
    >
      <div className="absolute inset-0 cyber-grid-dots opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="px-3 py-1.5 rounded-full bg-brand-cyber/10 border border-brand-cyber/20 text-xs font-bold text-brand-cyber tracking-wide uppercase"
          >
            GLOBAL CAPABILITIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans"
          >
            Global Compliance Coverage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg"
          >
            Deploy controls and run audits across multiple hosting regions, jurisdictions, and clouds while maintaining a single pane of glass.
          </motion.p>
        </div>

        {/* World Map Container */}
        <div className="relative w-full aspect-[21/9] max-w-5xl mx-auto glass-panel border-white/6 rounded-3xl p-6 overflow-hidden flex items-center justify-center">
          <div className="scanline-overlay" />
          
          {/* Cybernetic World Map Dot Pattern Representation */}
          <svg className="w-full h-full opacity-20 text-gray-600" viewBox="0 0 1000 420" fill="currentColor">
            {/* Outline of continents represented as stylized grid dots */}
            <rect width="1000" height="420" fill="none" />
            {/* Custom vector dots showing map outline */}
            <circle cx="200" cy="150" r="1.5" /><circle cx="210" cy="140" r="1.5" /><circle cx="220" cy="130" r="1.5" />
            <circle cx="230" cy="130" r="1.5" /><circle cx="240" cy="140" r="1.5" /><circle cx="250" cy="150" r="1.5" />
            <circle cx="260" cy="160" r="1.5" /><circle cx="270" cy="170" r="1.5" /><circle cx="280" cy="180" r="1.5" />
            {/* North America */}
            <path d="M120,80 Q180,60 250,90 T300,160 T250,220 T200,280 L180,260 Z" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 4" />
            {/* South America */}
            <path d="M250,230 Q280,280 320,380 T280,410 L260,380 Z" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 4" />
            {/* Europe & Asia */}
            <path d="M420,60 Q550,50 680,60 T850,120 T950,200 T850,300 T700,320 Z" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 4" />
            {/* Africa */}
            <path d="M460,180 Q520,200 580,250 T530,360 L480,320 Z" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 4" />
            {/* Australia */}
            <path d="M780,280 Q850,300 900,340 T840,390 L800,350 Z" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 4" />
          </svg>

          {/* Central Cloud Node (Logical connection hub) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center text-white shadow-[0_0_30px_rgba(14,165,233,0.6)]"
            >
              <Globe className="w-6 h-6 animate-spin-slow" />
            </motion.div>
          </div>

          {/* Cloud connection lines connecting regions to the center */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* SVG lines from regions to center (500, 210 in 1000x420 system) */}
            <motion.path
              d="M 250 147 Q 375 120 500 210"
              fill="none"
              stroke="url(#blue-gradient)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M 500 126 Q 500 160 500 210"
              fill="none"
              stroke="url(#blue-gradient)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.7 }}
            />
            <motion.path
              d="M 620 176 Q 560 190 500 210"
              fill="none"
              stroke="url(#blue-gradient)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.9 }}
            />
            <motion.path
              d="M 780 189 Q 640 200 500 210"
              fill="none"
              stroke="url(#blue-gradient)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 1.1 }}
            />
            <motion.path
              d="M 850 315 Q 675 260 500 210"
              fill="none"
              stroke="url(#blue-gradient)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 1.3 }}
            />
            
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Region Pulse Points overlay */}
          {regions.map((region, i) => (
            <div
              key={region.name}
              className="absolute group z-20 cursor-pointer"
              style={{ left: region.x, top: region.y }}
            >
              {/* Pulse Ring */}
              <span className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-brand-blue/40 animate-ping" />
              {/* Central Solid Dot */}
              <span className="absolute -left-1 -top-1 w-3 h-3 rounded-full bg-brand-cyber shadow-[0_0_10px_rgba(6,182,212,0.8)] border border-white" />
              
              {/* Tooltip Card */}
              <div className="absolute left-4 -top-8 bg-slate-950/95 border border-white/10 rounded-xl py-1.5 px-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl whitespace-nowrap">
                <span className="block text-xs font-bold text-white">{region.name}</span>
                <span className="text-[9px] text-brand-cyber font-semibold flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  {region.status} ({region.latency})
                </span>
              </div>

              {/* Label below point */}
              <span className="absolute -left-12 top-4 text-[10px] font-bold text-gray-400 tracking-wider whitespace-nowrap bg-cyber-dark/40 px-2 py-0.5 rounded-full border border-white/5 group-hover:text-white transition-colors duration-200">
                {region.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
