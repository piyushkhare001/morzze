import VideoLibraryHero from "@/components/videos/banner";
import VideoLibraryGrid from "@/components/videos/videogrid";
import React from "react";

const page = () => {
  return (
    <div>
      <VideoLibraryHero />
      <VideoLibraryGrid />
    </div>
  );
};

export default page;
