"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Search, 
  Copyright, 
  Fingerprint, 
  PenTool, 
  EyeOff, 
  Scale, 
  FileSignature, 
  Repeat, 
  Briefcase, 
  Globe, 
  ShieldAlert 
} from "lucide-react";

const services = [
  {
    title: "Patent Filing",
    description: "Prepare and file provisional, utility, and design patent applications with the USPTO and global offices.",
    icon: FileText,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Patent Search & Analysis",
    description: "Thorough prior art searches, patentability assessments, and freedom-to-operate analyses.",
    icon: Search,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Trademark Registration",
    description: "Protect brand names, logos, slogans, and trade dress internationally with comprehensive filings.",
    icon: Fingerprint,
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "Copyright Protection",
    description: "Secure registration for creative, literary, scientific, and software developments globally.",
    icon: Copyright,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Industrial Design Registration",
    description: "Protect aesthetic shapes, configurations, and visual packaging of consumer and industrial objects.",
    icon: PenTool,
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Trade Secret Protection",
    description: "Develop compliance plans, NDA policies, and audit logs to guard sensitive proprietary information.",
    icon: EyeOff,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "IP Litigation",
    description: "Enforce patent, trademark, and copyright rights, and defend against infringement claims.",
    icon: Scale,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Licensing Agreements",
    description: "Draft and negotiate licensing, monetization, and distribution covenants to maximize value.",
    icon: FileSignature,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Technology Transfer",
    description: "Facilitate transfers between universities, research entities, startups, and enterprise buyers.",
    icon: Repeat,
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Patent Portfolio Management",
    description: "Strategically review, audit, value, and maintain global intellectual property assets.",
    icon: Briefcase,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "International Patent Filing (PCT)",
    description: "Coordinate single international filing routes covering over 150 nations worldwide.",
    icon: Globe,
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Legal Due Diligence",
    description: "Evaluate intellectual property risk parameters during M&A checkouts and investment rounds.",
    icon: ShieldAlert,
    color: "from-blue-600 to-indigo-700",
  },
];

export default function Services() {
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
    <section id="services" className="py-24 relative bg-dot-grid">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 rounded-full bg-gradient-to-tr from-primary/5 to-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Practice Areas
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Complete Intellectual Property <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Protection Services
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Ensure your assets are protected at home and internationally through proven patent, trademark, and copyright strategies.
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
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon box */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${svc.color} p-2.5 text-white shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <svc.icon className="w-5 h-5" />
                </div>
                
                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {svc.description}
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
