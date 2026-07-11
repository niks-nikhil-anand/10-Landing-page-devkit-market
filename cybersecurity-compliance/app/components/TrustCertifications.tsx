"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldAlert, Award, FileText, CheckCircle2, Lock, Sparkles, ShieldCheck } from "lucide-react";

export default function TrustCertifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const badges = [
    { name: "SOC 2 Type II", standard: "AICPA TSC", icon: <ShieldCheck className="w-5 h-5 text-brand-blue" /> },
    { name: "ISO 27001 Certified", standard: "Information Security", icon: <Award className="w-5 h-5 text-brand-indigo" /> },
    { name: "ISO 27701", standard: "Privacy Information", icon: <Award className="w-5 h-5 text-brand-cyber" /> },
    { name: "GDPR Ready", standard: "EU Data Protection", icon: <FileText className="w-5 h-5 text-brand-blue" /> },
    { name: "HIPAA Ready", standard: "Healthcare Privacy", icon: <Lock className="w-5 h-5 text-brand-indigo" /> },
    { name: "PCI DSS", standard: "Payment Security", icon: <CheckCircle2 className="w-5 h-5 text-brand-cyber" /> },
    { name: "NIST CSF", standard: "Cybersecurity Framework", icon: <ShieldCheck className="w-5 h-5 text-brand-blue" /> },
    { name: "CIS Controls", standard: "Critical Security Controls", icon: <ShieldAlert className="w-5 h-5 text-brand-indigo" /> },
    { name: "CSA STAR", standard: "Cloud Security Alliance", icon: <Sparkles className="w-5 h-5 text-brand-cyber" /> },
    { name: "Cyber Essentials", standard: "UK NCSC Standard", icon: <Award className="w-5 h-5 text-brand-blue" /> },
    { name: "SSL Secure", standard: "2048-bit Handshake", icon: <Lock className="w-5 h-5 text-brand-indigo" /> },
    { name: "256-bit Encryption", standard: "AES-256 Storage", icon: <ShieldCheck className="w-5 h-5 text-brand-cyber" /> }
  ];

  return (
    <section 
      ref={ref}
      id="certifications" 
      className="py-20 px-4 md:px-8 bg-black/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-12">
          Validated Security Frameworks & Compliance Standards
        </p>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              whileHover={{ y: -4, borderColor: "rgba(14, 165, 233, 0.3)" }}
              className="glass-panel rounded-xl p-4.5 border-white/5 flex flex-col gap-3 hover:shadow-[0_0_15px_rgba(14,165,233,0.1)] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-white/4 flex items-center justify-center border border-white/5">
                  {badge.icon}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wide">{badge.name}</h4>
                <p className="text-[10px] text-gray-500 mt-0.5 font-medium">{badge.standard}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
