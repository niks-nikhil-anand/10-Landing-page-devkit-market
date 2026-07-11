"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ShieldAlert, Cpu, Hammer, CheckCircle2, User, ChevronRight } from "lucide-react";

interface NodeDetails {
  name: string;
  role: string;
  model: string;
  tools: string[];
  systemPrompt: string;
  status: "idle" | "running" | "success" | "alert";
}

export default function WorkflowBuilder() {
  const [activeNode, setActiveNode] = useState<number>(1); // Default to Planner

  const nodes: NodeDetails[] = [
    {
      name: "User Input",
      role: "Initiator",
      model: "Client API Payload",
      tools: ["SDK Trigger", "Webhook Callback"],
      systemPrompt: "Starts execution pipeline with prompt parameters, context schema, and file uploads.",
      status: "success"
    },
    {
      name: "Planner Agent",
      role: "Orchestrator",
      model: "GPT-4o (Default)",
      tools: ["Task Decomposer", "Token Budget Manager"],
      systemPrompt: "You are the head orchestrator. Break down the user's objective into linear tasks. Dispatch tasks to Coder and Researcher, then compile outputs.",
      status: "success"
    },
    {
      name: "Research Agent",
      role: "Information Retriever",
      model: "Gemini 1.5 Pro",
      tools: ["Bing Search", "ArXiv PDF Parser", "Qdrant Indexer"],
      systemPrompt: "Extract semantically similar articles, retrieve web references, format quotes, and build index embeddings.",
      status: "success"
    },
    {
      name: "Reasoning Agent",
      role: "Problem Solver",
      model: "o1-pro",
      tools: ["Thought Chain Pooler", "Logic Evaluator"],
      systemPrompt: "You formulate deep-thought logic steps. Audit output data frames for contradictions or mathematical inconsistencies.",
      status: "success"
    },
    {
      name: "Tool Agent",
      role: "Action Executor",
      model: "Claude 3.5 Sonnet",
      tools: ["Python Sandbox", "Postgres Terminal", "GitHub Committer"],
      systemPrompt: "Generate TypeScript source code, execute script test cases, write code builds, and commit files.",
      status: "success"
    },
    {
      name: "Validation Agent",
      role: "Security Auditor",
      model: "Llama 3.1 70B",
      tools: ["Semgrep Scanner", "Dependency Checker"],
      systemPrompt: "Verify security constraints. Ensure source code contains no leaks, secrets, or package vulnerabilities.",
      status: "success"
    },
    {
      name: "Response Agent",
      role: "Final Reporter",
      model: "GPT-4o-mini",
      tools: ["Markdown Parser", "Slack Dispatcher"],
      systemPrompt: "Formulate final executive reports, format summaries, and dispatch results via webhooks.",
      status: "success"
    }
  ];

  const active = nodes[activeNode];

  return (
    <section 
      id="workflow" 
      className="py-24 px-4 md:px-8 bg-slate-950/20 border-y border-white/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 ai-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-bold text-secondary tracking-wide uppercase">
            Interactive Workflow Canvas
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Multi-Agent Connection Pipeline
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Click on any agent node below to inspect its system instructions, associated models, and integrated APIs.
          </p>
        </div>

        {/* Workflow container */}
        <div className="flex flex-col gap-10">
          
          {/* Node graph strip */}
          <div className="p-6 bg-slate-950/60 border border-white/5 rounded-2xl overflow-x-auto flex items-center justify-between gap-4 min-w-[800px] shadow-inner relative">
            <div className="absolute inset-0 api-grid opacity-5 pointer-events-none" />
            
            {nodes.map((node, index) => {
              const isActive = activeNode === index;
              return (
                <React.Fragment key={node.name}>
                  {/* Connect Line */}
                  {index > 0 && (
                    <div className="flex-1 h-0.5 relative min-w-[30px]">
                      <div className="absolute inset-0 bg-white/5" />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        style={{ originX: 0 }}
                      />
                    </div>
                  )}

                  {/* Node Button */}
                  <button
                    onClick={() => setActiveNode(index)}
                    className={`relative p-4 rounded-xl border flex flex-col items-center gap-2 text-center transition-all duration-300 cursor-pointer shrink-0 ${
                      isActive 
                        ? "bg-gradient-to-br from-primary to-secondary border-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.25)] scale-105" 
                        : "bg-white/3 hover:bg-white/5 border-white/5 text-gray-400 hover:text-white"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isActive ? "bg-white/20 text-white" : "bg-white/5 text-primary"
                    }`}>
                      {index + 1}
                    </div>
                    <span className="text-[11px] font-extrabold tracking-wide uppercase font-sans">
                      {node.name}
                    </span>
                    <span className="text-[9px] font-code font-bold opacity-60">
                      {node.role}
                    </span>
                  </button>
                </React.Fragment>
              );
            })}

          </div>

          {/* Details Panel container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* System prompt view (Left) */}
            <div className="lg:col-span-8">
              <div className="glass-card p-8 border-white/6 rounded-2xl bg-slate-900/60 shadow-lg h-full flex flex-col justify-between relative overflow-hidden font-code">
                <div className="scanline-overlay" />
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-primary" />
                      Agent System Instructions
                    </span>
                    <span className="text-[10px] font-bold text-accent font-sans">
                      Model: {active.model}
                    </span>
                  </div>

                  <div className="text-xs text-gray-300 leading-relaxed bg-black/45 border border-white/5 p-4 rounded-xl min-h-[120px]">
                    <span className="text-primary font-bold">SYSTEM_PROMPT: </span>
                    <p className="mt-2 text-accent/90">{active.systemPrompt}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 text-[9px] text-gray-500 font-bold flex items-center justify-between mt-4">
                  <span>Compilation Mode: Federated JSON API</span>
                  <span className="text-success flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-ping" />
                    Operational
                  </span>
                </div>
              </div>
            </div>

            {/* Tools list panel (Right) */}
            <div className="lg:col-span-4">
              <div className="glass-card p-6.5 border-white/6 rounded-2xl bg-slate-900/60 shadow-lg h-full flex flex-col justify-between">
                
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5 border-b border-white/5 pb-3">
                    <Hammer className="w-4 h-4 text-secondary" />
                    Attached Action Tools
                  </span>

                  <div className="flex flex-col gap-2.5">
                    {active.tools.map((tool) => (
                      <div 
                        key={tool}
                        className="p-3 bg-white/2 hover:bg-white/4 border border-white/5 rounded-xl flex items-center justify-between gap-3 text-xs text-white transition-colors"
                      >
                        <span className="font-code font-semibold">{tool}</span>
                        <span className="text-[8px] font-bold text-success bg-success/10 border border-success/20 px-2 py-0.5 rounded-full">
                          ACTIVE
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-[10px] text-gray-500 font-bold leading-normal mt-4">
                  * Tools are executed within isolated secure sandboxes.
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
