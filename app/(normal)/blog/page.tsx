import BlogGridTabs from "@/components/blogs/allBlogsTabs";
import BlogFeatureHero from "@/components/blogs/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Morzze Blog | Tips & Insights on Kitchen & Bathroom Products",
  description: "Read the Morzze's Blog for expert tips, trends, and insights on kitchen & bathroom experience. Learn how to enhance your space with style and quality.",
  alternates: {
    canonical: "/blog",
  },
};

const page = () => {
  return (
    <div>
      <BlogFeatureHero />
      <BlogGridTabs />
    </div>
  );
};

export default page;
