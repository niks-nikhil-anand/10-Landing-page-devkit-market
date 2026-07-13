"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building, 
  Stethoscope, 
  User, 
  CalendarCheck, 
  FileEdit, 
  FolderHeart, 
  FlaskConical, 
  Wallet, 
  ShieldCheck, 
  Cpu, 
  Users2, 
  BellRing,
  ArrowRight
} from "lucide-react";

const modules = [
  {
    id: "virtual-clinic",
    name: "Virtual Clinic",
    icon: Building,
    tagline: "Your Digital Health Infrastructure",
    description: "Launch customizable digital clinics complete with local routing, branding assets, custom domains, and custom clinical intake workflows.",
    benefits: ["Multi-branch management", "White-label customization", "Custom intake workflows"],
    stat: "100% cloud-native",
  },
  {
    id: "doctor-dashboard",
    name: "Doctor Dashboard",
    icon: Stethoscope,
    tagline: "Simplified Clinical Workflows",
    description: "A centralized hub optimized for physicians. View schedules, launch consultations, review charts, write prescriptions, and make referrals.",
    benefits: ["One-click video consult startup", "Integrated clinical charts", "Voice-to-text EHR drafting"],
    stat: "4.9/5 Doctor Rating",
  },
  {
    id: "patient-dashboard",
    name: "Patient Dashboard",
    icon: User,
    tagline: "Patient-First Care Hub",
    description: "Give patients a secure, responsive portal to schedule visits, message care teams, review treatment plans, and view test results.",
    benefits: ["Responsive mobile app access", "Secure messaging thread", "Self-service scheduling"],
    stat: "92% Patient Engagement",
  },
  {
    id: "appointment",
    name: "Appointment Management",
    icon: CalendarCheck,
    tagline: "Smart Automated Scheduling",
    description: "Optimize clinical hours with automatic doctor matching, timezone conversions, buffer calculations, and automated follow-ups.",
    benefits: ["Smart routing algorithms", "Double-booking prevention", "SMS & WhatsApp alerts"],
    stat: "99.4% Attendance Rate",
  },
  {
    id: "prescription",
    name: "Prescription Management",
    icon: FileEdit,
    tagline: "Compliant Digital Prescribing",
    description: "Generate and sign e-prescriptions instantly. Send orders directly to standard pharmacy networks (Surescripts, etc.) securely.",
    benefits: ["Drug interaction checks", "Auto-renewal triggers", "Direct e-pharmacy routing"],
    stat: "HIPAA Compliant",
  },
  {
    id: "medical-records",
    name: "Medical Records",
    icon: FolderHeart,
    tagline: "Unified Health Records",
    description: "Consolidate diagnostic reports, history sheets, patient charts, and files. Export charts matching standard formats like HL7/FHIR.",
    benefits: ["FHIR API compliance", "PDF charts compilation", "Universal audit trails"],
    stat: "AES-256 Encrypted",
  },
  {
    id: "lab-reports",
    name: "Lab Reports",
    icon: FlaskConical,
    tagline: "Integrated Diagnostics Data",
    description: "Connect with reference labs directly. Import test results automatically and flag out-of-range metrics with automated visual markers.",
    benefits: ["Auto-results syncing", "Vital metrics trend lines", "Smart outlier alert triggers"],
    stat: "50+ Connected Labs",
  },
  {
    id: "payment-gateway",
    name: "Payment Gateway",
    icon: Wallet,
    tagline: "Frictionless Billing Infrastructure",
    description: "Handle co-pays, subscriptions, concierge retainer fees, and invoices. Support credit cards, Apple Pay, Google Pay, and bank transfers.",
    benefits: ["Stripe & PayPal integrations", "Recurrent retainer billing", "Auto-receipt generation"],
    stat: "PCI-DSS Level 1",
  },
  {
    id: "insurance",
    name: "Insurance Management",
    icon: ShieldCheck,
    tagline: "Automated Claims Handling",
    description: "Check patient eligibility, submit insurance claims to clearinghouses, and trace claim outcomes automatically from the board.",
    benefits: ["Real-time eligibility checks", "Automated claims submission", "Direct EDI feedback link"],
    stat: "92% First-pass Approval",
  },
  {
    id: "ai-assistant",
    name: "AI Medical Assistant",
    icon: Cpu,
    tagline: "Intelligent Triage & FAQ Support",
    description: "Let AI screen patient symptom inputs, summarize consultations for clinical charts, draft answers, and streamline admin queues.",
    benefits: ["Automated intake summaries", "Pre-consultation triage check", "Instant patient FAQ matches"],
    stat: "60% Admin Cost Saved",
  },
  {
    id: "crm",
    name: "CRM",
    icon: Users2,
    tagline: "Proactive Patient Relationships",
    description: "Build clinical relationships with customizable follow-up reminders, clinical milestone updates, and personalized health campaigns.",
    benefits: ["Patient segmentation tags", "Custom email campaign tool", "Automated recall rules"],
    stat: "+35% Clinic Retention",
  },
  {
    id: "notifications",
    name: "Notification Center",
    icon: BellRing,
    tagline: "Omnichannel Communications Engine",
    description: "Deliver instant SMS alerts, email summaries, mobile push updates, and clinic dashboard notifications based on custom clinical rules.",
    benefits: ["Multi-channel routing", "Custom notification logs", "Patient communication audits"],
    stat: "< 1s Delivery SLA",
  },
];

export default function PlatformModules() {
  const [activeTab, setActiveTab] = useState(modules[0].id);

  const selectedModule = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <section id="solutions" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Modular Platform
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Integrated Platform Modules <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built for Modern Scale
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Choose what you need. Connect them modularly. Power your entire virtual practice on our unified core infrastructure.
          </p>
        </div>

        {/* Modular Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: Modules grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-h-[600px] lg:overflow-y-auto pr-2 custom-scrollbar">
            {modules.map((m) => {
              const Icon = m.icon;
              const isActive = m.id === activeTab;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveTab(m.id)}
                  className={`flex items-center gap-3.5 p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                    isActive
                      ? "bg-white dark:bg-slate-800 border-primary/20 shadow-md shadow-primary/5 z-10"
                      : "bg-transparent hover:bg-white dark:hover:bg-slate-800/30 border-transparent hover:border-slate-200/50 dark:hover:border-slate-800/50"
                  }`}
                >
                  {/* Icon wrap */}
                  <div className={`p-2 rounded-xl transition-all duration-300 flex-shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-primary group-hover:bg-primary/5"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Text details */}
                  <div className="flex-1 min-w-0">
                    <span className={`block font-display font-bold text-sm truncate ${isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400 group-hover:text-slate-950 dark:group-hover:text-slate-200"}`}>
                      {m.name}
                    </span>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate mt-0.5">
                      {m.tagline}
                    </span>
                  </div>

                  {/* Active background indicator stripe */}
                  {isActive && (
                    <motion.div
                      layoutId="activeModuleLine"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Display: Content Showcase card */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="w-full rounded-[28px] glass-panel border border-white/20 dark:border-white/5 shadow-xl p-8 lg:p-10 flex flex-col justify-between min-h-[460px] relative overflow-hidden"
              >
                {/* Glowing subtle background circle */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-8">
                  {/* Module Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-200/50 dark:border-slate-800/50">
                    <div>
                      <div className="inline-flex items-center gap-1 text-[11px] font-bold text-primary dark:text-blue-400 uppercase tracking-widest mb-1.5">
                        <selectedModule.icon className="w-3.5 h-3.5" /> Module Spotlight
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        {selectedModule.name}
                      </h3>
                    </div>
                    {/* Badge */}
                    <div className="px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-bold shadow-sm">
                      {selectedModule.stat}
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="space-y-4">
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {selectedModule.description}
                    </p>
                    
                    {/* Capabilities list */}
                    <div className="space-y-3 pt-2">
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Key Capabilities:</span>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {selectedModule.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action link */}
                <div className="pt-8 mt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">Integrates with external EHR, HIPAA, and Billing systems.</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-secondary group transition-colors cursor-pointer"
                  >
                    Request Integration Access <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
