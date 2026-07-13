import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Telehealth & Concierge Medicine Platform | Virtual Healthcare Solutions",
  description: "Deliver personalized healthcare with secure telemedicine, concierge medicine, online consultations, AI-powered patient engagement, remote monitoring, and HIPAA-compliant healthcare infrastructure.",
  keywords: [
    "telehealth",
    "virtual healthcare",
    "concierge medicine",
    "online doctor consultation",
    "remote patient monitoring",
    "healthcare software",
    "telemedicine platform",
    "digital healthcare",
    "AI healthcare",
    "electronic health records",
    "virtual clinic",
    "healthcare cloud",
    "HIPAA compliant",
    "doctor scheduling",
    "patient portal"
  ],
  alternates: {
    canonical: "https://healthcloud.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Telehealth & Concierge Medicine Platform | Virtual Healthcare Solutions",
    description: "Deliver personalized healthcare with secure telemedicine, concierge medicine, online consultations, AI-powered patient engagement, remote monitoring, and HIPAA-compliant healthcare infrastructure.",
    url: "https://healthcloud.com",
    siteName: "HealthCloud™",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://healthcloud.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HealthCloud™ - Telehealth & Concierge Medicine Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telehealth & Concierge Medicine Platform | Virtual Healthcare Solutions",
    description: "Deliver personalized healthcare with secure telemedicine, concierge medicine, online consultations, AI-powered patient engagement, remote monitoring, and HIPAA-compliant healthcare infrastructure.",
    images: ["https://healthcloud.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // MedicalOrganization Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "HealthCloud",
    "alternateName": "HealthCloud™",
    "url": "https://healthcloud.com",
    "logo": "https://healthcloud.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0100",
      "contactType": "customer service",
      "email": "hello@healthcloud.com",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Healthcare Innovation Drive",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "description": "Secure, cloud-native telehealth and concierge medicine platform helping providers deliver exceptional virtual care worldwide."
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200">
        {children}
      </body>
    </html>
  );
}
