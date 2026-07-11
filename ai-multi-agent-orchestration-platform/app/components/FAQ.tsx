"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is Multi-Agent AI Orchestration?",
      answer: "Multi-Agent AI refers to a system design where multiple, specialized AI agents (each with its own prompt templates, LLMs, and tool configurations) collaborate to solve goals. For example, a Planner Agent divides a task, a Researcher retrieves details, and a Coder writes scripts. This divide-and-conquer approach vastly outperforms single-prompt LLM runs on complex goals."
    },
    {
      question: "Which LLMs are supported out of the box?",
      answer: "We support OpenAI (GPT-4o, o1), Anthropic Claude (3.5 Sonnet, Opus), Google Gemini (1.5 Pro, Flash), AWS Bedrock nodes, Azure OpenAI, and open-source models like Llama-3 and Mistral via Hugging Face and Ollama."
    },
    {
      question: "Can I self-host the AgentSync platform?",
      answer: "Yes. Our workflow execution runtime, tool sandboxes, and database connection modules are fully open-source. You can self-host the core stack using Docker Compose or Kubernetes, though our hosted cloud offers multi-region latency optimizations."
    },
    {
      question: "How secure is the platform for corporate datasets?",
      answer: "Security is built in. All communication channels are TLS 1.3 encrypted, and databases support AES-256 encryption at rest. We do not train models on your context data, and we support ISO 27001, SOC 2, HIPAA, and GDPR standards."
    },
    {
      question: "Does it support RAG (Retrieval-Augmented Generation)?",
      answer: "Yes, fully. The platform contains a native RAG engine that automatically ingests PDFs, Notion boards, web pages, and SQL schemas. It generates vector embeddings and syncs them with Qdrant, Pinecone, or pgvector."
    },
    {
      question: "Does the platform support Model Context Protocol (MCP)?",
      answer: "Yes. We fully support Anthropic's Model Context Protocol (MCP) to let agents read contexts and call tools across unified network boundaries securely."
    },
    {
      question: "Can I deploy the platform on Kubernetes?",
      answer: "Yes. We provide official Helm charts and Operators to deploy the orchestration engine, task queues, and sandbox worker nodes on Kubernetes (EKS, GKE, AKS, or bare metal)."
    },
    {
      question: "Is there an API available for program integrations?",
      answer: "Yes. You can trigger workflows, dispatch data payloads, monitor token counts, and inspect agent chat histories programmatically via our REST endpoints or Node.js/Python SDKs."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section 
      id="faq" 
      className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent tracking-wide uppercase">
            TECHNICAL FAQS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.question}
                className="glass-card border-white/5 bg-slate-900/40 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left font-sans font-bold text-white text-sm md:text-base hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-white/5 p-6 bg-black/30" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-semibold">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
