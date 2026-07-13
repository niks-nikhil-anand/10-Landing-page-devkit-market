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
  title: "Intellectual Property & Patent Law Firms | Trademark, Patent & IP Protection Services",
  description: "Protect your innovations with expert intellectual property, patent, trademark, copyright, licensing, litigation, and global IP portfolio management services powered by modern legal technology.",
  keywords: [
    "intellectual property law",
    "patent law firms",
    "patent attorney",
    "trademark registration",
    "copyright law",
    "IP litigation",
    "trade secrets",
    "licensing agreements",
    "patent filing",
    "innovation protection",
    "IP consulting",
    "technology law",
    "legal services",
    "global patents",
    "corporate IP"
  ],
  alternates: {
    canonical: "https://lexpatent.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Intellectual Property & Patent Law Firms | Trademark, Patent & IP Protection Services",
    description: "Protect your innovations with expert intellectual property, patent, trademark, copyright, licensing, litigation, and global IP portfolio management services powered by modern legal technology.",
    url: "https://lexpatent.com",
    siteName: "LexPatent™",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lexpatent.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LexPatent™ - Intellectual Property & Patent Law Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intellectual Property & Patent Law Firms | Trademark, Patent & IP Protection Services",
    description: "Protect your innovations with expert intellectual property, patent, trademark, copyright, licensing, litigation, and global IP portfolio management services powered by modern legal technology.",
    images: ["https://lexpatent.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LegalService
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "LexPatent™",
    "alternateName": "LexPatent Intellectual Property & Patent Law",
    "url": "https://lexpatent.com",
    "logo": "https://lexpatent.com/logo.png",
    "telephone": "+1-800-555-2026",
    "email": "contact@lexpatent.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "500 Innovation Plaza",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "description": "Protecting innovation through trusted legal expertise, secure cloud technology, and world-class intellectual property services."
  };

  // Schema.org FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is intellectual property?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Intellectual property (IP) refers to creations of the mind, such as inventions; literary and artistic works; designs; and symbols, names, and images used in commerce. It is protected in law by patents, copyright, and trademarks, which enable people to earn recognition or financial benefit from what they invent or create."
        }
      },
      {
        "@type": "Question",
        "name": "How long does patent registration take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The patent registration process generally takes between 18 to 36 months depending on the complexity of the technology, the backlog at the patent office, and whether examiner interviews or accelerated examination programs (like USPTO Track One) are utilized."
        }
      },
      {
        "@type": "Question",
        "name": "Can you file international patents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we file international patents using the Patent Cooperation Treaty (PCT) route, which provides a unified procedure for filing patent applications to protect inventions in up to 157 contracting countries."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer trademark monitoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Professional and Enterprise tiers include active trademark monitoring databases, alerting you to conflicting trademark filings and unauthorized uses of your marks internationally."
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
        "item": "https://lexpatent.com"
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
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
