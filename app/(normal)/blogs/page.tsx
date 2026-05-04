import BlogGridTabs from "@/components/blogs/allBlogsTabs";
import BlogFeatureHero from "@/components/blogs/banner";
import React from "react";

const page = () => {
  return (
    <div>
      <BlogFeatureHero />
      <BlogGridTabs />
    </div>
  );
};

export default page;
