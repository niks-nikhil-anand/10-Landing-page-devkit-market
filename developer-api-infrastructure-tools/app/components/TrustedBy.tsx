"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ShoppingBag, 
  Play, 
  Layers, 
  BookOpen, 
  MessageSquare, 
  Music, 
  Home, 
  HardDrive 
} from "lucide-react";

export default function TrustedBy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { name: "GitHub", icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ) },
    { name: "Shopify", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Netflix", icon: <Play className="w-5 h-5" /> },
    { name: "Vercel", icon: <Layers className="w-5 h-5" /> },
    { name: "Notion", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Discord", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Spotify", icon: <Music className="w-5 h-5" /> },
    { name: "Slack", icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043zm10.135 3.761a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522V10.065zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V5.023a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.042zm-3.781 10.117a2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043z"/>
      </svg>
    ) },
    { name: "Airbnb", icon: <Home className="w-5 h-5" /> },
    { name: "Dropbox", icon: <HardDrive className="w-5 h-5" /> }
  ];

  return (
    <section 
      ref={ref}
      className="py-14 px-4 md:px-8 bg-slate-950 border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          Trusted by Engineering Teams at World-Class Organizations
        </p>

        {/* Partners grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4 justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 justify-center py-3.5 px-2 rounded-xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-white/10 text-gray-500 hover:text-white transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
            >
              <div className="text-current opacity-80 transition-opacity">
                {partner.icon}
              </div>
              <span className="text-[10px] font-bold tracking-wider uppercase font-sans">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
