"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUp, 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  ShieldCheck, 
  HelpCircle,
  Sparkles
} from "lucide-react";

export default function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string }>>([
    { sender: "bot", text: "Hello! Welcome to HealthCloud™. I'm your AI care assistant. How can I help you or your clinic today?" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    // Show cookie consent after 2 seconds if not accepted previously
    const consentAccepted = localStorage.getItem("healthcloud_cookies_accepted");
    if (!consentAccepted) {
      const timer = setTimeout(() => setShowCookieConsent(true), 2000);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timer);
      };
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const acceptCookies = () => {
    localStorage.setItem("healthcloud_cookies_accepted", "true");
    setShowCookieConsent(false);
  };

  const declineCookies = () => {
    setShowCookieConsent(false);
  };

  // Simulated Chatbot responses matching healthcare cloud queries
  const getBotResponse = (userInput: string): string => {
    const text = userInput.toLowerCase();
    if (text.includes("hipaa") || text.includes("security") || text.includes("secure")) {
      return "HealthCloud™ is fully HIPAA compliant. All virtual calls are encrypted end-to-end, and we enter into BAA contracts with clinics.";
    }
    if (text.includes("pricing") || text.includes("cost") || text.includes("subscription")) {
      return "Our plans start at $49/month for Starter (2 doctors), and $149/month for Professional (20 doctors). We also offer custom Enterprise tiers.";
    }
    if (text.includes("demo") || text.includes("trial") || text.includes("book")) {
      return "You can register for a free trial or schedule a demo directly using our callback form in the Contact section of this page!";
    }
    if (text.includes("integration") || text.includes("epic") || text.includes("cerner") || text.includes("fhir")) {
      return "Yes! We support bi-directional syncing with Epic and Cerner EHR platforms, and strictly adhere to HL7/FHIR Restful API standards.";
    }
    return "Thank you for reaching out. I've noted your question. To review custom specifications with our clinical onboarding team, please fill out the contact form below or email hello@healthcloud.com.";
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setChatInput("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const response = getBotResponse(userMsg);
      setChatMessages((prev) => [...prev, { sender: "bot", text: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* 1. Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center transition-all cursor-pointer hover:-translate-y-0.5 focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Cookie Consent Banner */}
      <AnimatePresence>
        {showCookieConsent && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-24 z-40 max-w-sm p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col gap-4 text-left"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-2.5 items-start">
                <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Cookie Compliance</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal font-normal">
                    We use cookies and HIPAA-safe telemetry logs to optimize platform operations, track performance, and customize analytics dashboards.
                  </p>
                </div>
              </div>
              <button onClick={declineCookies} className="text-slate-400 hover:text-slate-600 focus:outline-none">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex justify-end gap-2.5">
              <button
                onClick={declineCookies}
                className="px-3.5 py-1.5 rounded-lg text-[10px] font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-1.5 rounded-lg bg-primary text-white text-[10px] font-bold shadow-sm hover:bg-primary-hover transition-colors"
              >
                Accept Cookies
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        
        {/* Toggle Chat button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 ${
            isChatOpen 
              ? "bg-slate-900 text-white" 
              : "bg-gradient-to-tr from-primary to-secondary text-white shadow-primary/20"
          }`}
          aria-label="Toggle chat"
        >
          {isChatOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
        </button>

        {/* Live Chat popup window */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-16 right-0 w-80 sm:w-96 h-[460px] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              {/* Chat Header */}
              <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7.5 h-7.5 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Bot className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold font-display">HealthCloud™ Assistant</span>
                    <span className="block text-[9px] text-green-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> AI Triage Active
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 text-[8px] text-slate-300 font-mono">
                  HIPAA-SECURE
                </div>
              </div>

              {/* Message Thread */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50 dark:bg-slate-950/20 custom-scrollbar">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed font-normal shadow-sm ${
                        msg.sender === "user"
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-100 dark:border-slate-800"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {/* Bot typing simulation */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input form */}
              <form onSubmit={handleSendChat} className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about HIPAA, Pricing, Epic sync..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-xs text-slate-900 dark:text-white rounded-xl focus:outline-none border border-slate-200 dark:border-slate-800 focus:border-primary transition-all"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-sm hover:bg-blue-700 transition-all cursor-pointer flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
