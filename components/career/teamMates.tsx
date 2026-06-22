"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { imageKitUrl } from "@/lib/imagekit-url";

const testimonials = [
  {
    quote:
      "Morzze gave me the space to push my creative limits. Every project here is a chance to redefine luxury living.",
    name: "Priya Nair",
    role: "Senior Designer, 4 years",
    image: imageKitUrl("team1.png"),
  },
  {
    quote:
      "The culture here values craftsmanship, innovation, and individuality. I’ve grown faster here than anywhere else.",
    name: "Rahul Mehta",
    role: "Production Lead, 5 years",
    image: imageKitUrl("team2.png"),
  },
  {
    quote:
      "Every day at Morzze feels like building something timeless. There’s trust, ownership, and creative freedom.",
    name: "Ananya Kapoor",
    role: "Brand Strategist, 3 years",
    image: imageKitUrl("team3.png"),
  },
];

export default function TeammatesVoiceSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full bg-black text-white px-4 md:px-8 lg:px-12 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[10px] uppercase tracking-[0.42em] text-[#7d7d7d] mb-3">
            From The Team
          </p>
          <h2 className="text-[42px] md:text-[56px] font-semibold leading-[1] tracking-[-0.03em]">
            Teammates&apos; <span className="text-[#d39b10]">Voice</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.45 }}
            >
              <Quote size={42} className="text-[#e6aa12] fill-[#e6aa12] mb-8" />

              <p className="text-[24px] md:text-[32px] italic leading-[1.8] max-w-[580px] text-[#f5f2ea] mb-10">
                “{testimonials[index].quote}”
              </p>

              <h4 className="text-[22px] font-medium mb-2">
                {testimonials[index].name}
              </h4>
              <p className="text-[14px] text-[#777777] mb-10">
                {testimonials[index].role}
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-[#3a3a3a] flex items-center justify-center hover:border-[#d39b10]"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`${i === index ? "w-8 bg-[#d39b10]" : "w-2 bg-[#666666]"} h-2 rounded-full transition-all`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-[#3a3a3a] flex items-center justify-center hover:border-[#d39b10]"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right */}
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].image}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[420px] ml-auto h-[430px] md:h-[520px] overflow-hidden"
            >
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                height={500}
                width={500}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
