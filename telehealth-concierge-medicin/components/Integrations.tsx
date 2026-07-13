"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  Video, 
  MessageSquare, 
  CreditCard, 
  Database, 
  Activity, 
  Cloud,
  FileCode,
  CheckCircle,
  Cpu
} from "lucide-react";

const integrations = [
  { name: "Google Calendar", category: "Scheduling", icon: Calendar, description: "Synchronize provider clinic hours directly with Google Calendar.", status: "Verified" },
  { name: "Microsoft Outlook", category: "Scheduling", icon: Calendar, description: "Direct synchronization with Outlook Exchange calendars.", status: "Verified" },
  { name: "Zoom", category: "Communication", icon: Video, description: "Launch secure backup Zoom sessions directly inside EHR charts.", status: "Verified" },
  { name: "Twilio", category: "Communication", icon: MessageSquare, description: "SMS alerts, WhatsApp updates, and WebRTC fallback structures.", status: "Active" },
  { name: "Stripe", category: "Billing", icon: CreditCard, description: "Co-pays, concierge subscriptions, and automatic deposit routines.", status: "Active" },
  { name: "PayPal", category: "Billing", icon: CreditCard, description: "Global payments options for virtual consultation checkouts.", status: "Verified" },
  { name: "Epic Systems", category: "EHR Sync", icon: Database, description: "Bi-directional database synchronization with standard Epic nodes.", status: "Enterprise" },
  { name: "Cerner", category: "EHR Sync", icon: Database, description: "Sync health records directly with standard Cerner interfaces.", status: "Enterprise" },
  { name: "FHIR APIs", category: "Standards", icon: FileCode, description: "Standards-compliant HL7/FHIR Restful API architecture.", status: "Core" },
  { name: "Apple Health", category: "Wearables", icon: Activity, description: "Import patient vital trends (heart rate, sleep, steps) securely.", status: "Active" },
  { name: "Google Fit", category: "Wearables", icon: Activity, description: "Sync fit trends from wearable Android OS devices.", status: "Active" },
  { name: "AWS", category: "Cloud", icon: Cloud, description: "HIPAA-compliant hosting nodes and secure storage buckets.", status: "Core" },
  { name: "Azure", category: "Cloud", icon: Cloud, description: "Microsoft Cloud hosting infrastructure options.", status: "Core" },
];

export default function Integrations() {
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
    <section id="resources" className="py-24 relative overflow-hidden bg-dot-grid">
      <div className="absolute top-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
            Connected System
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Integrate with Your <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Existing Tech Stack
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Connect EHR systems, calendar providers, global checkouts, and medical devices seamlessly using built-in modules or custom endpoints.
          </p>
        </div>

        {/* Grid Matrix */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {integrations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Integration category and status tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      {item.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${
                      item.status === "Enterprise"
                        ? "bg-purple-100 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400 border border-purple-200/50 dark:border-purple-800/50"
                        : item.status === "Core"
                        ? "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                        : "bg-green-100 text-green-600 dark:bg-green-950/50 dark:text-green-400 border border-green-200/50 dark:border-green-800/50"
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-primary/10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Footer line details */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500" /> Connected API
                  </span>
                  <span className="font-mono text-[9px]">REST / JSON</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
