"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Zap, 
  Moon, 
  Brain, 
  Heart, 
  Activity, 
  ShieldCheck, 
  Flame, 
  Fingerprint, 
  Smile, 
  Dumbbell, 
  Award 
} from "lucide-react";

const benefits = [
  {
    title: "Healthy Aging",
    description: "Supports SIRT activators and NAD+ levels to mitigate cellular degradation over time.",
    icon: Sparkles,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Better Energy",
    description: "Optimizes mitochondrial efficiency for stable, non-jittery physical and cognitive stamina.",
    icon: Zap,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Improved Sleep",
    description: "Helps calm the central nervous system, extending deep sleep and restorative sleep ratios.",
    icon: Moon,
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "Brain Performance",
    description: "Nootropic compounds supporting neurogenesis, mental processing speeds, and memory clarity.",
    icon: Brain,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Heart Health",
    description: "Encourages vascular elasticity, nitric oxide delivery, and healthy resting cardiovascular metrics.",
    icon: Heart,
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Cellular Recovery",
    description: "Accelerates daily DNA repair pathways, helping tissues bounce back from exercise stressors.",
    icon: Activity,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Immune Support",
    description: "Strengthens cellular defense walls with bio-available daily antioxidant layers.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Metabolic Health",
    description: "Stimulates AMPK pathways, supporting insulin sensitivity and balanced blood sugars.",
    icon: Flame,
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Hormonal Balance",
    description: "Nutrients that assist adrenal health and promote balanced cortisol levels under load.",
    icon: Fingerprint,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Stress Management",
    description: "Adaptogenic compounds helping body systems adapt to daily work and exercise demands.",
    icon: Smile,
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Athletic Recovery",
    description: "Minimizes muscle soreness markers and replenishes cellular trace hydration stores.",
    icon: Dumbbell,
    color: "from-violet-500 to-purple-650",
  },
  {
    title: "Overall Wellness",
    description: "Comprehensive healthspan foundations built to support vitality, strength, and life vigor.",
    icon: Award,
    color: "from-blue-600 to-indigo-700",
  },
];

export default function HealthBenefits() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
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
    <section id="benefits" className="py-24 relative overflow-hidden bg-dot-grid">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-96 rounded-full bg-gradient-to-tr from-primary/5 to-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Healthspan Benefits
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Comprehensive Benefits <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              for Longevity & Vigor
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Our personalized longevity protocols support 12 core physiological systems to optimize daily health.
          </p>
        </div>

        {/* 12-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon box */}
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${benefit.color} p-2.5 text-white shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <benefit.icon className="w-5 h-5" />
                </div>
                
                {/* Content */}
                <div className="space-y-1.5 text-left">
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Accent Line */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mt-5 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
