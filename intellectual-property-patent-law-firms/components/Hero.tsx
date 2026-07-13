"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Scale, 
  Lock, 
  Cpu, 
  Activity, 
  FolderLock, 
  Calendar, 
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Globe,
  Sparkles,
  User
} from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-dot-grid">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/10 to-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-gradient-to-tr from-accent/10 to-secondary/10 blur-3xl pointer-events-none" />

      {/* Floating Cloud elements */}
      <motion.div 
        variants={floatVariants(-15, 8)}
        animate="animate"
        className="absolute top-36 left-16 w-28 h-10 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-sm border border-white/20 hidden md:block pointer-events-none"
      />
      <motion.div 
        variants={floatVariants(12, 10)}
        animate="animate"
        className="absolute bottom-36 right-20 w-36 h-12 rounded-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-md shadow-sm border border-white/10 hidden lg:block pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-8 text-center lg:text-left"
          >
            {/* Tagline Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              Enterprise Intellectual Property Law
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              Protect Every Innovation. <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Secure Every Idea.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Empower businesses, startups, inventors, and enterprises with comprehensive intellectual property protection, patent filing, trademark registration, copyright services, licensing, and IP litigation—all supported by secure cloud-based legal technology.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <Link
                href="#contact"
                className="relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Free Consultation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold border border-slate-200 dark:border-slate-700 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:-translate-y-0.5 transition-all gap-2 group"
              >
                Talk to an IP Expert
              </Link>
            </motion.div>

            {/* Simple Security Badge list */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-semibold"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4.5 h-4.5 text-green-500" />
                <span>USPTO Registered Attorneys</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4.5 h-4.5 text-accent" />
                <span>AES-256 Confidentiality</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: High-fidelity Illustration Mockup */}
          <div className="lg:col-span-6 relative w-full h-[520px] md:h-[580px] lg:h-[620px] flex items-center justify-center">
            {/* Background rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[380px] h-[380px] rounded-full border border-primary/5 dark:border-white/5" />
              <div className="absolute w-[480px] h-[480px] rounded-full border border-secondary/5 dark:border-white/5" />
            </div>

            {/* Mockup dashboard container */}
            <div className="relative w-full max-w-[480px]">
              
              {/* 1. Main Dashboard: Cloud Legal Dashboard */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full rounded-2xl glass-panel shadow-2xl p-5 border border-white/20 relative"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/50 dark:border-slate-800/50 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-[10px] text-slate-400 font-mono ml-2">lexpatent-core-engine</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-[9px] text-primary font-bold flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" /> SECURE IP NODE
                  </div>
                </div>

                {/* Dashboard layout */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 space-y-3">
                    <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-semibold">IP PORTFOLIO VALUE</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xl font-bold text-slate-900 dark:text-white">$42.8M</span>
                        <span className="text-[9px] text-green-500 font-semibold">▲ 14.2%</span>
                      </div>
                      
                      {/* SVG Mini Area Graph */}
                      <div className="h-6 flex items-end gap-1 mt-2">
                        {[20, 35, 30, 48, 45, 60, 58, 70, 72, 85, 90].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-accent" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                        <span className="text-[9px] text-slate-400 block font-semibold">PATENTS FILED</span>
                        <span className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5 block">142 Active</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                        <span className="text-[9px] text-slate-400 block font-semibold">TRADEMARKS</span>
                        <span className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5 block">85 Registered</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-gradient-to-b from-primary/10 to-accent/5 border border-primary/15 flex flex-col items-center justify-center text-center h-full">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-1 text-primary">
                        <Globe className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase">GLOBAL REGIONS</span>
                      <span className="text-base font-extrabold text-slate-950 dark:text-white mt-1">65+</span>
                      <span className="text-[8px] text-slate-400 mt-1 block">PCT filing channels</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2. Overlapping Mockup: Patent Filing Workflow (Top Right - Float) */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-12 -right-8 z-20"
              >
                <motion.div
                  variants={floatVariants(10, 5.5)}
                  animate="animate"
                  className="w-56 rounded-2xl glass-panel shadow-2xl p-4 border border-white/20 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-primary" /> Patent Filing
                    </span>
                    <span className="text-[9px] text-green-500 font-bold bg-green-500/10 px-2 py-0.5 rounded">Stage 4</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { step: "Prior Art Search", active: true, done: true },
                      { step: "Specification Drafting", active: true, done: true },
                      { step: "USPTO Filing Complete", active: true, done: true },
                      { step: "Government Examination", active: true, done: false }
                    ].map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[10px]">
                        <span className={`font-semibold ${s.done ? "text-slate-800 dark:text-slate-200" : "text-slate-400"}`}>{s.step}</span>
                        <div className={`w-3 h-3 rounded-full flex items-center justify-center ${s.done ? "bg-primary text-white" : "border border-slate-300 bg-white"}`}>
                          {s.done && <span className="text-[6px] font-bold">✓</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* 3. Overlapping Mockup: Legal Case Timeline & Document Vault (Bottom Left - Float) */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-16 -left-12 z-20"
              >
                <motion.div
                  variants={floatVariants(-12, 6)}
                  animate="animate"
                  className="w-52 rounded-2xl glass-panel shadow-2xl p-4 border border-white/20 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <FolderLock className="w-4 h-4 text-accent" /> Secure Vault
                    </span>
                    <span className="text-[8px] font-mono text-slate-400">128-bit AES</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Patent_Draft_V4.pdf", size: "2.4 MB" },
                      { name: "NDAA_Agreement_Signed.pdf", size: "1.1 MB" }
                    ].map((file, fIdx) => (
                      <div key={fIdx} className="p-2 rounded-lg bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div className="min-w-0">
                          <span className="block text-[9px] font-bold text-slate-800 dark:text-slate-200 truncate">{file.name}</span>
                          <span className="block text-[7px] text-slate-400">{file.size}</span>
                        </div>
                        <span className="text-[7px] font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded">Vaulted</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* 4. Mini Floating Alert: Trademark Status Badge (Bottom Right - Float) */}
              <motion.div
                variants={floatVariants(8, 4.5)}
                animate="animate"
                className="absolute -bottom-8 -right-8 bg-white/95 dark:bg-slate-900/95 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 z-30"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="text-left">
                  <span className="text-[9px] text-slate-400 block font-semibold">Trademark Status</span>
                  <span className="text-[10px] font-bold text-slate-950 dark:text-white leading-none">Registered: TechNova™</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
