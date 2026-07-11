"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, ArrowRight, Play, CheckCircle, Code2, Server, Cpu } from "lucide-react";

export default function Hero() {
  const [typedCommand, setTypedCommand] = useState("");
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  const command = "npm install @devinfra/sdk && devinfra deploy";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCommand((prev) => prev + command.charAt(index));
      index++;
      if (index >= command.length) {
        clearInterval(interval);
        setTimeout(() => setIsDoneTyping(true), 600);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "API Requests Daily", value: "50M+" },
    { label: "Platform Uptime", value: "99.99%" },
    { label: "Countries Served", value: "180+" },
    { label: "Active Developers", value: "15,000+" },
    { label: "Global Latency", value: "<80ms" }
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-16 px-4 md:px-8 overflow-hidden api-grid">
      
      {/* Glow mesh overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/10 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side text content */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary w-fit tracking-wider uppercase"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Infrastructure Tools</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white font-sans"
          >
            Build Faster. <br />
            Deploy Smarter. <br />
            <span className="text-hero-gradient">Scale Without Limits.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 font-sans leading-relaxed max-w-xl"
          >
            A modern developer platform providing secure APIs, cloud infrastructure, authentication, databases, storage, observability, and deployment tools—all in one place.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-bold text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)] hover:scale-[1.02] transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              Start Building Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#code-playground"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/8 rounded-xl text-gray-300 hover:text-white font-bold text-sm transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              View Documentation
            </a>
          </motion.div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 pt-10 border-t border-white/8 mt-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                className="flex flex-col gap-1"
              >
                <span className="text-2xl font-extrabold text-white tracking-tight">{s.value}</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-snug">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right Side Visual Terminal */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[480px] rounded-2xl glass-card border-white/8 shadow-2xl p-5 flex flex-col gap-4 overflow-hidden font-code relative"
          >
            <div className="scanline-overlay" />
            
            {/* Window controls */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-error" />
                <span className="w-3 h-3 rounded-full bg-warning" />
                <span className="w-3 h-3 rounded-full bg-success" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5" />
                bash — session
              </span>
            </div>

            {/* Bash lines */}
            <div className="flex-1 text-xs leading-relaxed text-gray-300 flex flex-col gap-3 min-h-[190px]">
              <div>
                <span className="text-primary font-bold mr-1.5">&gt;</span>
                <span>{typedCommand}</span>
                <span className="animate-pulse bg-primary ml-0.5 inline-block w-1.5 h-3.5" />
              </div>

              {isDoneTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col gap-2.5 text-gray-400"
                >
                  <div className="text-success font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    <span>SDK successfully initialized. Deploying cluster...</span>
                  </div>
                  
                  {/* Mock API response */}
                  <div className="p-3 bg-black/45 border border-white/5 rounded-xl text-[11px] leading-relaxed text-accent">
                    <pre className="overflow-x-auto whitespace-pre">
{`{
  "status": "deployed",
  "dns": "api-cluster.devinfra.net",
  "nodes": ["sfo-1", "fra-1", "sin-1"],
  "ssl": "active",
  "handshake_ms": 32
}`}
                    </pre>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Window bottom status */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[9px] text-gray-500 font-bold">
              <div className="flex items-center gap-1.5">
                <Server className="w-3 h-3 text-success animate-pulse" />
                <span>SSL: Active (TLS 1.3)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-primary" />
                <span>Deploy: SF-1 Edge</span>
              </div>
            </div>

          </motion.div>

          {/* Floating badge */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 -left-6 z-20 glass-card px-4 py-3 border-white/5 rounded-xl flex items-center gap-3 shadow-lg"
          >
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-wider">Edge Regions</span>
              <span className="text-xs font-extrabold text-white">180+ Active Nodes</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
