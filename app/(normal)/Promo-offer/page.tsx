import PromoCouponTabsCards from "@/components/promopage/allPromo";
import PromoCodesOfferHero from "@/components/promopage/herobanner";
import PromoStepsNewsletter from "@/components/promopage/howtouse";
import React from "react";

const page = () => {
  return (
    <div>
      <PromoCodesOfferHero />
      <PromoCouponTabsCards />
      <PromoStepsNewsletter />
    </div>
  );
};

export default page;
