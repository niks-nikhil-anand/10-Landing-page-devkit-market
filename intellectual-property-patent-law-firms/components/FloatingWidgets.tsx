"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ShieldAlert, PhoneCall, X, Send, CheckCircle2 } from "lucide-react";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [callbackNumber, setCallbackNumber] = useState("");
  const [callbackSuccess, setCallbackSuccess] = useState(false);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cookie banner trigger after delay
  useEffect(() => {
    const consent = localStorage.getItem("lexpatent-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowCookieBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const acceptCookies = () => {
    localStorage.setItem("lexpatent-cookie-consent", "accepted");
    setShowCookieBanner(false);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackNumber) return;
    setCallbackSuccess(true);
    setTimeout(() => {
      setCallbackSuccess(false);
      setCallbackNumber("");
      setShowCallbackModal(false);
    }, 3000);
  };

  return (
    <>
      {/* 1. Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-primary text-white shadow-lg hover:shadow-primary/30 flex items-center justify-center cursor-pointer transition-all hover:-translate-y-0.5 focus:outline-none"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Floating Contact Callback Trigger Button */}
      <div className="fixed bottom-6 left-6 z-45 flex flex-col gap-2">
        <button
          onClick={() => setShowCallbackModal(true)}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent text-white shadow-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105 hover:rotate-6 focus:outline-none relative group"
          aria-label="Request Callback"
        >
          <PhoneCall className="w-5.5 h-5.5" />
          <span className="absolute left-14 bg-slate-900/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Request Quick Callback
          </span>
        </button>
      </div>

      {/* Callback request modal */}
      <AnimatePresence>
        {showCallbackModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-sm rounded-3xl glass-panel shadow-2xl p-6 border border-white/20 relative"
            >
              <button
                onClick={() => setShowCallbackModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center space-y-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white leading-tight">
                    Instant Callback Request
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal font-normal">
                    Enter your phone number. A LexPatent™ legal assistant will call you back within 10 minutes.
                  </p>
                </div>

                <form onSubmit={handleCallbackSubmit} className="space-y-3 pt-2">
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    required
                    value={callbackNumber}
                    onChange={(e) => setCallbackNumber(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-all text-center"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white rounded-xl text-xs font-bold shadow-md shadow-primary/25 hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Request Callback <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                {callbackSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-600 dark:text-green-400 flex items-center gap-2 text-left"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 text-green-500 flex-shrink-0" />
                    <span>Logged! Connecting you to NY HQ lines.</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. Cookie Consent Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-24 md:max-w-md z-45">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="rounded-2xl glass-panel shadow-2xl p-5 border border-white/20 flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldAlert className="w-4.5 h-4.5" />
              </div>
              <div className="flex-1 space-y-3 text-left">
                <div>
                  <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white leading-tight">
                    Cookie & GDPR Compliance
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal font-normal mt-1">
                    We use cookies to secure client portal logins and track site analytics. By clicking Accept, you agree to our policies.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={acceptCookies}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-850 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-bold rounded-lg transition-all cursor-pointer"
                  >
                    Accept
                  </button>
                  <Link
                    href="#"
                    className="text-[10px] font-semibold text-slate-500 hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
