"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Activity, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  Zap,
  Lock,
  Layers
} from "lucide-react";

// Form validation schema
const waitlistSchema = zod.object({
  name: zod.string().min(2, { message: "Name must be at least 2 characters." }),
  email: zod.string().email({ message: "Please enter a valid work email." }),
  company: zod.string().min(2, { message: "Company name must be at least 2 characters." }),
  teamSize: zod.string().min(1, { message: "Please select your team size." }),
  industry: zod.string().min(1, { message: "Please select your industry." }),
});

type WaitlistValues = zod.infer<typeof waitlistSchema>;

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      teamSize: "",
      industry: "",
    },
  });

  const onSubmit = async (data: WaitlistValues) => {
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSuccess(true);
    reset();

    // Trigger Referral / Invite modal inside FloatingWidgets
    localStorage.setItem("launchcloud-waitlist-registered", "true");
    localStorage.setItem("launchcloud-waitlist-name", data.name);
    window.dispatchEvent(new Event("launchcloud-waitlist-registered-event"));

    setTimeout(() => setSuccess(false), 5000);
  };

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
    <section id="waitlist" className="relative min-h-[90vh] pt-28 pb-14 flex items-center overflow-hidden bg-dot-grid">
      {/* Background radial glows */}
      <div className="absolute top-1/6 left-1/10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/10 to-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/6 right-1/10 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/15 to-purple/5 blur-3xl pointer-events-none" />

      {/* Floating visual elements */}
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Content and Waitlist Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Badge pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              🚀 Launching Soon • Limited Early Access
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              The Future of SaaS <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse-slow">
                Starts Here.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-slate-605 dark:text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal text-center lg:text-left"
            >
              A next-generation cloud platform built for modern teams with AI-powered automation, seamless collaboration, advanced analytics, and enterprise-grade security.
            </motion.p>

            {/* Form layout */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl glass-panel border border-white/20 dark:border-white/5 shadow-2xl p-6 md:p-8 max-w-lg mx-auto lg:mx-0 relative"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="name" className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      {...register("name")}
                      className={`w-full px-3 py-2.5 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-xs focus:outline-none transition-all ${
                        errors.name ? "border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-primary"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[9px] font-semibold text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="email" className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Work Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@technova.com"
                      {...register("email")}
                      className={`w-full px-3 py-2.5 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-xs focus:outline-none transition-all ${
                        errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-primary"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[9px] font-semibold text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Company Name */}
                <div className="space-y-1 text-left">
                  <label htmlFor="company" className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Company</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="TechNova Inc."
                    {...register("company")}
                    className={`w-full px-3 py-2.5 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-xs focus:outline-none transition-all ${
                      errors.company ? "border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-primary"
                    }`}
                  />
                  {errors.company && (
                    <span className="text-[9px] font-semibold text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.company.message}
                    </span>
                  )}
                </div>

                {/* Team Size & Industry */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label htmlFor="teamSize" className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Team Size</label>
                    <select
                      id="teamSize"
                      {...register("teamSize")}
                      className={`w-full px-3 py-2.5 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-xs focus:outline-none transition-all ${
                        errors.teamSize ? "border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-primary"
                      }`}
                    >
                      <option value="">Select size...</option>
                      <option value="1-5">1-5 members</option>
                      <option value="6-20">6-20 members</option>
                      <option value="21-100">21-100 members</option>
                      <option value="100+">100+ members</option>
                    </select>
                    {errors.teamSize && (
                      <span className="text-[9px] font-semibold text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.teamSize.message}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="industry" className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Industry</label>
                    <select
                      id="industry"
                      {...register("industry")}
                      className={`w-full px-3 py-2.5 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-xs focus:outline-none transition-all ${
                        errors.industry ? "border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-primary"
                      }`}
                    >
                      <option value="">Select industry...</option>
                      <option value="saas">SaaS / Tech</option>
                      <option value="finance">Finance</option>
                      <option value="agency">Marketing Agency</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.industry && (
                      <span className="text-[9px] font-semibold text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.industry.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-primary text-white rounded-xl font-bold shadow-md shadow-primary/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4.5 h-4.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Registering queue spot...
                    </>
                  ) : (
                    <>
                      Join the Waitlist <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                {/* Success alert */}
                {success && (
                  <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/20 text-[11px] font-semibold text-green-600 dark:text-green-400 flex items-center gap-2 text-left">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <span className="block font-bold">Successfully Registered!</span>
                      <span className="block font-normal mt-0.5">Check your inbox for early beta details. Invite team members to skip queue.</span>
                    </div>
                  </div>
                )}

              </form>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Dashboard Preview */}
          <div className="lg:col-span-6 relative w-full h-[480px] md:h-[520px] lg:h-[560px] flex items-center justify-center">
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] rounded-full border border-primary/5 dark:border-white/5" />
              <div className="absolute w-[440px] h-[440px] rounded-full border border-secondary/5 dark:border-white/5" />
            </div>

            <div className="relative w-full max-w-[460px]">
              
              {/* 1. Main Dashboard preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full rounded-2xl glass-panel shadow-2xl p-5 border border-white/20 relative"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/50 dark:border-slate-800/50 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-450" />
                    <span className="text-[10px] text-slate-400 font-mono ml-2">launchcloud-core-dev</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-[9px] text-primary font-bold flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 text-primary animate-pulse" /> LIVE DEMO
                  </div>
                </div>

                {/* Dashboard layout */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 space-y-3">
                    <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 text-left">
                      <span className="text-[9px] text-slate-450 block font-bold uppercase tracking-wider">PROJECTED EFFICIENCY RATE</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xl font-extrabold text-slate-900 dark:text-white">+84%</span>
                        <span className="text-[9px] text-green-500 font-bold">▲ 14.5% SLA</span>
                      </div>
                      
                      {/* Mini Area Graph */}
                      <div className="h-6 flex items-end gap-1 mt-2">
                        {[35, 55, 20, 68, 55, 78, 68, 82, 80, 95, 100].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-accent" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                        <span className="text-[8px] text-slate-400 block font-bold">AI CO-PILOT</span>
                        <span className="text-xs font-extrabold text-slate-900 dark:text-white mt-0.5 block">99.8% Online</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                        <span className="text-[8px] text-slate-400 block font-bold">TASK INTEGRITY</span>
                        <span className="text-xs font-extrabold text-slate-900 dark:text-white mt-0.5 block">99.98% OK</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-gradient-to-b from-primary/10 to-purple/5 border border-primary/15 flex flex-col items-center justify-center text-center h-full">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-1 text-primary">
                        <Activity className="w-4 h-4" />
                      </div>
                      <span className="text-[8px] text-slate-450 font-bold uppercase">KPI STAGE</span>
                      <span className="text-base font-extrabold text-slate-950 dark:text-white mt-1">99%</span>
                      <span className="text-[8px] text-slate-400 mt-1 block">Active Telemetry</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2. Overlapping Card: AI Assistant Mockup (Top Right - Float) */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-10 -right-6 z-20"
              >
                <motion.div
                  variants={floatVariants(8, 5)}
                  animate="animate"
                  className="w-52 rounded-2xl glass-panel shadow-2xl p-4 border border-white/20 space-y-3 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-primary animate-pulse" /> AI Agent
                    </span>
                    <span className="text-[9px] text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">Active</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { step: "Automating Daily Sync", desc: "Slack & Microsoft Teams", active: true },
                      { step: "Optimizing API keys", desc: "AWS gateway response", active: true }
                    ].map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[10px]">
                        <div className="min-w-0">
                          <span className="block font-bold truncate text-slate-800 dark:text-slate-205">{s.step}</span>
                          <span className="block text-[8px] text-slate-400">{s.desc}</span>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* 3. Overlapping Card: Team Notification Center (Bottom Left - Float) */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-10 -left-8 z-20"
              >
                <motion.div
                  variants={floatVariants(-10, 6.5)}
                  animate="animate"
                  className="w-50 rounded-2xl glass-panel shadow-2xl p-4 border border-white/20 space-y-3 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-accent" /> Workflows
                    </span>
                    <span className="text-[8px] font-mono text-slate-455 font-semibold">Active queue</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                    <span className="block text-[9px] font-bold text-slate-800 dark:text-slate-200">"Workflow builder resolved 18 tasks automatically in the background today."</span>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
