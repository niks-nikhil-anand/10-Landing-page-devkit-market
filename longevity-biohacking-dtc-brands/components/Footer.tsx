"use client";

import Link from "next/link";
import { Activity, ShieldCheck, Lock } from "lucide-react";

const productsList = [
  { name: "Longevity", href: "#products" },
  { name: "Sleep", href: "#products" },
  { name: "Recovery", href: "#products" },
  { name: "Brain Health", href: "#products" },
  { name: "Metabolism", href: "#products" },
  { name: "Bundles", href: "#products" },
  { name: "Subscriptions", href: "#pricing" },
];

const programsList = [
  { name: "Health Assessment", href: "#contact" },
  { name: "Membership", href: "#pricing" },
  { name: "Biomarker Testing", href: "#" },
  { name: "AI Health Coach", href: "#" },
  { name: "Rewards", href: "#" },
  { name: "Affiliate Program", href: "#" },
  { name: "Corporate Wellness", href: "#" },
];

const resourcesList = [
  { name: "Science", href: "#science" },
  { name: "Research", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Health Guides", href: "#" },
  { name: "Recipes", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Help Center", href: "#" },
  { name: "Community", href: "#" },
];

const companyList = [
  { name: "About", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Press", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Shipping Policy", href: "#" },
  { name: "Returns", href: "#" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden border-t-2 border-transparent">
      {/* Gradient Top Border line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-slate-900">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent text-white shadow-md">
                <Activity className="w-5.5 h-5.5" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                LifeNova <span className="text-primary font-sans font-medium text-xs align-super">™</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal text-left">
              Empowering healthier, longer lives with science-backed longevity supplements, AI-driven wellness technology, and personalized health optimization.
            </p>

            {/* Social Links with inline SVGs */}
            <div className="flex gap-4">
              {[
                { 
                  name: "Instagram", 
                  href: "https://instagram.com", 
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ) 
                },
                { 
                  name: "LinkedIn", 
                  href: "https://linkedin.com", 
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ) 
                },
                { 
                  name: "X (Twitter)", 
                  href: "https://twitter.com", 
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  ) 
                },
                { 
                  name: "Facebook", 
                  href: "https://facebook.com", 
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  ) 
                },
                { 
                  name: "YouTube", 
                  href: "https://youtube.com", 
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.163c-.272-1.016-1.074-1.819-2.091-2.091-1.846-.497-9.407-.497-9.407-.497s-7.562 0-9.406.497c-1.018.272-1.82 1.075-2.092 2.091-.497 1.846-.497 5.706-.497 5.706s0 3.86.497 5.706c.272 1.016 1.074 1.819 2.092 2.091 1.845.497 9.406.497 9.406.497s7.561 0 9.407-.497c1.017-.272 1.82-1.075 2.091-2.091.497-1.846.497-5.706.497-5.706s0-3.86-.497-5.706zm-14.498 9.337v-6.998l6.072 3.5z"/>
                    </svg>
                  ) 
                },
                { 
                  name: "TikTok", 
                  href: "https://tiktok.com", 
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.42-.43-.61-.67-.02 3.48-.01 6.96-.02 10.43-.11 1.64-.72 3.27-1.87 4.47-1.39 1.48-3.48 2.37-5.55 2.45-2.34.12-4.75-.71-6.28-2.51-1.63-1.88-2.18-4.63-1.42-7.05.61-2.06 2.14-3.87 4.14-4.69 1.25-.53 2.65-.67 3.98-.44.02 1.38.01 2.77.02 4.15-.99-.25-2.09-.08-2.91.56-.83.62-1.29 1.65-1.28 2.69.01 1.09.52 2.18 1.36 2.87.89.75 2.12.98 3.23.63 1.09-.32 1.95-1.22 2.22-2.31.11-.53.11-1.08.11-1.63-.01-4.71 0-9.42-.01-14.13z"/>
                    </svg>
                  ) 
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-primary hover:text-primary transition-all flex items-center justify-center text-slate-405 cursor-pointer"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="col-span-1 lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Products</h4>
            <ul className="space-y-2.5">
              {productsList.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="col-span-1 lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Programs</h4>
            <ul className="space-y-2.5">
              {programsList.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="col-span-1 lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Resources</h4>
            <ul className="space-y-2.5">
              {resourcesList.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="col-span-1 lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Company</h4>
            <ul className="space-y-2.5">
              {companyList.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Area */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-500 font-medium text-left">
            © 2026 LifeNova™. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-6 text-[10px] text-slate-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
              <span>SOC-2 Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-accent" />
              <span>AES-256 Encrypted</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-550 text-center md:text-right leading-relaxed font-normal max-w-xs">
            Science-driven wellness for a healthier tomorrow.
          </div>
        </div>

        {/* Disclaimer Area */}
        <div className="pt-6 mt-6 border-t border-slate-900 text-[10px] text-slate-500 text-left leading-relaxed">
          <span className="font-bold text-slate-400 block mb-1">Disclaimer:</span>
          These products are not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare professional before starting any supplement program.
        </div>

      </div>
    </footer>
  );
}
