"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  GitFork, 
  Clock, 
  BarChart3, 
  Database, 
  Calendar, 
  Activity, 
  Cloud, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const previews = [
  {
    id: "ai-assistant",
    name: "AI Chat Assistant",
    icon: Bot,
    tagline: "Natural Language Operations",
    description: "Write requirements or logic statements directly, letting our integrated AI agents launch scripts and workflows on your behalf.",
    highlights: ["Interactive chat console", "Context-aware variables lookup", "Automated code snippets creation"],
    stat: "Response time: <50ms",
  },
  {
    id: "automation-builder",
    name: "Automation Builder",
    icon: GitFork,
    tagline: "Visual Drag & Drop Rules",
    description: "Connect APIs, build data splits, filter conditions, and schedule follow-up timing sequences without writing any code.",
    highlights: ["Multi-step visual loops", "Fallback error routes", "Webhook triggers & filters"],
    stat: "100+ native nodes",
  },
  {
    id: "project-timeline",
    name: "Project Timeline",
    icon: Clock,
    tagline: "Interactive Gantt Maps",
    description: "Trace team milestones, task dependancies, blocker alerts, representative bandwidth counts, and delivery velocities.",
    highlights: ["Dynamic drag scheduling", "Milestone zoom controls", "Slack task synchronization"],
    stat: "Auto-synced updates",
  },
  {
    id: "analytics-charts",
    name: "Analytics Charts",
    icon: BarChart3,
    tagline: "Visual Metric Reports",
    description: "Evaluate pipeline conversions, campaign efficiency metrics, and platform performance parameters in real-time.",
    highlights: ["Custom report dashboards", "Export SVG & PDF reports", "Real-time query filters"],
    stat: "$8.6M Projected",
  },
  {
    id: "crm-dashboard",
    name: "CRM Dashboard",
    icon: Database,
    tagline: "360 Lead Visibility",
    description: "Centrally log customer contacts, deals sizes, sales conversations, and follow-up schedules in a database console.",
    highlights: ["Bi-directional CRM syncing", "Customer timeline audits", "Lead rating automations"],
    stat: "SOC-2 encrypted",
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: Calendar,
    tagline: "Outlook & Google Sync",
    description: "Coordinate meetings, schedule follow-ups, and block developer sprints on shared synchronized calendar feeds.",
    highlights: ["Round-robin scheduler", "Calendar conflict filters", "Auto-generated Zoom links"],
    stat: "Multi-feed sync",
  },
  {
    id: "activity-feed",
    name: "Activity Feed",
    icon: Activity,
    tagline: "Live Audit Log",
    description: "Inspect workspace updates, completed workflow summaries, representative notes, and API check limits instantly.",
    highlights: ["Real-time feed updates", "User role permission checks", "Filter by categories"],
    stat: "10ms refresh logs",
  },
  {
    id: "cloud-storage",
    name: "Cloud Storage",
    icon: Cloud,
    tagline: "Secure Document Store",
    description: "Store file attachments, project documents, pricing specifications, and client bills in folders secured by encryption.",
    highlights: ["Drag upload folders", "Custom document tags", "File download tracking"],
    stat: "AES-256 secure",
  },
  {
    id: "performance-metrics",
    name: "Performance Metrics",
    icon: TrendingUp,
    tagline: "SLA Availability Status",
    description: "Monitor platform response speeds, API request queues, data sync delays, and operational SLA guarantees.",
    highlights: ["Live server status indicator", "API call quota summaries", "Sync latency graphs"],
    stat: "99.99% Uptime",
  },
];

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState(previews[0].id);

  const selectedPreview = previews.find((p) => p.id === activeTab) || previews[0];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Sneak Peek
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            LaunchCloud™ Console Preview <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse-slow">
              Interactive Dashboard Spotlight
            </span>
          </h2>
          <p className="text-slate-605 dark:text-slate-300 text-base sm:text-lg">
            Navigate through our core console screens, automating workflows, tracking timelines, and configuring API keys.
          </p>
        </div>

        {/* Tab switch grid layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Tab selector */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-h-[600px] lg:overflow-y-auto pr-2 custom-scrollbar">
            {previews.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
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
                  
                  {/* Title & Tag */}
                  <div className="flex-1 min-w-0">
                    <span className={`block font-display font-bold text-sm truncate ${isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400 group-hover:text-slate-950 dark:group-hover:text-slate-200"}`}>
                      {item.name}
                    </span>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate mt-0.5">
                      {item.tagline}
                    </span>
                  </div>

                  {/* Indicator stripe */}
                  {isActive && (
                    <motion.div
                      layoutId="activePreviewIndicatorSaaS"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Tab Showcase Card */}
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
                  {/* Showcase Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-200/50 dark:border-slate-800/50">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary dark:text-blue-400 uppercase tracking-widest mb-1.5">
                        <selectedPreview.icon className="w-3.5 h-3.5" /> Workspace Module
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        {selectedPreview.name}
                      </h3>
                    </div>
                    {/* Badge */}
                    <div className="px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-bold shadow-sm">
                      {selectedPreview.stat}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4 text-left">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {selectedPreview.description}
                    </p>
                    
                    {/* Highlights list */}
                    <div className="space-y-3 pt-2">
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Features Highlights:</span>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {selectedPreview.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-205">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="pt-8 mt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">Available natively during early private testing.</span>
                  <a
                    href="#waitlist"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-secondary group transition-colors cursor-pointer"
                  >
                    Request Early Module Invitation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
