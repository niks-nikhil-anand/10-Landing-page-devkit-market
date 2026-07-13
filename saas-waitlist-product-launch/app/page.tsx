import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveStats from "@/components/LiveStats";
import TrustedBy from "@/components/TrustedBy";
import FeaturesGrid from "@/components/FeaturesGrid";
import ProductPreview from "@/components/ProductPreview";
import WhyJoin from "@/components/WhyJoin";
import ProductRoadmap from "@/components/ProductRoadmap";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import PricingPreview from "@/components/PricingPreview";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import ContactSection from "@/components/ContactSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LiveStats />
        <TrustedBy />
        <FeaturesGrid />
        <ProductPreview />
        <WhyJoin />
        <ProductRoadmap />
        <HowItWorks />
        <Integrations />
        <PricingPreview />
        <Testimonials />
        <FAQAccordion />
        <ContactSection />
        <NewsletterSignup />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
