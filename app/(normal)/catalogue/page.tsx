import ProductCatalogueHero from "@/components/catalogue/banner";
import CatalogueGridDownloads from "@/components/catalogue/cataloguegrid";
import CatalogueInfoRequestSection from "@/components/catalogue/ourcatalogues";
import React from "react";

const page = () => {
  return (
    <div>
      <ProductCatalogueHero />
      <CatalogueGridDownloads />
      <CatalogueInfoRequestSection />
    </div>
  );
};

export default page;
