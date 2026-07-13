"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  TrendingUp, 
  Send, 
  Eye, 
  Workflow, 
  Radar, 
  MessageSquareCode, 
  BarChart4,
  Check 
} from "lucide-react";

const capabilities = [
  {
    title: "AI Lead Scoring",
    description: "Scan firmographics, demographics, and active intent checks dynamically to score lead values.",
    icon: Bot,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Sales Predictions",
    description: "Forecast pipeline closure probabilities and deal values using historical sales cycles models.",
    icon: TrendingUp,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Smart Follow-ups",
    description: "Deliver smart outreach responses dynamically triggered by prospect email replies.",
    icon: Send,
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "Behavior Tracking",
    description: "Analyze web interactions, downloads, and demo video clicks to calculate interest levels.",
    icon: Eye,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Automated Outreach",
    description: "Scale personalized email outreach sequences, optimizing deliverability and response metrics.",
    icon: Workflow,
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Intent Detection",
    description: "Detect timing intent metrics based on pricing page visits, terms reviews, and repeat views.",
    icon: Radar,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Conversation Intelligence",
    description: "Evaluate meeting transcripts automatically to isolate objections, interest cues, and next steps.",
    icon: MessageSquareCode,
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Predictive Analytics",
    description: "Isolate target profiles, channels, and campaigns driving high conversion rates.",
    icon: BarChart4,
    color: "from-pink-500 to-rose-600",
  },
];

export default function AIAutomation() {
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
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
            AI Sales Automation
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Intelligent Revenue AI <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built for Modern Scale
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Empower your representatives with AI that scores targets, forecasts deal closure rates, and handles outreach follow-ups automatically.
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} p-2.5 text-white shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Checked confirmation line */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[10px] text-slate-400">
                  <span className="w-3.5 h-3.5 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center text-green-500 font-bold">✓</span>
                  <span>AI Powered</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
