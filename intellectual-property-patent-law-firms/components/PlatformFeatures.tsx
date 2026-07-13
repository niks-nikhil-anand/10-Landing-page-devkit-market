"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Database, 
  Eye, 
  BellRing, 
  BarChart4, 
  UserCheck, 
  FileSignature, 
  CloudLightning, 
  CheckCircle, 
  FileBadge 
} from "lucide-react";

const features = [
  {
    title: "AI Patent Search",
    description: "Scan patent databases globally in seconds using proprietary AI semantic search algorithms.",
    icon: Search,
    color: "bg-blue-500 shadow-blue-500/10",
  },
  {
    title: "Global Patent Database",
    description: "Instant access to USPTO, EPO, WIPO, and over 100 national patent record archives.",
    icon: Database,
    color: "bg-indigo-500 shadow-indigo-500/10",
  },
  {
    title: "Trademark Monitoring",
    description: "24/7 automated alerts scanning new international registrations for brand conflict matches.",
    icon: Eye,
    color: "bg-sky-500 shadow-sky-500/10",
  },
  {
    title: "Deadline Alerts",
    description: "Dynamic docket reminders guarding maintenance fees, office action response dates, and renewals.",
    icon: BellRing,
    color: "bg-rose-500 shadow-rose-500/10",
  },
  {
    title: "Portfolio Analytics",
    description: "Visual analysis dashboards evaluating patent valuation metrics, lifespans, and global distributions.",
    icon: BarChart4,
    color: "bg-purple-500 shadow-purple-500/10",
  },
  {
    title: "Secure Client Portal",
    description: "Protected messaging and direct file uploads for secure client-attorney collaboration.",
    icon: UserCheck,
    color: "bg-teal-500 shadow-teal-500/10",
  },
  {
    title: "Automated Legal Documents",
    description: "Draft provisional applications, NDA covenants, and licensing blueprints instantly via templates.",
    icon: FileBadge,
    color: "bg-emerald-500 shadow-emerald-500/10",
  },
  {
    title: "Cloud Backup",
    description: "Bi-directional database synchronization with redundant server channels securing files.",
    icon: CloudLightning,
    color: "bg-amber-500 shadow-amber-500/10",
  },
  {
    title: "Digital Signature Support",
    description: "Legally compliant digital execution integrations (DocuSign/Adobe) executing filings directly.",
    icon: FileSignature,
    color: "bg-cyan-500 shadow-cyan-500/10",
  },
  {
    title: "Compliance Dashboard",
    description: "Track USPTO guidelines and international filing timelines automatically in real-time.",
    icon: CheckCircle,
    color: "bg-violet-500 shadow-violet-500/10",
  },
];

export default function PlatformFeatures() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
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
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
            Platform Capabilities
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Advanced IP Legal Technology <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built for Modern Scale
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Empower your team with automation that increases drafting speeds, detects trademark threats, and coordinates global files.
          </p>
        </div>

        {/* 10-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-850 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon box */}
                <div className={`w-11 h-11 rounded-2xl ${feature.color} p-2.5 text-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Accent Stria */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mt-6 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
