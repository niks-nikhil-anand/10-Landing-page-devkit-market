"use client";

import React, { useState } from "react";
import { 
  Shield, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Loader2,
  Lock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  // Newsletter Form State
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email) {
      setErrorMsg("Please enter your email address.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setErrorMsg("You must consent to the privacy policy.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1500);
  };

  const companyStats = [
    { label: "Customers", value: "5000+" },
    { label: "Compliance Audits", value: "250+" },
    { label: "Uptime", value: "99.99%" },
    { label: "Countries Served", value: "40+" }
  ];

  const col2Links = [
    { name: "SOC 2 Compliance", href: "#" },
    { name: "ISO 27001 Certification", href: "#" },
    { name: "GDPR Compliance", href: "#" },
    { name: "HIPAA Compliance", href: "#" },
    { name: "PCI DSS", href: "#" },
    { name: "NIST Framework", href: "#" },
    { name: "CIS Controls", href: "#" },
    { name: "Risk Assessments", href: "#" },
    { name: "Vendor Security Reviews", href: "#" },
    { name: "Internal Security Audits", href: "#" }
  ];

  const col3Links = [
    { name: "Compliance Automation", href: "#" },
    { name: "Evidence Collection", href: "#" },
    { name: "Continuous Monitoring", href: "#" },
    { name: "Cloud Security", href: "#" },
    { name: "Security Dashboard", href: "#" },
    { name: "Asset Management", href: "#" },
    { name: "Vulnerability Scanner", href: "#" },
    { name: "Policy Management", href: "#" },
    { name: "Audit Workspace", href: "#" },
    { name: "Security Reports", href: "#" }
  ];

  const col4Links = [
    { name: "Blog", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Security Guides", href: "#" },
    { name: "Compliance Checklist", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Customer Stories", href: "#" },
    { name: "Webinar Library", href: "#" },
    { name: "FAQ", href: "#" }
  ];

  const col5Links = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Leadership", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Trust Center", href: "#" },
    { name: "Status Page", href: "#" },
    { name: "Investor Relations", href: "#" }
  ];

  const bottomLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Responsible Disclosure", href: "#" },
    { name: "Security Policy", href: "#" },
    { name: "Trust Center", href: "#" },
    { name: "Sitemap", href: "#" }
  ];

  return (
    <footer className="bg-cyber-dark text-gray-400 border-t border-white/6 pt-24 pb-12 relative overflow-hidden cyber-mesh">
      {/* Background soft grid pattern overlay */}
      <div className="absolute inset-0 cyber-grid-dots opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Responsive 7-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-10 xl:gap-6 pb-16 border-b border-white/6">
          
          {/* Column 1: Company Logo & Info */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center text-white shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <Shield className="w-4.5 h-4.5" />
              </div>
              <span className="text-lg font-bold text-white font-sans tracking-tight">
                Secure<span className="text-brand-blue">Comply</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 pr-2">
              Helping organizations achieve enterprise-grade security compliance through automation, continuous monitoring, cloud security, and advisory.
            </p>
            {/* Column 1 statistics */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {companyStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-sm font-extrabold text-white">{stat.value}</span>
                  <span className="text-[10px] uppercase font-bold text-gray-600 tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Compliance Solutions
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              {col2Links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Products
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              {col3Links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Resources
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              {col4Links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              {col5Links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 link-underline py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Contact Info */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Contact Information
            </h4>
            <div className="flex flex-col gap-4 text-sm leading-relaxed pr-2">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>
                  Cybersecurity Compliance HQ<br />
                  100 Enterprise Drive<br />
                  San Francisco, CA 94105
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span>+1 (800) 555-0123</span>
              </div>
              <div className="flex gap-2.5 items-start flex-col">
                <div className="flex gap-2.5 items-center">
                  <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                  <a href="mailto:security@example.com" className="hover:text-white transition-colors duration-200">
                    security@example.com
                  </a>
                </div>
                <div className="pl-6 flex flex-col gap-1 text-xs text-gray-500">
                  <span>Sales: <a href="mailto:sales@example.com" className="hover:text-white text-gray-400">sales@example.com</a></span>
                  <span>Support: <a href="mailto:support@example.com" className="hover:text-white text-gray-400">support@example.com</a></span>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>
                  Monday – Friday<br />
                  8:00 AM – 6:00 PM PST
                </span>
              </div>
            </div>
          </div>

          {/* Column 7: Newsletter */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Newsletter
            </h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-white">Stay Ahead of Cyber Threats</span>
              <p className="text-xs text-gray-400 leading-normal">
                Subscribe for cybersecurity news, compliance updates, audit checklists, and product releases.
              </p>
              
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubscribe} 
                    className="flex flex-col gap-3.5 mt-2"
                  >
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter work email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-white/8 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue/60 transition-colors duration-300"
                        aria-label="Email for newsletter"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-lg text-white font-semibold flex items-center justify-center disabled:opacity-50 hover:shadow-[0_0_10px_rgba(14,165,233,0.3)] transition-all duration-300 cursor-pointer"
                        aria-label="Subscribe"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* GDPR Consent */}
                    <div className="flex items-start gap-2 select-none">
                      <input
                        type="checkbox"
                        id="gdpr-consent"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-700 bg-slate-900 text-brand-blue focus:ring-brand-blue focus:ring-offset-slate-900 mt-0.5 cursor-pointer accent-brand-blue"
                      />
                      <label htmlFor="gdpr-consent" className="text-[10px] text-gray-500 leading-tight cursor-pointer hover:text-gray-400 transition-colors">
                        I agree to receive communications and consent to data storage.
                      </label>
                    </div>

                    {errorMsg && (
                      <p className="text-[11px] text-rose-500 leading-snug font-medium">
                        {errorMsg}
                      </p>
                    )}

                    <span className="text-[9px] text-gray-600 leading-normal block">
                      We protect your email credentials with AES-256 standards. You can opt-out at any time. Review our Privacy Policy.
                    </span>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex flex-col items-center text-center gap-2 mt-2"
                  >
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    <div>
                      <h5 className="text-xs font-bold text-white">Subscription Confirmed!</h5>
                      <p className="text-[10px] text-emerald-400/80 mt-0.5">Welcome to threat-intel list.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Social Media & Follow-Us Strip */}
        <div className="py-10 flex flex-col md:flex-row gap-6 items-center justify-between border-b border-white/6">
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <span className="text-sm font-semibold text-white">Follow SecureComply</span>
            <p className="text-xs text-gray-500 max-w-lg">
              Follow us for cybersecurity insights, compliance best practices, product updates, and threat intelligence.
            </p>
          </div>

          <div className="flex gap-4 items-center">
            {/* LinkedIn */}
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-white/3 border border-white/6 hover:border-brand-blue/35 hover:bg-brand-blue/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* X (Twitter) */}
            <a 
              href="#" 
              aria-label="X (Twitter)"
              className="w-10 h-10 rounded-xl bg-white/3 border border-white/6 hover:border-brand-blue/35 hover:bg-brand-blue/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="font-extrabold text-sm tracking-tighter">𝕏</span>
            </a>
            {/* GitHub */}
            <a 
              href="#" 
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-white/3 border border-white/6 hover:border-brand-blue/35 hover:bg-brand-blue/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a 
              href="#" 
              aria-label="YouTube"
              className="w-10 h-10 rounded-xl bg-white/3 border border-white/6 hover:border-brand-blue/35 hover:bg-brand-blue/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.099-2.099C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.399.564C.576 4.337.576 6.163.576 6.163S0 8.659 0 11.156v2.309c0 2.497.576 4.993.576 4.993s.272 1.022 1.099 2.099c1.841.564 9.399.564 9.399.564s7.558 0 9.399-.564c1.025-.273 1.827-1.077 2.099-2.099 0 0 .576-2.497.576-4.993v-2.309c0-2.497-.576-4.993-.576-4.993zM9.545 15.568V7.127l7.305 4.221-7.305 4.22z"/>
              </svg>
            </a>
            {/* Medium (Custom M typography representing Medium) */}
            <a 
              href="#" 
              aria-label="Medium"
              className="w-10 h-10 rounded-xl bg-white/3 border border-white/6 hover:border-brand-blue/35 hover:bg-brand-blue/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="font-bold text-sm">M</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-10 flex flex-col lg:flex-row gap-6 items-center justify-between text-xs">
          
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <span className="font-semibold text-white text-center lg:text-left">
              &copy; 2026 Cybersecurity SOC 2 & ISO 27001 Compliance. All Rights Reserved.
            </span>
            <span className="text-[10px] text-gray-600 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-brand-blue" />
              Audited to SOC 2 Type II and ISO 27001 standard frameworks.
            </span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center">
            {bottomLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-white transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-[10px] font-semibold text-gray-600 tracking-wider text-center lg:text-right max-w-[200px]">
            Made with enterprise-grade security, privacy, and compliance in mind.
          </div>

        </div>

      </div>
    </footer>
  );
}
