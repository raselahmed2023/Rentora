import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PropertyCategoriesSection from "@/components/home/PropertyCategoriesSection";
import SafetyTrustSection from "@/components/home/SafetyTrustSection";
import WhoRentoraHelpsSection from "@/components/home/WhoRentoraHelpsSection";
import WhyChooseRentoraSection from "@/components/home/WhyChooseRentoraSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PropertyCategoriesSection />
      <WhyChooseRentoraSection />
      <HowItWorksSection />
      <SafetyTrustSection />
      <WhoRentoraHelpsSection />
      <FaqSection></FaqSection>
    </main>
  );
}