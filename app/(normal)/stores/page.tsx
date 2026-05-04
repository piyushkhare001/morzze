import FindStoreHero from "@/components/storeLocator/banner";
import StoreLocatorSection from "@/components/storeLocator/storestabs";
import StoreTypesSection from "@/components/storeLocator/storeTypes";
import React from "react";

const page = () => {
  return (
    <div>
      <FindStoreHero />
      <StoreLocatorSection />
      <StoreTypesSection />
    </div>
  );
};

export default page;
