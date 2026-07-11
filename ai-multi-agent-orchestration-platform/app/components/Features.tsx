"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Users, 
  Sliders, 
  Brain, 
  HardDrive, 
  Database, 
  FileText, 
  Terminal, 
  Globe, 
  Monitor, 
  Mic, 
  Eye, 
  Code2, 
  UserCheck, 
  Calendar, 
  Layers, 
  Cpu, 
  Activity, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Multi-Agent Collaboration",
      description: "Allow specialized agents to negotiate, share state context, divide task pipelines, and resolve goals together."
    },
    {
      icon: <Sliders className="w-6 h-6 text-secondary" />,
      title: "Visual Workflow Builder",
      description: "Design multi-agent paths using drag-and-drop nodes, loop execution conditionals, and custom validation gates."
    },
    {
      icon: <Brain className="w-6 h-6 text-accent" />,
      title: "Short-Term Memory",
      description: "Preserve sliding session variables, active session states, and message histories across multi-turn agent chats."
    },
    {
      icon: <HardDrive className="w-6 h-6 text-success" />,
      title: "Long-Term Memory",
      description: "Allow agents to persist learnings, user preferences, and profile properties across weeks or months of operations."
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Vector DB Integration",
      description: "Connect to database clusters (Pinecone, Qdrant, Milvus) automatically for semantic indexing operations."
    },
    {
      icon: <FileText className="w-6 h-6 text-secondary" />,
      title: "Knowledge Base (RAG)",
      description: "Ingest PDFs, technical documentation, Notion docs, and web links to retrieve contextual data points."
    },
    {
      icon: <Terminal className="w-6 h-6 text-accent" />,
      title: "Action API Tools",
      description: "Equip agents with pre-built actions to trigger database queries, fetch weather tables, or send webhook payloads."
    },
    {
      icon: <Globe className="w-6 h-6 text-success" />,
      title: "Browser Automation",
      description: "Allow agents to securely navigate websites, input form fields, bypass checks, and scrape structured content tables."
    },
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: "Computer Use Agents",
      description: "Instruct agents to navigate desktop OS workspaces, double-click files, and type inputs using screen telemetry."
    },
    {
      icon: <Mic className="w-6 h-6 text-secondary" />,
      title: "Voice Conversational Agents",
      description: "Build call-center handlers featuring sub-150ms real-time audio transcripts, emotional tones, and vocal hooks."
    },
    {
      icon: <Eye className="w-6 h-6 text-accent" />,
      title: "Vision AI Analysis",
      description: "Enable visual nodes to inspect receipts, scan blueprint layouts, classify images, and extract charts."
    },
    {
      icon: <Code2 className="w-6 h-6 text-success" />,
      title: "Function Calling Gates",
      description: "Generate structured JSON schemas automatically to trigger external program commands and script logic."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-primary" />,
      title: "Human-in-the-loop (HITL)",
      description: "Enforce review gates on sensitive actions like payouts, calendar invites, or data deletes before proceeding."
    },
    {
      icon: <Calendar className="w-6 h-6 text-secondary" />,
      title: "Agent Schedulers",
      description: "Execute research reviews, audit logs, sitemap generations, or database cleanups on recurring cron triggers."
    },
    {
      icon: <Layers className="w-6 h-6 text-accent" />,
      title: "Task Queue Pipelines",
      description: "Manage large asynchronous agent runs using fault-tolerant queues, dead-letter retries, and load managers."
    },
    {
      icon: <Cpu className="w-6 h-6 text-success" />,
      title: "Multi-Model Support",
      description: "Assign GPT-4o for planner modules, Claude for code logic, and Llama-3 for quick sorting within a single pipeline."
    },
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Telemetry Dashboards",
      description: "Track execution logs, token burn speeds, latency metrics, and API error spikes in real time."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-secondary" />,
      title: "Prompt Versioning Control",
      description: "A/B test system prompt scripts, manage variable formatting, and track historical performance gains."
    }
  ];

  return (
    <section 
      ref={ref}
      id="features" 
      className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"
    >
      {/* Mesh Glow Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 ai-grid opacity-35" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-18 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase">
            Core Orchestration Engine
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Enterprise Agent Infrastructure
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Everything you need to orchestrate multiple AI agents, manage vector memories, execute actions, and scale across pipelines.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              className="glass-card glass-card-hover p-8 border-white/6 flex flex-col gap-5 justify-between relative group cursor-pointer rounded-2xl"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/3 border border-white/6 flex items-center justify-center transition-colors group-hover:bg-primary/10 group-hover:border-primary/20 duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-primary pt-2 group-hover:translate-x-1 transition-transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
