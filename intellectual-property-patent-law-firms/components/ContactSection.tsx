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

// Zod form validation schema
const contactFormSchema = zod.object({
  name: zod.string().min(2, { message: "Name must be at least 2 characters." }),
  email: zod.string().email({ message: "Please enter a valid work email." }),
  firmName: zod.string().min(2, { message: "Firm or Company name must be at least 2 characters." }),
  role: zod.string().min(1, { message: "Please select your professional role." }),
  message: zod.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = zod.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      firmName: "",
      role: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Contact Us
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Schedule a Consultation <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              & Secure Your IP Assets
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Connect with our USPTO-registered attorneys and legal coordinators to assess your patent and trademark targets.
          </p>
        </div>

        {/* Info Grid & Form Segment */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left panel: Info panels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Email */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-primary/10 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">Legal Consultations</h3>
                  <a href="mailto:contact@lexpatent.com" className="text-sm font-semibold text-primary hover:underline mt-1 block">
                    contact@lexpatent.com
                  </a>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Primary email for legal reviews and agreements.</span>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/5 text-secondary flex items-center justify-center border border-secondary/10 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">Office Hotline</h3>
                  <a href="tel:+18005552026" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-primary mt-1 block">
                    +1 (800) 555-2026
                  </a>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Toll-free client hotline monitored during hours.</span>
                </div>
              </div>

              {/* Address */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/5 text-accent flex items-center justify-center border border-accent/10 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">New York HQ</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-normal">
                    500 Innovation Plaza <br />
                    New York, NY 10001, United States
                  </p>
                </div>
              </div>

            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-primary/10 to-accent/5 border border-primary/10 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wide block">Business Hours</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block">Monday – Friday: 9:00 AM – 6:00 PM</span>
                <span className="text-[9px] text-slate-500 block mt-0.5">Consultations closed on Federal holidays.</span>
              </div>
            </div>
          </div>

          {/* Right panel contact form */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] glass-panel border border-white/20 dark:border-white/5 shadow-2xl p-8 lg:p-10 relative">
              
              <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white mb-6">
                Request a Free IP Assessment
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                {/* Name and Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-all ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-850 focus:border-primary"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Work Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@yourfirm.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-all ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-850 focus:border-primary"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Company and Role */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="firmName" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Company / Entity Name</label>
                    <input
                      id="firmName"
                      type="text"
                      placeholder="TechNova Inc."
                      {...register("firmName")}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-all ${
                        errors.firmName ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-850 focus:border-primary"
                      }`}
                    />
                    {errors.firmName && (
                      <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.firmName.message}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="role" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Professional Role</label>
                    <select
                      id="role"
                      {...register("role")}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-all ${
                        errors.role ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-850 focus:border-primary"
                      }`}
                    >
                      <option value="">Select your role...</option>
                      <option value="inventor">Inventor / Scientist</option>
                      <option value="founder">Founder / CEO</option>
                      <option value="legal-counsel">Corporate Legal Counsel</option>
                      <option value="cto">CTO / R&D Director</option>
                      <option value="other">Other Business Role</option>
                    </select>
                    {errors.role && (
                      <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.role.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Briefly summarize your IP assets</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your technologies, patent status, or trademark requirements..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-all resize-none ${
                      errors.message ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-850 focus:border-primary"
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
                      Connecting secure node...
                    </>
                  ) : (
                    <>
                      Schedule Consultation <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>

                {/* Success alert message */}
                {submitSuccess && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-600 dark:text-green-400 flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <span className="block font-bold">Assessment Logged!</span>
                      <span className="block font-normal mt-0.5">An IP onboarding attorney will call you within 24 hours.</span>
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
