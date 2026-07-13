"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Database, 
  GitFork, 
  Layers, 
  Mail, 
  Bot, 
  FileSpreadsheet, 
  TrendingUp, 
  CheckSquare, 
  CalendarDays, 
  UserSquare2, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

const modules = [
  {
    id: "crm-dashboard",
    name: "CRM Dashboard",
    icon: BarChart3,
    tagline: "360-Degree Lead Visibility",
    description: "Centrally track contacts, activities, deal sizes, pipeline steps, and notes on one secure sales core console.",
    benefits: ["Bi-directional contact syncing", "Interactive timeline logs", "Multi-stage pipeline tracking"],
    stat: "Unified Deal Metrics",
  },
  {
    id: "lead-database",
    name: "Lead Database",
    icon: Database,
    tagline: "Enriched Contact Profiles",
    description: "Manage millions of B2B prospect accounts complete with emails, phone lines, social handles, and company tags.",
    benefits: ["Automatic profile enrichment", "Advanced tags filtering", "Compliance data audits"],
    stat: "12M+ leads indexed",
  },
  {
    id: "pipeline-management",
    name: "Pipeline Management",
    icon: GitFork,
    tagline: "Drag deal stages easily",
    description: "Visually drag and drop leads through stages, updating deal values, owners, next steps, and expected closure dates.",
    benefits: ["Configurable sales steps", "Deal loss alerts", "Weighted pipeline summaries"],
    stat: "Smooth drag controls",
  },
  {
    id: "campaign-builder",
    name: "Campaign Builder",
    icon: Layers,
    tagline: "Launch Lead Outposts",
    description: "Map and launch target campaigns tracking click rates, conversions, page reads, and booked slots.",
    benefits: ["Multi-channel setups", "A/B splits testing", "Dynamic audience segments"],
    stat: "A/B Campaign Tests",
  },
  {
    id: "email-automation",
    name: "Email Automation",
    icon: Mail,
    tagline: "Behavioral Drip Outreach",
    description: "Deliver follow-up sequences automatically, matching email replies with custom responses and scoring tags.",
    benefits: ["Trigger-based drip paths", "Deliverability optimizations", "Spam filter validations"],
    stat: "100% Outreach Delivery",
  },
  {
    id: "ai-prospecting",
    name: "AI Prospecting",
    icon: Bot,
    tagline: "Semantic Target Filtering",
    description: "Let AI scan websites, look up company profiles, and locate matching stakeholders automatically based on rules.",
    benefits: ["Target criteria scanning", "Smart email suggestions", "Priority scoring labels"],
    stat: "65% Speed Saved",
  },
  {
    id: "sales-reports",
    name: "Sales Reports",
    icon: FileSpreadsheet,
    tagline: "Live Sales Performance Logs",
    description: "Evaluate representative efficiency metrics, conversion counts, pipeline gaps, and revenue contributions.",
    benefits: ["Dynamic reports creation", "Custom dashboard panels", "Excel & PDF files download"],
    stat: "Real-time spreadsheets",
  },
  {
    id: "revenue-forecasting",
    name: "Revenue Forecasting",
    icon: TrendingUp,
    tagline: "Forecast Closure Value",
    description: "Project future revenue metrics, calculating deal velocities, average sales duration, and pipeline weights.",
    benefits: ["Predictive closure curves", "Historical metrics comparisons", "Quota alignment reports"],
    stat: "$8.6M Projected",
  },
  {
    id: "task-management",
    name: "Task Management",
    icon: CheckSquare,
    tagline: "Track Daily Sales Tasks",
    description: "Assign follow-up reminders, email prompts, calendar dates, and call sheets to representatives automatically.",
    benefits: ["Automated task logging", "Representative notifications", "Completed task reports"],
    stat: "Task docket triggers",
  },
  {
    id: "meeting-scheduler",
    name: "Meeting Scheduler",
    icon: CalendarDays,
    tagline: "Outlook & Google Calendar Sync",
    description: "Share landing pages containing meeting links, letting leads book calendar slots directly with representatives.",
    benefits: ["Automatic reminders alerts", "Round-robin representative booking", "Zoom & Teams links creation"],
    stat: "100% Calendar Sync",
  },
  {
    id: "customer-portal",
    name: "Customer Portal",
    icon: UserSquare2,
    tagline: "Secure Self-Service Area",
    description: "A secure, client-facing dashboard where corporate targets can modify profiles, review bills, and upload files.",
    benefits: ["Encrypted communication", "Invoicing retainer portal", "Account configuration options"],
    stat: "Secure Customer Node",
  },
  {
    id: "admin-dashboard",
    name: "Admin Dashboard",
    icon: ShieldCheck,
    tagline: "SSO & IT Governance Console",
    description: "Centrally manage team permissions, audit access logs, configure single sign-on (SSO), and track billing tiers.",
    benefits: ["Role-based access checks", "SOC-2 audit reports", "SSO integration options"],
    stat: "Admin Console Certified",
  },
];

export default function PlatformModules() {
  const [activeTab, setActiveTab] = useState(modules[0].id);

  const selectedModule = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Integrated Modules
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Integrated Platform Modules <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built for Modern Scale
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Connect prospecting data, sales pipelines, email dockets, and dashboard analytics modularly inside one secure console.
          </p>
        </div>

        {/* Modular Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: Modules list */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-h-[600px] lg:overflow-y-auto pr-2 custom-scrollbar">
            {modules.map((m) => {
              const Icon = m.icon;
              const isActive = m.id === activeTab;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveTab(m.id)}
                  className={`flex items-center gap-3.5 p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                    isActive
                      ? "bg-white dark:bg-slate-800 border-primary/20 shadow-md shadow-primary/5 z-10"
                      : "bg-transparent hover:bg-white dark:hover:bg-slate-800/30 border-transparent hover:border-slate-200/50 dark:hover:border-slate-800/50"
                  }`}
                >
                  {/* Icon wrap */}
                  <div className={`p-2 rounded-xl transition-all duration-300 flex-shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-primary group-hover:bg-primary/5"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Text details */}
                  <div className="flex-1 min-w-0">
                    <span className={`block font-display font-bold text-sm truncate ${isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400 group-hover:text-slate-950 dark:group-hover:text-slate-200"}`}>
                      {m.name}
                    </span>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate mt-0.5">
                      {m.tagline}
                    </span>
                  </div>

                  {/* Active background indicator stripe */}
                  {isActive && (
                    <motion.div
                      layoutId="activePlatformModuleLineB2B"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Display: Content Showcase card */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="w-full rounded-[28px] glass-panel border border-white/20 dark:border-white/5 shadow-xl p-8 lg:p-10 flex flex-col justify-between min-h-[460px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-8">
                  {/* Module Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-200/50 dark:border-slate-800/50">
                    <div>
                      <div className="inline-flex items-center gap-1 text-[11px] font-bold text-primary dark:text-blue-400 uppercase tracking-widest mb-1.5">
                        <selectedModule.icon className="w-3.5 h-3.5" /> Module Spotlight
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        {selectedModule.name}
                      </h3>
                    </div>
                    {/* Badge */}
                    <div className="px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-bold shadow-sm">
                      {selectedModule.stat}
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="space-y-4">
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {selectedModule.description}
                    </p>
                    
                    {/* Capabilities list */}
                    <div className="space-y-3 pt-2">
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Key Capabilities:</span>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {selectedModule.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action link */}
                <div className="pt-8 mt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">Deployable natively or via REST API integrations.</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-secondary group transition-colors cursor-pointer"
                  >
                    Request Integration Access <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
