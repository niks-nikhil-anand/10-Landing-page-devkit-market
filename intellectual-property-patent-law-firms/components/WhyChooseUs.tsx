"use client";

import { motion } from "framer-motion";
import { 
  UserCheck, 
  Globe, 
  CloudLightning, 
  Layers, 
  ShieldCheck, 
  FolderLock, 
  DollarSign, 
  Activity 
} from "lucide-react";

const reasons = [
  {
    title: "Experienced Patent Attorneys",
    description: "Highly skilled USPTO-registered attorneys specializing in software, bio-tech, and hardware patents.",
    icon: UserCheck,
  },
  {
    title: "Global IP Protection",
    description: "Secure patent filings internationally across WIPO and over 150 nations via the PCT pathway.",
    icon: Globe,
  },
  {
    title: "Cloud-Based Legal Platform",
    description: "Manage dossiers, communicate with dockets, and check status updates on our unified core cloud platform.",
    icon: CloudLightning,
  },
  {
    title: "End-to-End Case Management",
    description: "Follow invention workflows from initial assessment to drafting, filing, examination, and approval.",
    icon: Layers,
  },
  {
    title: "Enterprise Security",
    description: "Confidentiality structures reinforced with SOC 2 audits, ITAR guidelines, and HIPAA-eligible vaults.",
    icon: ShieldCheck,
  },
  {
    title: "Confidential Document Storage",
    description: "Confidential files protected at rest using AES-256 encryption keys across redundant cloud clusters.",
    icon: FolderLock,
  },
  {
    title: "Transparent Pricing",
    description: "Flat-rate application blueprints, transparent retainers, and clear schedules without hidden fees.",
    icon: DollarSign,
  },
  {
    title: "99.99% Availability",
    description: "Dependable cloud docketing infrastructure backed by solid SLA operational uptime commitments.",
    icon: Activity,
  },
];

export default function WhyChooseUs() {
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
            Why Us
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Protecting Ideas. <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Empowering Innovation.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Compare our professional legal capabilities, international reach, and unified security architecture.
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
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-primary/10 transition-transform group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
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
