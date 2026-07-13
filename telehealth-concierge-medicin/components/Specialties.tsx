"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Baby, 
  Smile, 
  BrainCircuit, 
  HeartPulse, 
  Flower, 
  Bone, 
  Apple, 
  Activity, 
  Home 
} from "lucide-react";

const specialties = [
  {
    name: "General Medicine",
    icon: Heart,
    doctors: 18,
    wait: "< 5m wait",
    color: "text-blue-500 bg-blue-500/5 border-blue-500/10",
  },
  {
    name: "Pediatrics",
    icon: Baby,
    doctors: 12,
    wait: "Scheduled",
    color: "text-sky-500 bg-sky-500/5 border-sky-500/10",
  },
  {
    name: "Dermatology",
    icon: Smile,
    doctors: 9,
    wait: "< 15m wait",
    color: "text-teal-500 bg-teal-500/5 border-teal-500/10",
  },
  {
    name: "Mental Health",
    icon: BrainCircuit,
    doctors: 16,
    wait: "< 10m wait",
    color: "text-purple-500 bg-purple-500/5 border-purple-500/10",
  },
  {
    name: "Cardiology",
    icon: HeartPulse,
    doctors: 7,
    wait: "Referral required",
    color: "text-rose-500 bg-rose-500/5 border-rose-500/10",
  },
  {
    name: "Gynecology",
    icon: Flower,
    doctors: 11,
    wait: "Scheduled",
    color: "text-pink-500 bg-pink-500/5 border-pink-500/10",
  },
  {
    name: "Orthopedics",
    icon: Bone,
    doctors: 6,
    wait: "Scheduled",
    color: "text-slate-500 bg-slate-500/5 border-slate-500/10",
  },
  {
    name: "Nutrition",
    icon: Apple,
    doctors: 8,
    wait: "< 20m wait",
    color: "text-amber-500 bg-amber-500/5 border-amber-500/10",
  },
  {
    name: "Physiotherapy",
    icon: Activity,
    doctors: 10,
    wait: "Scheduled",
    color: "text-emerald-500 bg-emerald-500/5 border-emerald-500/10",
  },
  {
    name: "Family Medicine",
    icon: Home,
    doctors: 22,
    wait: "< 5m wait",
    color: "text-indigo-500 bg-indigo-500/5 border-indigo-500/10",
  },
];

export default function Specialties() {
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
    <section id="specialties" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider">
            Clinical Care
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Specialties Covered by Our <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Virtual Provider Networks
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Connect patients to certified board-certified physicians, therapists, and dietitians across critical medical domains.
          </p>
        </div>

        {/* Specialties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
        >
          {specialties.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between items-center text-center`}
              >
                {/* Speciality Icon wrapped inside colored circle */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border mb-4 font-bold ${spec.color}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {spec.name}
                  </h3>
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] text-slate-400 font-semibold">{spec.doctors} Active Doctors</span>
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      {spec.wait}
                    </span>
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
