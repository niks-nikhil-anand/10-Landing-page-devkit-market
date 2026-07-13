"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  Workflow, 
  CloudLightning, 
  ShieldCheck, 
  Layout, 
  Fingerprint, 
  BarChart4, 
  Activity 
} from "lucide-react";

const reasons = [
  {
    title: "AI-Powered Lead Qualification",
    description: "Qualify leads and isolate buyers automatically using real-time behavioral tracking models.",
    icon: Bot,
  },
  {
    title: "Automated Sales Workflows",
    description: "Launch email drip follow-ups, trigger SMS reminders, and sync CRMs dynamically without code.",
    icon: Workflow,
  },
  {
    title: "Cloud Infrastructure",
    description: "Reliable database synchronization and secure client integrations running on AWS/Azure.",
    icon: CloudLightning,
  },
  {
    title: "Enterprise Security",
    description: "Complete compliance safeguards conforming to SOC-2 audits, HIPAA protocols, and ITAR compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Dashboards",
    description: "Configure deal views, representative performance metrics, and valuation reports easily.",
    icon: Layout,
  },
  {
    title: "Unlimited Integrations",
    description: "Connect to Salesforce, HubSpot, Zoho, Pipedrive, Slack, Stripe, and custom REST API endpoints.",
    icon: Fingerprint,
  },
  {
    title: "Real-Time Analytics",
    description: "Analyze email open percentages, meeting booking statistics, and pipeline changes instantly.",
    icon: BarChart4,
  },
  {
    title: "99.99% Uptime",
    description: "Dependable B2B docket and sales funnel automation backed by solid SLA commitments.",
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
            Why LeadFlow Cloud™
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Funnels Built to Convert. <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Revenue Built to Scale.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Compare our enterprise features, automated qualifications, and native ecosystem integrations.
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
