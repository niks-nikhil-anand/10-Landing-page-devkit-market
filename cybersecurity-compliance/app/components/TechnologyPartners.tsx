"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Database, Cloud, Terminal, ShieldAlert, Cpu, Activity, Play } from "lucide-react";

export default function TechnologyPartners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { name: "AWS", color: "hover:text-[#FF9900]", icon: <Cloud className="w-5 h-5" /> },
    { name: "Microsoft Azure", color: "hover:text-[#0089D6]", icon: <Server className="w-5 h-5" /> },
    { name: "Google Cloud", color: "hover:text-[#4285F4]", icon: <Database className="w-5 h-5" /> },
    { name: "Cloudflare", color: "hover:text-[#F38020]", icon: <Cloud className="w-5 h-5" /> },
    { name: "GitHub", color: "hover:text-[#181717]", icon: <Terminal className="w-5 h-5" /> },
    { name: "Okta", color: "hover:text-[#007FFF]", icon: <Cpu className="w-5 h-5" /> },
    { name: "Slack", color: "hover:text-[#4A154B]", icon: <Play className="w-5 h-5 rotate-90" /> },
    { name: "Jira", color: "hover:text-[#0052CC]", icon: <Server className="w-5 h-5" /> },
    { name: "Datadog", color: "hover:text-[#632CA6]", icon: <Activity className="w-5 h-5" /> },
    { name: "Splunk", color: "hover:text-[#F7007E]", icon: <Activity className="w-5 h-5" /> },
    { name: "CrowdStrike", color: "hover:text-[#FC0000]", icon: <ShieldAlert className="w-5 h-5" /> },
    { name: "SentinelOne", color: "hover:text-[#FF5A1F]", icon: <Cpu className="w-5 h-5" /> }
  ];

  return (
    <section 
      ref={ref}
      className="py-16 px-4 md:px-8 bg-cyber-dark/40 border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-10">
          Seamless Integrations with Enterprise Technology Partners
        </p>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className={`flex items-center gap-2.5 justify-center py-3.5 px-5 rounded-xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-white/10 text-gray-500 hover:text-white transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 ${partner.color}`}
            >
              <div className="text-current opacity-80 group-hover:opacity-100 transition-opacity">
                {partner.icon}
              </div>
              <span className="text-xs font-bold tracking-wider uppercase font-sans">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
