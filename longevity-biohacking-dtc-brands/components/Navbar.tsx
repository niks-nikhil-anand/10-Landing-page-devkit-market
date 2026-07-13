"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Activity, Sun, Moon, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Science", href: "#science" },
  { name: "Programs", href: "#solutions" },
  { name: "Membership", href: "#pricing" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync dark mode preference on load
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const isDark = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Monitor floating cart count update
  useEffect(() => {
    const updateCartCount = () => {
      const items = localStorage.getItem("lifenova-cart");
      if (items) {
        try {
          const parsed = JSON.parse(items);
          const total = parsed.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);
          setCartCount(total);
        } catch (e) {
          setCartCount(0);
        }
      } else {
        setCartCount(0);
      }
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("lifenova-cart-update", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("lifenova-cart-update", updateCartCount);
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
                <Activity className="w-5.5 h-5.5" />
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                LifeNova<span className="text-primary font-sans font-medium text-xs align-super">™</span>
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
              {/* Dark/Light mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5" />}
              </button>

              {/* Shopping Cart button trigger */}
              <button
                onClick={() => window.dispatchEvent(new Event("lifenova-open-cart"))}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors cursor-pointer relative"
                aria-label="Open shopping cart"
              >
                <ShoppingCart className="w-4.5 h-4.5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white dark:border-slate-900">
                    {cartCount}
                  </span>
                )}
              </button>

              <Link
                href="#contact"
                className="px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Take Health Quiz
              </Link>
              <Link
                href="#products"
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Shop Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Actions block */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-800/30 focus:outline-none transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => window.dispatchEvent(new Event("lifenova-open-cart"))}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-800/30 focus:outline-none transition-colors relative"
                aria-label="Open shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

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
                    Take Health Quiz
                  </Link>
                  <Link
                    href="#products"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-3 bg-primary text-white text-sm font-bold rounded-xl shadow-md shadow-primary/10 hover:bg-primary-hover flex items-center justify-center gap-1.5"
                  >
                    Shop Now <ArrowRight className="w-4 h-4" />
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
