"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ShieldAlert, ShoppingCart, Trash2, X, Plus, Minus, Check } from "lucide-react";
import Link from "next/link";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
}

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cookie trigger
  useEffect(() => {
    const consent = localStorage.getItem("lifenova-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowCookie(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Load and update cart items
  const loadCart = () => {
    const items = localStorage.getItem("lifenova-cart");
    if (items) {
      try {
        setCartItems(JSON.parse(items));
      } catch (e) {
        setCartItems([]);
      }
    } else {
      setCartItems([]);
    }
  };

  useEffect(() => {
    loadCart();
    window.addEventListener("storage", loadCart);
    window.addEventListener("lifenova-cart-update", loadCart);
    
    // Listen for custom trigger to open cart drawer
    const openCartHandler = () => setShowCartDrawer(true);
    window.addEventListener("lifenova-open-cart", openCartHandler);

    return () => {
      window.removeEventListener("storage", loadCart);
      window.removeEventListener("lifenova-cart-update", loadCart);
      window.removeEventListener("lifenova-open-cart", openCartHandler);
    };
  }, []);

  const updateCartStorage = (newItems: CartItem[]) => {
    setCartItems(newItems);
    localStorage.setItem("lifenova-cart", JSON.stringify(newItems));
    window.dispatchEvent(new Event("lifenova-cart-update"));
  };

  const handleQtyChange = (id: string, delta: number) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        const nextQty = item.quantity + delta;
        return { ...item, quantity: Math.max(1, nextQty) };
      }
      return item;
    });
    updateCartStorage(updated);
  };

  const handleRemove = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCartStorage(updated);
  };

  const handleCheckout = async () => {
    setCheckoutSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCheckoutSuccess(false);
    updateCartStorage([]);
    setShowCartDrawer(false);
  };

  const acceptCookies = () => {
    localStorage.setItem("lifenova-cookie-consent", "accepted");
    setShowCookie(false);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* 1. Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-primary text-white shadow-lg hover:shadow-primary/30 flex items-center justify-center cursor-pointer transition-all hover:-translate-y-0.5 focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Floating Shopping Cart Toggle Button (Trigger) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setShowCartDrawer(true)}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent text-white shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-105 focus:outline-none relative group"
          aria-label="View shopping cart"
        >
          <ShoppingCart className="w-5.5 h-5.5" />
          {totalItemsCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-white dark:border-slate-900 shadow-md">
              {totalItemsCount}
            </span>
          )}
        </button>
      </div>

      {/* 3. Shopping Cart Drawer */}
      <AnimatePresence>
        {showCartDrawer && (
          <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/20 backdrop-blur-xs">
            {/* Backdrop close area */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setShowCartDrawer(false)} />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col justify-between border-l border-slate-200/50 dark:border-slate-800/50"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  <span className="font-display font-extrabold text-slate-900 dark:text-white">Your Cart ({totalItemsCount})</span>
                </div>
                <button
                  onClick={() => setShowCartDrawer(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-350">
                      <ShoppingCart className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-700 dark:text-slate-250">Your cart is empty</span>
                      <span className="block text-xs text-slate-400 mt-1">Add science-backed essentials to start optimization.</span>
                    </div>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/60 flex items-center justify-between gap-4"
                    >
                      {/* Product capsule visual */}
                      <div className={`w-10 h-14 rounded-lg bg-gradient-to-b ${item.color} p-1 text-white flex flex-col justify-between font-mono text-[7px] font-bold flex-shrink-0 select-none`}>
                        <span>LN</span>
                        <span className="transform rotate-180">N+</span>
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0 text-left">
                        <span className="block font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                          {item.name}
                        </span>
                        <span className="block text-xs text-primary font-bold mt-1">
                          ${item.price} each
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col items-end gap-2.5">
                        <div className="flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 rounded-lg p-0.5">
                          <button
                            onClick={() => handleQtyChange(item.id, -1)}
                            className="p-1 rounded text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-slate-900 dark:text-white min-w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleQtyChange(item.id, 1)}
                            className="p-1 rounded text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-[10px] font-semibold text-slate-450 hover:text-red-500 flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" /> Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer summary */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-450">Estimated Total:</span>
                    <span className="text-xl font-extrabold text-slate-950 dark:text-white">${totalPrice}</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={checkoutSuccess}
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-md shadow-primary/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {checkoutSuccess ? (
                      <>
                        <Check className="w-5 h-5" /> Secure Checkout Complete
                      </>
                    ) : (
                      <>
                        Proceed to Secure Checkout
                      </>
                    )}
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Cookie Consent GDPR Banner */}
      <AnimatePresence>
        {showCookie && (
          <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-24 md:max-w-md z-40">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="rounded-2xl glass-panel shadow-2xl p-5 border border-white/20 flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldAlert className="w-4.5 h-4.5" />
              </div>
              <div className="flex-1 space-y-3 text-left">
                <div>
                  <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white leading-tight">
                    Cookie & GDPR Compliance
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal font-normal mt-1">
                    We use cookies to secure member dashboards and track biomarker telemetry. By clicking Accept, you agree to our policies.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={acceptCookies}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-bold rounded-lg transition-all cursor-pointer"
                  >
                    Accept
                  </button>
                  <Link
                    href="#"
                    className="text-[10px] font-semibold text-slate-500 hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
