"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Bot, 
  Download, 
  Star, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Coins, 
  Scale, 
  Megaphone, 
  Code, 
  Search, 
  BarChart, 
  Heart,
  Check
} from "lucide-react";

interface AgentItem {
  name: string;
  category: string;
  downloads: string;
  rating: number;
  description: string;
  avatarBg: string;
  icon: React.ReactNode;
}

export default function AgentMarketplace() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [installedIndex, setInstalledIndex] = useState<Record<number, boolean>>({});

  const list: AgentItem[] = [
    {
      name: "SupportSync Agent",
      category: "Customer Support",
      downloads: "12,482",
      rating: 4.9,
      description: "Auto-resolve tickets, draft technical support replies, and query internal RAG documentation databases.",
      avatarBg: "from-blue-500 to-indigo-500",
      icon: <MessageSquare className="w-5 h-5 text-white" />
    },
    {
      name: "SalesIntake Agent",
      category: "Sales Automation",
      downloads: "8,924",
      rating: 4.8,
      description: "Qualify leads, research CRM updates, personalize outbound sequences, and auto-book calendar slots.",
      avatarBg: "from-purple-500 to-indigo-500",
      icon: <TrendingUp className="w-5 h-5 text-white" />
    },
    {
      name: "HRPortal Agent",
      category: "HR Operations",
      downloads: "4,821",
      rating: 4.7,
      description: "Screen resumes, automate onboarding checklists, and query compliance manuals for policy details.",
      avatarBg: "from-teal-500 to-cyan-500",
      icon: <Users className="w-5 h-5 text-white" />
    },
    {
      name: "LedgerAudit Agent",
      category: "Finance & Accounting",
      downloads: "7,314",
      rating: 4.9,
      description: "Reconcile invoices, flag transaction variance, track runway burns, and generate quarterly files.",
      avatarBg: "from-emerald-500 to-green-500",
      icon: <Coins className="w-5 h-5 text-white" />
    },
    {
      name: "JuristBrief Agent",
      category: "Legal & Compliance",
      downloads: "3,924",
      rating: 4.8,
      description: "Review contract NDA terms, flag compliance drift, audit policies, and summarize legal files.",
      avatarBg: "from-red-500 to-orange-500",
      icon: <Scale className="w-5 h-5 text-white" />
    },
    {
      name: "SEO Copywriter Agent",
      category: "Marketing & Growth",
      downloads: "11,248",
      rating: 4.9,
      description: "Draft optimized blog posts, manage social handles, analyze keyword trends, and review copy specs.",
      avatarBg: "from-pink-500 to-rose-500",
      icon: <Megaphone className="w-5 h-5 text-white" />
    },
    {
      name: "DevCoder Agent",
      category: "Software Engineering",
      downloads: "14,842",
      rating: 4.9,
      description: "Write unit tests, fix security issues, refactor directories, and generate schema boilerplate.",
      avatarBg: "from-indigo-600 to-purple-600",
      icon: <Code className="w-5 h-5 text-white" />
    },
    {
      name: "LiteratureAudit Agent",
      category: "Research & Analysis",
      downloads: "5,921",
      rating: 4.7,
      description: "Summarize research papers, fetch references, cross-verify data, and index citation formats.",
      avatarBg: "from-cyan-500 to-blue-500",
      icon: <Search className="w-5 h-5 text-white" />
    },
    {
      name: "QuantData Agent",
      category: "Analytics & Telemetry",
      downloads: "9,821",
      rating: 4.9,
      description: "Query SQL databases, plot Recharts metrics, flag load anomalies, and trigger alerting slack updates.",
      avatarBg: "from-violet-500 to-purple-500",
      icon: <BarChart className="w-5 h-5 text-white" />
    },
    {
      name: "MedClinician Agent",
      category: "Healthcare Intake",
      downloads: "3,142",
      rating: 4.8,
      description: "HIPAA-compliant symptom review, summarize clinical notes, and coordinate appointment queues.",
      avatarBg: "from-green-500 to-teal-500",
      icon: <Heart className="w-5 h-5 text-white" />
    }
  ];

  const handleInstall = (index: number) => {
    setInstalledIndex((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setInstalledIndex((prev) => ({ ...prev, [index]: false }));
    }, 2500);
  };

  return (
    <section 
      ref={ref}
      id="marketplace" 
      className="py-24 px-4 md:px-8 bg-slate-950/40 relative overflow-hidden"
    >
      <div className="absolute inset-0 ai-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase">
            AGENT STORE
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            AI Agent Marketplace
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Install pre-configured workflow agents with targeted roles and pre-built vector DB knowledge bases.
          </p>
        </div>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {list.map((item, index) => {
            const isInstalled = installedIndex[index];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5.5 border-white/5 rounded-2xl flex flex-col justify-between relative group bg-slate-950/50 hover:bg-slate-900/50 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  {/* Avatar & Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.avatarBg} flex items-center justify-center shadow-md`}>
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xs font-extrabold text-white leading-normal group-hover:text-primary transition-colors duration-200">
                        {item.name}
                      </h3>
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed min-h-[72px]">
                    {item.description}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="flex flex-col gap-4.5 pt-4.5 border-t border-white/5 mt-4">
                  <div className="flex justify-between items-center text-[10px] text-gray-500 font-bold font-code">
                    <div className="flex items-center gap-1">
                      <Download className="w-3.5 h-3.5 text-gray-500" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-warning fill-warning" />
                      <span className="text-white">{item.rating}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleInstall(index)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold font-sans transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                      isInstalled
                        ? "bg-success text-white shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/8"
                    }`}
                  >
                    {isInstalled ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Installed</span>
                      </>
                    ) : (
                      "Install Agent"
                    )}
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
