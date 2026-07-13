"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  Users, 
  Vote, 
  Sparkles, 
  HelpCircle, 
  Coins, 
  MessageSquare, 
  Gift 
} from "lucide-react";

const reasons = [
  {
    title: "Exclusive Early Access",
    description: "Get invited to our private testing environment before the general public release.",
    icon: Rocket,
    color: "text-blue-500 bg-blue-50/50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/50",
  },
  {
    title: "Founder Community",
    description: "Connect with startup builders, SaaS executives, and technical product managers.",
    icon: Users,
    color: "text-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-100 dark:border-indigo-900/50",
  },
  {
    title: "Product Roadmap Voting",
    description: "Vote on upcoming timeline priorities and submit feature suggestions.",
    icon: Vote,
    color: "text-accent bg-accent/10 dark:bg-accent/20 border-accent/20 dark:border-accent/40",
  },
  {
    title: "Beta Features",
    description: "Test advanced AI workflow components and integrations before everyone else.",
    icon: Sparkles,
    color: "text-purple-500 bg-purple-50/50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/50",
  },
  {
    title: "Priority Support",
    description: "Direct channel access to our core development and founder support specialists.",
    icon: HelpCircle,
    color: "text-rose-500 bg-rose-50/50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/50",
  },
  {
    title: "Special Founder Pricing",
    description: "Secure lifetime premium discounts and free beta credits locked on launch day.",
    icon: Coins,
    color: "text-amber-500 bg-amber-50/50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/50",
  },
  {
    title: "Direct Product Feedback",
    description: "Share objections or logic suggestions, directly influencing platform interfaces.",
    icon: MessageSquare,
    color: "text-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/20 border-cyan-100 dark:border-cyan-900/50",
  },
  {
    title: "Launch-Day Rewards",
    description: "Earn custom workspace integrations and account credit limits by sharing referral links.",
    icon: Gift,
    color: "text-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/50",
  },
];

export default function WhyJoin() {
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
            Early Perks
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Why Join the Waitlist?
          </h2>
          <p className="text-slate-605 dark:text-slate-300 text-base sm:text-lg">
            Secure early founder rewards, influence timeline developments, and unlock beta access codes.
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
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-transform duration-305 group-hover:scale-105 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text */}
                  <div className="space-y-1.5 text-left">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
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
