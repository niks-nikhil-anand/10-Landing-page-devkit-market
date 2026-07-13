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
  title: "SaaS Waitlist & Product Launch | Join the Early Access Program",
  description: "Join the exclusive early-access waitlist for our next-generation SaaS platform. Be the first to experience AI-powered productivity, automation, collaboration, and cloud-native workflows before public launch.",
  keywords: [
    "SaaS launch",
    "product waitlist",
    "early access software",
    "beta program",
    "startup software",
    "AI SaaS",
    "cloud platform",
    "productivity software",
    "workflow automation",
    "team collaboration",
    "startup launch",
    "software beta",
    "early adopter",
    "business software",
    "cloud application"
  ],
  alternates: {
    canonical: "https://launchcloud.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SaaS Waitlist & Product Launch | Join the Early Access Program",
    description: "Join the exclusive early-access waitlist for our next-generation SaaS platform. Be the first to experience AI-powered productivity, automation, collaboration, and cloud-native workflows before public launch.",
    url: "https://launchcloud.com",
    siteName: "LaunchCloud™",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://launchcloud.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LaunchCloud™ - Next-Gen Cloud Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Waitlist & Product Launch | Join the Early Access Program",
    description: "Join the exclusive early-access waitlist for our next-generation SaaS platform. Be the first to experience AI-powered productivity, automation, collaboration, and cloud-native workflows before public launch.",
    images: ["https://launchcloud.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org SoftwareApplication
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LaunchCloud™ Platform",
    "image": "https://launchcloud.com/app-mockup.png",
    "description": "Next-generation SaaS platform providing AI workflow automation, project timeline management, and real-time team collaboration.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "description": "Free during beta"
    }
  };

  // Schema.org Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LaunchCloud™",
    "url": "https://launchcloud.com",
    "logo": "https://launchcloud.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/launchcloud",
      "https://twitter.com/launchcloud",
      "https://github.com/launchcloud"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-2026",
      "contactType": "founder support",
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
        "name": "When will the platform launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LaunchCloud™ is scheduled for official public launch in Q4 2026. Private beta invitations will be delivered starting Q2 2026."
        }
      },
      {
        "@type": "Question",
        "name": "Is joining the waitlist free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, joining the early access waitlist is 100% free and registers your spot for initial testing cohorts."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get beta access?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beta invitations are sent out in chronological order. You can increase your queue position by referring team members using your custom invite link."
        }
      },
      {
        "@type": "Question",
        "name": "Can enterprise teams apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, enterprise founders and managers can request dedicated onboarding slots by clicking 'Book Demo' in our contact section."
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
        "item": "https://launchcloud.com"
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
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
