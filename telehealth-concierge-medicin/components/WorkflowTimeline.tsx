"use client";

import { motion } from "framer-motion";
import { 
  CalendarDays, 
  CheckSquare, 
  Video, 
  FileText, 
  CreditCard, 
  HeartPulse, 
  ArrowDown 
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Patient Books Appointment",
    description: "Through the secure Patient Portal, the patient selects a specialty, matches with a physician, and chooses a slot in real-time.",
    icon: CalendarDays,
    color: "bg-blue-500 shadow-blue-500/20",
  },
  {
    number: "02",
    title: "Doctor Confirms Schedule",
    description: "The clinic's dashboard automatically verifies availability, flags any calendar overlaps, and sends secure SMS/email notifications.",
    icon: CheckSquare,
    color: "bg-sky-500 shadow-sky-500/20",
  },
  {
    number: "03",
    title: "Secure Video Consultation",
    description: "The patient joins a browser-based, high-definition, HIPAA-compliant encrypted video call directly from their portal.",
    icon: Video,
    color: "bg-teal-500 shadow-teal-500/20",
  },
  {
    number: "04",
    title: "Prescription Generated",
    description: "Using the integrated e-prescription system, the physician drafts and signs the order, routing it to the patient's local pharmacy.",
    icon: FileText,
    color: "bg-purple-500 shadow-purple-500/20",
  },
  {
    number: "05",
    title: "Payment Processed",
    description: "The system handles insurance claims eligibility and processes co-payments or concierge subscription retainers via Stripe.",
    icon: CreditCard,
    color: "bg-rose-500 shadow-rose-500/20",
  },
  {
    number: "06",
    title: "Follow-up & Health Monitoring",
    description: "Automated symptom surveys check patient recovery status, while connected wearables sync metrics to the clinical dashboard.",
    icon: HeartPulse,
    color: "bg-emerald-500 shadow-emerald-500/20",
  },
];

export default function WorkflowTimeline() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
            Patient Journey
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            How The Virtual Care <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Workflow Connects
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Experience a seamless, fully integrated clinical journey that connects patients, doctor schedules, records, and follow-ups.
          </p>
        </div>

        {/* Timeline Path (Desktop horizontal timeline, Mobile vertical list) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group p-8 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-lg hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300"
              >
                {/* Connector Arrow (Hidden on last item, and adapts to grid columns) */}
                {idx < 5 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors duration-300">
                    <span className="text-xl font-bold font-mono">→</span>
                  </div>
                )}

                {/* Card header: step number and icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${step.color} p-3 text-white flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-extrabold text-slate-100 dark:text-slate-800 font-mono tracking-tight select-none">
                    {step.number}
                  </span>
                </div>

                {/* Step contents */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Mobile visual connecting indicators */}
                <div className="md:hidden flex justify-center pt-6 text-slate-300 dark:text-slate-600">
                  {idx < 5 && <ArrowDown className="w-5 h-5 animate-bounce" />}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
