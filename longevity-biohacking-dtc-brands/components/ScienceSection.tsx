"use client";

import { motion } from "framer-motion";
import { 
  Atom, 
  BookOpen, 
  FlaskConical, 
  ClipboardCheck, 
  ShieldAlert, 
  Search, 
  Users, 
  Compass 
} from "lucide-react";

const sciencePoints = [
  {
    title: "Clinical Research",
    description: "Every formulation references active human clinical studies demonstrating compound efficacy.",
    icon: Atom,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Peer-Reviewed Ingredients",
    description: "Ingredients selected based on peer-reviewed biology reports published in top medical journals.",
    icon: BookOpen,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Third-Party Testing",
    description: "Independent labs audit every production batch for identity, safety, purity, and potency.",
    icon: FlaskConical,
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "GMP Certified Manufacturing",
    description: "Our domestic facilities strictly adhere to current Good Manufacturing Practices (cGMP) directives.",
    icon: ClipboardCheck,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "FDA Registered Facilities",
    description: "All packaging and blending operations occur inside state-of-the-art FDA audited hubs.",
    icon: ShieldAlert,
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Transparent Ingredient Sourcing",
    description: "Full supply chain traceability logs, detailing compound origins, molecular purity, and extraction types.",
    icon: Search,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Doctor Advisory Board",
    description: "Oversight and guidance from clinical longevity physicians, functional biologists, and toxicologists.",
    icon: Users,
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Evidence-Based Formulations",
    description: "No proprietary blends or hidden fillers—only pure active molecules matching scientific dose guidelines.",
    icon: Compass,
    color: "from-pink-500 to-rose-600",
  },
];

export default function ScienceSection() {
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
    <section id="science" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Clinical Standards
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            The Science Behind <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Active Molecule
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            We hold ourselves to rigorous biohacking and biotechnology standards, ensuring maximum bio-availability and safety.
          </p>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {sciencePoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${item.color} p-2.5 text-white shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-1.5 text-left">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* GMP Certified line */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[9px] text-slate-400">
                  <span className="w-3.5 h-3.5 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center text-green-500 font-bold">✓</span>
                  <span>Validated Protocol</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
