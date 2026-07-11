"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, Award, Calendar, PhoneCall, Star, Server, CheckSquare } from "lucide-react";

export default function AboveFooterCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { label: "Businesses Secured", value: "5,000+" },
    { label: "Platform Availability", value: "99.99%" },
    { label: "Compliance Audits Completed", value: "250+" },
    { label: "Customer Rating", value: "4.9★" }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-28 px-4 md:px-8 bg-black overflow-hidden"
    >
      {/* Cloud-like blurred backgrounds representing network clouds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] rounded-full bg-brand-blue/8 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] rounded-full bg-brand-indigo/6 blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-dots opacity-40" />

      {/* Cloud Waves Divider (matching description "Cloud-inspired wave divider") */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 select-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-cyber-dark">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V93C38.16,84.14,158.74,67.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Side */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-bold text-brand-cyber w-fit tracking-wider uppercase"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Speed up your Audit Process</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              Ready to Simplify Your <br />
              <span className="text-gradient">Compliance Journey?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl"
            >
              Achieve SOC 2, ISO 27001, GDPR, and HIPAA compliance faster with automated evidence collection, continuous monitoring, and expert guidance. Book a free compliance assessment today.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#demo"
                className="px-6 py-3.5 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.45)] hover:scale-[1.02] transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Demo
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-gray-300 hover:text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4" />
                Talk to a Compliance Expert
              </a>
            </motion.div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/5 mt-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-2xl font-extrabold text-white">{m.value}</span>
                  <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider leading-snug">
                    {m.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Graphic Side */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[400px] aspect-square rounded-3xl glass-panel border-white/8 p-8 flex items-center justify-center overflow-hidden"
            >
              {/* Spinning cloud background illustration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[2px] border-dashed border-brand-blue/10 rounded-full scale-75"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-brand-indigo/10 rounded-full scale-50"
              />

              {/* Digital Certificate Illustration card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 w-full max-w-[280px] bg-slate-900/90 border border-white/10 rounded-2xl p-5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col gap-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-[11px] font-bold text-gray-400 tracking-wider">SECURE CERTIFICATE</span>
                  <Award className="w-4 h-4 text-brand-cyber" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-white">Compliance Standard</h4>
                    <span className="text-[10px] text-brand-cyber font-semibold">SOC 2 Type II Certified</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Evidence Autopilot Sync</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Continuous Audit Logging</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] text-gray-500">Hash: e8d4f7...92a1</span>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <span>ACTIVE</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating lock icon */}
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  x: [0, -3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 left-6 z-20 w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-brand-blue shadow-lg"
              >
                <Lock className="w-5 h-5" />
              </motion.div>

              {/* Floating Trust Badge */}
              <motion.div
                animate={{
                  y: [5, -5, 5],
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-12 right-6 z-20 flex items-center gap-1.5 bg-slate-900 border border-white/10 px-3 py-1.5 rounded-full shadow-lg"
              >
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-[10px] font-bold text-white">4.9/5 G2 Rating</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
