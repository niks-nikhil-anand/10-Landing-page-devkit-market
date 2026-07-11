import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AURA Aesthetics | Premium Medical Spa & Skin Clinic",
  description: "Experience the ultimate in bespoke medical aesthetics, advanced laser skin rejuvenation, anti-aging injectables, and cellular wellness therapies in a tranquil, state-of-the-art clinical sanctuary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1F1F1E] font-sans selection:bg-[#C5A880]/30 selection:text-[#102E24]">
        {children}
      </body>
    </html>
  );
}
