"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Loader2 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AppointmentInputs {
  name: string;
  company: string;
  email: string;
  phone: string;
  stage: string;
  revenue: string;
  services: string;
  message: string;
}

export default function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Interactive Calendar State
  const [selectedDate, setSelectedDate] = useState<number | null>(15); // Default selected July 15th
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<AppointmentInputs>();

  const onSubmit = (data: AppointmentInputs) => {
    setIsSubmitting(true);
    // Simulate API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFormSubmitted(true);
    }, 1500);
  };

  const calendarDays = [
    { date: 13, day: "Mon", active: true },
    { date: 14, day: "Tue", active: true },
    { date: 15, day: "Wed", active: true },
    { date: 16, day: "Thu", active: true },
    { date: 17, day: "Fri", active: true }
  ];

  const timeSlots = ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"];

  return (
    <section 
      id="contact" 
      className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 cfo-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-success/10 border border-success/20 text-xs font-bold text-success tracking-wide uppercase">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-heading font-sans">
            Ready to Accelerate Growth?
          </h2>
          <p className="text-body text-base md:text-lg leading-relaxed">
            Schedule your free 30-minute financial strategy audit or send us an inquiry directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Form & Confirmation */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 border-primary/5 bg-white h-full shadow-lg relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isFormSubmitted ? (
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
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-heading" htmlFor="form-name">Name</label>
                        <input
                          id="form-name"
                          type="text"
                          placeholder="Your full name"
                          {...register("name", { required: "Name is required" })}
                          className="bg-slate-50 border border-slate-200 focus:border-primary/60 focus:bg-white rounded-xl px-4 py-3 text-xs text-heading focus:outline-none transition-colors duration-200"
                        />
                        {errors.name && <span className="text-[10px] text-rose-500 font-bold">{errors.name.message}</span>}
                      </div>

                      {/* Company */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-heading" htmlFor="form-company">Company</label>
                        <input
                          id="form-company"
                          type="text"
                          placeholder="Your company name"
                          {...register("company", { required: "Company is required" })}
                          className="bg-slate-50 border border-slate-200 focus:border-primary/60 focus:bg-white rounded-xl px-4 py-3 text-xs text-heading focus:outline-none transition-colors duration-200"
                        />
                        {errors.company && <span className="text-[10px] text-rose-500 font-bold">{errors.company.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-heading" htmlFor="form-email">Work Email</label>
                        <input
                          id="form-email"
                          type="email"
                          placeholder="you@company.com"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: { value: /\S+@\S+\.\S+/, message: "Valid email is required" }
                          })}
                          className="bg-slate-50 border border-slate-200 focus:border-primary/60 focus:bg-white rounded-xl px-4 py-3 text-xs text-heading focus:outline-none transition-colors duration-200"
                        />
                        {errors.email && <span className="text-[10px] text-rose-500 font-bold">{errors.email.message}</span>}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-heading" htmlFor="form-phone">Phone Number</label>
                        <input
                          id="form-phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          {...register("phone", { required: "Phone number is required" })}
                          className="bg-slate-50 border border-slate-200 focus:border-primary/60 focus:bg-white rounded-xl px-4 py-3 text-xs text-heading focus:outline-none transition-colors duration-200"
                        />
                        {errors.phone && <span className="text-[10px] text-rose-500 font-bold">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Business Stage */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-heading" htmlFor="form-stage">Company Stage</label>
                        <select
                          id="form-stage"
                          {...register("stage", { required: "Stage is required" })}
                          className="bg-slate-50 border border-slate-200 focus:border-primary/60 focus:bg-white rounded-xl px-4 py-3 text-xs text-heading focus:outline-none cursor-pointer transition-colors"
                        >
                          <option value="">Select stage</option>
                          <option value="Pre-Seed">Pre-Seed</option>
                          <option value="Seed">Seed Stage</option>
                          <option value="Series A/B">Series A / B Scaleup</option>
                          <option value="Profitable / Bootstrapped">Profitable SME</option>
                        </select>
                        {errors.stage && <span className="text-[10px] text-rose-500 font-bold">{errors.stage.message}</span>}
                      </div>

                      {/* Revenue Range */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-heading" htmlFor="form-revenue">Annual Revenue</label>
                        <select
                          id="form-revenue"
                          {...register("revenue", { required: "Revenue is required" })}
                          className="bg-slate-50 border border-slate-200 focus:border-primary/60 focus:bg-white rounded-xl px-4 py-3 text-xs text-heading focus:outline-none cursor-pointer transition-colors"
                        >
                          <option value="">Select revenue</option>
                          <option value="Under $1M">Under $1M</option>
                          <option value="$1M - $5M">$1M – $5M</option>
                          <option value="$5M - $20M">$5M – $20M</option>
                          <option value="$20M+">$20M+</option>
                        </select>
                        {errors.revenue && <span className="text-[10px] text-rose-500 font-bold">{errors.revenue.message}</span>}
                      </div>

                      {/* Services */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-heading" htmlFor="form-services">Services Needed</label>
                        <select
                          id="form-services"
                          {...register("services", { required: "Service is required" })}
                          className="bg-slate-50 border border-slate-200 focus:border-primary/60 focus:bg-white rounded-xl px-4 py-3 text-xs text-heading focus:outline-none cursor-pointer transition-colors"
                        >
                          <option value="">Select service</option>
                          <option value="Fractional CFO">Fractional CFO</option>
                          <option value="FP&A Modeling">FP&A Modeling</option>
                          <option value="Fundraising Strategy">Fundraising Support</option>
                          <option value="Cash Flow optimization">Cash Flow Optimization</option>
                        </select>
                        {errors.services && <span className="text-[10px] text-rose-500 font-bold">{errors.services.message}</span>}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-heading" htmlFor="form-message">Financial Objectives / Notes</label>
                      <textarea
                        id="form-message"
                        rows={4}
                        placeholder="Tell us briefly about your current financial objectives and requirements..."
                        {...register("message", { required: "Objectives notes are required" })}
                        className="bg-slate-50 border border-slate-200 focus:border-primary/60 focus:bg-white rounded-xl px-4 py-3 text-xs text-heading focus:outline-none resize-none transition-colors"
                      />
                      {errors.message && <span className="text-[10px] text-rose-500 font-bold">{errors.message.message}</span>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 mt-2 bg-gradient-to-r from-primary to-blue-600 rounded-xl text-white font-bold text-sm shadow-[0_8px_20px_rgba(37,99,235,0.2)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer hover:shadow-[0_8px_25px_rgba(37,99,235,0.35)]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Locking Consultation Date...
                        </>
                      ) : (
                        "Book My Strategy Session"
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
                      <h4 className="text-xl font-extrabold text-heading">Strategy Session Blocked!</h4>
                      <p className="text-sm text-body mt-2 leading-relaxed max-w-md">
                        Thank you for booking! Our senior advisory coordinator will reach out to you within 2 business hours to finalize your selected time and verify your details.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Office Location, Hours & Calendar booking widget */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Info card */}
            <div className="glass-card p-6.5 border-primary/5 bg-white shadow-md flex flex-col gap-4">
              <h3 className="text-sm uppercase font-extrabold text-primary tracking-widest">
                Office Information
              </h3>
              
              <div className="flex flex-col gap-3.5 text-xs text-body leading-relaxed font-semibold">
                <div className="flex gap-2.5 items-start">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    Financial Advisory Group<br />
                    100 Business Plaza<br />
                    New York, NY 10001
                  </span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>+1 (800) 555-0101</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href="mailto:info@financialadvisory.com" className="hover:text-primary transition-colors">
                    info@financialadvisory.com
                  </a>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    Monday – Friday<br />
                    9:00 AM – 6:00 PM EST
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Calendar widget */}
            <div className="glass-card p-6.5 border-primary/5 bg-white shadow-md flex flex-col gap-4 flex-1 justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-heading flex items-center gap-1.5">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    Available Slots (July 2026)
                  </span>
                  <div className="flex gap-1">
                    <button className="p-1 rounded bg-slate-50 hover:bg-slate-100 text-muted"><ChevronLeft className="w-3.5 h-3.5" /></button>
                    <button className="p-1 rounded bg-slate-50 hover:bg-slate-100 text-muted"><ChevronRight className="w-3.5 h-3.5" /></button>
                  </div>
                </div>

                {/* Days list */}
                <div className="grid grid-cols-5 gap-2 pt-4">
                  {calendarDays.map((day) => {
                    const isSelected = selectedDate === day.date;
                    return (
                      <button
                        key={day.date}
                        onClick={() => setSelectedDate(day.date)}
                        className={`flex flex-col items-center p-2 rounded-xl border text-center transition-colors cursor-pointer ${
                          isSelected 
                            ? "bg-primary border-primary text-white" 
                            : "bg-slate-50 hover:bg-slate-100 border-slate-100 text-heading"
                        }`}
                      >
                        <span className="text-[10px] block opacity-80">{day.day}</span>
                        <span className="text-xs font-extrabold block mt-0.5">{day.date}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Time Slots */}
                <div className="flex flex-col gap-2 pt-4">
                  <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Available Times</span>
                  <div className="grid grid-cols-2 gap-2.5">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                            isSelected
                              ? "bg-success border-success text-white shadow-md"
                              : "bg-slate-50 hover:bg-slate-100 border-slate-100 text-heading"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Status footer */}
              {selectedTimeSlot && selectedDate && (
                <div className="p-3 bg-success/5 border border-success/15 rounded-xl text-center text-[10px] text-success font-bold mt-4 animate-pulse">
                  Selected: Wednesday, July {selectedDate}th at {selectedTimeSlot} (EST)
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
