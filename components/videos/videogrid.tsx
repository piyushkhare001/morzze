"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const tabs = [
  "All",
  "Product Demos",
  "Brand Films",
  "Installation Guides",
  "Customer Testimonials",
];

const videos = [
  {
    cat: "Brand Films",
    title: "Morzze Bathroom Collection 2024",
    desc: "Discover our latest luxury bathroom fittings featuring premium faucets, showers, and...",
    date: "1/15/2024",
    duration: "12:00",
    tab: "Brand Films",
  },
  {
    cat: "Product Demos",
    title: "Premium Kitchen Sink Showcase",
    desc: "Explore our exquisite range of stainless steel and granite kitchen sinks with modern...",
    date: "2/10/2024",
    duration: "5:20",
    tab: "Product Demos",
  },
  {
    cat: "Installation Guides",
    title: "Rain Shower Installation Guide",
    desc: "Step-by-step installation guide for our premium overhead rain shower and hand...",
    date: "3/5/2024",
    duration: "8:15",
    tab: "Installation Guides",
  },
  {
    cat: "Customer Testimonials",
    title: "Customer Story: The Kapoor Bathroom Renovation",
    desc: "Hear from our satisfied customer about their experience transforming their bathroom wit...",
    date: "3/20/2024",
    duration: "4:30",
    tab: "Customer Testimonials",
  },
  {
    cat: "Product Demos",
    title: "Designer Faucet Collection",
    desc: "Showcase of our premium bathroom and kitchen faucets crafted with precision...",
    date: "4/8/2024",
    duration: "6:10",
    tab: "Product Demos",
  },
  {
    cat: "Brand Films",
    title: "Behind the Scenes: Crafting Excellence",
    desc: "A look into our manufacturing process and the precision engineering behind Morzze...",
    date: "4/25/2024",
    duration: "12:00",
    tab: "Brand Films",
  },
  {
    cat: "Installation Guides",
    title: "Kitchen Faucet Installation Tutorial",
    desc: "Complete guide to installing your Morzze pull-out kitchen faucet with spray functions...",
    date: "5/12/2024",
    duration: "12:00",
    tab: "Installation Guides",
  },
  {
    cat: "Customer Testimonials",
    title: "Transforming Kitchens with Morzze",
    desc: "See how our design team transformed a kitchen with Morzze sinks, faucets, and...",
    date: "5/28/2024",
    duration: "5:55",
    tab: "Customer Testimonials",
  },
];

export default function VideoLibraryGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const filtered =
    activeTab === "All" ? videos : videos.filter((v) => v.tab === activeTab);

  return (
    <section className="w-full bg-black text-white">
      <div className="px-4 md:px-8 lg:px-10 py-10 md:py-14 max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="overflow-x-auto scrollbar-hide border-b border-[#1d1d1d] pb-5 mb-12">
          <div className="flex gap-5 min-w-max">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab)}
                className={`px-7 h-10 rounded-full text-[13px] whitespace-nowrap transition-all ${activeTab === tab ? "bg-[#e6aa12] text-black" : "text-white"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10"
          >
            {filtered.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative w-full h-[150px] overflow-hidden rounded-[4px] mb-4">
                  <Image
                    src="/video.png"
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-black">
                      <Play size={18} className="fill-black ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-[10px] px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>

                <h3 className="text-[16px] font-medium leading-7 text-[#f5f2ea] mb-2">
                  {video.title}
                </h3>
                <p className="text-[13px] leading-6 text-[#777777] mb-4">
                  {video.desc}
                </p>

                <div className="flex items-center gap-2 text-[11px]">
                  <span className="px-2 py-[3px] bg-[#e6aa12] text-black rounded-[2px]">
                    {video.cat}
                  </span>
                  <span className="text-[#7a7a7a]">{video.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subscribe CTA */}
      <div className="bg-[#121212] px-4 md:px-8 py-16 md:py-20 text-center">
        <h3 className="text-[34px] md:text-[46px] font-semibold mb-4">
          Subscribe to Our Channel
        </h3>
        <p className="max-w-2xl mx-auto text-[14px] leading-7 text-[#7a7a7a] mb-8">
          Get notified about new bathroom and kitchen product videos,
          installation tips, and exclusive content.
        </p>
        <button className="px-8 h-11 bg-[#e3342f] rounded-[4px] text-white text-[13px] font-medium">
          ▶ Subscribe on YouTube
        </button>
      </div>
    </section>
  );
}
