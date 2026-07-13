"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  ShieldAlert, 
  Lock, 
  Cpu, 
  Activity, 
  Video, 
  Calendar, 
  Heart,
  TrendingUp,
  User,
  Sparkles,
  PhoneCall
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
      {/* Premium cloud-inspired ambient gradient background blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-gradient-to-tr from-accent/10 to-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl pointer-events-none" />

      {/* Floating Cloud Elements (Aesthetic Background) */}
      <motion.div 
        variants={floatVariants(-12, 10)}
        animate="animate"
        className="absolute top-32 left-12 w-24 h-10 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-sm border border-white/20 hidden md:block pointer-events-none"
      />
      <motion.div 
        variants={floatVariants(15, 12)}
        animate="animate"
        className="absolute top-1/2 right-16 w-32 h-12 rounded-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-md shadow-sm border border-white/10 hidden lg:block pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-8 text-center lg:text-left"
          >
            {/* Tagline Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              SaaS Healthcare Cloud Infrastructure
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              Healthcare Without Borders, <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Premium Care From Anywhere.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Deliver exceptional virtual healthcare with secure telemedicine, concierge medicine services, AI-powered patient engagement, remote monitoring, and integrated electronic health records—all from a single cloud platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <Link
                href="#contact"
                className="relative inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:-translate-y-0.5 transition-all gap-2 group"
              >
                <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <Play className="w-3 h-3 fill-current text-primary" />
                </span>
                Book Live Demo
              </Link>
            </motion.div>

            {/* Hero Card Benefits Grid */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-slate-200/60 dark:border-slate-800/60 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 text-left"
            >
              {[
                { label: "99.99% Availability", icon: CheckCircle2 },
                { label: "HIPAA Compliant", icon: ShieldAlert },
                { label: "End-to-End Encryption", icon: Lock },
                { label: "AI Medical Assistant", icon: Cpu },
                { label: "500,000+ Consultations", icon: Activity },
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <benefit.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{benefit.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Complex Interactive Illustration */}
          <div className="lg:col-span-6 relative w-full h-[520px] md:h-[580px] lg:h-[620px] flex items-center justify-center">
            {/* Background glowing rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[380px] h-[380px] rounded-full border border-primary/5 dark:border-white/5 animate-pulse-slow" />
              <div className="absolute w-[480px] h-[480px] rounded-full border border-secondary/5 dark:border-white/5 animate-pulse-slow" />
            </div>

            {/* Animated Cloud Dashboards mockup wrapper */}
            <div className="relative w-full max-w-[500px]">
              
              {/* 1. Main Dashboard (Cloud Dashboard / Health Analytics) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full rounded-2xl glass-panel shadow-2xl p-5 border border-white/20 select-none overflow-hidden relative"
              >
                {/* Header of Mockup */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 dark:border-slate-800/50 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-[10px] text-slate-400 font-mono ml-2">healthcloud-core-system</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-[10px] text-accent font-semibold flex items-center gap-1">
                    <Activity className="w-2.5 h-2.5 animate-pulse" /> Active Node
                  </div>
                </div>

                {/* Dashboard grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 space-y-3">
                    <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">Operational Load</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xl font-bold text-slate-900 dark:text-white">99.98%</span>
                        <span className="text-[9px] text-green-500 font-semibold flex items-center">▲ 0.02%</span>
                      </div>
                      {/* Visual line graph simulation */}
                      <div className="h-6 flex items-end gap-1 mt-2">
                        {[30, 45, 35, 60, 50, 75, 65, 80, 85, 90, 88].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/80 to-secondary" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] text-slate-400 block">Total Active Users</span>
                        <span className="text-base font-bold text-slate-900 dark:text-white mt-0.5 block">82,491</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] text-slate-400 block">Avg Response Time</span>
                        <span className="text-base font-bold text-slate-900 dark:text-white mt-0.5 block">&lt; 4.8 min</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-gradient-to-b from-primary/10 to-secondary/5 border border-primary/10 flex flex-col items-center justify-center text-center h-full">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-1 text-primary">
                        <Heart className="w-4 h-4 fill-primary" />
                      </div>
                      <span className="text-[9px] text-slate-400 uppercase tracking-wide">Satisfaction</span>
                      <span className="text-lg font-bold text-slate-900 dark:text-white">99.4%</span>
                      <span className="text-[8px] text-slate-400 mt-1 block">Patient Index</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2. Overlapping Mockup: Doctor Video Consultation (Top Right - Float) */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-12 -right-8 z-20"
              >
                <motion.div
                  variants={floatVariants(10, 5)}
                  animate="animate"
                  className="w-60 rounded-2xl glass-panel shadow-2xl p-3 border border-white/20 flex flex-col gap-2"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950">
                    {/* Doctor Video placeholder */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black flex items-center justify-center">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-slate-900 overflow-hidden relative">
                          {/* doctor placeholder avatar symbol */}
                          <User className="w-6 h-6 text-slate-400" />
                          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border border-slate-950" />
                        </div>
                        <span className="text-[10px] font-semibold text-white mt-1.5">Dr. Sarah Johnson</span>
                        <span className="text-[8px] text-slate-400">Chief Physician</span>
                      </div>
                    </div>
                    {/* Small patient camera preview */}
                    <div className="absolute bottom-2 right-2 w-14 aspect-video rounded bg-slate-800 border border-white/20 overflow-hidden flex items-center justify-center">
                      <User className="w-4 h-4 text-slate-500" />
                    </div>
                    {/* Indicators */}
                    <div className="absolute top-2 left-2 flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-red-500/80 text-[8px] text-white font-semibold uppercase tracking-wider">
                      <Video className="w-2.5 h-2.5" /> LIVE HD
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold px-1">
                    <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                      <Lock className="w-3.5 h-3.5 text-accent" />
                      <span>HIPAA Secured Consultation</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[9px]">14:22</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* 3. Overlapping Mockup: Appointment Calendar / Scheduling (Bottom Left - Float) */}
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
                      <Calendar className="w-4 h-4 text-primary" /> Scheduling
                    </span>
                    <span className="text-[10px] text-primary font-semibold hover:underline cursor-pointer">View All</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { patient: "James Carter", time: "10:30 AM", type: "Virtual Visit", active: true },
                      { patient: "Amelia Reed", time: "01:15 PM", type: "Concierge Check", active: false }
                    ].map((appt, i) => (
                      <div key={i} className={`p-2 rounded-xl border flex items-center justify-between transition-colors ${appt.active ? "bg-primary/5 border-primary/20" : "bg-slate-50/50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800"}`}>
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[9px] font-bold text-slate-600 dark:text-slate-300">
                            {appt.patient[0]}
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-slate-900 dark:text-white block leading-tight">{appt.patient}</span>
                            <span className="text-[8px] text-slate-400 block">{appt.type}</span>
                          </div>
                        </div>
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${appt.active ? "bg-primary text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>{appt.time}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* 4. Mini Floating Alert: Patient Mobile Vital Stats (Top Left - Float) */}
              <motion.div
                variants={floatVariants(6, 4)}
                animate="animate"
                className="absolute -top-16 -left-8 bg-white/90 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl px-3 py-2 flex items-center gap-3 z-30"
              >
                <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block font-semibold">Pulse Rate</span>
                  <span className="text-xs font-bold text-slate-950 dark:text-white flex items-center gap-1 leading-none">
                    72 bpm <span className="text-[8px] text-green-500 font-semibold">Normal</span>
                  </span>
                </div>
              </motion.div>

              {/* 5. Mini Floating Alert: Connected Device (Bottom Right - Float) */}
              <motion.div
                variants={floatVariants(-8, 5.5)}
                animate="animate"
                className="absolute -bottom-8 -right-8 bg-white/95 dark:bg-slate-900/95 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 z-30"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <div className="text-left">
                  <span className="text-[9px] text-slate-400 block font-semibold">Connected Device</span>
                  <span className="text-[10px] font-bold text-slate-950 dark:text-white leading-none">Apple Watch Series 10</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
