"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  CheckCircle, 
  Coins, 
  Activity, 
  Mail, 
  Heart,
  Sparkles
} from "lucide-react";

const stats = [
  {
    label: "Qualified Leads",
    value: "12,000+",
    subtext: "▲ 18% from last quarter",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
  },
  {
    label: "Monthly Conversions",
    value: "4,800+",
    subtext: "High-intent SQL transitions",
    icon: CheckCircle,
    color: "from-sky-500 to-blue-600",
  },
  {
    label: "Pipeline Revenue",
    value: "$8.6M",
    subtext: "Weighted sales forecasting",
    icon: Coins,
    color: "from-purple-500 to-indigo-650",
  },
  {
    label: "Average Conversion Rate",
    value: "38%",
    subtext: "Traffic to booked meeting",
    icon: Activity,
    color: "from-emerald-500 to-teal-500",
  },
  {
    label: "Email Open Rate",
    value: "52%",
    subtext: "Outreach drip performance",
    icon: Mail,
    color: "from-pink-500 to-rose-500",
  },
  {
    label: "Customer Retention",
    value: "94%",
    subtext: "Annual SaaS renewal rate",
    icon: Heart,
    color: "from-cyan-500 to-sky-500",
  },
];

export default function AnalyticsDashboard() {
  return (
    <section className="py-24 relative overflow-hidden bg-dot-grid">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Key Metrics
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Proven Growth Track Record <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              & Revenue Performance
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Follow live conversions, forecast deal sizes, and analyze outreach efficiency values instantly.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 rounded-[28px] glass-panel border border-white/20 dark:border-white/5 shadow-2xl p-6 lg:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 dark:border-slate-800/50 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-display">Sales Pipeline Analytics</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono">FLOW-NODE-AUSTIN</div>
              </div>

              {/* Simulation Graph */}
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[9px] text-slate-400 block font-semibold uppercase tracking-wider">MONTHLY QUALIFIED PIPELINE</span>
                      <span className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5 block">$8,642,900 Active</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-[10px] text-green-500 font-bold">Updated Live</span>
                  </div>
                  
                  {/* SVG Trend Graph */}
                  <div className="relative h-28 w-full mt-4 flex items-end">
                    <svg className="w-full h-full text-primary" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="leadFlowChartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 25 Q 15 15 30 20 T 60 10 T 80 15 T 100 5 L 100 30 L 0 30 Z"
                        fill="url(#leadFlowChartGradient)"
                      />
                      <path
                        d="M 0 25 Q 15 15 30 20 T 60 10 T 80 15 T 100 5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Additional metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-slate-400 block font-semibold uppercase">Representative Velocity</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 block">14 days avg</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-slate-400 block font-semibold uppercase">Close Rate</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 block">38.4% SQLs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center gap-2 text-xs text-slate-400">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span>Automated prospecting scans social profiles and intent values every 10 minutes.</span>
            </div>
          </motion.div>

          {/* Right panel counter grids */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-450 uppercase tracking-wider">{stat.label}</span>
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${stat.color} p-1.5 text-white flex items-center justify-center shadow-sm`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight block">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 mt-1 block">
                      {stat.subtext}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
