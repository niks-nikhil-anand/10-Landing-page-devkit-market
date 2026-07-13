"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    rating: 5,
    quote: "I've never felt healthier. My sleep, energy, and recovery have dramatically improved within weeks.",
    author: "Emily Carter",
    role: "Verified Customer",
    initials: "EC",
  },
  {
    rating: 5,
    quote: "The personalized recommendations make it feel like having a private wellness coach.",
    author: "Daniel Brooks",
    role: "Entrepreneur",
    initials: "DB",
  },
  {
    rating: 5,
    quote: "The science and transparency behind every product gave me confidence from day one.",
    author: "Sophia Mitchell",
    role: "Healthcare Professional",
    initials: "SM",
  },
];

export default function CustomerReviews() {
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
            Trusted by Health Leaders & <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Biohacking Innovators
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            See how founders, athletes, and functional healthcare professionals optimize their active longevity.
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
          {reviews.map((rev, idx) => (
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

              <div className="relative z-10 space-y-5 text-left">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-450 text-amber-450" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 italic leading-relaxed font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary text-white font-bold flex items-center justify-center text-sm shadow-sm select-none">
                  {rev.initials}
                </div>
                <div className="text-left">
                  <span className="block font-display font-extrabold text-sm text-slate-900 dark:text-white leading-tight">
                    {rev.author}
                  </span>
                  <span className="block text-[10px] text-slate-400 font-semibold mt-0.5 animate-pulse-slow">
                    {rev.role}
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
