import JoinUsHero from "@/components/career/banner";
import WorkCultureSection from "@/components/career/culture";
import CareersPositionsModal from "@/components/career/jobrole";
import CareersStorySection from "@/components/career/story";
import TeammatesVoiceSlider from "@/components/career/teamMates";
import React from "react";

const page = () => {
  return (
    <div>
      <JoinUsHero />
      <CareersStorySection />
      <TeammatesVoiceSlider />
      <WorkCultureSection />
      <CareersPositionsModal />
    </div>
  );
};

export default page;
