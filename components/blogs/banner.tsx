"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { imageKitUrl } from "@/lib/imagekit-url";

export default function BlogFeatureHero() {
  return (
    <section className="relative w-full min-h-[260px] md:min-h-[340px] lg:min-h-[390px] overflow-hidden flex items-center justify-center bg-black">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src={imageKitUrl("blog.png")}
          alt="Minimalist Living"
          height={1600}
          width={1600}
          priority
          className="object-cover w-full h-full object-center"
        />
        <div className="absolute inset-0 bg-black/42" />
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-semibold tracking-[-0.03em] text-white leading-[1.08] mb-4"
        >
          The Art of Minimalist Living: Creating Space with Intention
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-[13px] sm:text-[15px] md:text-[19px] text-[#ededed]/90 leading-7"
        >
          Discover how minimalist furniture choices can transform your home into
          a sanctuary of calm and purpose.
        </motion.p>
      </div>
    </section>
  );
}
