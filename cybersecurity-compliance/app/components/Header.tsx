"use client";

import React, { useState } from "react";
import { Shield, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Solutions", href: "#solutions" },
    { label: "Products", href: "#products" },
    { label: "Trust Center", href: "#trust-center" },
    { label: "Resources", href: "#resources" },
    { label: "Global Coverage", href: "#coverage" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 hover:border-white/12">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-indigo shadow-[0_0_15px_rgba(14,165,233,0.3)]">
            <Shield className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-sans">
            Secure<span className="text-brand-blue">Comply</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 link-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#login"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            Portal Sign In
          </a>
          <a
            href="#demo"
            className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-brand-blue to-brand-indigo px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(14,165,233,0.35)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
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
            className="absolute top-20 left-4 right-4 glass-panel rounded-2xl p-6 flex flex-col gap-5 md:hidden z-40 border border-white/10"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="#login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-xl border border-white/10"
              >
                Portal Sign In
              </a>
              <a
                href="#demo"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-xl flex items-center justify-center gap-1.5"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
