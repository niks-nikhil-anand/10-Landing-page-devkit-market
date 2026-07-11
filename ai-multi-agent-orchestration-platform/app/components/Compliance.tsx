"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ShieldCheck, 
  FileCheck, 
  Lock, 
  Heart, 
  Key, 
  Users, 
  FileText, 
  EyeOff, 
  ShieldAlert, 
  LogIn 
} from "lucide-react";

export default function Compliance() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-success" />,
      title: "SOC 2 Type II Certified",
      description: "Rigorous independent audits validating operational security, availability, and processing integrity."
    },
    {
      icon: <FileCheck className="w-5 h-5 text-primary" />,
      title: "ISO 27001 Scopes",
      description: "Comprehensive information security management system (ISMS) ensuring systematic threat oversight."
    },
    {
      icon: <Lock className="w-5 h-5 text-accent" />,
      title: "GDPR Privacy Compliance",
      description: "Enforce strict data subject rights, consent rules, and local EU residency for PII variables."
    },
    {
      icon: <Heart className="w-5 h-5 text-danger" />,
      title: "HIPAA Data Isolation",
      description: "Dedicated hosting environments and BAA agreements to handle Protected Health Information (PHI) securely."
    },
    {
      icon: <Key className="w-5 h-5 text-success" />,
      title: "End-to-End Encryption",
      description: "Ensure agent connection messages and vector memory nodes are encrypted with AES-256 and TLS 1.3."
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      title: "Role-Based Access Control",
      description: "Fine-grained team permissions to manage prompt versioning, tool settings, and deployment gates."
    },
    {
      icon: <FileText className="w-5 h-5 text-accent" />,
      title: "Immutable Audit Logs",
      description: "Track prompt histories, tool executions, and API actions in read-only logs for forensic auditing."
    },
    {
      icon: <EyeOff className="w-5 h-5 text-warning" />,
      title: "Secrets Vault Management",
      description: "Encrypted keystores with automatic rotations to safeguard model tokens, DB hashes, and API parameters."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-primary" />,
      title: "Zero Trust Architecture",
      description: "Verify every access request across API boundaries, worker microservices, and VPC clusters."
    },
    {
      icon: <LogIn className="w-5 h-5 text-accent" />,
      title: "Enterprise SSO Protocols",
      description: "Enforce company credentials through SAML 2.0, OIDC, Okta, Microsoft Entra ID, and active directories."
    }
  ];

  return (
    <section 
      ref={ref}
      id="compliance" 
      className="py-24 px-4 md:px-8 bg-slate-950/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 ai-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-success/10 border border-success/20 text-xs font-bold text-success tracking-wide uppercase">
            SECURITY FIRST
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Enterprise Trust & Compliance
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Deploy autonomous agents without sacrificing data privacy. We comply with major international regulatory frameworks.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="glass-card p-5.5 border-white/5 rounded-2xl flex flex-col gap-4 bg-slate-950/40 hover:border-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center">
                {card.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xs font-extrabold text-white leading-normal">
                  {card.title}
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed font-semibold">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
