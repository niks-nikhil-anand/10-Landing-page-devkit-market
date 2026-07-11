"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw, Check, ShieldCheck } from "lucide-react";

interface Question {
  id: string;
  title: string;
  subtitle: string;
  options: {
    value: string;
    label: string;
    desc: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: "skinType",
    title: "How would you describe your skin type?",
    subtitle: "Select the option that matches your skin's daily behavior.",
    options: [
      { value: "dry", label: "Dry & Dehydrated", desc: "Feels tight, flakey, or absorbs moisturizer very quickly." },
      { value: "oily", label: "Oily & Acne-Prone", desc: "Visible shine, enlarged pores, prone to frequent breakouts." },
      { value: "combination", label: "Combination", desc: "Shiny T-zone (forehead, nose, chin) but dry or normal cheeks." },
      { value: "sensitive", label: "Sensitive & Reactive", desc: "Prone to redness, burning, itching, or allergic reactions." }
    ]
  },
  {
    id: "concern",
    title: "What is your primary skin concern?",
    subtitle: "Identify the main area you want our clinical treatments to target.",
    options: [
      { value: "aging", label: "Wrinkles & Fine Lines", desc: "Loss of smoothness, expression lines, crow's feet." },
      { value: "acne", label: "Active Acne & Acne Scars", desc: "Blemishes, texture unevenness, or dark spots left from old acne." },
      { value: "pigment", label: "Pigmentation & Sun Damage", desc: "Dark spots, melasma, redness, freckles, or uneven skin tone." },
      { value: "laxity", label: "Loss of Firmness & Volume", desc: "Sagging skin, hollow temples or cheeks, loss of jawline definition." }
    ]
  },
  {
    id: "goal",
    title: "What is your ultimate wellness goal?",
    subtitle: "What kind of outcome is most important to you?",
    options: [
      { value: "glow", label: "Instant Radiance & Hydration", desc: "A red-carpet ready glow, highly plump, and deeply hydrated skin." },
      { value: "prevent", label: "Long-term Preventive Aging", desc: "Stimulating collagen production to maintain youthful skin naturally." },
      { value: "resurface", label: "Complete Skin Resurfacing", desc: "Clearing up active issues, erasing scars, and smoothing overall texture." },
      { value: "contour", label: "Sculpted & Lifted Features", desc: "Non-surgical lifting and contouring of the face or body contours." }
    ]
  }
];

const RECOMMENDATIONS: Record<string, {
  name: string;
  type: string;
  duration: string;
  downtime: string;
  desc: string;
  benefits: string[];
}> = {
  aging: {
    name: "Bespoke Dermal Fillers & Botox",
    type: "Injectables & Volume Restoration",
    duration: "30-45 mins",
    downtime: "None (Mild redness 1-2 hours)",
    desc: "Target expression lines and restore youthful facial volume with our FDA-approved premium injectables. Custom tailored to preserve your natural expressions while softening wrinkles.",
    benefits: ["Smoothes lines instantly", "Restores lost cheek & lip volume", "Results last 6-18 months"]
  },
  acne: {
    name: "Aerolase Neo Laser Therapy",
    type: "Advanced Clinical Laser",
    duration: "45 mins",
    downtime: "None (Zero peeling, return to work)",
    desc: "A revolutionary 650-microsecond laser that destroys acne-causing bacteria, collapses micro-vessels to clear redness, and stimulates deep collagen to fade acne scars.",
    benefits: ["Gentle & painless warmth", "Clears active acne & redness", "Safe for all skin types"]
  },
  pigment: {
    name: "Lumecca IPL Photofacial",
    type: "High-Intensity Pulsed Light",
    duration: "30 mins",
    downtime: "1-3 days (Light darkening of spots)",
    desc: "The most powerful Intense Pulsed Light (IPL) treatment available to target vascular lesions, sun damage, freckles, and rosacea. Achieve an even-toned, luminous complexion.",
    benefits: ["Significantly reduces brown spots", "Clears facial redness & veins", "Visible results in 1-2 sessions"]
  },
  laxity: {
    name: "Morpheus8 RF Microneedling",
    type: "Subdermal Adipose Remodeling",
    duration: "60 mins",
    downtime: "2-3 days (Mild swelling & tiny dots)",
    desc: "Fractional radiofrequency (RF) microneedling that penetrates deep into subdermal layers to remodel fat and tighten skin. The gold standard for non-surgical face and neck lifting.",
    benefits: ["Powerful skin tightening", "Resculpts jawline & double chin", "Dramatic collagen remodeling"]
  }
};

interface SkinQuizProps {
  onRecommendTreatment: (treatmentName: string) => void;
}

export default function SkinQuiz({ onRecommendTreatment }: SkinQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (value: string) => {
    const questionId = QUESTIONS[currentStep].id;
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  // Logic to determine recommendation: based on concern
  const selectedConcern = answers["concern"] || "aging";
  const recommendation = RECOMMENDATIONS[selectedConcern] || RECOMMENDATIONS["aging"];

  const progressPercentage = ((currentStep) / QUESTIONS.length) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 shadow-xl border border-gold/10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-forest/5 blur-3xl" />

      {!showResults ? (
        <div>
          {/* Header */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Assessment
            </span>
            <div className="flex justify-between items-center text-sm text-stone-500 font-medium mb-2 font-sans">
              <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div className="w-full h-1 bg-cream-dark rounded-full overflow-hidden">
              <div 
                className="h-full gold-gradient transition-all duration-500 ease-out"
                style={{ width: `${((currentStep) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question and subtitle */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-serif text-forest font-medium mb-2">
              {QUESTIONS[currentStep].title}
            </h3>
            <p className="text-sm text-stone-500 font-sans">
              {QUESTIONS[currentStep].subtitle}
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-4">
            {QUESTIONS[currentStep].options.map((option) => {
              const isSelected = answers[QUESTIONS[currentStep].id] === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => handleSelectOption(option.value)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group cursor-pointer ${
                    isSelected
                      ? "bg-forest border-forest text-cream-light shadow-md"
                      : "bg-white/80 border-gold/15 hover:border-gold hover:bg-cream-light text-stone-800"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className={`font-semibold text-base sm:text-lg mb-1 font-sans ${isSelected ? "text-gold-light" : "text-forest"}`}>
                        {option.label}
                      </div>
                      <div className={`text-xs sm:text-sm font-sans ${isSelected ? "text-stone-300" : "text-stone-500"}`}>
                        {option.desc}
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-1 transition-all ${
                      isSelected 
                        ? "border-gold-light bg-gold text-forest" 
                        : "border-gold/30 bg-stone-50 group-hover:border-gold"
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Progress Back button */}
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="mt-6 text-sm text-stone-500 hover:text-forest transition-colors font-sans flex items-center gap-1 cursor-pointer"
            >
              Back to previous question
            </button>
          )}
        </div>
      ) : (
        <div className="animate-fade-in-up">
          {/* Results State */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold/10 text-gold-dark text-xs font-semibold uppercase tracking-widest rounded-full mb-3">
              <ShieldCheck className="w-4 h-4" /> Recommendation Prepared
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-forest font-medium">
              Your Bespoke Skin Plan
            </h3>
            <p className="text-stone-500 text-sm mt-1 font-sans">
              Based on your unique profile, our clinical specialists recommend:
            </p>
          </div>

          {/* Recommendation Spotlight Card */}
          <div className="bg-white/90 border border-gold/25 rounded-2xl p-6 sm:p-8 shadow-md mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gold/10 pb-5 mb-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-dark font-semibold">
                  {recommendation.type}
                </span>
                <h4 className="text-2xl sm:text-3xl font-serif text-forest font-semibold mt-1">
                  {recommendation.name}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-sans">
                <span className="bg-cream-dark text-forest px-3 py-1 rounded-md font-medium border border-gold/10">
                  Duration: {recommendation.duration}
                </span>
                <span className="bg-cream-dark text-forest px-3 py-1 rounded-md font-medium border border-gold/10">
                  Downtime: {recommendation.downtime}
                </span>
              </div>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {recommendation.desc}
            </p>

            <div className="bg-cream-light/50 border border-gold/10 rounded-xl p-4 sm:p-5">
              <h5 className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-3 font-sans">
                Key Clinical Benefits:
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700 font-sans">
                {recommendation.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-sans">
            <button
              onClick={() => onRecommendTreatment(recommendation.name)}
              className="w-full sm:w-auto bg-forest hover:bg-forest-light text-cream-light px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
            >
              Select & Book Treatment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto border border-gold/30 hover:border-gold bg-transparent text-stone-700 hover:text-forest px-6 py-3.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> Retake Skin Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
