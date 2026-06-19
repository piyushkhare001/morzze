"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, PlayCircle } from "lucide-react";

const films = [
  {
    title: "The Art Of Water",
    desc: "Brand film from the latest campaign, showcasing our commitment to water innovation.",
    videoUrl:
      "https://av-morzze.s3.ap-south-1.amazonaws.com/videos/WhatsApp+Video+2026-05-22+at+3.25.26+PM.mp4",
  },
  {
    title: "Presence of Morzze",
    desc: "brand film from the latest video uploads, highlighting our presence in the market and our dedication to quality.",
    videoUrl:
      "https://av-morzze.s3.ap-south-1.amazonaws.com/videos/WhatsApp+Video+2026-05-22+at+3.25.32+PM+(1).mp4",
  },
  {
    title: "Innovation in Design",
    desc: "brand film from the latest video uploads showcasing our innovative design approach and commitment to excellence.",
    videoUrl:
      "https://av-morzze.s3.ap-south-1.amazonaws.com/videos/WhatsApp+Video+2026-05-22+at+3.25.32+PM.mp4",
  },
];

export default function BrandFilmsProductDemos() {
  return (
    <section className="w-full bg-[#121212] text-white px-4 md:px-8 lg:px-10 py-16 md:py-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.42em] text-[#d39b10] font-medium mb-4">
          Watch Our Story
        </p>
        <h2 className="text-[38px] md:text-[52px] font-semibold tracking-[-0.03em] mb-4">
          Brand Films & Product Demos
        </h2>
        <p className="max-w-3xl mx-auto text-[14px] leading-7 text-[white]/70 mb-10">
          Explore our collection of brand films showcasing bathroom and kitchen
          innovations manufacturing excellence, and design philosophy.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left mb-10">
          {films.map((film, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative w-full h-[190px] overflow-hidden rounded-[4px] mb-4 bg-black">
                {film.videoUrl ? (
                  <video
                    src={film.videoUrl}
                    controls
                    autoPlay
                    loop
                    muted
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <Image
                      src="/films.png"
                      alt={film.title}
                      height={500}
                      width={500}
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
                        <Play size={18} className="fill-white ml-1 text-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <h3 className="text-[22px] font-medium mb-2">{film.title}</h3>
              <p className="text-[13px] leading-6 text-[white]/70">
                {film.desc}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
