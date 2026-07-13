"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  Layers, 
  Activity, 
  Settings, 
  Bell, 
  FileText, 
  TrendingUp, 
  Apple, 
  Heart, 
  Gift, 
  Users, 
  ShieldCheck 
} from "lucide-react";

const capabilities = [
  {
    title: "AI Health Dashboard",
    description: "Scan biomarker levels and wearable alerts instantly using proprietary AI models.",
    icon: Bot,
    color: "bg-blue-500 shadow-blue-500/10",
  },
  {
    title: "Personalized Wellness Plans",
    description: "Build custom dietary regimens and supplement schedules tailored to quiz metrics.",
    icon: Layers,
    color: "bg-indigo-500 shadow-indigo-500/10",
  },
  {
    title: "Biomarker Tracking",
    description: "Centrally track sleep phases, HRV indices, blood oxygen, and glucose levels.",
    icon: Activity,
    color: "bg-sky-500 shadow-sky-500/10",
  },
  {
    title: "Subscription Management",
    description: "Pause, shift delivery dates, or change product quantities dynamically at any time.",
    icon: Settings,
    color: "bg-rose-500 shadow-rose-500/10",
  },
  {
    title: "Supplement Reminder",
    description: "Enable SMS reminders or calendar alerts so you never miss a daily serving.",
    icon: Bell,
    color: "bg-purple-500 shadow-purple-500/10",
  },
  {
    title: "Health Progress Reports",
    description: "Download detailed monthly charts tracking improvements in recovery and focus.",
    icon: FileText,
    color: "bg-teal-500 shadow-teal-500/10",
  },
  {
    title: "Recovery Analytics",
    description: "Trace sleep stages, restorative phases, and cardiovascular stress ratios.",
    icon: TrendingUp,
    color: "bg-emerald-500 shadow-emerald-500/10",
  },
  {
    title: "Nutrition Insights",
    description: "Personalized recommendations connecting dietary habits with metabolic markers.",
    icon: Apple,
    color: "bg-amber-500 shadow-amber-500/10",
  },
  {
    title: "Fitness Tracking",
    description: "Track workouts, active calories, resting heart rate, and training loads.",
    icon: Heart,
    color: "bg-cyan-500 shadow-cyan-500/10",
  },
  {
    title: "Member Rewards",
    description: "Accumulate loyalty tokens and enjoy savings on upcoming replenishment orders.",
    icon: Gift,
    color: "bg-violet-500 shadow-violet-500/10",
  },
  {
    title: "Expert Consultations",
    description: "Schedule video calls directly with qualified longevity and medical specialists.",
    icon: Users,
    color: "bg-pink-500 shadow-pink-500/10",
  },
  {
    title: "Secure Account Portal",
    description: "Data protected inside SOC-2 audited cloud servers using AES-256 keys.",
    icon: ShieldCheck,
    color: "bg-blue-600 shadow-blue-600/10",
  },
];

export default function PlatformFeatures() {
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
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
            Nova Ecosystem
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Advanced AI Health Dashboard <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built for Modern Scale
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Connect wearable devices, configure delivery schedules, track recovery metrics, and message health coaches.
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
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon box */}
                  <div className={`w-10 h-10 rounded-2xl ${item.color} p-2.5 text-white shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-1.5 text-left">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Accent Line */}
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mt-5 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
