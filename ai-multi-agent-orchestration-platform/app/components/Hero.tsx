"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, ArrowRight, Play, Server, Zap, Cpu, CpuIcon } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "AI Tasks Executed", value: "250M+" },
    { label: "Uptime SLA", value: "99.99%" },
    { label: "Active AI Agents", value: "15,000+" },
    { label: "Enterprise clients", value: "500+" },
    { label: "LLM Integrations", value: "45+" }
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-16 px-4 md:px-8 overflow-hidden ai-grid">
      
      {/* Background aurora meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full bg-primary/10 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-secondary/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary w-fit tracking-wider uppercase"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Agentic Orchestration Platform</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white font-sans"
          >
            Build AI Teams <br />
            <span className="text-hero-gradient">That Work Together.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 font-sans leading-relaxed max-w-xl"
          >
            Design, orchestrate, deploy, and monitor intelligent AI agents that collaborate across your business to automate complex workflows.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-bold text-sm shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.55)] hover:scale-[1.02] transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              Start Building Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/8 rounded-xl text-gray-300 hover:text-white font-bold text-sm transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              Book Enterprise Demo
            </a>
          </motion.div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 pt-10 border-t border-white/8 mt-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                className="flex flex-col gap-1"
              >
                <span className="text-2xl font-extrabold text-white tracking-tight">{s.value}</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-snug">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right column: Interactive Visual canvas */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[480px] rounded-2xl glass-card border-white/8 shadow-2xl p-6 flex flex-col gap-5 overflow-hidden font-code relative"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-secondary" />
                Orchestration Console
              </span>
              <span className="text-[9px] font-bold text-success flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-ping" />
                Active Node Network
              </span>
            </div>

            {/* Neural diagram drawing */}
            <div className="relative h-[220px] bg-black/45 border border-white/5 rounded-xl overflow-hidden flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220">
                {/* Connecting lines */}
                <path d="M 80 110 L 160 50" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" fill="none" className="animated-path" />
                <path d="M 80 110 L 160 170" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" fill="none" className="animated-path" />
                <path d="M 160 50 L 240 110" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" fill="none" className="animated-path" />
                <path d="M 160 170 L 240 110" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" fill="none" className="animated-path" />
                <path d="M 240 110 L 320 110" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" fill="none" className="animated-path" />

                {/* Planner Agent Node */}
                <circle cx="80" cy="110" r="18" fill="#0f172a" stroke="#6366f1" strokeWidth="2" />
                <text x="80" y="114" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Plan</text>

                {/* Research Agent Node */}
                <circle cx="160" cy="50" r="18" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
                <text x="160" y="54" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Find</text>

                {/* Coder Agent Node */}
                <circle cx="160" cy="170" r="18" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
                <text x="160" y="174" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Code</text>

                {/* Critic Validation Node */}
                <circle cx="240" cy="110" r="18" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
                <text x="240" y="114" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Test</text>

                {/* Output Node */}
                <circle cx="320" cy="110" r="14" fill="#22c55e" />
                <path d="M 317 110 L 323 110 M 320 107 L 320 113" stroke="#fff" strokeWidth="2" />
              </svg>

              <span className="absolute bottom-2.5 right-3 text-[8px] font-bold text-gray-500 uppercase tracking-widest font-code">
                LangGraph Engine v2.4
              </span>
            </div>

            {/* Metrics console */}
            <div className="grid grid-cols-3 gap-3 font-code text-[10px] text-gray-400">
              <div className="p-2.5 bg-black/40 border border-white/5 rounded-xl flex flex-col gap-1">
                <span className="text-gray-500 uppercase tracking-wider text-[8px]">Token Load</span>
                <span className="text-white font-extrabold">2.4k t/s</span>
              </div>
              <div className="p-2.5 bg-black/40 border border-white/5 rounded-xl flex flex-col gap-1">
                <span className="text-gray-500 uppercase tracking-wider text-[8px]">Latency</span>
                <span className="text-white font-extrabold">124ms</span>
              </div>
              <div className="p-2.5 bg-black/40 border border-white/5 rounded-xl flex flex-col gap-1">
                <span className="text-gray-500 uppercase tracking-wider text-[8px]">Queue Health</span>
                <span className="text-success font-extrabold">100% OK</span>
              </div>
            </div>

          </motion.div>

          {/* Floating metrics badge */}
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 -left-6 z-20 glass-card px-4 py-3 border-white/5 rounded-xl flex items-center gap-3 shadow-lg"
          >
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-wider">Models Pools</span>
              <span className="text-xs font-extrabold text-white">Gemini & GPT-4o</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
