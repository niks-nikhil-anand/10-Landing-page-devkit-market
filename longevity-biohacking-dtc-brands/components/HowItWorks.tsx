"use client";

import { motion } from "framer-motion";
import { 
  FileEdit, 
  Activity, 
  ShoppingBag, 
  Compass, 
  Settings, 
  Heart,
  ArrowDown 
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Complete Health Assessment",
    description: "Launch our digital assessment tool to catalog your sleep patterns, metabolic rates, and energy goals.",
    icon: FileEdit,
    color: "bg-blue-500 shadow-blue-500/20",
  },
  {
    number: "02",
    title: "Personalized Analysis",
    description: "Our biomarker analysis models map diagnostic signals to evaluate active system stressors.",
    icon: Activity,
    color: "bg-indigo-500 shadow-indigo-500/20",
  },
  {
    number: "03",
    title: "Get Recommended Products",
    description: "Receive a personalized supplement formulation containing pure clinically researched ingredients.",
    icon: ShoppingBag,
    color: "bg-sky-500 shadow-sky-500/20",
  },
  {
    number: "04",
    title: "Track Biomarkers",
    description: "Connect wearable logs (Oura, WHOOP, Apple Health) to track systemic adjustments over time.",
    icon: Compass,
    color: "bg-purple-500 shadow-purple-500/20",
  },
  {
    number: "05",
    title: "Optimize Daily Routine",
    description: "Receive AI coaching notifications to adapt sleep habits, hydration levels, and capsule timing.",
    icon: Settings,
    color: "bg-rose-500 shadow-rose-500/20",
  },
  {
    number: "06",
    title: "Improve Healthspan",
    description: "Unlock long-term healthy aging improvements, cellular vitality, and active lifespan parameters.",
    icon: Heart,
    color: "bg-emerald-500 shadow-emerald-500/20",
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Our Flow
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            How LifeNova™ Works
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            A continuous loop of diagnostic insights, premium supplementation, and biomarker telemetry.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group p-8 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-lg hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300"
              >
                {/* Connector arrow (Hidden on last item) */}
                {idx < 5 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors duration-300">
                    <span className="text-xl font-bold font-mono">→</span>
                  </div>
                )}

                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${step.color} p-3 text-white flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-extrabold text-slate-100 dark:text-slate-850 font-mono tracking-tight select-none">
                    {step.number}
                  </span>
                </div>

                {/* Card contents */}
                <div className="space-y-2 text-left">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Mobile indicators */}
                <div className="md:hidden flex justify-center pt-6 text-slate-350 dark:text-slate-605">
                  {idx < 5 && <ArrowDown className="w-5 h-5 animate-bounce" />}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
