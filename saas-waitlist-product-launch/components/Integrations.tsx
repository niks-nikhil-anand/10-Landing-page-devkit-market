"use client";

import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Calendar, 
  Layers, 
  GitFork, 
  Workflow, 
  Wallet, 
  Database, 
  Cloud,
  FileCode,
  CheckCircle,
  HelpCircle
} from "lucide-react";

const integrations = [
  { name: "Slack", category: "Messaging", icon: MessageSquare, description: "Stream alerts and status update logs directly to sales team channels.", status: "Verified" },
  { name: "Google Workspace", category: "Workspace", icon: Calendar, description: "Sync calendar slots, task sheets, and member accounts.", status: "Verified" },
  { name: "Microsoft Teams", category: "Messaging", icon: MessageSquare, description: "Notify channels when milestones update or dockets resolve.", status: "Active" },
  { name: "Notion", category: "Documentation", icon: Layers, description: "Export task descriptions, team guidelines, and logs dynamically.", status: "Active" },
  { name: "GitHub", category: "Developer", icon: GitFork, description: "Trigger deployment pipelines and link repositories.", status: "Verified" },
  { name: "Jira", category: "Operations", icon: Calendar, description: "Sync task boards cards, issue states, and sprint estimates.", status: "Verified" },
  { name: "Zapier", category: "Automation", icon: Workflow, description: "Connect with hundreds of external business applications.", status: "Active" },
  { name: "Stripe", category: "Payments", icon: Wallet, description: "Track billing retainers, checkouts, and invoices securely.", status: "Core" },
  { name: "HubSpot", category: "CRM", icon: Database, description: "Sync contacts records, pipeline metrics, and chat conversations.", status: "Active" },
  { name: "Salesforce", category: "CRM", icon: Database, description: "Update lead ratings and customer deals sizes instantly.", status: "Verified" },
  { name: "AWS", category: "Hosting", icon: Cloud, description: "Secure, SOC-2 compliant hosting storage and sync services.", status: "Core" },
  { name: "Azure", category: "Hosting", icon: Cloud, description: "Deploy redundant data clusters and API key gateways.", status: "Core" },
  { name: "REST API", category: "Developer", icon: FileCode, description: "Query waitlist logs and timelines via standard JSON webhooks.", status: "Core" },
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
    <section className="py-24 relative overflow-hidden bg-dot-grid">
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
            Nova Sync
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Connect LaunchCloud™ with <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Existing Workspace
            </span>
          </h2>
          <p className="text-slate-605 dark:text-slate-300 text-base sm:text-lg">
            Synchronize tasks, timelines, code repositories, and payment pipelines using verified native APIs.
          </p>
        </div>

        {/* Matrix Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {integrations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-5 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category and status tag */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      {item.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${
                      item.status === "Core"
                        ? "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200/50 dark:border-slate-705/50"
                        : "bg-green-100 text-green-600 dark:bg-green-950/50 dark:text-green-400 border border-green-200/50 dark:border-green-800/50"
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-primary/10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal text-left">
                    {item.description}
                  </p>
                </div>

                {/* Footer line */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[9px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" /> Active Sync
                  </span>
                  <span className="font-mono text-[8px]">OAUTH / API</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
