"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  Check, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Award, 
  Clock, 
  Menu, 
  X, 
  FileText, 
  Activity, 
  BookmarkCheck,
  Percent
} from "lucide-react";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import SkinQuiz from "./components/SkinQuiz";
import BookingForm from "./components/BookingForm";

const basePath = "/medical-spa-and-aesthetics-clinics";

// Signature Treatment Data
const TREATMENTS_DATA = [
  {
    id: "morpheus8",
    name: "Morpheus8 RF Microneedling",
    category: "Skin Resurfacing",
    duration: "60 mins",
    downtime: "2-3 days",
    price: "From $850",
    desc: "The gold standard in subdermal adipose remodeling. Fractional needles deliver radiofrequency energy deep into the skin, contracting fat, stimulating collagen, and tightening sagging skin.",
    image: `${basePath}/images/treatment-laser.jpg`,
    benefits: ["Sharpens jawline definition", "Reduces deep acne scarring", "Lifts face & neck tissues"]
  },
  {
    id: "injectables",
    name: "Bespoke Dermal Fillers & Botox",
    category: "Injectables",
    duration: "30-45 mins",
    downtime: "None",
    price: "From $650",
    desc: "Restore youthful volumes and soften expressions. Our master physicians inject premium fillers and neurotoxins with micrometric precision, emphasizing facial harmony and natural movement.",
    image: `${basePath}/images/treatment-injectables.jpg`,
    benefits: ["Smooths forehead & eye wrinkles", "Restores high cheek contours", "Instant natural-looking results"]
  },
  {
    id: "lumecca",
    name: "Lumecca IPL Photofacial",
    category: "Skin Resurfacing",
    duration: "30 mins",
    downtime: "1-2 days",
    price: "From $350",
    desc: "A high-performance intense pulsed light (IPL) treatment that targets vascular anomalies, pigmentation, sun damage, and rosacea. Achieve an glass-like, beautifully even complexion.",
    image: `${basePath}/images/treatment-hydrafacial.jpg`,
    benefits: ["Clears sun spots & pigmentation", "Calms redness & broken capillaries", "Reveals radiant skin luminosity"]
  },
  {
    id: "aerolase",
    name: "Aerolase Neo Laser Therapy",
    category: "Skin Resurfacing",
    duration: "45 mins",
    downtime: "None",
    price: "From $400",
    desc: "A painless, 650-microsecond medical laser that treats acne, rosacea, melasma, and fine lines. Safe for all skin tones and does not require skin cooling or contact gels.",
    image: `${basePath}/images/treatment-laser.jpg`,
    benefits: ["Eliminates acne-causing bacteria", "Zero peeling or social downtime", "Stimulates deep skin renewal"]
  },
  {
    id: "hydrafacial",
    name: "AURA Signature Hydrafacial",
    category: "Spa & Facial",
    duration: "60 mins",
    downtime: "None",
    price: "From $250",
    desc: "A multi-step vortex extraction, physical peel, and nutrient infusion system. Combines patented suction technology with super-serums to hydrate, polish, and extract impurities.",
    image: `${basePath}/images/treatment-hydrafacial.jpg`,
    benefits: ["Removes blackheads painlessly", "Plumps skin with antioxidants", "Perfect red-carpet ready glow"]
  },
  {
    id: "ivtherapy",
    name: "Skin Hydration IV Infusion",
    category: "Wellness",
    duration: "45 mins",
    downtime: "None",
    price: "From $190",
    desc: "Cellular rejuvenation from within. A high-dose blend of Vitamin C, Glutathione, electrolytes, and essential minerals injected directly into the bloodstream to boost collagen production and skin glow.",
    image: `${basePath}/images/treatment-injectables.jpg`,
    benefits: ["Detoxifies liver & clear skin", "Rehydrates cells instantly", "Boosts natural energy levels"]
  }
];

const FAQS = [
  {
    q: "How do I know which treatment is right for me?",
    a: "We recommend scheduling a comprehensive consultation or taking our interactive Skin Quiz below. During your in-person analysis, we use multispectral skin scanners to analyze damage underneath the surface and customize a protocol."
  },
  {
    q: "Is there downtime associated with lasers and microneedling?",
    a: "It depends on the intensity. Treatments like Aerolase Laser and Hydrafacials have zero downtime. Morpheus8 RF Microneedling has about 2 to 3 days of mild redness and tiny micro-dots. We provide specialized post-care kits to accelerate healing."
  },
  {
    q: "Who performs the clinical injectable procedures?",
    a: "At AURA, all medical injectables (Botox, fillers, sculptra) and high-energy lasers are performed exclusively by double-board certified physicians and licensed nurse practitioners supervised by our Medical Director."
  },
  {
    q: "What is your rescheduling and cancellation policy?",
    a: "Because we allocate dedicated clinical time for each patient, we request at least 24 hours' notice for cancellations or rescheduling. Cancellations within 24 hours may incur a deposit fee."
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingTreatment, setBookingTreatment] = useState("");

  const bookingRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const treatmentsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRecommendTreatment = (treatmentName: string) => {
    setBookingTreatment(treatmentName);
    scrollToSection(bookingRef);
  };

  const categories = ["All", "Skin Resurfacing", "Injectables", "Spa & Facial", "Wellness"];
  const filteredTreatments = selectedCategory === "All" 
    ? TREATMENTS_DATA 
    : TREATMENTS_DATA.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] relative overflow-x-hidden selection:bg-gold/30 selection:text-forest">
      
      {/* Floating Premium Navigation Bar */}
      <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-4 transition-all duration-300">
        <nav className="max-w-7xl mx-auto glass-panel rounded-full py-3 px-6 sm:px-8 flex items-center justify-between shadow-lg">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center text-gold font-serif font-bold text-sm tracking-tighter">
              A
            </div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-forest">
              AURA<span className="text-gold font-light font-sans text-xs ml-1.5 uppercase">Aesthetics</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-stone-600 font-sans">
            <button onClick={() => scrollToSection(treatmentsRef)} className="hover:text-forest hover:underline underline-offset-4 transition-all cursor-pointer">
              Treatments
            </button>
            <a href="#transformation" className="hover:text-forest hover:underline underline-offset-4 transition-all cursor-pointer">
              Transformations
            </a>
            <button onClick={() => scrollToSection(quizRef)} className="hover:text-forest hover:underline underline-offset-4 transition-all cursor-pointer">
              Skin Quiz
            </button>
            <a href="#testimonials" className="hover:text-forest hover:underline underline-offset-4 transition-all cursor-pointer">
              Reviews
            </a>
            <a href="#faqs" className="hover:text-forest hover:underline underline-offset-4 transition-all cursor-pointer">
              FAQs
            </a>
          </div>

          {/* Nav Call to Action */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection(bookingRef)} 
              className="bg-forest hover:bg-forest-light text-cream-light text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-forest hover:text-gold transition-colors p-1 cursor-pointer">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-white/95 border border-gold/15 backdrop-blur-lg rounded-2xl p-6 shadow-2xl flex flex-col gap-4 font-sans text-center text-sm font-semibold uppercase tracking-wider text-stone-700 animate-fade-in-up">
            <button 
              onClick={() => { setMobileMenuOpen(false); scrollToSection(treatmentsRef); }}
              className="py-2 border-b border-stone-100 hover:text-forest transition-colors cursor-pointer"
            >
              Treatments
            </button>
            <a 
              href="#transformation" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-100 hover:text-forest transition-colors"
            >
              Transformations
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); scrollToSection(quizRef); }}
              className="py-2 border-b border-stone-100 hover:text-forest transition-colors cursor-pointer"
            >
              Skin Quiz
            </button>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-100 hover:text-forest transition-colors"
            >
              Reviews
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-100 hover:text-forest transition-colors"
            >
              FAQs
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); scrollToSection(bookingRef); }}
              className="w-full bg-forest text-cream-light py-3 rounded-full mt-2 cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-8 overflow-hidden bg-gradient-to-b from-cream-light via-[#FAF8F5] to-cream-dark">
        {/* Soft Background blur particles */}
        <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/10 w-[600px] h-[600px] rounded-full bg-forest/3 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-bold uppercase tracking-widest mb-6 border border-gold/15">
              <Award className="w-3.5 h-3.5" /> Beverly Hills Premier Medical Spa
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-serif font-medium leading-[1.08] text-forest tracking-tight max-w-xl sm:max-w-2xl lg:max-w-none">
              Where Science Meets <span className="italic font-light">Sublime</span> Beauty
            </h1>
            <p className="mt-6 text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-xl sm:max-w-2xl font-sans">
              Experience the pinnacle of bespoke clinical aesthetics. Our double-board certified physicians design customized treatments combining medical laser rejuvenation, micro-contouring, and skin-cellular wellness in an ultra-luxurious, state-of-the-art sanctuary.
            </p>
            
            {/* Call to Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-sans">
              <button 
                onClick={() => scrollToSection(bookingRef)} 
                className="w-full sm:w-auto bg-forest hover:bg-forest-light text-cream-light px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection(quizRef)} 
                className="w-full sm:w-auto border border-gold hover:border-gold-dark bg-transparent text-forest hover:bg-cream-light/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Take Skin Advisor Quiz
              </button>
            </div>

            {/* Micro details */}
            <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-12 border-t border-gold/15 pt-8 w-full max-w-lg lg:max-w-none">
              <div>
                <h5 className="text-2xl sm:text-3xl font-serif text-forest font-bold">99.4%</h5>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-500 font-semibold font-sans mt-1">Client Satisfaction</p>
              </div>
              <div>
                <h5 className="text-2xl sm:text-3xl font-serif text-forest font-bold">12K+</h5>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-500 font-semibold font-sans mt-1">Successful Sessions</p>
              </div>
              <div>
                <h5 className="text-2xl sm:text-3xl font-serif text-forest font-bold">2x</h5>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-500 font-semibold font-sans mt-1">Board Certified MDs</p>
              </div>
            </div>
          </div>

          {/* Hero Right Images / Visuals */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gold/10 group animate-fade-in-up delay-100">
            {/* Premium Spa Hero image */}
            <Image 
              src={`${basePath}/images/luxury-spa-hero.jpg`}
              alt="AURA Sanctuary Reception"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            {/* Elegant text banner overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent flex flex-col justify-end p-6 sm:p-8 font-sans">
              <div className="glass-panel border border-gold/20 rounded-2xl p-4 sm:p-5 text-left text-cream-light max-w-sm">
                <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-gold mb-1">
                  Private Sanctuary Experience
                </span>
                <p className="text-xs sm:text-sm leading-relaxed text-stone-300">
                  &ldquo;A tranquil wellness oasis where medical precision aligns with five-star clinical hospitality.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Treatments Section */}
      <section ref={treatmentsRef} id="treatments" className="py-20 sm:py-28 px-4 sm:px-8 bg-white border-y border-gold/10 relative">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark font-sans flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Exquisite Offerings
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-forest font-medium mt-3 mb-4 leading-snug">
              Our Signature Medical & Aesthetics Treatments
            </h2>
            <p className="text-sm sm:text-base text-stone-500 font-sans leading-relaxed">
              We employ advanced FDA-approved clinical technologies and medical serums curated specifically to address skin restructuring, volume replenishment, and organic cellular longevity.
            </p>

            {/* Treatment Categories Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 font-sans">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 border cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-forest border-forest text-cream-light shadow-md"
                      : "bg-stone-50 border-stone-200 text-stone-600 hover:border-gold hover:text-forest"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Treatment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((t, idx) => (
              <div 
                key={t.id} 
                className="bg-stone-50/70 border border-gold/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Photo container */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 border border-gold/20 text-forest text-[10px] font-bold tracking-wider px-3 py-1 rounded-full backdrop-blur-sm font-sans">
                    {t.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col font-sans">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gold-dark mb-1">
                    {t.category}
                  </div>
                  <h4 className="text-xl font-serif text-forest font-semibold mb-3 group-hover:text-gold-dark transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed mb-5 flex-1">
                    {t.desc}
                  </p>
                  
                  {/* Benefits bullet items */}
                  <ul className="text-xs text-stone-700 space-y-2 border-t border-stone-200/60 pt-4 mb-6">
                    {t.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-gold-dark stroke-[2.5]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Booking Link */}
                  <button 
                    onClick={() => handleRecommendTreatment(t.name)}
                    className="w-full text-center bg-forest hover:bg-forest-light text-cream-light text-xs uppercase font-bold tracking-widest py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    Select & Book Treatment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Transformation Section */}
      <section id="transformation" className="py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#FAF8F5] to-cream-dark">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Description Text (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark font-sans flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" /> Proven Restorations
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-forest font-medium leading-tight">
              Real Patients. <br />
              <span className="italic font-light">Luminous</span> Results.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
              We focus on restorative dermal dynamics. Our therapeutic protocols aim to revitalize skin cellular matrix fibers, erase years of sun damage, and restructure soft tissue contours.
            </p>

            {/* Key Quality Pillars */}
            <div className="space-y-4 pt-4 border-t border-gold/15 font-sans">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold/10 text-gold-dark flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-forest">FDA-Approved Advanced Modalities</h5>
                  <p className="text-xs text-stone-500">Only the safest, clinical-grade lasers and needles are used.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold/10 text-gold-dark flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-forest">Cellular Level Healing Focus</h5>
                  <p className="text-xs text-stone-500">Customized medical post-care serums to lock in nutrients and accelerate recovery.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Interactive Slider (Right) */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="w-full max-w-xl">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Experience & Sanctuary Details */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 bg-forest text-cream-light relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl -z-1" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cream-light/3 blur-3xl -z-1" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Gallery */}
          <div className="relative aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gold/20">
            <Image
              src={`${basePath}/images/treatment-laser.jpg`}
              alt="Medical skin treatment session"
              fill
              className="object-cover"
            />
            {/* Subtle floating badge */}
            <div className="absolute top-4 left-4 glass-panel border border-gold/30 rounded-xl p-3 flex items-center gap-2 text-forest">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Sterile Medical Grade Facility</span>
            </div>
          </div>

          {/* Text and list details */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gold">
              <ShieldCheck className="w-4 h-4" /> Clinical Integrity & Luxury
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-gold-light font-medium leading-snug">
              The AURA Sanctuary Experience
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
              Our clinic represents the synergy of a highly advanced medical wellness clinic with the peaceful atmosphere of a private sanctuary. Every room is custom designed with HEPA-clinical air purification, gentle soundscaping, and warm champagne-glow lighting.
            </p>

            {/* Checklists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm">Board-Certified Supervision</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm">Private Dedicated Recovery Lounges</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm">FDA Cleared Equipment Only</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm">Bespoke Post-Treatment Serums</span>
              </div>
            </div>

            <div className="pt-6 font-sans">
              <button 
                onClick={() => scrollToSection(bookingRef)} 
                className="bg-gold hover:bg-gold-light text-forest font-semibold uppercase tracking-widest text-xs px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Advisor Quiz Section */}
      <section ref={quizRef} id="quiz" className="py-20 sm:py-28 px-4 sm:px-8 bg-white border-y border-gold/10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-dark font-sans">
              Virtual Skin Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-forest font-medium mt-2">
              Find Your Bespoke Treatment Protocol
            </h2>
            <p className="text-stone-500 text-sm mt-3 font-sans">
              Take our interactive quiz. Our clinical logic engine matches your skin type, primary concerns, and recovery window with the ideal custom aesthetic procedures.
            </p>
          </div>

          <SkinQuiz onRecommendTreatment={handleRecommendTreatment} />
        </div>
      </section>

      {/* Testimonials Review Section */}
      <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-dark font-sans">
              Verified Client Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-forest font-medium mt-2">
              Voices of Glowing Confidence
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
            
            {/* Card 1 */}
            <div className="bg-white border border-gold/10 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-0.5 text-gold-dark mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed italic">
                  &ldquo;Morpheus8 at AURA is a complete game-changer. The jawline lifting results are incredible and the recovery lounge with oxygen therapy was absolutely heavenly. Cannot recommend Dr. Sterling enough!&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 border-t border-stone-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-bold text-forest text-sm">
                  ES
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-forest">Evelyn S.</h5>
                  <p className="text-[10px] text-stone-400">Beverly Hills, CA</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gold/10 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-0.5 text-gold-dark mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed italic">
                  &ldquo;I had severe hyperpigmentation for years. After just two sessions of Lumecca IPL, my dark spots have faded by at least 80%. My skin has a glow that I haven&apos;t seen since my early twenties.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 border-t border-stone-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-bold text-forest text-sm">
                  MC
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-forest">Marcella C.</h5>
                  <p className="text-[10px] text-stone-400">Malibu, CA</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gold/10 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-0.5 text-gold-dark mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed italic">
                  &ldquo;AURA is the cleanest, most professional clinical spa I have ever visited. The Aerolase laser was quick and painless, and my acne is completely gone. Their post-laser healing cream is pure gold.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 border-t border-stone-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-bold text-forest text-sm">
                  JL
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-forest">Jonathan L.</h5>
                  <p className="text-[10px] text-stone-400">Santa Monica, CA</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Scheduling / Booking Form Section */}
      <section ref={bookingRef} id="booking" className="py-20 sm:py-28 px-4 sm:px-8 bg-white relative">
        {/* Background textures */}
        <div className="absolute top-1/3 left-1/10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Scheduling text details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark font-sans flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Direct Scheduling
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-forest font-medium leading-snug">
              Secure Your Consult Online
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
              Choose your target clinical therapy, find a convenient calendar day and slot, and input your contact profile. Our patient coordinators will chart your profile and call you within 1 business hour to secure the deposit.
            </p>

            {/* Quick stats / notes */}
            <div className="space-y-3 font-sans text-sm text-stone-500 pt-4 border-t border-gold/15">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Zero-obligation consultation for all first-time visitors.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>All chart information is fully HIPAA compliant.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>24-hour flexible cancellation policy.</span>
              </div>
            </div>
          </div>

          {/* Interactive Scheduling Form (Right) */}
          <div className="lg:col-span-7 w-full">
            <BookingForm selectedTreatment={bookingTreatment} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-20 sm:py-28 px-4 sm:px-8 bg-stone-50 border-t border-gold/10">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-dark font-sans">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-forest font-medium mt-2">
              Clinical Clarifications
            </h2>
          </div>

          {/* Accordions */}
          <div className="space-y-4 font-sans">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gold/10 rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left py-5 px-6 sm:px-8 flex items-center justify-between font-semibold text-forest text-base sm:text-lg hover:text-gold-dark transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-stone-600 leading-relaxed animate-fade-in-up">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-cream-light pt-16 pb-8 px-4 sm:px-8 border-t border-gold/20 font-sans">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cream-light flex items-center justify-center text-forest font-serif font-bold text-sm tracking-tighter">
                A
              </div>
              <span className="font-serif text-lg font-bold tracking-widest text-gold-light">
                AURA<span className="text-gold font-light font-sans text-xs ml-1.5 uppercase">Aesthetics</span>
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Beverly Hills’ premier medical wellness and clinical aesthetics destination. Restoring youth, radiance, and holistic cellular longevity.
            </p>
          </div>

          {/* Column 2: Hours */}
          <div className="space-y-4 text-xs sm:text-sm">
            <h5 className="font-bold text-gold uppercase tracking-wider text-xs">Hours of Operation</h5>
            <ul className="space-y-2 text-stone-400">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span className="text-cream-light">9:00 AM - 7:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span className="text-cream-light">10:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-cream-light font-semibold italic text-gold">Closed (Sanctuary day)</span></li>
            </ul>
          </div>

          {/* Column 3: Location */}
          <div className="space-y-4 text-xs sm:text-sm">
            <h5 className="font-bold text-gold uppercase tracking-wider text-xs">Contact Details</h5>
            <ul className="space-y-3 text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>9454 Wilshire Blvd Suite 400,<br />Beverly Hills, CA 90212</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <span>(310) 555-0199</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <span>concierge@aura-aesthetics.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h5 className="font-bold text-gold uppercase tracking-wider text-xs">Aesthetic Insights</h5>
            <p className="text-stone-400 text-xs leading-relaxed">
              Subscribe to receive curated anti-aging guidelines, priority scheduling announcements, and seasonal clinical offers.
            </p>
            <div className="flex overflow-hidden rounded-full border border-gold/30 bg-forest-light">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent px-4 py-2 text-xs focus:outline-none text-cream-light"
              />
              <button className="bg-gold text-forest font-bold text-xs uppercase px-4 hover:bg-gold-light transition-colors cursor-pointer">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Fine Print */}
        <div className="max-w-7xl mx-auto w-full border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-stone-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} AURA Aesthetics Medical Corporation. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">HIPAA Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Medical Consent</a>
            <a href="#" className="hover:text-gold transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
