"use client";

import Link from "next/link";
import { Scale, ShieldCheck, Lock } from "lucide-react";

const services = [
  { name: "Patent Filing", href: "#" },
  { name: "Trademark Registration", href: "#" },
  { name: "Copyright", href: "#" },
  { name: "IP Litigation", href: "#" },
  { name: "Licensing", href: "#" },
  { name: "Portfolio Management", href: "#" },
];

const industries = [
  { name: "Technology", href: "#" },
  { name: "Healthcare", href: "#" },
  { name: "Manufacturing", href: "#" },
  { name: "AI & Software", href: "#" },
  { name: "Biotech", href: "#" },
  { name: "Universities", href: "#" },
];

const resources = [
  { name: "Documentation", href: "#" },
  { name: "Knowledge Base", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Legal Guides", href: "#" },
  { name: "Blog", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Developer API", href: "#" },
];

const company = [
  { name: "About", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Partners", href: "#" },
  { name: "News", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Security", href: "#" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden border-t-2 border-transparent">
      {/* Accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />

      {/* Grid container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-slate-900">
          
          {/* Column 1: Brand details */}
          <div className="col-span-2 lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-md">
                <Scale className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                LexPatent<span className="text-primary font-sans font-medium text-xs align-super">™</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Protecting innovation through trusted legal expertise, secure cloud technology, and world-class intellectual property services.
            </p>

            {/* Social links with inline SVGs */}
            <div className="flex gap-4">
              {[
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
                  name: "GitHub", 
                  href: "https://github.com", 
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ) 
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-primary hover:text-primary transition-all flex items-center justify-center text-slate-400 cursor-pointer"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {services.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Industries</h4>
            <ul className="space-y-2.5">
              {industries.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Resources</h4>
            <ul className="space-y-2.5">
              {resources.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Company</h4>
            <ul className="space-y-2.5">
              {company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-500 font-medium">
            © 2026 LexPatent™. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-6 text-[10px] text-slate-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
              <span>USPTO Registered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-accent" />
              <span>AES-256 Cloud Infrastructure</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 text-center md:text-right leading-relaxed font-normal max-w-xs">
            Protecting ideas. Empowering innovation. Securing the future.
          </div>
        </div>

      </div>
    </footer>
  );
}
