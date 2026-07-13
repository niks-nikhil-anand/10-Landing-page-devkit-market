"use client";

import { motion } from "framer-motion";
import { 
  Laptop, 
  Cpu, 
  Stethoscope, 
  Dna, 
  Pill, 
  Factory, 
  Car, 
  Smartphone, 
  Code2, 
  Radio, 
  Plane, 
  GraduationCap 
} from "lucide-react";

const industries = [
  { name: "Technology", icon: Laptop, color: "text-blue-500 bg-blue-500/5 border-blue-500/10" },
  { name: "Artificial Intelligence", icon: Cpu, color: "text-indigo-500 bg-indigo-500/5 border-indigo-500/10" },
  { name: "Healthcare", icon: Stethoscope, color: "text-sky-500 bg-sky-500/5 border-sky-500/10" },
  { name: "Biotechnology", icon: Dna, color: "text-teal-500 bg-teal-500/5 border-teal-500/10" },
  { name: "Pharmaceuticals", icon: Pill, color: "text-purple-500 bg-purple-500/5 border-purple-500/10" },
  { name: "Manufacturing", icon: Factory, color: "text-slate-500 bg-slate-500/5 border-slate-500/10" },
  { name: "Automotive", icon: Car, color: "text-rose-500 bg-rose-500/5 border-rose-500/10" },
  { name: "Consumer Electronics", icon: Smartphone, color: "text-amber-500 bg-amber-500/5 border-amber-500/10" },
  { name: "Software", icon: Code2, color: "text-emerald-500 bg-emerald-500/5 border-emerald-500/10" },
  { name: "Telecommunications", icon: Radio, color: "text-cyan-500 bg-cyan-500/5 border-cyan-500/10" },
  { name: "Aerospace", icon: Plane, color: "text-violet-500 bg-violet-500/5 border-violet-500/10" },
  { name: "Universities & Research", icon: GraduationCap, color: "text-pink-500 bg-pink-500/5 border-pink-500/10" },
];

export default function Industries() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
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
    <section id="industries" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider">
            Sectors We Protect
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Key Industries We Serve <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Across Global Markets
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Our legal patent attorneys represent creators, researchers, and enterprises across advanced technology sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer group"
              >
                {/* Icon wrapper inside colored circle */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border mb-4 font-bold ${ind.color}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {ind.name}
                  </h3>
                  <span className="block text-[10px] text-slate-400 font-semibold group-hover:text-slate-500 transition-colors uppercase tracking-wider">
                    Patent & IP filing channels
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
