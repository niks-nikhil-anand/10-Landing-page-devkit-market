import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ProductCollection from "@/components/ProductCollection";
import PlatformFeatures from "@/components/PlatformFeatures";
import WhyChooseUs from "@/components/WhyChooseUs";
import ScienceSection from "@/components/ScienceSection";
import HealthBenefits from "@/components/HealthBenefits";
import HowItWorks from "@/components/HowItWorks";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Integrations from "@/components/Integrations";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import CustomerReviews from "@/components/CustomerReviews";
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
        <ProductCollection />
        <PlatformFeatures />
        <WhyChooseUs />
        <ScienceSection />
        <HealthBenefits />
        <HowItWorks />
        <AnalyticsDashboard />
        <Integrations />
        <SubscriptionPlans />
        <CustomerReviews />
        <FAQAccordion />
        <ContactSection />
        <NewsletterSignup />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
