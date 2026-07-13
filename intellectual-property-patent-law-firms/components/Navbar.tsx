"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Solutions", href: "#solutions" },
  { name: "Case Studies", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-navbar py-3 shadow-sm"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent text-white shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
                <Scale className="w-5 h-5" />
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                LexPatent<span className="text-primary font-sans font-medium text-xs align-super">™</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#contact"
                className="px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Book Consultation
              </Link>
              <Link
                href="#contact"
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Get Started <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-800/30 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden glass-navbar border-t border-slate-200/50 dark:border-slate-800/50"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary hover:bg-slate-100/80 dark:hover:bg-slate-800/50 transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col gap-3 px-4">
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-3 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/30 rounded-xl transition-colors"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-3 bg-primary text-white text-sm font-bold rounded-xl shadow-md shadow-primary/10 hover:bg-primary-hover flex items-center justify-center gap-1.5"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
