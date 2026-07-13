"use client";

import Link from "next/link";
import { Cloud, ShieldCheck, Lock } from "lucide-react";

const platform = [
  { name: "Features", href: "#features" },
  { name: "Automation", href: "#" },
  { name: "AI Assistant", href: "#" },
  { name: "Integrations", href: "#" },
  { name: "Pricing", href: "#pricing" },
  { name: "Security", href: "#" },
  { name: "Roadmap", href: "#roadmap" },
];

const resources = [
  { name: "Documentation", href: "#" },
  { name: "Developer API", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Community", href: "#" },
  { name: "Help Center", href: "#" },
  { name: "Status", href: "#" },
  { name: "Release Notes", href: "#" },
  { name: "Changelog", href: "#" },
];

const company = [
  { name: "About", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Press Kit", href: "#" },
  { name: "Investors", href: "#" },
  { name: "Affiliate Program", href: "#" },
  { name: "Contact", href: "#contact" },
];

const legal = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
  { name: "Security", href: "#" },
  { name: "GDPR", href: "#" },
  { name: "Compliance", href: "#" },
  { name: "Accessibility", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-955 text-slate-400 overflow-hidden border-t-2 border-transparent">
      {/* Accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />

      {/* Grid container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-slate-900">
          
          {/* Column 1: Brand details */}
          <div className="col-span-2 lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="relative flex items-center justify-center w-9.5 h-9.5 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-md">
                <Cloud className="w-5.5 h-5.5" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                LaunchCloud <span className="text-primary font-sans font-medium text-xs align-super">™</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal text-left">
              Building the next generation of cloud software for startups, growing businesses, and enterprise teams through intelligent automation and AI.
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
                  name: "GitHub", 
                  href: "https://github.com", 
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
                  name: "Discord", 
                  href: "https://discord.com", 
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 1-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                    </svg>
                  ) 
                },
                { 
                  name: "Product Hunt", 
                  href: "https://producthunt.com", 
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.601 10.2H10.4v3.6h3.201c.994 0 1.8-.806 1.8-1.8s-.806-1.8-1.8-1.8zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.7 13.8c0 1.657-1.343 3-3 3H10.4v3.6H7.1V7.2h5.7c1.657 0 3 1.343 3 3v3.6z"/>
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

          {/* Column 2: Platform */}
          <div className="col-span-1 lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Platform</h4>
            <ul className="space-y-2.5">
              {platform.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-span-1 lg:col-span-2 space-y-4 text-left">
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

          {/* Column 4: Company */}
          <div className="col-span-1 lg:col-span-2 space-y-4 text-left">
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

          {/* Column 5: Legal */}
          <div className="col-span-1 lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2.5">
              {legal.map((link, i) => (
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
          <div className="text-[11px] text-slate-500 font-medium text-left">
            © 2026 LaunchCloud™. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-6 text-[10px] text-slate-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
              <span>SLA Verified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-accent" />
              <span>AES-256 Encrypted</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 text-center md:text-right leading-relaxed font-normal max-w-xs">
            Launching the future of AI-powered cloud software.
          </div>
        </div>

      </div>
    </footer>
  );
}
