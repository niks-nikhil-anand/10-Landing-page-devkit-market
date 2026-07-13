"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Layout, 
  GitFork, 
  Map, 
  Cpu, 
  Mail, 
  MessageSquare, 
  CalendarDays, 
  BarChart3, 
  CheckSquare, 
  Users, 
  Repeat 
} from "lucide-react";

const features = [
  {
    title: "Lead Capture Forms",
    description: "Launch highly optimized B2B intake forms that dynamically enrich contact profiles in real-time.",
    icon: FileText,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Landing Page Builder",
    description: "Build conversion-focused landing pages instantly using custom drag-and-drop templates.",
    icon: Layout,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Sales Funnel Builder",
    description: "Map and launch high-converting B2B prospect campaigns with multi-path workflow splits.",
    icon: GitFork,
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "CRM Pipeline Management",
    description: "Centrally organize pipeline deal stages, track sales conversations, and log task details.",
    icon: Map,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "AI Lead Scoring",
    description: "Score prospects automatically using firmographics, demographics, and active intent checks.",
    icon: Cpu,
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Email Marketing Automation",
    description: "Deliver personalized follow-up sequences triggered dynamically by prospect actions.",
    icon: Mail,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "SMS Campaigns",
    description: "Trigger SMS notifications to qualify leads, schedule appointments, and coordinate responses.",
    icon: MessageSquare,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Appointment Scheduling",
    description: "Empower leads to select meeting slots directly on synced Outlook or Google calendar feeds.",
    icon: CalendarDays,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Sales Analytics",
    description: "Trace pipeline value statistics, representative efficiency counts, and funnel conversion logs.",
    icon: BarChart3,
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Conversion Tracking",
    description: "Analyze how channels perform, tracking visitor counts, downloads, and demo bookings.",
    icon: CheckSquare,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Team Collaboration",
    description: "Assign dockets, hand off leads to representatives, and coordinate pipeline deals seamlessly.",
    icon: Users,
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Workflow Automation",
    description: "Establish custom triggers to sync CRMs, notify Slack channels, and assign follow-ups.",
    icon: Repeat,
    color: "from-blue-600 to-indigo-700",
  },
];

export default function FeaturesGrid() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 rounded-full bg-gradient-to-tr from-primary/5 to-secondary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Platform Features
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Everything You Need To <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Scale B2B Sales
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Streamline prospecting, qualify leads automatically, nurture pipelines, and book meetings on one secure cloud platform.
          </p>
        </div>

        {/* 12-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon box */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${feature.color} p-2.5 text-white shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                
                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Accent Line */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mt-5 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
