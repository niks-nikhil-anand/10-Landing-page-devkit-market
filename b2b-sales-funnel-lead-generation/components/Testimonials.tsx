"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote: "Our lead conversion rate increased by 42% within three months after switching to LeadFlow Cloud.",
    author: "Sarah Thompson",
    role: "VP Sales",
    initials: "ST",
  },
  {
    rating: 5,
    quote: "The AI lead scoring saves our sales team countless hours every week.",
    author: "David Miller",
    role: "Revenue Director",
    initials: "DM",
  },
  {
    rating: 5,
    quote: "We finally have complete visibility into every stage of our sales funnel.",
    author: "Jessica Wilson",
    role: "Founder",
    initials: "JW",
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section id="testimonials" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider">
            Reviews
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Trusted by Innovators & <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Enterprise Revenue Leaders
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            See how founders, VP of Sales, and Revenue Directors increase conversions on LeadFlow Cloud™.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-[28px] bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote watermark */}
              <div className="absolute top-6 right-8 text-slate-100 dark:text-slate-850 pointer-events-none z-0">
                <Quote className="w-12 h-12 rotate-180 fill-current" />
              </div>

              <div className="relative z-10 space-y-5">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-455 text-amber-455" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 italic leading-relaxed font-normal">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-100 dark:border-slate-805 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary text-white font-bold flex items-center justify-center text-sm shadow-sm select-none">
                  {test.initials}
                </div>
                <div>
                  <span className="block font-display font-extrabold text-sm text-slate-900 dark:text-white leading-tight">
                    {test.author}
                  </span>
                  <span className="block text-[10px] text-slate-400 font-semibold mt-0.5">
                    {test.role}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
