import HeroSection from "@/components/HeroSection";
import TechChipStrip from "@/components/TechChipStrip";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyITWorld from "@/components/WhyITWorld";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechChipStrip />
      <ServicesSection />
      <IndustriesSection />
      <WhyITWorld />
      <CTABanner />
    </>
  );
}
