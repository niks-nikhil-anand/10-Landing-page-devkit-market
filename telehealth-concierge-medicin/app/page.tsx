import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import FeaturesGrid from "@/components/FeaturesGrid";
import PlatformModules from "@/components/PlatformModules";
import WorkflowTimeline from "@/components/WorkflowTimeline";
import Specialties from "@/components/Specialties";
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
    <div className="flex flex-col min-h-screen">
      {/* Structural sticky navigation bar */}
      <Navbar />

      {/* Main page layout */}
      <main className="flex-grow">
        <Hero />
        <TrustedBy />
        <FeaturesGrid />
        <PlatformModules />
        <WorkflowTimeline />
        <Specialties />
        <AnalyticsDashboard />
        <Integrations />
        <PricingCards />
        <Testimonials />
        <FAQAccordion />
        <ContactSection />
        <NewsletterSignup />
      </main>

      {/* Premium dark footer layout */}
      <Footer />

      {/* Global interactive overlay widgets (Back to Top, Cookie Consent, Live Chat Widget) */}
      <FloatingWidgets />
    </div>
  );
}
