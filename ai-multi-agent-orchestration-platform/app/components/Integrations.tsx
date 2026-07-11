"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Bot, 
  Layers, 
  Terminal, 
  Cloud, 
  Cpu, 
  Network, 
  MessageSquare, 
  Briefcase, 
  Activity, 
  PieChart,
  HardDrive,
  Globe,
  Database,
  FileText,
  Zap
} from "lucide-react";

export default function Integrations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const list = [
    { name: "OpenAI", icon: <Bot className="w-5 h-5 text-white" /> },
    { name: "Anthropic", icon: <Bot className="w-5 h-5 text-[#E0B0FF]" /> },
    { name: "Google Gemini", icon: <Cpu className="w-5 h-5 text-[#4285F4]" /> },
    { name: "Azure OpenAI", icon: <Cloud className="w-5 h-5 text-[#0089D6]" /> },
    { name: "AWS Bedrock", icon: <Cloud className="w-5 h-5 text-[#FF9900]" /> },
    { name: "Hugging Face", icon: <Bot className="w-5 h-5 text-[#FFD21E]" /> },
    { name: "LangChain", icon: <Layers className="w-5 h-5 text-[#326CE5]" /> },
    { name: "CrewAI", icon: <Network className="w-5 h-5 text-[#FC6D26]" /> },
    { name: "GitHub", icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ) },
    { name: "Slack", icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043zm10.135 3.761a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522V10.065zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V5.023a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.042zm-3.781 10.117a2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043z"/>
      </svg>
    ) },
    { name: "Discord", icon: <MessageSquare className="w-5 h-5 text-[#5865F2]" /> },
    { name: "Notion", icon: <FileText className="w-5 h-5 text-[#000000]" /> },
    { name: "Jira", icon: <Briefcase className="w-5 h-5 text-[#0052CC]" /> },
    { name: "Salesforce", icon: <Cloud className="w-5 h-5 text-[#00A1E0]" /> },
    { name: "HubSpot", icon: <Layers className="w-5 h-5 text-[#FF7A59]" /> },
    { name: "Zapier", icon: <Zap className="w-5 h-5 text-[#FF4F00]" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-[#336791]" /> },
    { name: "Redis", icon: <Zap className="w-5 h-5 text-[#D82C20]" /> },
    { name: "Qdrant", icon: <HardDrive className="w-5 h-5 text-[#00F0FF]" /> },
    { name: "Pinecone", icon: <HardDrive className="w-5 h-5 text-[#14B8A6]" /> },
    { name: "Docker", icon: <Layers className="w-5 h-5 text-[#2496ED]" /> },
    { name: "Kubernetes", icon: <Network className="w-5 h-5 text-[#326CE5]" /> }
  ];

  return (
    <section 
      ref={ref}
      id="integrations"
      className="py-20 px-4 md:px-8 bg-slate-950 border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 ai-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <span className="block text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-10">
          Native integrations with 45+ models and enterprise tools
        </span>

        {/* Logo grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {list.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2.5 justify-center py-3.5 px-6 rounded-xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-white/12 text-gray-500 hover:text-white transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            >
              <div className="text-current opacity-80">
                {item.icon}
              </div>
              <span className="text-xs font-bold tracking-wider uppercase font-sans">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
