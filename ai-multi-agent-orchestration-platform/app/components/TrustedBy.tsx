"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Building, 
  Layers, 
  Briefcase, 
  Heart, 
  ShoppingBag, 
  Settings, 
  ShieldCheck, 
  Cpu 
} from "lucide-react";

export default function TrustedBy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const sectors = [
    { name: "Fortune 500", icon: <Building className="w-5 h-5" /> },
    { name: "SaaS Platforms", icon: <Layers className="w-5 h-5" /> },
    { name: "Investment Banks", icon: <Briefcase className="w-5 h-5" /> },
    { name: "MedTech Hubs", icon: <Heart className="w-5 h-5" /> },
    { name: "Global Retail", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Smart Factories", icon: <Settings className="w-5 h-5" /> },
    { name: "Public Sectors", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "AI Startups", icon: <Cpu className="w-5 h-5" /> }
  ];

  return (
    <section 
      ref={ref}
      className="py-14 px-4 md:px-8 bg-slate-950 border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          Trusted by Enterprise Operations & Dev Teams Worldwide
        </p>

        {/* Sectors list */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 justify-center">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 justify-center py-3.5 px-2 rounded-xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-white/10 text-gray-500 hover:text-white transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
            >
              <div className="text-current opacity-80">
                {sector.icon}
              </div>
              <span className="text-[10px] font-bold tracking-wider uppercase font-sans">
                {sector.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
