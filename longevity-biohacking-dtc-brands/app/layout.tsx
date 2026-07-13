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
  title: "Longevity & Biohacking Supplements | Personalized Wellness & Healthy Aging",
  description: "Optimize your healthspan with science-backed longevity supplements, personalized wellness programs, biomarker testing, AI health insights, recovery optimization, and premium biohacking products.",
  keywords: [
    "longevity supplements",
    "biohacking products",
    "healthy aging",
    "anti-aging supplements",
    "rose health",
    "healthspan",
    "personalized nutrition",
    "recovery supplements",
    "sleep optimization",
    "metabolic health",
    "AI wellness",
    "biomarker testing",
    "vitamins",
    "nutraceuticals",
    "functional medicine"
  ],
  alternates: {
    canonical: "https://lifenova.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Longevity & Biohacking Supplements | Personalized Wellness & Healthy Aging",
    description: "Optimize your healthspan with science-backed longevity supplements, personalized wellness programs, biomarker testing, AI health insights, recovery optimization, and premium biohacking products.",
    url: "https://lifenova.com",
    siteName: "LifeNova™",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lifenova.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LifeNova™ - Longevity & Biohacking Supplements",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Longevity & Biohacking Supplements | Personalized Wellness & Healthy Aging",
    description: "Optimize your healthspan with science-backed longevity supplements, personalized wellness programs, biomarker testing, AI health insights, recovery optimization, and premium biohacking products.",
    images: ["https://lifenova.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "LifeNova™ Longevity Daily Capsules",
    "image": "https://lifenova.com/product-image.jpg",
    "description": "Premium NAD+ booster and cellular longevity daily capsules designed to improve energy, focus, and overall healthspan.",
    "brand": {
      "@type": "Brand",
      "name": "LifeNova™"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "18000"
    },
    "offers": {
      "@type": "Offer",
      "price": "39.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  // Schema.org Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LifeNova™",
    "url": "https://lifenova.com",
    "logo": "https://lifenova.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/lifenova",
      "https://twitter.com/lifenova",
      "https://instagram.com/lifenova"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-2026",
      "contactType": "customer support",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  };

  // Schema.org FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are your supplements clinically tested?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all LifeNova™ formulations utilize clinically researched, peer-reviewed ingredients at their therapeutic dosages. Our products undergo rigorous third-party lab testing for purity and potency."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer personalized recommendations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our onboarding digital health quiz and optional biomarker testing kits analyze sleep, metabolic, and energy markers to build a tailored longevity supplement program."
        }
      },
      {
        "@type": "Question",
        "name": "How does biomarker tracking work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LifeNova™ connects natively with Apple Health, WHOOP, Oura, and Google Fit. We track biomarker patterns (HRV, resting heart rate, sleep phases) to optimize your daily recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel my subscription anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, subscriptions can be managed, paused, or cancelled at any time directly through your Member Dashboard without penalty fees."
        }
      }
    ]
  };

  // Schema.org Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lifenova.com"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200">
        {children}
      </body>
    </html>
  );
}
