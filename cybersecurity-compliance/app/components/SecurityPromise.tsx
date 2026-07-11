"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldAlert, Key, Smartphone, Eye, Brain, Compass } from "lucide-react";

export default function SecurityPromise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const promises = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-brand-blue" />,
      title: "Zero Trust Architecture",
      description: "Never trust, always verify. Every request is authenticated, authorized, and encrypted.",
      glowColor: "rgba(14, 165, 233, 0.15)"
    },
    {
      icon: <Key className="w-6 h-6 text-brand-indigo" />,
      title: "End-to-End Encryption",
      description: "Data is encrypted in transit using TLS 1.3 and at rest using AES-256 with user-managed keys.",
      glowColor: "rgba(99, 102, 241, 0.15)"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-brand-cyber" />,
      title: "Multi-Factor Authentication",
      description: "Enforce hardware-backed MFA security keys, TOTP, and single sign-on across all identities.",
      glowColor: "rgba(6, 182, 212, 0.15)"
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-blue" />,
      title: "Continuous Monitoring",
      description: "Automated integrity scans, drift detection, and active evidence collections run every hour.",
      glowColor: "rgba(14, 165, 233, 0.15)"
    },
    {
      icon: <Brain className="w-6 h-6 text-brand-indigo" />,
      title: "AI Threat Detection",
      description: "Identify configuration anomalies, posture risks, and suspicious behavior instantly with ML models.",
      glowColor: "rgba(99, 102, 241, 0.15)"
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-cyber" />,
      title: "24x7 Security Operations",
      description: "Global SOC analysts monitoring indicators of compromise and responding to incidents in real-time.",
      glowColor: "rgba(6, 182, 212, 0.15)"
    }
  ];

  return (
    <section 
      ref={ref}
      id="solutions" 
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-cyber-dark to-black overflow-hidden"
    >
      <div className="absolute inset-0 cyber-grid-dots opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="px-3 py-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-xs font-semibold text-brand-indigo tracking-wide uppercase"
          >
            OUR SECURITY COMMITMENT
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans"
          >
            Designed for Hardened Defense
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            We implement absolute defense-in-depth security mechanisms to keep your telemetry, code, and customer data protected at every layer.
          </motion.p>
        </div>

        {/* Promise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-2xl p-8 border-white/6 flex flex-col gap-5 relative group overflow-hidden"
            >
              {/* Soft glowing background element */}
              <div 
                className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none"
                style={{ backgroundColor: promise.glowColor }}
              />

              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 transition-colors group-hover:border-white/20">
                {promise.icon}
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors duration-300">
                  {promise.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {promise.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
