"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Google", subtitle: "CLOUD INTEGRATED" },
  { name: "Microsoft", subtitle: "TEAMS SYNC" },
  { name: "Amazon", subtitle: "AWS STACK" },
  { name: "Stripe", subtitle: "PORTAL PAYMENTS" },
  { name: "Shopify", subtitle: "DTC ECOSYSTEM" },
  { name: "Notion", subtitle: "DOCS SYNC" },
  { name: "Atlassian", subtitle: "JIRA CONNECT" },
  { name: "HubSpot", subtitle: "CRM CORE" },
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-slate-50/30 dark:bg-slate-900/30 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            TRUSTED BY TEAMS FROM WORLD-CLASS ORGANIZATIONS
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 items-center">
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white dark:bg-slate-800/20 border border-slate-100/50 dark:border-slate-800/30 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-1 mb-0.5">
                  <div className="w-2.5 h-2.5 rounded bg-gradient-to-tr from-primary to-accent opacity-75 group-hover:opacity-100 transition-opacity" />
                  <span className="font-display font-bold text-xs tracking-tight text-slate-700 dark:text-slate-205 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    {logo.name}
                  </span>
                </div>
                <span className="text-[7px] font-bold text-slate-400 tracking-wider uppercase">
                  {logo.subtitle}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
