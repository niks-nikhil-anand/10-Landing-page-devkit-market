"use client";

import React, { useState } from "react";
import { 
  Bot, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Loader2,
  Lock,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  // Newsletter state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email) {
      setErrorMsg("Please enter your email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1200);
  };

  const colCompany = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Leadership", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Investors", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const colPlatform = [
    { name: "AI Agents", href: "#" },
    { name: "Workflow Builder", href: "#workflow" },
    { name: "Memory Engine", href: "#" },
    { name: "RAG Hub", href: "#" },
    { name: "API Registry", href: "#" },
    { name: "Integrations", href: "#integrations" },
    { name: "Monitoring Hub", href: "#" },
    { name: "Analytics Telemetry", href: "#" }
  ];

  const colDevelopers = [
    { name: "Documentation", href: "#" },
    { name: "SDK Packages", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "CLI Tools", href: "#" },
    { name: "Changelog", href: "#" },
    { name: "GitHub Repo", href: "#" },
    { name: "Status Page", href: "#" },
    { name: "Community Forum", href: "#" }
  ];

  const colSolutions = [
    { name: "Customer Support", href: "#" },
    { name: "Sales Automation", href: "#" },
    { name: "HR Operations", href: "#" },
    { name: "Finance Hub", href: "#" },
    { name: "Healthcare Intake", href: "#" },
    { name: "Smart Retail", href: "#" },
    { name: "Manufacturing Ops", href: "#" }
  ];

  const colResources = [
    { name: "Blog", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Reference Guides", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "FAQ", href: "#faq" }
  ];

  const colEnterprise = [
    { name: "Security Protocols", href: "#" },
    { name: "Compliance Decks", href: "#" },
    { name: "Trust Center", href: "#" },
    { name: "SOC 2 Reports", href: "#" },
    { name: "ISO 27001 scopes", href: "#" },
    { name: "GDPR guidelines", href: "#" },
    { name: "SLA Commitments", href: "#" }
  ];

  const partners = [
    { name: "OpenAI", color: "hover:text-white" },
    { name: "Anthropic", color: "hover:text-[#E0B0FF]" },
    { name: "Google", color: "hover:text-[#4285F4]" },
    { name: "Microsoft", color: "hover:text-[#0089D6]" },
    { name: "AWS", color: "hover:text-[#FF9900]" },
    { name: "Docker", color: "hover:text-[#2496ED]" },
    { name: "Kubernetes", color: "hover:text-[#326CE5]" },
    { name: "PostgreSQL", color: "hover:text-[#336791]" },
    { name: "Redis", color: "hover:text-[#D82C20]" },
    { name: "Qdrant", color: "hover:text-[#00F0FF]" },
    { name: "Pinecone", color: "hover:text-[#14B8A6]" },
    { name: "LangChain", color: "hover:text-[#326CE5]" },
    { name: "CrewAI", color: "hover:text-[#FC6D26]" },
    { name: "GitHub", color: "hover:text-white" },
    { name: "Vercel", color: "hover:text-white" }
  ];

  const badges = [
    "SOC 2 Type II Certified",
    "ISO 27001 Scopes Verified",
    "GDPR Privacy Protected",
    "HIPAA Data Isolation",
    "End-to-End Encryption",
    "Zero Trust Architecture",
    "Enterprise Ready SSO"
  ];

  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-white/5 pt-20 pb-12 relative overflow-hidden api-mesh">
      {/* Background Dots */}
      <div className="absolute inset-0 ai-grid-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* ABOVE FOOTER CTA */}
        <div className="glass-card p-8 md:p-12 border-white/6 rounded-2xl shadow-xl bg-slate-900/60 mb-20 flex flex-col lg:flex-row gap-8 justify-between items-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex flex-col gap-3 text-center lg:text-left max-w-2xl">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-ping" />
              <span className="text-[10px] font-extrabold uppercase text-success tracking-widest">
                Start building in minutes
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Build the Future of Autonomous AI.
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              Launch production-ready AI agents that collaborate intelligently, automate business workflows, and scale securely across your organization.
            </p>
            {/* Credentials row */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center lg:justify-start pt-3 border-t border-white/5 mt-2 text-xs font-semibold">
              <span className="text-white">250M+ <span className="text-gray-500 font-normal">Tasks Processed</span></span>
              <span className="text-white">500+ <span className="text-gray-500 font-normal">Enterprise Clients</span></span>
              <span className="text-white">99.99% <span className="text-gray-500 font-normal">SLA Uptime</span></span>
              <span className="text-white">SOC 2 & ISO 27001 <span className="text-gray-500 font-normal">Ready</span></span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-6 py-3.5 bg-primary hover:bg-indigo-600 text-white rounded-xl font-bold text-center text-xs flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/8 text-white rounded-xl font-bold text-center text-xs"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* 7-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand Info */}
          <div className="xl:col-span-1 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                <Bot className="w-4.5 h-4.5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Agent<span className="text-primary">Sync</span>
              </span>
            </a>
            <p className="text-xs leading-relaxed text-gray-500 pr-1">
              Multi-agent visual orchestrations, cognitive long-term memories, and model connection pool scaling.
            </p>
          </div>

          {/* Column 2: Platform */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase font-extrabold text-white tracking-widest">
              Platform
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold">
              {colPlatform.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Developers */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase font-extrabold text-white tracking-widest">
              Developers
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold">
              {colDevelopers.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Solutions */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase font-extrabold text-white tracking-widest">
              Solutions
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold">
              {colSolutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase font-extrabold text-white tracking-widest">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold">
              {colResources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Enterprise */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase font-extrabold text-white tracking-widest">
              Enterprise
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold">
              {colEnterprise.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 7: Company & Newsletter */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] uppercase font-extrabold text-white tracking-widest">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs font-semibold">
                {colCompany.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors link-underline py-0.5">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex flex-col gap-2 pt-3 border-t border-white/5">
              <span className="text-[10px] font-extrabold text-white uppercase tracking-wider">Stay Ahead in AI</span>
              
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Developer email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/3 border border-white/6 focus:bg-slate-900 focus:border-primary/60 rounded-lg px-3 py-2 text-[10px] text-white focus:outline-none transition-all"
                        aria-label="Developer email"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="absolute right-1 top-1 bottom-1 px-2.5 bg-primary text-white rounded-md flex items-center justify-center disabled:opacity-50 cursor-pointer"
                        aria-label="Subscribe"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-3 h-3 animate-spin" />
                        ) : (
                          <ArrowRight className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                    {errorMsg && (
                      <span className="text-[9px] text-rose-500 font-bold leading-none">{errorMsg}</span>
                    )}
                    <span className="text-[8px] text-gray-600 leading-tight block">
                      We dispatch model update notes and release templates. Opt-out at any time.
                    </span>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-3 bg-success/5 border border-success/15 rounded-lg text-center"
                  >
                    <span className="text-[10px] font-extrabold text-success block">Subscribed!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* SECURITY & TRUST BADGES STRIP */}
        <div className="py-8 border-b border-white/5">
          <div className="flex flex-wrap justify-center gap-3.5">
            {badges.map((badge) => (
              <div 
                key={badge}
                className="p-3 bg-white/2 border border-white/5 rounded-xl flex items-center gap-2 hover:border-primary/10 transition-colors cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-success shrink-0" />
                <span className="text-[10px] font-extrabold text-white tracking-wide">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY PARTNERS STRIP */}
        <div className="py-8 border-b border-white/5">
          <span className="block text-[10px] font-extrabold text-gray-500 uppercase tracking-widest text-center mb-6">
            Integrated with major AI and data processing tech stacks
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className={`text-xs font-extrabold text-gray-500 hover:text-white cursor-pointer transition-all duration-300 ${partner.color}`}
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>

        {/* SOCIAL & BOTTOM BAR */}
        <div className="pt-10 flex flex-col md:flex-row gap-6 items-center justify-between text-[11px] font-medium text-gray-500">
          
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="font-extrabold text-gray-300">&copy; 2026 AI Multi-Agent Orchestration Platform. All Rights Reserved.</span>
            <span className="text-[9px] text-gray-600 flex items-center gap-1.5 justify-center md:justify-start">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              SOC 2 Type II Certified and ISO 27001 Audited platform nodes.
            </span>
          </div>

          <div className="flex gap-3">
            {/* GitHub */}
            <a 
              href="#" 
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg bg-white/2 border border-white/5 hover:border-primary/20 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-white/2 border border-white/5 hover:border-primary/20 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* X */}
            <a 
              href="#" 
              aria-label="X"
              className="w-9 h-9 rounded-lg bg-white/2 border border-white/5 hover:border-primary/20 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <span className="font-extrabold text-xs text-current hover:text-white">𝕏</span>
            </a>
            {/* Discord */}
            <a 
              href="#" 
              aria-label="Discord"
              className="w-9 h-9 rounded-lg bg-white/2 border border-white/5 hover:border-primary/20 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a 
              href="#" 
              aria-label="YouTube"
              className="w-9 h-9 rounded-lg bg-white/2 border border-white/5 hover:border-primary/20 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.099-2.099C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.399.564C.576 4.337.576 6.163.576 6.163S0 8.659 0 11.156v2.309c0 2.497.576 4.993.576 4.993s.272 1.022 1.099 2.099c1.841.564 9.399.564 9.399.564s7.558 0 9.399-.564c1.025-.273 1.827-1.077 2.099-2.099 0 0 .576-2.497.576-4.993v-2.309c0-2.497-.576-4.993-.576-4.993zM9.545 15.568V7.127l7.305 4.221-7.305 4.22z"/>
              </svg>
            </a>
            {/* Reddit */}
            <a 
              href="#" 
              aria-label="Reddit"
              className="w-9 h-9 rounded-lg bg-white/2 border border-white/5 hover:border-primary/20 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.29-1.72l1.35-4.24 3.71.79c.07.9.82 1.61 1.73 1.61 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-.89 0-1.62.61-1.77 1.45l-4-1c-.17-.03-.35.07-.4.24l-1.6 5c-2.5.06-4.78.7-6.44 1.73-.56-.76-1.46-1.24-2.42-1.24-1.65 0-3 1.35-3 3 0 1.22.73 2.27 1.78 2.75-.04.25-.06.5-.06.75 0 3.47 4.04 6.3 9 6.3s9-2.83 9-6.3c0-.25-.02-.5-.06-.75 1.05-.48 1.78-1.53 1.78-2.75zM6 13.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zm10.5 4.5c-1.82 1.82-5.18 1.82-7 0-.17-.17-.17-.46 0-.63.17-.17.46-.17.63 0 1.48 1.48 4.26 1.48 5.74 0 .17-.17.46-.17.63 0 .17.17.46 0 .63zm-2.25-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Legal links row */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start pt-6 border-t border-white/5 mt-6 text-[10px] font-bold">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
          <a href="#" className="hover:text-primary">Cookie Policy</a>
          <a href="#" className="hover:text-primary">Security Overview</a>
          <a href="#" className="hover:text-primary">Responsible AI Framework</a>
          <a href="#" className="hover:text-primary">Accessibility Declaration</a>
          <a href="#" className="hover:text-primary">Trust Center</a>
          <a href="#" className="hover:text-primary">Sitemap</a>
          <span className="ml-auto text-gray-600 font-normal hidden md:inline">Powered by Autonomous Intelligence. Built for Enterprise Scale.</span>
        </div>

      </div>
    </footer>
  );
}
