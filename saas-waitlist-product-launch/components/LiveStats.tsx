"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { 
  Users, 
  Building2, 
  Globe2, 
  CalendarDays, 
  Heart 
} from "lucide-react";

const stats = [
  { value: 18450, label: "Already Joined", prefix: "", suffix: "+", icon: Users, color: "from-blue-500 to-indigo-500" },
  { value: 2850, label: "Companies Registered", prefix: "", suffix: "+", icon: Building2, color: "from-sky-500 to-blue-650" },
  { value: 72, label: "Countries Active", prefix: "", suffix: "", icon: Globe2, color: "from-teal-500 to-emerald-500" },
  { value: 2026, label: "Launch Date", prefix: "Q4 ", suffix: "", icon: CalendarDays, color: "from-purple-500 to-indigo-650", isStatic: true },
  { value: 99, label: "Satisfaction Goal", prefix: "", suffix: "%", icon: Heart, color: "from-rose-500 to-red-500" },
];

function Counter({ value, prefix = "", suffix = "", isStatic = false }: { value: number; prefix?: string; suffix?: string; isStatic?: boolean }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isStatic) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = 0;
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
  }, [value, hasAnimated, isStatic]);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <span ref={elementRef}>
      {prefix}
      {isStatic ? value : formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function LiveStats() {
  return (
    <section className="py-16 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-center group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform duration-300">
                <metric.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} isStatic={metric.isStatic} />
              </div>
              <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">{metric.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
