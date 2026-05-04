import AnimatedCounterBar from "@/components/dealer/counterBar";
import FAQSection from "@/components/dealer/dealerFAQ";
import DealerApplicationForm from "@/components/dealer/dealerForm";
import DealerHero from "@/components/dealer/dealerHero";
import ContactCTASection from "@/components/dealer/dealerQuery";
import MorzzePartnerSection from "@/components/dealer/partnerMorzze";
import TerritoryCoverageSection from "@/components/dealer/territoryPage";
import HeroSection from "@/components/home/HeroSection";
import React from "react";

const page = () => {
  return (
    <div>
      <DealerHero />
      <AnimatedCounterBar />
      <MorzzePartnerSection />
      <TerritoryCoverageSection />
      <DealerApplicationForm />
      <FAQSection />
      <ContactCTASection />
    </div>
  );
};

export default page;
