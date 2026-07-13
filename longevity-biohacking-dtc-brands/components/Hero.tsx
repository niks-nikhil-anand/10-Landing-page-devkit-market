"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Activity, 
  Moon, 
  TrendingUp, 
  Bot, 
  Zap,
  CheckCircle,
  ShieldCheck
} from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const floatVariants = (yOffset: number, duration: number) => ({
    animate: {
      y: [0, yOffset, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  });

  return (
    <section className="relative min-h-[90vh] pt-24 pb-14 flex items-center overflow-hidden bg-dot-grid">
      {/* Background gradients */}
      <div className="absolute top-1/6 left-1/10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/10 to-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/6 right-1/10 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/15 to-primary/5 blur-3xl pointer-events-none" />

      {/* Floating Cloud elements */}
      <motion.div 
        variants={floatVariants(-12, 7)}
        animate="animate"
        className="absolute top-32 left-12 w-28 h-9 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-sm border border-white/20 hidden md:block pointer-events-none"
      />
      <motion.div 
        variants={floatVariants(10, 9)}
        animate="animate"
        className="absolute bottom-28 right-16 w-32 h-10 rounded-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-md shadow-sm border border-white/10 hidden lg:block pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Tagline Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Futuristic Longevity Science
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              Upgrade Your <br className="hidden sm:inline" /> Healthspan. <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Optimize Every Day.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Discover premium longevity supplements, AI-powered wellness insights, personalized biomarker analysis, recovery optimization, and science-backed biohacking solutions designed to help you live healthier for longer.
            </motion.p>

            {/* CTAs (Optimized to stay above y=550px) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-1"
            >
              <Link
                href="#products"
                className="relative inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Longevity Journey <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold border border-slate-200 dark:border-slate-700 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:-translate-y-0.5 transition-all gap-2"
              >
                Take Free Health Assessment
              </Link>
            </motion.div>

            {/* Trust check tags */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center lg:justify-start gap-5 text-xs text-slate-500 font-semibold"
            >
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Third-Party Lab Tested</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Doctor Formulated</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: LifeNova Health Dashboard Mockup */}
          <div className="lg:col-span-6 relative w-full h-[460px] md:h-[500px] lg:h-[540px] flex items-center justify-center">
            
            {/* Background rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] rounded-full border border-primary/5 dark:border-white/5" />
              <div className="absolute w-[440px] h-[440px] rounded-full border border-secondary/5 dark:border-white/5" />
            </div>

            {/* Mockup dashboard container */}
            <div className="relative w-full max-w-[460px]">
              
              {/* 1. Main Dashboard: Sleep & Recovery Scores */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full rounded-2xl glass-panel shadow-2xl p-5 border border-white/20 relative"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/50 dark:border-slate-800/50 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-450" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-450" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-450" />
                    <span className="text-[10px] text-slate-400 font-mono ml-2">lifenova-bio-engine</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-[9px] text-primary font-bold flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 text-primary" /> CORE ACTIVE
                  </div>
                </div>

                {/* Dashboard layout */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 space-y-3">
                    <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                      <span className="text-[9px] text-slate-450 block font-bold uppercase tracking-wider">BIOMARKER ENERGY SCORE</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xl font-extrabold text-slate-900 dark:text-white">+42%</span>
                        <span className="text-[9px] text-green-500 font-bold">▲ 12.2% HRV</span>
                      </div>
                      
                      {/* Mini Area Graph */}
                      <div className="h-6 flex items-end gap-1 mt-2">
                        {[25, 45, 30, 58, 45, 68, 58, 72, 70, 85, 95].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-accent" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                        <span className="text-[8px] text-slate-400 block font-bold">SLEEP QUALITY</span>
                        <span className="text-xs font-extrabold text-slate-900 dark:text-white mt-0.5 block">92% Optimal</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                        <span className="text-[8px] text-slate-400 block font-bold">HEART HRV</span>
                        <span className="text-xs font-extrabold text-slate-900 dark:text-white mt-0.5 block">84 ms</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-gradient-to-b from-primary/10 to-accent/5 border border-primary/15 flex flex-col items-center justify-center text-center h-full">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-1 text-primary">
                        <Activity className="w-4 h-4" />
                      </div>
                      <span className="text-[8px] text-slate-450 font-bold uppercase">RECOVERY</span>
                      <span className="text-base font-extrabold text-slate-950 dark:text-white mt-1">96%</span>
                      <span className="text-[8px] text-slate-400 mt-1 block">WHOOP & Oura linked</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2. Overlapping Card: Premium supplement bottle details (Top Right - Float) */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-10 -right-6 z-20"
              >
                <motion.div
                  variants={floatVariants(8, 5)}
                  animate="animate"
                  className="w-52 rounded-2xl glass-panel shadow-2xl p-4 border border-white/20 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" /> LifeNova Daily
                    </span>
                    <span className="text-[9px] text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">NAD+ Booster</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { step: "Cellular Aging Guard", desc: "NAD+ pathway support", active: true },
                      { step: "Metabolic Support", desc: "Berberine & Chromium", active: true },
                      { step: "Brain & Focus Performance", desc: "L-Theanine & Ashwagandha", active: false }
                    ].map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[10px]">
                        <div className="min-w-0">
                          <span className={`block font-bold truncate ${s.active ? "text-slate-800 dark:text-slate-200" : "text-slate-400"}`}>{s.step}</span>
                          <span className="block text-[8px] text-slate-400">{s.desc}</span>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${s.active ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"}`} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* 3. Overlapping Card: AI Health Assistant Widget (Bottom Left - Float) */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-10 -left-8 z-20"
              >
                <motion.div
                  variants={floatVariants(-10, 6.5)}
                  animate="animate"
                  className="w-50 rounded-2xl glass-panel shadow-2xl p-4 border border-white/20 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-accent" /> AI Coach
                    </span>
                    <span className="text-[8px] font-mono text-slate-450 uppercase font-semibold">Biomarker scan</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 rounded-lg bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                      <span className="block text-[9px] font-bold text-slate-800 dark:text-slate-200">"Your metabolic HRV indicates optimal recovery. Supplement with NAD+ booster."</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* 4. Mini Floating Alert: Wearables Connected Alert (Bottom Right - Float) */}
              <motion.div
                variants={floatVariants(6, 4)}
                animate="animate"
                className="absolute -bottom-4 -right-4 bg-white/95 dark:bg-slate-900/95 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 z-35"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="text-left">
                  <span className="text-[8px] text-slate-400 block font-bold uppercase tracking-wider">Device Sync</span>
                  <span className="text-[10px] font-bold text-slate-900 dark:text-white leading-none">Oura Ring / WHOOP Connected</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
