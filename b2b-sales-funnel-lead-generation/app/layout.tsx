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
  title: "B2B Sales Funnel & Lead Generation Platform | AI Sales Automation",
  description: "Generate qualified B2B leads, automate sales funnels, improve conversion rates, manage CRM pipelines, and accelerate revenue growth with an AI-powered lead generation platform.",
  keywords: [
    "B2B lead generation",
    "sales funnel software",
    "sales automation",
    "CRM platform",
    "lead nurturing",
    "marketing automation",
    "pipeline management",
    "AI lead scoring",
    "appointment scheduling",
    "prospecting tools",
    "sales intelligence",
    "email automation",
    "revenue growth",
    "business development",
    "lead management"
  ],
  alternates: {
    canonical: "https://leadflowcloud.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "B2B Sales Funnel & Lead Generation Platform | AI Sales Automation",
    description: "Generate qualified B2B leads, automate sales funnels, improve conversion rates, manage CRM pipelines, and accelerate revenue growth with an AI-powered lead generation platform.",
    url: "https://leadflowcloud.com",
    siteName: "LeadFlow Cloud™",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://leadflowcloud.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LeadFlow Cloud™ - B2B Sales Funnel & Lead Generation Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Sales Funnel & Lead Generation Platform | AI Sales Automation",
    description: "Generate qualified B2B leads, automate sales funnels, improve conversion rates, manage CRM pipelines, and accelerate revenue growth with an AI-powered lead generation platform.",
    images: ["https://leadflowcloud.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org SoftwareApplication
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LeadFlow Cloud™",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "url": "https://leadflowcloud.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    },
    "offers": {
      "@type": "Offer",
      "price": "49.00",
      "priceCurrency": "USD"
    }
  };

  // Schema.org Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LeadFlow Cloud™",
    "url": "https://leadflowcloud.com",
    "logo": "https://leadflowcloud.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/leadflowcloud",
      "https://twitter.com/leadflowcloud"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-9876",
      "contactType": "sales",
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
        "name": "How does AI lead scoring work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI lead scoring analyzes demographic details, firmographics, and real-time behavioral data (such as email opens, page visits, and form submissions) to compute a score between 1 and 100, highlighting prospects most likely to close."
        }
      },
      {
        "@type": "Question",
        "name": "Can I import my CRM data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can import data directly via CSV or map fields dynamically through our native Salesforce, HubSpot, Zoho, and Pipedrive integrations in a few clicks."
        }
      },
      {
        "@type": "Question",
        "name": "Does it integrate with Salesforce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we support a bi-directional, real-time sync with Salesforce, updating contact statuses, leads scores, email communication records, and task lists instantly."
        }
      },
      {
        "@type": "Question",
        "name": "Can I automate follow-up emails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can configure drip outreach sequences triggered automatically by prospect behavioral milestones, like page visits, lead score upgrades, or meeting cancellations."
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
        "item": "https://leadflowcloud.com"
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
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
