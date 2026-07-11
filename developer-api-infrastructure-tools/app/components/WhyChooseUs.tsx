"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Globe, 
  Maximize2, 
  ShieldAlert, 
  Code, 
  RefreshCw, 
  BookOpen, 
  Terminal, 
  Eye 
} from "lucide-react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Global Edge Network",
      description: "Deliver API payloads with under 80ms round-trip latency using 180+ global CDN cache nodes."
    },
    {
      icon: <Maximize2 className="w-6 h-6 text-accent" />,
      title: "Auto Scaling Nodes",
      description: "Scale from 1 to 10,000 requests per second instantly. Our containers automatically adjust to server loads."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-success" />,
      title: "Enterprise Security",
      description: "Hardened defense-in-depth protocols featuring SOC 2 guidelines, ISO audit readiness, and hardware-backed JWT secrets."
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Languages SDKs",
      description: "Fully featured, type-safe SDK packages available for Node.js, TypeScript, Go, Python, Java, and Ruby."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-accent" />,
      title: "Zero Downtime Deployments",
      description: "Update API clusters and database schemas with blue-green pipelines that prevent client request drops."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-success" />,
      title: "Developer Documentation",
      description: "Exhaustive tutorials, reference guides, template starters, and interactive playgrounds designed for fast onboarding."
    },
    {
      icon: <Terminal className="w-6 h-6 text-primary" />,
      title: "CLI Support",
      description: "Manage servers, deploy edge scripts, and audit database connections directly from your native terminal."
    },
    {
      icon: <Eye className="w-6 h-6 text-accent" />,
      title: "Real-Time Observability",
      description: "Track compute overheads, monitor error distributions, and trace API logs using structured dashboards."
    }
  ];

  return (
    <section 
      ref={ref}
      id="why-choose-us" 
      className="py-24 px-4 md:px-8 bg-slate-950/40 border-y border-white/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 api-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-18 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase">
            WHY DEVELOPERS CHOOSE US
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Built for Developers. Engineered for Scale.
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            engineering teams around the world deploy on DevInfra to build scalable, secure, and low-latency cloud tools.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6.5 border-white/5 rounded-2xl flex flex-col gap-4 relative group"
            >
              <div className="w-11 h-11 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center transition-colors group-hover:border-primary/20 duration-300">
                {benefit.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
