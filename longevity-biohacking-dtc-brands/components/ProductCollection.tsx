"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Check, Heart, Sparkles } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  reviewsCount: number;
  tag: string;
  badge?: string;
  color: string;
}

const products: Product[] = [
  {
    id: "longevity-daily",
    name: "Longevity Daily Capsules",
    price: 59,
    description: "All-in-one cell optimizer NAD+ precursors & antioxidant complex.",
    rating: 4.9,
    reviewsCount: 840,
    tag: "NAD+ Booster",
    badge: "Best Seller",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "nad-booster",
    name: "NAD+ Booster",
    price: 79,
    description: "High-potency cellular fuel supporting DNA repair and metabolic youth.",
    rating: 4.8,
    reviewsCount: 620,
    tag: "SIRT Activator",
    badge: "Scientific Choice",
    color: "from-purple-500 to-indigo-650",
  },
  {
    id: "cellular-recovery",
    name: "Cellular Recovery Formula",
    price: 69,
    description: "Supports systemic health and protects against daily oxidative stress.",
    rating: 4.9,
    reviewsCount: 420,
    tag: "Oxidative Guard",
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: "sleep-blend",
    name: "Sleep Optimization Blend",
    price: 49,
    description: "Deep sleep catalyst featuring L-Theanine, Magnesium, & Apigenin.",
    rating: 4.8,
    reviewsCount: 910,
    tag: "Recovery Sleep",
    badge: "Sleep Award",
    color: "from-indigo-600 to-violet-700",
  },
  {
    id: "focus-brain",
    name: "Focus & Brain Performance",
    price: 49,
    description: "Premium nootropic stack for mental speed, memory recall, and focus.",
    rating: 4.7,
    reviewsCount: 380,
    tag: "Nootropic",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "metabolic-support",
    name: "Metabolic Support",
    price: 54,
    description: "Optimizes insulin sensitivity, energy delivery, and metabolic rates.",
    rating: 4.8,
    reviewsCount: 290,
    tag: "AMPK Activator",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "immune-defense",
    name: "Immune Defense Complex",
    price: 39,
    description: "Science-backed daily immune support containing Zinc, D3, & Elderberry.",
    rating: 4.9,
    reviewsCount: 150,
    tag: "Defense Shield",
    color: "from-blue-600 to-sky-650",
  },
  {
    id: "collagen-peptides",
    name: "Collagen Peptides",
    price: 35,
    description: "Grass-fed hydrolyzed collagen supporting joints, skin, and hair.",
    rating: 4.7,
    reviewsCount: 540,
    tag: "Joint & Skin",
    color: "from-rose-500 to-pink-650",
  },
  {
    id: "omega3-premium",
    name: "Omega-3 Premium",
    price: 42,
    description: "Ultra-pure molecularly distilled fish oil with maximum EPA & DHA.",
    rating: 4.8,
    reviewsCount: 270,
    tag: "Cardiovascular",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: "electrolyte-hydration",
    name: "Electrolyte Hydration",
    price: 29,
    description: "Clean cellular hydration formula with real fruit extract & trace minerals.",
    rating: 4.9,
    reviewsCount: 460,
    tag: "Hydration",
    color: "from-sky-500 to-blue-600",
  },
  {
    id: "adaptogen-complex",
    name: "Adaptogen Complex",
    price: 45,
    description: "Hormonal balance and stress response catalyst containing Ashwagandha.",
    rating: 4.8,
    reviewsCount: 310,
    tag: "Adrenal Support",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "gut-probiotics",
    name: "Gut Health Probiotics",
    price: 49,
    description: "Broad-spectrum probiotic strains with prebiotics for digestive support.",
    rating: 4.9,
    reviewsCount: 680,
    tag: "Microbiome",
    color: "from-emerald-500 to-teal-650",
  },
];

export default function ProductCollection() {
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    const existing = localStorage.getItem("lifenova-cart");
    let cart = [];
    if (existing) {
      try {
        cart = JSON.parse(existing);
      } catch (e) {
        cart = [];
      }
    }

    const matchIdx = cart.findIndex((item: { id: string }) => item.id === product.id);
    if (matchIdx > -1) {
      cart[matchIdx].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        color: product.color,
      });
    }

    localStorage.setItem("lifenova-cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("lifenova-cart-update"));

    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <section id="products" className="py-24 relative bg-dot-grid">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 rounded-full bg-gradient-to-tr from-primary/5 to-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            LifeNova Essentials
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
            Science-Backed <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Wellness Essentials
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Every formulation is third-party lab tested, doctor approved, and verified for clinical potency.
          </p>
        </div>

        {/* 12 Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {products.map((p) => {
            const isAdded = addedProductId === p.id;
            return (
              <motion.div
                key={p.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-xl transition-all duration-300 min-h-[420px]"
              >
                {/* Popular badges */}
                {p.badge && (
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-lg bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 text-[8px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-2.5 h-2.5 text-accent animate-pulse" /> {p.badge}
                  </span>
                )}

                {/* Supplement Bottle Silhouette Placeholder visual card */}
                <div className="relative h-40 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-850 flex items-center justify-center overflow-hidden mb-5">
                  <div className={`absolute w-36 h-36 rounded-full bg-gradient-to-tr ${p.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity`} />
                  
                  {/* Supplement capsule visual mock */}
                  <div className="relative flex flex-col items-center justify-center text-center p-4">
                    <div className={`w-12 h-20 rounded-t-2xl rounded-b-2xl bg-gradient-to-b ${p.color} border border-white/20 shadow-md transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 flex flex-col justify-between p-1.5 text-white text-[9px] font-extrabold font-mono select-none`}>
                      <span className="opacity-75">LN</span>
                      <span className="transform rotate-180 opacity-75">N+</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 mt-3 font-semibold uppercase tracking-wider">{p.tag}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5 text-left">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Pricing and Reviews */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-extrabold text-slate-950 dark:text-white">${p.price}</span>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-slate-450">
                      <Star className="w-3.5 h-3.5 fill-amber-450 text-amber-450" />
                      <span>{p.rating}</span>
                      <span className="text-slate-400 font-normal">({p.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={() => handleAddToCart(p)}
                    disabled={isAdded}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      isAdded
                        ? "bg-green-500 text-white shadow-green-500/10"
                        : "bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4.5 h-4.5" /> Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
