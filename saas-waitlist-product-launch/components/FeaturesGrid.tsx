"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  CheckSquare, 
  Users, 
  BookOpen, 
  BarChart3, 
  Layout, 
  Cloud, 
  GitFork, 
  LineChart, 
  UserSquare2, 
  Bell, 
  FileCode 
} from "lucide-react";

const features = [
  {
    title: "AI Workflow Automation",
    description: "Build logic triggers and let our AI models process repetitive workflows automatically.",
    icon: Bot,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Smart Task Management",
    description: "Organize board tasks, assign representative dockets, and configure reminder timing.",
    icon: CheckSquare,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Real-Time Collaboration",
    description: "Work concurrently with team members via inline logs, shared docs, and chats.",
    icon: Users,
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "Knowledge Base",
    description: "Document project requirements, SOP rules, and integration codes inside Notion-like folders.",
    icon: BookOpen,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Advanced Analytics",
    description: "Evaluate representative response efficiency counts and project conversion progress.",
    icon: BarChart3,
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Team Dashboard",
    description: "Configure central pipeline boards, metrics summaries, and active task indices.",
    icon: Layout,
    color: "from-amber-500 to-orange-605",
  },
  {
    title: "Cloud Storage",
    description: "Secure, encrypted cloud storage directories preserving team dockets and documents.",
    icon: Cloud,
    color: "from-cyan-500 to-sky-650",
  },
  {
    title: "Workflow Builder",
    description: "Map and launch custom sales pipelines and communication loops using drag controls.",
    icon: GitFork,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Project Tracking",
    description: "Trace timeline milestones, blockers logs, and active representative allocations.",
    icon: LineChart,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Customer Portal",
    description: "A secure, client-facing dashboard where corporate targets can review bills.",
    icon: UserSquare2,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Notification Center",
    description: "Deliver real-time alarms across Slack channels and mobile apps when triggers match.",
    icon: Bell,
    color: "from-indigo-500 to-violet-650",
  },
  {
    title: "API Integrations",
    description: "Query databases, import contacts, and update timelines via REST JSON endpoints.",
    icon: FileCode,
    color: "from-blue-600 to-indigo-705",
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 rounded-full bg-gradient-to-tr from-primary/5 to-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Features Stack
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Built to Transform <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Modern Work
            </span>
          </h2>
          <p className="text-slate-650 dark:text-slate-300 text-base sm:text-lg text-center">
            Streamline project schedules, qualify alerts automatically, and manage task boards modularly inside one secure console.
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
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon box */}
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${feature.color} p-2.5 text-white shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-1.5 text-left">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Accent Line */}
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mt-5 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
