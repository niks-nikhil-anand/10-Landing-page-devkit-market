"use client";

import React, { useState } from "react";
import { Terminal, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Products", href: "#features" },
    { label: "Code Playground", href: "#code-playground" },
    { label: "Telemetry Metrics", href: "#dashboard" },
    { label: "Integrations", href: "#integrations" },
    { label: "Case Studies", href: "#success" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faq" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-5">
      <div className="max-w-7xl mx-auto bg-slate-950/70 backdrop-blur-xl border border-white/8 rounded-2xl px-6 py-3 flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:border-white/12 transition-all duration-300">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Terminal className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-sans">
            Dev<span className="text-primary">Infra</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold text-gray-400 hover:text-white transition-colors duration-200 link-underline py-1 tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="text-xs font-bold text-gray-300 hover:text-white transition-colors duration-200"
          >
            Sign In
          </a>
          <a
            href="#contact"
            className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-xs font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Start Building Free
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-slate-950/95 backdrop-blur-2xl rounded-2xl p-6 flex flex-col gap-6 lg:hidden z-40 border border-white/8 shadow-2xl"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5 uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 text-xs font-bold text-gray-300 hover:text-white transition-colors rounded-xl border border-white/8"
              >
                Sign In
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center gap-1.5"
              >
                Start Building Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
