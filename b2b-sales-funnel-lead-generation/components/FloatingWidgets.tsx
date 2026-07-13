"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ShieldAlert, MessageSquare, X, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatLog, setChatLog] = useState<Array<{ sender: "user" | "bot"; text: string }>>([
    { sender: "bot", text: "Hi! I'm LeadFlow Agent. How can I help you optimize your B2B sales funnel today?" }
  ]);

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
    const consent = localStorage.getItem("leadflow-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowCookieBanner(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const acceptCookies = () => {
    localStorage.setItem("leadflow-cookie-consent", "accepted");
    setShowCookieBanner(false);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage) return;

    const userMsg = chatMessage;
    setChatLog((prev) => [...prev, { sender: "user", text: userMsg }]);
    setChatMessage("");

    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        { 
          sender: "bot", 
          text: "Thank you! I've routed this query to a sales coordinator. We will reply to your registered account email shortly." 
        }
      ]);
    }, 1200);
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

      {/* 2. Floating Live Chat Widget Trigger Button */}
      <div className="fixed bottom-6 left-6 z-45 flex flex-col gap-2">
        <button
          onClick={() => setShowChatModal(true)}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent text-white shadow-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105 hover:rotate-6 focus:outline-none relative group"
          aria-label="Open Chat"
        >
          <MessageSquare className="w-5.5 h-5.5" />
          <span className="absolute left-14 bg-slate-900/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with AI Agent
          </span>
        </button>
      </div>

      {/* Live Chat Modal */}
      <AnimatePresence>
        {showChatModal && (
          <div className="fixed inset-0 z-50 flex items-end justify-start p-6 bg-slate-950/20 backdrop-blur-xs pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-sm h-[400px] rounded-3xl glass-panel shadow-2xl p-5 border border-white/20 relative flex flex-col justify-between pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-display">LeadFlow Cloud™ Assistant</span>
                </div>
                <button
                  onClick={() => setShowChatModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                  aria-label="Close chat"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Chat Log */}
              <div className="flex-1 overflow-y-auto my-3 space-y-3 pr-1 text-xs custom-scrollbar">
                {chatLog.map((log, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                      log.sender === "user"
                        ? "bg-primary text-white ml-auto"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 mr-auto border border-slate-200/50 dark:border-slate-700/50"
                    }`}
                  >
                    {log.text}
                  </div>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleChatSubmit} className="flex gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  required
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-primary transition-all"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-xl bg-primary hover:bg-blue-700 text-white flex items-center justify-center shadow-md cursor-pointer transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4.5 h-4.5" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. Cookie Consent Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-24 md:max-w-md z-40">
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
                    We use cookies to secure dashboards logins and track pipeline metrics. By clicking Accept, you agree to our policies.
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
