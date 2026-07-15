"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const basePath = "/medical-spa-and-aesthetics-clinics";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] max-w-2xl rounded-2xl overflow-hidden shadow-xl border border-gold/15 select-none cursor-ew-resize"
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* After Image (Base) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={`${basePath}/images/skin-after.jpg`}
            alt="After treatment radiant skin"
            fill
            sizes="(max-width: 768px) 100vw, 650px"
            className="object-cover"
            draggable={false}
            priority
          />
          <div className="absolute bottom-4 right-4 bg-forest/80 text-cream-light text-[10px] sm:text-xs tracking-widest uppercase px-3 py-1.5 rounded-full font-medium border border-gold/20 backdrop-blur-md">
            After: Glowing & Restored
          </div>
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <Image
            src={`${basePath}/images/skin-before.jpg`}
            alt="Before treatment skin issues"
            fill
            sizes="(max-width: 768px) 100vw, 650px"
            className="object-cover"
            draggable={false}
            priority
          />
          <div className="absolute bottom-4 left-4 bg-forest-light/90 text-gold-light text-[10px] sm:text-xs tracking-widest uppercase px-3 py-1.5 rounded-full font-medium border border-gold/20 backdrop-blur-md">
            Before: Dullness & Textures
          </div>
        </div>

        {/* Divider Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gold-light/60 flex items-center justify-center cursor-ew-resize group"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-9 h-9 rounded-full bg-forest text-gold border border-gold/30 flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-all duration-200">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9l-4 4 4 4m8 0l4-4-4-4"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-stone-500 italic text-center font-sans">
        *Drag the slider handle to witness the transformation after a 3-session bespoke Laser & Microneedling protocol.
      </p>
    </div>
  );
}
