"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ShieldAlert, X, Copy, Check, Users, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  
  // Exit Intent Modal states
  const [showExitModal, setShowExitModal] = useState(false);
  const [exitFormSubmitted, setExitFormSubmitted] = useState(false);
  const [exitEmail, setExitEmail] = useState("");

  // Referral Modal states (triggered on successful waitlist register event)
  const [showReferralModal, setShowReferralModal] = useState(false);
  const [registeredName, setRegisteredName] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);

  // Monitor scroll height
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cookie trigger
  useEffect(() => {
    const consent = localStorage.getItem("launchcloud-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowCookie(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Exit Intent Detection (trigger when mouse leaves window top)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      const modalShown = localStorage.getItem("launchcloud-exit-modal-shown");
      const registered = localStorage.getItem("launchcloud-waitlist-registered");
      
      if (e.clientY < 20 && !modalShown && !registered) {
        setShowExitModal(true);
        localStorage.setItem("launchcloud-exit-modal-shown", "true");
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  // Monitor successful waitlist registration event
  useEffect(() => {
    const handleRegisterEvent = () => {
      const name = localStorage.getItem("launchcloud-waitlist-name") || "Friend";
      setRegisteredName(name);
      setShowReferralModal(true);
    };

    window.addEventListener("launchcloud-waitlist-registered-event", handleRegisterEvent);
    return () => window.removeEventListener("launchcloud-waitlist-registered-event", handleRegisterEvent);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("launchcloud-cookie-consent", "accepted");
    setShowCookie(false);
  };

  const handleExitFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exitEmail) return;
    setExitFormSubmitted(true);
    localStorage.setItem("launchcloud-waitlist-registered", "true");
    
    setTimeout(() => {
      setShowExitModal(false);
      setExitFormSubmitted(false);
      setExitEmail("");
    }, 2500);
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText("https://launchcloud.com/invite?ref=foundertrial");
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-primary text-white shadow-lg hover:shadow-primary/30 flex items-center justify-center cursor-pointer transition-all hover:-translate-y-0.5 focus:outline-none"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Cookie Consent GDPR Alert */}
      <AnimatePresence>
        {showCookie && (
          <div className="fixed bottom-6 left-6 right-6 md:left-6 md:right-auto md:max-w-md z-40">
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
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal font-normal mt-1">
                    We use cookies to secure waitlist logins and track queue referral links. By clicking Accept, you agree to our policies.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={acceptCookies}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-bold rounded-lg transition-all cursor-pointer"
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

      {/* 3. Exit Intent Modal */}
      <AnimatePresence>
        {showExitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md rounded-3xl glass-panel shadow-2xl p-6 md:p-8 border border-white/20 relative space-y-6"
            >
              <button
                onClick={() => setShowExitModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-405 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white leading-tight">
                  Wait! Don't Miss Out
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                  Lock in lifetime founder discount rates and free beta storage capacity before you go.
                </p>
              </div>

              {exitFormSubmitted ? (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Success! You have been registered. Closing...</span>
                </div>
              ) : (
                <form onSubmit={handleExitFormSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter work email"
                    value={exitEmail}
                    onChange={(e) => setExitEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-850 text-slate-900 dark:text-white text-xs rounded-xl focus:outline-none focus:border-primary transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    Lock Early Access
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Referral / Invite Modal (Triggered on successful waitlist register) */}
      <AnimatePresence>
        {showReferralModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md rounded-3xl glass-panel shadow-2xl p-6 md:p-8 border border-white/20 relative space-y-6 text-center"
            >
              <button
                onClick={() => setShowReferralModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-405 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-500 animate-pulse" />
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white leading-tight">
                  Thanks for Registering, {registeredName}!
                </h3>
                <p className="text-xs text-slate-550 dark:text-slate-400 font-normal leading-relaxed">
                  You are currently **#1,240** in line. Skip the line by inviting colleagues to register.
                </p>
              </div>

              {/* Referral Link Box */}
              <div className="space-y-2">
                <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-left">Your Referral Link:</span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value="https://launchcloud.com/invite?ref=foundertrial"
                    className="flex-1 px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-xl focus:outline-none select-all"
                  />
                  <button
                    onClick={copyReferralLink}
                    className="p-2.5 bg-primary text-white rounded-xl flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors"
                    aria-label="Copy referral link"
                  >
                    {linkCopied ? <Check className="w-4.5 h-4.5" /> : <Copy className="w-4.5 h-4.5" />}
                  </button>
                </div>
                {linkCopied && (
                  <span className="block text-[10px] font-semibold text-green-500 text-left">Link copied to clipboard!</span>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-semibold">
                <span>Invite 3 team members to unlock Beta Access instantly.</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
