"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";

// Form validation schema
const contactSchema = zod.object({
  name: zod.string().min(2, { message: "Name must be at least 2 characters." }),
  email: zod.string().email({ message: "Please enter a valid email address." }),
  goal: zod.string().min(1, { message: "Please select your primary wellness goal." }),
  message: zod.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactValues = zod.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      goal: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Contact Support
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Schedule a Wellness Consultation <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              & Optimize Your Health
            </span>
          </h2>
          <p className="text-slate-650 dark:text-slate-300 text-base sm:text-lg">
            Connect with our longevity support panel to configure your personalized supplement plan.
          </p>
        </div>

        {/* Info Grid & Form Segment */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left panel: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Email */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-primary/10 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">Email Support</h3>
                  <a href="mailto:support@lifenova.com" className="text-sm font-semibold text-primary hover:underline mt-1 block">
                    support@lifenova.com
                  </a>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Primary channel for customer assistance and returns.</span>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/5 text-secondary flex items-center justify-center border border-secondary/10 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">Toll-Free Phone</h3>
                  <a href="tel:+18005552026" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-primary mt-1 block">
                    +1 (800) 555-2026
                  </a>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Monitored support lines for logistics or ordering.</span>
                </div>
              </div>

              {/* Address */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/5 text-accent flex items-center justify-center border border-accent/10 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">San Diego HQ</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-350 mt-1 leading-relaxed font-normal">
                    900 Innovation Wellness Center <br />
                    San Diego, California 92101, United States
                  </p>
                </div>
              </div>

            </div>

            {/* Support Hours */}
            <div className="p-6 rounded-3xl bg-gradient-to-tr from-primary/10 to-accent/5 border border-primary/10 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wide block">Operational Hours</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block">24x7 Customer Support</span>
                <span className="text-[9px] text-slate-500 block mt-0.5">Clinical specialists active for members during weekends.</span>
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] glass-panel border border-white/20 dark:border-white/5 shadow-2xl p-8 lg:p-10 relative">
              
              <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white mb-6 text-left">
                Request Onboarding Consultation
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-all ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-primary"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@lifenova.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-all ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-primary"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Wellness Goal */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="goal" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Primary Wellness Goal</label>
                  <select
                    id="goal"
                    {...register("goal")}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-all ${
                      errors.goal ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-primary"
                    }`}
                  >
                    <option value="">Select your wellness goal...</option>
                    <option value="aging">Healthy Aging / Cellular Lifespan</option>
                    <option value="energy">Mitochondrial Energy & Stamina</option>
                    <option value="sleep">Sleep Optimization & Rest</option>
                    <option value="focus">Cognitive Performance & Focus</option>
                    <option value="recovery">Athletic Strain & HRV Recovery</option>
                    <option value="other">General Longevity Optimization</option>
                  </select>
                  {errors.goal && (
                    <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.goal.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Briefly summarize your health objectives</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your sleep index, metabolic indicators, or current supplements routine..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-all resize-none ${
                      errors.message ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-primary"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Connecting longevity expert...
                    </>
                  ) : (
                    <>
                      Request Consultation <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>

                {/* Success message */}
                {success && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-600 dark:text-green-400 flex items-center gap-2.5 text-left">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <span className="block font-bold">Request Logged!</span>
                      <span className="block font-normal mt-0.5">A longevity specialist will follow up within 24 hours.</span>
                    </div>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
