"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { 
  Building2, 
  Rocket, 
  Award, 
  Globe2, 
  Scale
} from "lucide-react";

const metrics = [
  { value: 2500, label: "Businesses", prefix: "", suffix: "+", icon: Building2 },
  { value: 800, label: "Startups", prefix: "", suffix: "+", icon: Rocket },
  { value: 350, label: "Fortune Companies", prefix: "", suffix: "+", icon: Award },
  { value: 65, label: "Countries Covered", prefix: "", suffix: "", icon: Globe2 },
  { value: 150, label: "Protected Innovations", prefix: "", suffix: "K+", icon: Scale },
];

const logos = [
  { name: "InnovateX", subtitle: "VENTURES" },
  { name: "FutureLabs", subtitle: "R&D LABS" },
  { name: "TechNova", subtitle: "ENTERPRISE" },
  { name: "BrightIP", subtitle: "SOLUTIONS" },
  { name: "GlobalPatent", subtitle: "SERVICES" },
  { name: "NextGen Ventures", subtitle: "CAPITAL" },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.floor(easeProgress * (end - start) + start);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function TrustedBy() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 pb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <metric.icon className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </div>
              <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos Segment */}
        <div className="space-y-8">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
            Trusted by Leaders in Science & Innovation
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/40 dark:bg-slate-800/20 border border-slate-100/50 dark:border-slate-800/30 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-3.5 h-3.5 rounded-md bg-gradient-to-tr from-primary to-accent opacity-75 group-hover:opacity-100 transition-opacity" />
                  <span className="font-display font-bold text-sm tracking-tight text-slate-700 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    {logo.name}
                  </span>
                </div>
                <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase">
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
