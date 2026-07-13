"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Flag } from "lucide-react";

const phases = [
  {
    quarter: "Q1",
    title: "Private Alpha",
    tagline: "Foundation Phase",
    status: "Completed",
    tasks: [
      { text: "Internal core testing", done: true },
      { text: "Early workflow prototypes", done: true },
      { text: "AI engine latency benchmarks", done: true },
    ],
    color: "border-green-500/20 dark:border-green-500/10 bg-green-500/5",
    iconColor: "text-green-500",
  },
  {
    quarter: "Q2",
    title: "Private Beta",
    tagline: "Validation Phase",
    status: "Active",
    tasks: [
      { text: "Invite-only cohort releases", done: true },
      { text: "Integrations validations", done: true },
      { text: "Real-time sync performance audits", done: false },
    ],
    color: "border-primary/20 dark:border-primary/10 bg-primary/5",
    iconColor: "text-primary",
  },
  {
    quarter: "Q3",
    title: "Public Beta",
    tagline: "Expansion Phase",
    status: "Upcoming",
    tasks: [
      { text: "Public developer API release", done: false },
      { text: "Community voting catalog", done: false },
      { text: "Slack & Teams integrations store", done: false },
    ],
    color: "border-slate-200/50 dark:border-slate-800/60 bg-transparent",
    iconColor: "text-slate-400",
  },
  {
    quarter: "Q4",
    title: "Official Launch",
    tagline: "Production Phase",
    status: "Upcoming",
    tasks: [
      { text: "Global public deployment", done: false },
      { text: "Dedicated enterprise SLAs", done: false },
      { text: "White-label custom portal", done: false },
    ],
    color: "border-slate-200/50 dark:border-slate-800/60 bg-transparent",
    iconColor: "text-slate-400",
  },
];

export default function ProductRoadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-dot-grid">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Roadmap
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            LaunchCloud™ Product Roadmap
          </h2>
          <p className="text-slate-605 dark:text-slate-305 text-base sm:text-lg">
            Track our progress from alpha concepts to public release and enterprise features.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector timeline line (Desktop Only) */}
          <div className="hidden lg:block absolute left-8 right-8 top-12 h-0.5 bg-slate-200 dark:bg-slate-800 z-0" />

          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative z-10 p-6 rounded-3xl border shadow-sm flex flex-col justify-between transition-all duration-300 min-h-[320px] ${phase.color}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-extrabold font-mono ${phase.iconColor}`}>{phase.quarter}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                    phase.status === "Completed"
                      ? "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-405 border border-green-200/50 dark:border-green-900/50"
                      : phase.status === "Active"
                      ? "bg-primary/10 text-primary border border-primary/20 animate-pulse"
                      : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-450 border border-slate-200/50 dark:border-slate-705/50"
                  }`}>
                    {phase.status}
                  </span>
                </div>

                <div className="text-left space-y-1">
                  <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white leading-tight">
                    {phase.title}
                  </h3>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    {phase.tagline}
                  </span>
                </div>

                {/* Tasks checklist */}
                <ul className="mt-6 space-y-2.5 text-left">
                  {phase.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 text-xs font-semibold leading-tight">
                      {task.done ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-350 dark:text-slate-650 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={task.done ? "text-slate-600 dark:text-slate-300" : "text-slate-400"}>
                        {task.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Milestone Flag */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between text-[10px] text-slate-400 font-semibold">
                <span className="flex items-center gap-1.5"><Flag className="w-3.5 h-3.5" /> Goal Post</span>
                <span>2026 Release</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
