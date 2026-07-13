"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  FlaskConical, 
  ShieldCheck, 
  Sparkles, 
  Bot, 
  Globe, 
  Coins, 
  Heart 
} from "lucide-react";

const reasons = [
  {
    title: "Clinically Researched Ingredients",
    description: "Every capsule contains peer-reviewed active compounds delivered at therapeutic dosages.",
    icon: FlaskConical,
    color: "text-blue-500 bg-blue-500/5 border-blue-500/10",
  },
  {
    title: "Third-Party Lab Tested",
    description: "Independent labs verify batch purity, heavy metal exclusion, and molecule potencies.",
    icon: CheckCircle2,
    color: "text-indigo-500 bg-indigo-500/5 border-indigo-500/10",
  },
  {
    title: "Doctor Formulated",
    description: "Designed in collaboration with our clinical medical panel and longevity neuroscientists.",
    icon: ShieldCheck,
    color: "text-accent bg-accent/5 border-accent/10",
  },
  {
    title: "Personalized Recommendations",
    description: "Algorithms analyze assessments and biomarker signals to curate daily doses.",
    icon: Sparkles,
    color: "text-rose-500 bg-rose-500/5 border-rose-500/10",
  },
  {
    title: "AI Health Insights",
    description: "Receive warning alerts and training insights synced directly with Apple Health, Oura, or WHOOP.",
    icon: Bot,
    color: "text-purple-500 bg-purple-500/5 border-purple-500/10",
  },
  {
    title: "Fast Worldwide Shipping",
    description: "Orders dispatch from temperature-controlled hubs, reaching over 85 countries.",
    icon: Globe,
    color: "text-emerald-500 bg-emerald-500/5 border-emerald-500/10",
  },
  {
    title: "Subscription Savings",
    description: "Subscribe to enjoy 15% discount retainers, custom reminder alerts, and free shipping.",
    icon: Coins,
    color: "text-amber-500 bg-amber-500/5 border-amber-500/10",
  },
  {
    title: "100% Satisfaction Guarantee",
    description: "Full refunds on your initial order within 30 days if you do not notice optimal improvements.",
    icon: Heart,
    color: "text-cyan-500 bg-cyan-500/5 border-cyan-500/10",
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Our Standards
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Why Longevity Seekers <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Trust LifeNova™
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            We merge cutting-edge nutraceutical biohacking with daily biomarkers telemetry to optimize your active healthspan.
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text */}
                  <div className="space-y-1.5 text-left">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
