"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  Terminal, 
  Mail, 
  HelpCircle, 
  BookOpen, 
  CheckCircle2, 
  Loader2, 
  ArrowRight,
  ShieldAlert
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactInputs {
  name: string;
  company: string;
  email: string;
  teamSize: string;
  productInterest: string;
  message: string;
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactInputs>();

  const onSubmit = (data: ContactInputs) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 api-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase">
            CONTACT US
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Ready to Accelerate Deployment?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Get in touch with our engineering team, request an enterprise demo, or query developer support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 border-white/6 rounded-2xl bg-slate-950/80 h-full shadow-lg relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5 font-sans">
                        <label className="text-xs font-bold text-gray-300" htmlFor="form-name">Name</label>
                        <input
                          id="form-name"
                          type="text"
                          placeholder="Your full name"
                          {...register("name", { required: "Name is required" })}
                          className="bg-white/3 border border-white/6 focus:border-primary/60 focus:bg-slate-900 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
                        />
                        {errors.name && <span className="text-[10px] text-rose-500 font-bold">{errors.name.message}</span>}
                      </div>

                      {/* Company */}
                      <div className="flex flex-col gap-1.5 font-sans">
                        <label className="text-xs font-bold text-gray-300" htmlFor="form-company">Company</label>
                        <input
                          id="form-company"
                          type="text"
                          placeholder="Your company name"
                          {...register("company", { required: "Company is required" })}
                          className="bg-white/3 border border-white/6 focus:border-primary/60 focus:bg-slate-900 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
                        />
                        {errors.company && <span className="text-[10px] text-rose-500 font-bold">{errors.company.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5 font-sans">
                        <label className="text-xs font-bold text-gray-300" htmlFor="form-email">Work Email</label>
                        <input
                          id="form-email"
                          type="email"
                          placeholder="you@company.com"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: { value: /\S+@\S+\.\S+/, message: "Valid email is required" }
                          })}
                          className="bg-white/3 border border-white/6 focus:border-primary/60 focus:bg-slate-900 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
                        />
                        {errors.email && <span className="text-[10px] text-rose-500 font-bold">{errors.email.message}</span>}
                      </div>

                      {/* Team Size */}
                      <div className="flex flex-col gap-1.5 font-sans">
                        <label className="text-xs font-bold text-gray-300" htmlFor="form-teamsize">Team Size</label>
                        <select
                          id="form-teamsize"
                          {...register("teamSize", { required: "Team size is required" })}
                          className="bg-white/3 border border-white/6 focus:border-primary/60 focus:bg-slate-900 rounded-xl px-4 py-3 text-xs text-white focus:outline-none cursor-pointer"
                        >
                          <option value="">Select size</option>
                          <option value="1-5">1 – 5 Developers</option>
                          <option value="6-20">6 – 20 Developers</option>
                          <option value="21-100">21 – 100 Developers</option>
                          <option value="101+">101+ Developers</option>
                        </select>
                        {errors.teamSize && <span className="text-[10px] text-rose-500 font-bold">{errors.teamSize.message}</span>}
                      </div>
                    </div>

                    {/* Product Interest */}
                    <div className="flex flex-col gap-1.5 font-sans">
                      <label className="text-xs font-bold text-gray-300" htmlFor="form-interest">Primary Area of Interest</label>
                      <select
                        id="form-interest"
                        {...register("productInterest", { required: "Area of interest is required" })}
                        className="bg-white/3 border border-white/6 focus:border-primary/60 focus:bg-slate-900 rounded-xl px-4 py-3 text-xs text-white focus:outline-none cursor-pointer"
                      >
                        <option value="">Select product category</option>
                        <option value="APIs & Auth">Edge APIs & Authentication</option>
                        <option value="Edge Functions & CDN">Edge Functions & CDN</option>
                        <option value="Postgres & Cache">Postgre SQL & Redis Cache</option>
                        <option value="Dedicated VPC Node">Dedicated VPC Node Clusters</option>
                      </select>
                      {errors.productInterest && <span className="text-[10px] text-rose-500 font-bold">{errors.productInterest.message}</span>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5 font-sans">
                      <label className="text-xs font-bold text-gray-300" htmlFor="form-message">Describe Your Use Case</label>
                      <textarea
                        id="form-message"
                        rows={4}
                        placeholder="Tell us briefly about your current scaling requirements or pipeline bottlenecks..."
                        {...register("message", { required: "Use case description is required" })}
                        className="bg-white/3 border border-white/6 focus:border-primary/60 focus:bg-slate-900 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none resize-none transition-colors"
                      />
                      {errors.message && <span className="text-[10px] text-rose-500 font-bold">{errors.message.message}</span>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 mt-2 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-bold text-sm shadow-[0_0_20px_rgba(59,130,246,0.2)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Locking Demo Time Slot...
                        </>
                      ) : (
                        "Request Platform Demo"
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8 gap-4"
                  >
                    <CheckCircle2 className="w-16 h-16 text-success animate-bounce" />
                    <div>
                      <h4 className="text-xl font-extrabold text-white">Demo Slot Scheduled!</h4>
                      <p className="text-sm text-gray-400 mt-2 leading-relaxed max-w-md">
                        Thank you for registering. A senior solutions engineer has been assigned to your use case and will reach out to you within 2 business hours with documentation templates and data room access.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Support links, developer reference cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Sales card */}
            <div className="glass-card p-6.5 border-white/6 rounded-2xl bg-slate-900/60 shadow-md flex flex-col gap-4">
              <h3 className="text-xs uppercase font-extrabold text-primary tracking-widest">
                Support & Inquiries
              </h3>
              
              <div className="flex flex-col gap-4 text-xs text-gray-300 leading-relaxed font-semibold">
                <div className="flex gap-2.5 items-center">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    Sales: <a href="mailto:hello@developerplatform.com" className="hover:text-primary">hello@developerplatform.com</a>
                  </span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    Technical Support: <a href="mailto:support@developerplatform.com" className="hover:text-primary">support@developerplatform.com</a>
                  </span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Terminal className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Developer HQ: 500 Innovation Drive, San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Docs card redirect */}
            <div className="glass-card p-6.5 border-white/6 rounded-2xl bg-slate-900/60 shadow-md flex flex-col gap-4 justify-between flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-xs uppercase font-extrabold text-accent tracking-widest flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  Developer Documentation
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Avoid scheduling delays. Explore our API endpoints, query structures, SDK guides, and deploy templates directly inside the CLI.
                </p>
              </div>

              <a
                href="#code-playground"
                className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/8 text-white rounded-xl font-bold text-center text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Read Platform API Docs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
