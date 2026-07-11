"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, DollarSign, Cpu, Settings, HeartPulse, Building2, Store, Briefcase } from "lucide-react";

export default function TrustedBy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    { name: "Startup Founders", icon: <Cpu className="w-5 h-5" /> },
    { name: "Venture Capital", icon: <DollarSign className="w-5 h-5" /> },
    { name: "SaaS Companies", icon: <Code className="w-5 h-5" /> },
    { name: "Manufacturing", icon: <Settings className="w-5 h-5" /> },
    { name: "Healthcare", icon: <HeartPulse className="w-5 h-5" /> },
    { name: "FinTech", icon: <Building2 className="w-5 h-5" /> },
    { name: "Retail & Commerce", icon: <Store className="w-5 h-5" /> },
    { name: "Professional Services", icon: <Briefcase className="w-5 h-5" /> }
  ];

  return (
    <section 
      ref={ref}
      className="py-14 px-4 md:px-8 bg-slate-50 border-y border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold text-muted uppercase tracking-widest mb-8">
          Empowering Financial Excellence Across Sectors
        </p>

        {/* Logo Placeholders Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 items-center justify-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center gap-2 justify-center py-4 px-3 rounded-2xl bg-white border border-slate-200/50 hover:border-primary/20 text-muted hover:text-primary transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.01)]"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-current border border-slate-100">
                {client.icon}
              </div>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-center font-sans">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
