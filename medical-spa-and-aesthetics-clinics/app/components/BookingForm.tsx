"use client";

import { useState, useEffect } from "react";
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText, CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";

interface BookingFormProps {
  selectedTreatment?: string;
}

const TREATMENTS = [
  "Morpheus8 RF Microneedling",
  "Bespoke Dermal Fillers & Botox",
  "Lumecca IPL Photofacial",
  "Aerolase Neo Laser Therapy",
  "AURA Signature Hydrafacial",
  "Skin Hydration IV Infusion"
];

const TIME_SLOTS = [
  "09:00 AM", "10:30 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"
];

// Generates the next 5 working days (excluding Sundays)
const getUpcomingDates = () => {
  const dates = [];
  const today = new Date();
  let added = 0;
  
  while (added < 5) {
    today.setDate(today.getDate() + 1);
    // 0 is Sunday
    if (today.getDay() !== 0) {
      dates.push({
        dayName: today.toLocaleDateString("en-US", { weekday: "short" }),
        dayNum: today.getDate(),
        month: today.toLocaleDateString("en-US", { month: "short" }),
        fullDate: today.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }),
        rawDate: new Date(today)
      });
      added++;
    }
  }
  return dates;
};

export default function BookingForm({ selectedTreatment = "" }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [treatment, setTreatment] = useState("");
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState("");
  
  // Contact details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [dates, setDates] = useState<any[]>([]);

  useEffect(() => {
    setDates(getUpcomingDates());
  }, []);

  // Pre-fill selected treatment when prop changes
  useEffect(() => {
    if (selectedTreatment && TREATMENTS.includes(selectedTreatment)) {
      setTreatment(selectedTreatment);
    }
  }, [selectedTreatment]);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final submit
      setStep(4);
    }
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Validations
  const isStep1Valid = !!treatment;
  const isStep2Valid = !!selectedDate && !!selectedTime;
  const isStep3Valid = !!name && !!email && !!phone;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-gold/15 rounded-3xl overflow-hidden shadow-2xl font-sans">
      {/* Progress Header */}
      <div className="bg-forest px-6 py-8 text-cream-light relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gold/10 blur-2xl" />
        
        <div className="relative">
          <h3 className="text-2xl sm:text-3xl font-serif font-medium text-gold-light mb-1">
            Schedule a Consultation
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm">
            Begin your personalized skin transformation today
          </p>

          {/* Stepper Dots */}
          {step <= 3 && (
            <div className="flex items-center gap-4 mt-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold border ${
                    step === s 
                      ? "bg-gold border-gold text-forest" 
                      : step > s 
                        ? "bg-gold-dark/40 border-gold-dark text-cream-light" 
                        : "border-stone-500 text-stone-400"
                  }`}>
                    {s}
                  </div>
                  <span className={`text-xs font-medium hidden sm:inline ${step === s ? "text-cream-light font-semibold" : "text-stone-400"}`}>
                    {s === 1 ? "Treatment" : s === 2 ? "Schedule" : "Details"}
                  </span>
                  {s < 3 && <div className={`w-8 h-[1px] bg-stone-600 hidden sm:block ${step > s ? "bg-gold/50" : ""}`} />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* Step 1: Select Treatment */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h4 className="text-lg font-semibold text-forest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Select Your Procedure
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {TREATMENTS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTreatment(t)}
                  className={`w-full text-left px-5 py-4 rounded-xl border font-medium text-sm transition-all duration-200 cursor-pointer ${
                    treatment === t
                      ? "border-gold bg-cream-light text-forest ring-1 ring-gold"
                      : "border-stone-200 hover:border-gold hover:bg-stone-50 text-stone-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{t}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      treatment === t ? "border-gold bg-gold text-forest" : "border-stone-300"
                    }`}>
                      {treatment === t && <div className="w-1.5 h-1.5 rounded-full bg-forest" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div className="animate-fade-in-up">
            <h4 className="text-lg font-semibold text-forest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Choose Date & Time
            </h4>
            
            {/* Dates Grid */}
            <label className="block text-xs uppercase tracking-wider text-stone-500 font-bold mb-2">
              Available Dates
            </label>
            <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-6">
              {dates.map((d, index) => {
                const isSelected = selectedDate?.dayNum === d.dayNum;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(d)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-gold bg-cream-light text-forest ring-1 ring-gold"
                        : "border-stone-200 hover:border-gold hover:bg-stone-50 text-stone-700"
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                      {d.dayName}
                    </span>
                    <span className="text-lg font-bold my-0.5">
                      {d.dayNum}
                    </span>
                    <span className="text-[10px] text-stone-500">
                      {d.month}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Time Slots Grid */}
            {selectedDate && (
              <div className="animate-fade-in-up">
                <label className="block text-xs uppercase tracking-wider text-stone-500 font-bold mb-2">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.map((t) => {
                    const isSelected = selectedTime === t;
                    return (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`text-center py-2.5 px-3 rounded-lg border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-gold bg-forest text-cream-light"
                            : "border-stone-200 hover:border-gold hover:bg-stone-50 text-stone-700"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <div className="animate-fade-in-up">
            <h4 className="text-lg font-semibold text-forest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Personal Contact Details
            </h4>
            
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g., Victoria Rose"
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-gold focus:bg-white transition-all text-stone-800"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g., victoria@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-gold focus:bg-white transition-all text-stone-800"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g., (555) 019-2834"
                      className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-gold focus:bg-white transition-all text-stone-800"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
                  Treatment Goals & Medical History Notes (Optional)
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3.5 w-4 h-4 text-stone-400" />
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about your concerns, target areas, or previous procedures..."
                    rows={3}
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-gold focus:bg-white transition-all text-stone-800 resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation screen */}
        {step === 4 && (
          <div className="text-center py-6 animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-serif text-forest font-semibold mb-2">
              Appointment Request Received
            </h3>
            <p className="text-sm text-stone-500 max-w-md mx-auto mb-6">
              Thank you, <span className="font-semibold text-stone-800">{name}</span>. A concierge coordinator will review your chart details and contact you via phone within 1 business hour to finalize your visit.
            </p>

            <div className="max-w-md mx-auto bg-stone-50 border border-stone-100 rounded-2xl p-5 text-left text-sm text-stone-700 space-y-3 mb-6">
              <div className="flex justify-between border-b border-stone-200 pb-2.5">
                <span className="font-medium text-stone-500">Treatment:</span>
                <span className="font-semibold text-forest">{treatment}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2.5">
                <span className="font-medium text-stone-500">Date:</span>
                <span className="font-semibold text-stone-800">{selectedDate?.fullDate}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2.5">
                <span className="font-medium text-stone-500">Time:</span>
                <span className="font-semibold text-stone-800">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-stone-500">Clinic Location:</span>
                <span className="font-semibold text-stone-800 text-right">AURA Sanctuary, Beverly Hills, Suite 400</span>
              </div>
            </div>

            <button
              onClick={() => {
                setStep(1);
                setTreatment("");
                setSelectedDate(null);
                setSelectedTime("");
                setName("");
                setEmail("");
                setPhone("");
                setNotes("");
              }}
              className="text-sm text-gold-dark font-semibold hover:text-gold hover:underline cursor-pointer"
            >
              Book another appointment
            </button>
          </div>
        )}

        {/* Footer Navigation */}
        {step <= 3 && (
          <div className="mt-8 pt-5 border-t border-stone-100 flex items-center justify-between font-sans">
            {step > 1 ? (
              <button
                onClick={handleBackStep}
                className="flex items-center gap-1.5 text-sm font-semibold text-stone-500 hover:text-forest transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : (
              <div /> // Spacer
            )}
            
            <button
              onClick={handleNextStep}
              disabled={
                (step === 1 && !isStep1Valid) ||
                (step === 2 && !isStep2Valid) ||
                (step === 3 && !isStep3Valid)
              }
              className={`flex items-center gap-1 bg-forest text-cream-light font-semibold px-6 py-3 rounded-full text-sm shadow-md transition-all duration-300 ${
                ((step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid) || (step === 3 && !isStep3Valid))
                  ? "opacity-40 cursor-not-allowed bg-stone-300 text-stone-500 shadow-none"
                  : "hover:bg-forest-light hover:shadow-lg cursor-pointer"
              }`}
            >
              {step === 3 ? "Complete Booking" : "Next Step"}
              {step < 3 && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
