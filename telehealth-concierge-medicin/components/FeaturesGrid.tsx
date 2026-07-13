"use client";

import { motion } from "framer-motion";
import { 
  Video, 
  Calendar, 
  FileText, 
  UserSquare2, 
  Activity, 
  Cpu, 
  FolderHeart, 
  MessageSquareCode, 
  CreditCard, 
  BarChart3 
} from "lucide-react";

const features = [
  {
    title: "Virtual Video Consultations",
    description: "HD encrypted video calls integrated directly into the browser and mobile app for seamless communication.",
    icon: Video,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Appointment Scheduling",
    description: "Automated booking, doctor matching algorithms, calendar syncing, and smart SMS/email patient reminders.",
    icon: Calendar,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Online Prescriptions",
    description: "Legally compliant digital prescription management, pharmacy matching, and direct automated renewals.",
    icon: FileText,
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "Patient Portal",
    description: "Secure workspace where patients can access their medical documents, update metrics, and message care providers.",
    icon: UserSquare2,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Remote Patient Monitoring",
    description: "Integration with popular wearables (Apple Health, Google Fit) to track patient vitals and send immediate anomaly alerts.",
    icon: Activity,
    color: "from-rose-500 to-red-500",
  },
  {
    title: "AI Health Assistant",
    description: "Pre-clinical automated symptom guidance, virtual triage checks, and instant answers to standard medical queries.",
    icon: Cpu,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Electronic Health Records",
    description: "Centralized, secure electronic history dashboard summarizing consult reports, labs, files, and medications.",
    icon: FolderHeart,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Secure Messaging",
    description: "Direct real-time communication channel matching patients and clinical teams with attachment support.",
    icon: MessageSquareCode,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Insurance & Billing",
    description: "Integrated online payment processing, digital receipts, and structured automatic insurance claims handling.",
    icon: CreditCard,
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Analytics Dashboard",
    description: "Track consultations, symptom reports, diagnostic patterns, and clinic efficiency in real-time.",
    icon: BarChart3,
    color: "from-pink-500 to-rose-600",
  },
];

export default function FeaturesGrid() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
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
    <section id="features" className="py-24 relative bg-dot-grid">
      {/* Background shapes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-96 rounded-full bg-gradient-to-tr from-primary/5 to-secondary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider">
            All-In-One Solution
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Everything Needed for Modern <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Virtual Healthcare
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Empower your team and satisfy patients with secure, modern workflows designed for telehealth and premium concierge medicine.
          </p>
        </div>

        {/* Features 10-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-8 rounded-[24px] bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/2 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Colored Icon box */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.color} p-2.5 text-white shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                {/* Feature content */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Line */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mt-6 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
