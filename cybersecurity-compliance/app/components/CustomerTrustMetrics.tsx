"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, FileText, CheckCircle2, Shield, ShieldCheck, Globe } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

function Counter({ value, suffix = "", decimals = 0 }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || !nodeRef.current) return;

    const node = nodeRef.current;
    const controls = animate(0, value, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = value.toFixed(decimals) + suffix;
      },
    });

    return () => controls.stop();
  }, [inView, value, decimals, suffix]);

  return <span ref={nodeRef} className="font-bold">0{suffix}</span>;
}

export default function CustomerTrustMetrics() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const metrics = [
    {
      icon: <Users className="w-6 h-6 text-brand-blue" />,
      title: "Companies Protected",
      value: 5000,
      suffix: "+",
      decimals: 0,
      description: "Fast-growing startups and enterprises trust our compliance framework"
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-indigo" />,
      title: "Successful Audits",
      value: 250,
      suffix: "+",
      decimals: 0,
      description: "Completed SOC 2, ISO 27001, HIPAA, and GDPR certifications"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-brand-blue" />,
      title: "Platform Uptime",
      value: 99.99,
      suffix: "%",
      decimals: 2,
      description: "High-availability secure infrastructure with multi-zone redundancy"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-cyber" />,
      title: "Security Events Processed",
      value: 100,
      suffix: "M+",
      decimals: 0,
      description: "Real-time log ingestion, threat detection, and continuous monitoring"
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-indigo" />,
      title: "Security Monitoring",
      value: 24,
      suffix: "/7",
      decimals: 0,
      description: "Continuous automated scanning and proactive incident response"
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-blue" />,
      title: "Countries Supported",
      value: 40,
      suffix: "+",
      decimals: 0,
      description: "Empowering secure businesses to operate globally across jurisdictions"
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="trust-center" 
      className="relative py-24 px-4 md:px-8 bg-cyber-dark/80 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 cyber-grid opacity-[0.6]" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold text-brand-blue tracking-wide uppercase"
          >
            TRUSTED WORLDWIDE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans"
          >
            Proven Enterprise Trust & Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Our infrastructure checks your security posture against global standards around the clock, keeping you safe and compliant.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border-white/6 flex flex-col gap-4 relative group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-all duration-300">
                {metric.icon}
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1.5 flex items-baseline gap-1">
                  <Counter value={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-brand-blue transition-colors duration-300 mb-1">
                  {metric.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
