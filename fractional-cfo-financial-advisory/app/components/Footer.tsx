"use client";

import React, { useState } from "react";
import { 
  TrendingUp, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Loader2,
  CalendarCheck,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  // Newsletter Form State
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email) {
      setErrorMsg("Please enter your email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1200);
  };

  const col2Services = [
    { name: "Fractional CFO", href: "#" },
    { name: "FP&A", href: "#" },
    { name: "Cash Flow Optimization", href: "#" },
    { name: "Financial Forecasting", href: "#" },
    { name: "Budgeting Plans", href: "#" },
    { name: "Financial Modeling", href: "#" },
    { name: "Investor Reporting", href: "#" },
    { name: "Business Strategy", href: "#" }
  ];

  const col3Industries = [
    { name: "SaaS", href: "#" },
    { name: "Healthcare & Devices", href: "#" },
    { name: "Retail Brands", href: "#" },
    { name: "Manufacturing", href: "#" },
    { name: "Technology", href: "#" },
    { name: "Real Estate & Dev", href: "#" },
    { name: "Logistics", href: "#" },
    { name: "Startups & VCs", href: "#" }
  ];

  const col4Resources = [
    { name: "Blog & Insights", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Financial Guides", href: "#" },
    { name: "Modeling Templates", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "Webinar Library", href: "#" },
    { name: "Newsletter Archive", href: "#" }
  ];

  const col5Company = [
    { name: "About Us", href: "#" },
    { name: "Leadership", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Contact Advisory", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Sitemap", href: "#" }
  ];

  const partners = [
    { name: "QuickBooks", color: "hover:text-[#2CA01C]" },
    { name: "Xero", color: "hover:text-[#13B5EA]" },
    { name: "NetSuite", color: "hover:text-[#163C70]" },
    { name: "SAP", color: "hover:text-[#008FD3]" },
    { name: "Oracle", color: "hover:text-[#F80000]" },
    { name: "Dynamics 365", color: "hover:text-[#00205B]" },
    { name: "Stripe", color: "hover:text-[#635BFF]" },
    { name: "Salesforce", color: "hover:text-[#00A1E0]" },
    { name: "HubSpot", color: "hover:text-[#FF7A59]" }
  ];

  const badges = [
    { name: "CPA Professionals", focus: "Licensed Advisors" },
    { name: "Certified Analysts", focus: "Chartered CFAs" },
    { name: "SEC Knowledge", focus: "Regulatory Compliance" },
    { name: "ISO 27001 Secure", focus: "Data Infrastructure" },
    { name: "GDPR Compliant", focus: "Privacy Standards" },
    { name: "Bank-Level Encryption", focus: "AES-256 Safeguards" }
  ];

  return (
    <footer className="bg-white text-body border-t border-slate-200/80 pt-20 pb-12 relative overflow-hidden cfo-mesh">
      {/* Grid Overlay */}
      <div className="absolute inset-0 cfo-grid-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* ABOVE FOOTER CTA */}
        <div className="glass-card p-8 md:p-12 border-primary/5 shadow-lg bg-white/95 mb-20 flex flex-col lg:flex-row gap-8 justify-between items-center relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-success/5 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex flex-col gap-3 text-center lg:text-left max-w-2xl">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-ping" />
              <span className="text-[10px] font-extrabold uppercase text-success tracking-widest">
                Start your evaluation today
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-heading">
              Let's Build a Stronger Financial Future Together
            </h3>
            <p className="text-xs md:text-sm text-body leading-relaxed">
              Book a complimentary financial strategy session and discover how expert CFO guidance can help your business scale with confidence.
            </p>
            {/* Stats row inside banner */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center lg:justify-start pt-3 border-t border-slate-100 mt-2 text-xs">
              <span className="font-extrabold text-heading">500+ <span className="font-normal text-muted">Businesses Served</span></span>
              <span className="font-extrabold text-heading">$750M+ <span className="font-normal text-muted">Capital Raised</span></span>
              <span className="font-extrabold text-heading">98% <span className="font-normal text-muted">Client Satisfaction</span></span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-6 py-3.5 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold text-center text-xs flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(37,99,235,0.2)]"
            >
              <CalendarCheck className="w-4 h-4" />
              Schedule a Consultation
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-heading rounded-xl font-bold text-center text-xs"
            >
              Contact an Advisor
            </a>
          </div>
        </div>

        {/* 6-COLUMN FOOTER LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 pb-16 border-b border-slate-200/80">
          
          {/* Column 1: Company Logo & Description */}
          <div className="flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-heading">
                Apex<span className="text-primary">CFO</span>
              </span>
            </a>
            <p className="text-xs leading-relaxed text-muted">
              Strategic financial leadership built for startups, SMEs, and mid-market firms looking to grow with confidence.
            </p>
            <div className="text-[10px] text-gray-400 font-semibold leading-normal">
              <strong>Mission:</strong> Aligning unit economics, systems, and execution metrics to build scalable corporate values.
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase font-extrabold text-heading tracking-widest">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold">
              {col2Services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase font-extrabold text-heading tracking-widest">
              Industries
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold">
              {col3Industries.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase font-extrabold text-heading tracking-widest">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold">
              {col4Resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase font-extrabold text-heading tracking-widest">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold">
              {col5Company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Contact & Newsletter */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] uppercase font-extrabold text-heading tracking-widest">
                Contact & Details
              </h4>
              <div className="flex flex-col gap-3 text-xs text-muted font-semibold">
                <div className="flex gap-2 items-start">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>100 Business Plaza, New York, NY 10001</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>+1 (800) 555-0101</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                  <a href="mailto:info@financialadvisory.com" className="hover:text-primary">
                    info@financialadvisory.com
                  </a>
                </div>
                <div className="flex gap-2 items-start">
                  <Clock className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Mon – Fri, 9am – 6pm</span>
                </div>
              </div>
            </div>

            {/* Newsletter input */}
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
              <span className="text-[10px] font-extrabold text-heading uppercase tracking-wider">Stay Ahead Financially</span>
              
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Work email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary/60 rounded-lg px-3 py-2 text-[10px] text-heading focus:outline-none transition-all"
                        aria-label="Work email"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="absolute right-1 top-1 bottom-1 px-2.5 bg-primary text-white rounded-md flex items-center justify-center disabled:opacity-50 cursor-pointer"
                        aria-label="Subscribe"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-3 h-3 animate-spin" />
                        ) : (
                          <ArrowRight className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                    {errorMsg && (
                      <span className="text-[9px] text-rose-500 font-bold leading-none">{errorMsg}</span>
                    )}
                    <span className="text-[8px] text-gray-400 leading-tight block">
                      We protect your email address. Review our privacy declarations.
                    </span>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-3 bg-success/5 border border-success/15 rounded-lg text-center"
                  >
                    <span className="text-[10px] font-extrabold text-success block">Subscribed!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* TRUST CERTIFICATIONS BADGES STRIP */}
        <div className="py-8 border-b border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge) => (
              <div 
                key={badge.name}
                className="p-3 bg-slate-50/50 border border-slate-100 rounded-xl flex items-center gap-2 hover:border-primary/10 transition-colors duration-200 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-success shrink-0" />
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-extrabold text-heading">{badge.name}</span>
                  <span className="text-[8px] text-muted font-medium mt-0.5">{badge.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY PARTNERS STRIP */}
        <div className="py-8 border-b border-slate-200/80">
          <span className="block text-[10px] font-extrabold text-muted uppercase tracking-widest text-center mb-6">
            Integrated with your existing financial tech stack
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className={`text-xs font-extrabold text-gray-400 hover:text-heading cursor-pointer transition-all duration-300 ${partner.color}`}
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>

        {/* SOCIAL & BOTTOM BAR */}
        <div className="pt-10 flex flex-col md:flex-row gap-6 items-center justify-between text-[11px] font-medium text-muted">
          
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="font-extrabold text-heading">&copy; 2026 Fractional CFO & Financial Advisory. All Rights Reserved.</span>
            <span className="text-[9px] text-gray-400">Advisory services backed by CPA guidelines and SEC transparency rules.</span>
          </div>

          <div className="flex gap-4 items-center">
            {/* LinkedIn */}
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 hover:border-primary/20 hover:text-primary flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* X */}
            <a 
              href="#" 
              aria-label="X"
              className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 hover:border-primary/20 hover:text-primary flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <span className="font-extrabold text-xs">𝕏</span>
            </a>
            {/* YouTube */}
            <a 
              href="#" 
              aria-label="YouTube"
              className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 hover:border-primary/20 hover:text-primary flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.099-2.099C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.399.564C.576 4.337.576 6.163.576 6.163S0 8.659 0 11.156v2.309c0 2.497.576 4.993.576 4.993s.272 1.022 1.099 2.099c1.841.564 9.399.564 9.399.564s7.558 0 9.399-.564c1.025-.273 1.827-1.077 2.099-2.099 0 0 .576-2.497.576-4.993v-2.309c0-2.497-.576-4.993-.576-4.993zM9.545 15.568V7.127l7.305 4.221-7.305 4.22z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 hover:border-primary/20 hover:text-primary flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Legal links row */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start pt-6 border-t border-slate-100 mt-6 text-[10px] font-bold">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
          <a href="#" className="hover:text-primary">Cookie Policy</a>
          <a href="#" className="hover:text-primary">Accessibility declaration</a>
          <a href="#" className="hover:text-primary">Sitemap</a>
          <span className="ml-auto text-muted font-normal hidden md:inline">Helping Businesses Grow with Strategic Financial Leadership.</span>
        </div>

      </div>
    </footer>
  );
}
