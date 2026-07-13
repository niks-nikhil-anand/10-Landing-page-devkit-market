"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Fingerprint, 
  Map, 
  FolderLock, 
  FileSignature, 
  UserSquare2, 
  Wallet, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  Share2, 
  BellRing,
  ArrowRight
} from "lucide-react";

const modules = [
  {
    id: "patent-management",
    name: "Patent Management",
    icon: FileText,
    tagline: "Track USPTO & Global Filings",
    description: "Launch customizable digital patent cards complete with tracking, examiner assignment logs, priority claim links, and maintenance fee timers.",
    benefits: ["USPTO & PCT automation paths", "Docket deadline protection", "Prior art reference indexes"],
    stat: "120,000+ patents logged",
  },
  {
    id: "trademark-management",
    name: "Trademark Management",
    icon: Fingerprint,
    tagline: "Brand Identity Protection",
    description: "Centrally trace international trademarks. Scan global registers for mark design infringements and organize class code logs.",
    benefits: ["Global Nice Class sorting", "Automated renewal warnings", "Conflict scan reports"],
    stat: "80,000+ marks registered",
  },
  {
    id: "case-tracking",
    name: "Case Tracking",
    icon: Map,
    tagline: "End-to-End Trial Chronology",
    description: "Follow litigation processes, office responses, examiner requests, and dispute files in a consolidated timeline dashboard.",
    benefits: ["Examination history timelines", "Examiner interview calendars", "Appeal status warnings"],
    stat: "96% Litigation Success",
  },
  {
    id: "document-vault",
    name: "Legal Document Vault",
    icon: FolderLock,
    tagline: "AES-256 Encrypted Security",
    description: "Confidential document vault protecting sensitive blueprints, specification drafts, intake agreements, and inventor reports.",
    benefits: ["Redundant AWS secure nodes", "Inventor upload portals", "Secure file access logging"],
    stat: "Confidential Storage SLA",
  },
  {
    id: "contract-management",
    name: "Contract Management",
    icon: FileSignature,
    tagline: "Monetize and License Assets",
    description: "Draft, execute, and track patent assignments, technology licensing covenants, non-disclosure protocols, and joint venture filings.",
    benefits: ["Integrated DocuSign layer", "Licensing payout alerts", "Template version controls"],
    stat: "250+ standard templates",
  },
  {
    id: "client-dashboard",
    name: "Client Dashboard",
    icon: UserSquare2,
    tagline: "Self-Service Client Portal",
    description: "A centralized secure dashboard where corporate clients, startups, and inventors can review filing statuses and pay billing invoices.",
    benefits: ["Inventor collaboration panels", "Real-time deadline warnings", "Instant message requests"],
    stat: "98% Client Rating",
  },
  {
    id: "billing-management",
    name: "Billing Management",
    icon: Wallet,
    tagline: "Frictionless IP Retainers",
    description: "Coordinate retainer structures, hourly legal billing codes, government application fee disbursements, and patent maintenance fees.",
    benefits: ["Hourly & flat fee models", "Automated retainer alerts", "Direct payment processing"],
    stat: "PCI-DSS Level 1 Secure",
  },
  {
    id: "ai-assistant",
    name: "AI Legal Assistant",
    icon: Cpu,
    tagline: "Intelligent Patent Drafting Aid",
    description: "Let AI scan patent specifications, compile prior art logs, analyze claims structures, and draft summaries for attorney review.",
    benefits: ["Automated claim drafting aid", "Semantic patent matching", "Office Action summary reports"],
    stat: "65% Drafting Speed Saved",
  },
  {
    id: "portfolio-analytics",
    name: "Portfolio Analytics",
    icon: BarChart3,
    tagline: "Strategic Legal Valuation",
    description: "Evaluate the commercial worth, geographic coverage, technology distribution, and lifespan profiles of your patent holdings.",
    benefits: ["Geographical market mapping", "Maintenance costs projections", "Technology category tags"],
    stat: "$1B+ managed IP value",
  },
  {
    id: "compliance-center",
    name: "Compliance Center",
    icon: ShieldCheck,
    tagline: "USPTO & PCT Regulatory Guard",
    description: "Ensure filings meet patent office requirements, BAA standards, and national export security regulations.",
    benefits: ["ITAR & export control audits", "HIPAA-safe document tags", "Universal filing logs"],
    stat: "USPTO Certified Check",
  },
  {
    id: "file-sharing",
    name: "Secure File Sharing",
    icon: Share2,
    tagline: "Encrypted IP Data Transfers",
    description: "Share designs, laboratory data, and patents with external stakeholders safely using access passwords and expiry timers.",
    benefits: ["Access duration parameters", "Confidential watermarks", "Real-time download alerts"],
    stat: "< 1s Share Delivery",
  },
  {
    id: "notifications",
    name: "Notification Center",
    icon: BellRing,
    tagline: "Docket Deadline Alarms",
    description: "Deliver instant SMS updates, email notifications, and dashboard reminders to inventors and attorneys ahead of key USPTO dates.",
    benefits: ["Custom email docket logs", "Automated text deadline alerts", "Multi-recipient warning loops"],
    stat: "100% On-Time Docketing",
  },
];

export default function PlatformModules() {
  const [activeTab, setActiveTab] = useState(modules[0].id);

  const selectedModule = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <section id="solutions" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Enterprise Modules
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Integrated Platform Modules <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built for Modern Scale
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Connect attorney dockets, client files, and patent metrics modularly inside one secure enterprise cloud dashboard.
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
                      layoutId="activePlatformModuleLine"
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
                  <span className="text-xs text-slate-400">Compliant with standard USPTO, WIPO, and PCT databases.</span>
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
