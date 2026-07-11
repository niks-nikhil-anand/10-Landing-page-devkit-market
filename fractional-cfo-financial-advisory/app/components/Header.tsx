"use client";

import React, { useState } from "react";
import { TrendingUp, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Interactive Demo", href: "#financial-showcase" },
    { label: "Industries", href: "#industries" },
    { label: "Case Studies", href: "#success-stories" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faq" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-5">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-primary/5 rounded-3xl px-6 py-3.5 flex items-center justify-between shadow-[0_10px_35px_-10px_rgba(37,99,235,0.06)] hover:border-primary/12 transition-all duration-300">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-[0_8px_20px_rgba(37,99,235,0.2)]">
            <TrendingUp className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-xl font-bold tracking-tight text-heading font-sans">
            Apex<span className="text-primary">CFO</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] font-semibold text-body hover:text-primary transition-colors duration-200 link-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="text-[14px] font-bold text-body hover:text-primary transition-colors duration-200"
          >
            Client Portal
          </a>
          <a
            href="#contact"
            className="relative group overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-blue-600 px-5.5 py-3 text-[14px] font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,0.25)] hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Book a Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden p-2.5 rounded-2xl text-body hover:text-primary hover:bg-primary/5 transition-all duration-200"
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
            className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-6 flex flex-col gap-6 lg:hidden z-40 border border-primary/5 shadow-2xl"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[15px] font-semibold text-body hover:text-primary transition-colors py-2 border-b border-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 text-sm font-semibold text-body hover:text-primary transition-colors rounded-2xl border border-slate-200"
              >
                Client Portal
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 text-sm font-bold text-white bg-gradient-to-r from-primary to-blue-600 rounded-2xl flex items-center justify-center gap-1.5"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
