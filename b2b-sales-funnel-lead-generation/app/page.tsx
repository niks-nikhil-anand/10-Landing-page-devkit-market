import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import FeaturesGrid from "@/components/FeaturesGrid";
import AIAutomation from "@/components/AIAutomation";
import PlatformModules from "@/components/PlatformModules";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Integrations from "@/components/Integrations";
import PricingCards from "@/components/PricingCards";
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
        <TrustedBy />
        <FeaturesGrid />
        <AIAutomation />
        <PlatformModules />
        <WhyChooseUs />
        <HowItWorks />
        <Industries />
        <AnalyticsDashboard />
        <Integrations />
        <PricingCards />
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
