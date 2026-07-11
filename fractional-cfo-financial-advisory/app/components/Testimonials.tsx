"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, TrendingUp } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  avatarColor: string;
  rating: number;
  quote: string;
  metric: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const list: Testimonial[] = [
    {
      name: "Sarah Jenkins",
      role: "CEO & Co-Founder",
      company: "SaaSFlow Technologies",
      avatarInitials: "SJ",
      avatarColor: "from-blue-500 to-indigo-500",
      rating: 5,
      quote: "ApexCFO transformed our planning model completely. Their driver-based forecasts helped us scale with absolute confidence and successfully secure our $4.5M Series A round.",
      metric: "+148% MRR Growth"
    },
    {
      name: "Marcus Vance",
      role: "Managing Director",
      company: "TheraHealth MedTech",
      avatarInitials: "MV",
      avatarColor: "from-teal-500 to-emerald-500",
      rating: 5,
      quote: "We unlocked $280,000 in working capital within 90 days of hiring ApexCFO. Their inventory forecasting and lease reviews were absolutely world-class.",
      metric: "$280k Working Capital Unlocked"
    },
    {
      name: "David Cho",
      role: "Founder & CFO",
      company: "NovaRetail Brands",
      avatarInitials: "DC",
      avatarColor: "from-purple-500 to-pink-500",
      rating: 5,
      quote: "Having their CFOs on speed dial is like having a bulge-bracket banking division working directly inside your business. Our gross profit expanded by 8.2%.",
      metric: "+8.2% Gross Margin Expansion"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const active = list[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 cfo-grid-dots opacity-40 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase">
            EXECUTIVE TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-heading font-sans">
            Trusted by CEOs & Founders
          </h2>
        </div>

        {/* Carousel Slide wrapper */}
        <div className="relative glass-card p-8 md:p-12 border-primary/5 bg-white/90 shadow-xl min-h-[380px] flex flex-col justify-between">
          
          {/* Quote Icon overlay */}
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Quote className="w-5 h-5 fill-primary" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Left text column */}
              <div className="md:col-span-8 flex flex-col gap-5">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-base md:text-lg text-heading font-sans italic leading-relaxed">
                  "{active.quote}"
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="text-sm font-extrabold text-heading">{active.name}</h4>
                  <p className="text-xs text-muted font-semibold mt-0.5">{active.role} at {active.company}</p>
                </div>
              </div>

              {/* Right statistic column */}
              <div className="md:col-span-4 flex flex-col items-center justify-center text-center gap-4 bg-slate-50 border border-slate-100 p-6 rounded-2xl">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${active.avatarColor} text-white flex items-center justify-center font-bold text-lg shadow-md`}>
                  {active.avatarInitials}
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-muted uppercase tracking-wider">Business Outcome</span>
                  <span className="text-sm font-extrabold text-success flex items-center justify-center gap-1">
                    <TrendingUp className="w-4.5 h-4.5" />
                    {active.metric}
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-6">
            <span className="text-[11px] font-bold text-muted uppercase tracking-widest">
              Slide {currentIndex + 1} of {list.length}
            </span>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/50 flex items-center justify-center text-heading hover:text-primary transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/50 flex items-center justify-center text-heading hover:text-primary transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
