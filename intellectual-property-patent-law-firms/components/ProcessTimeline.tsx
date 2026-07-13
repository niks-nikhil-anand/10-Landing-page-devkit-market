"use client";

import { motion } from "framer-motion";
import { 
  CalendarDays, 
  SearchCode, 
  Fingerprint, 
  FileText, 
  CheckSquare, 
  HeartPulse, 
  ArrowDown,
  Scale
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book Consultation",
    description: "Connect with our legal IP consultants to map out your innovation targets and timing schedules.",
    icon: CalendarDays,
    color: "bg-blue-500 shadow-blue-500/20",
  },
  {
    number: "02",
    title: "Innovation Assessment",
    description: "We analyze technical blueprints, software architectures, or designs to clarify patent/trademark viability.",
    icon: Scale,
    color: "bg-sky-500 shadow-sky-500/20",
  },
  {
    number: "03",
    title: "Patent & Trademark Search",
    description: "Thorough USPTO, EPO, and WIPO searches to filter prior art references and assess infringement risks.",
    icon: SearchCode,
    color: "bg-teal-500 shadow-teal-500/20",
  },
  {
    number: "04",
    title: "Legal Filing",
    description: "Attorneys draft utility specifications and prepare direct patent/trademark applications securely.",
    icon: FileText,
    color: "bg-purple-500 shadow-purple-500/20",
  },
  {
    number: "05",
    title: "Government Registration",
    description: "We manage official communications, answer office actions, and drive registrations to approval.",
    icon: CheckSquare,
    color: "bg-rose-500 shadow-rose-500/20",
  },
  {
    number: "06",
    title: "Portfolio Protection",
    description: "Active monitoring, deadline alerts, litigation guards, and licensing options preserve your value.",
    icon: HeartPulse,
    color: "bg-emerald-500 shadow-emerald-500/20",
  },
];

export default function ProcessTimeline() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
            Our Process
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            How We Protect Your <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Intellectual Property
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Follow a structured, legal-tech supported timeline that ensures thorough search, compliant drafting, and active protection.
          </p>
        </div>

        {/* Timeline grid (Desktop horizontal timeline, Mobile vertical list) */}
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
                  <span className="text-4xl font-extrabold text-slate-100 dark:text-slate-800 font-mono tracking-tight select-none">
                    {step.number}
                  </span>
                </div>

                {/* Card contents */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Mobile visual connecting indicators */}
                <div className="md:hidden flex justify-center pt-6 text-slate-300 dark:text-slate-600">
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
