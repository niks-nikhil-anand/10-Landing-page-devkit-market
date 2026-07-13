"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Sparkles, ArrowRight, ShieldCheck, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

const newsletterSchema = zod.object({
  email: zod.string().email({ message: "Please enter a valid work email." }),
});

type NewsletterValues = zod.infer<typeof newsletterSchema>;

export default function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: NewsletterValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark background panel */}
      <div className="absolute inset-0 bg-slate-955 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/10 to-accent/15 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA banner */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" /> Secure Sales Engine
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Build Smarter Funnels. <br className="hidden sm:inline" />
            Generate Better Leads. <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
              Grow Faster.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Empower your sales team with AI-powered automation, intelligent prospecting, and cloud-native CRM tools designed to maximize revenue growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="#contact"
              className="px-8 py-4 rounded-xl bg-primary hover:bg-blue-700 text-white font-bold shadow-lg shadow-primary/25 hover:shadow-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer group"
            >
              Start Free Trial <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold border border-white/15 transition-all cursor-pointer"
            >
              Request Live Demo
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-slate-400 text-xs">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>SOC-2 Certified & GDPR Compliant</span>
          </div>

          {/* Integrated Newsletter Form */}
          <div className="max-w-md mx-auto pt-12 border-t border-white/10 mt-12 space-y-4">
            <h3 className="font-display font-extrabold text-base text-white">
              Subscribe to LeadFlow Cloud™ Insights
            </h3>
            <p className="text-xs text-slate-400 font-normal">
              Receive the latest B2B sales funnel strategies, outreach guides, and pipeline forecasting tips directly.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative text-left">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    placeholder="Enter work email"
                    {...register("email")}
                    className={`w-full pl-10 pr-4 py-3 bg-white/5 border text-white text-sm rounded-xl focus:outline-none transition-all ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-primary"
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl text-sm transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex-shrink-0"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>

              {errors.email && (
                <span className="text-[10px] font-semibold text-red-400 flex items-center gap-1 text-left">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                </span>
              )}

              {success && (
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-left text-xs font-semibold text-green-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Success! You have been registered.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
