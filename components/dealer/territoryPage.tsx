"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const regions = [
  "North India",
  "South India",
  "West India",
  "East India",
  "Central India",
  "Northeast India",
];

export default function TerritoryCoverageSection() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-12 lg:px-16 py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[420px]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="max-w-[430px]"
        >
          <h2 className="text-[46px] leading-[1.08] font-semibold tracking-[-0.02em] text-[#f3f0e8] mb-5">
            Territory Coverage
          </h2>

          <p className="text-[14px] leading-7 text-[#7d7d7d] mb-8 font-normal">
            We are actively expanding our dealer network across India. Check our
            current coverage and available territories for new partnerships.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-[14px] text-[#f3f0e8]">
              <span className="w-3 h-3 rounded-full bg-[#d88713]" />
              <span>Active Dealers (500+ locations)</span>
            </div>
            <div className="flex items-center gap-3 text-[14px] text-[#f3f0e8]">
              <span className="w-3 h-3 rounded-full bg-[#d8d8d8]" />
              <span>Available Territories</span>
            </div>
            <div className="flex items-center gap-3 text-[14px] text-[#f3f0e8]">
              <span className="w-3 h-3 rounded-full bg-[#e7d37a]" />
              <span>Coming Soon</span>
            </div>
          </div>

          <div>
            <h4 className="text-[14px] font-medium text-[#f3f0e8] mb-5">
              Currently Seeking Partners In:
            </h4>

            <div className="flex flex-wrap gap-3 max-w-[430px]">
              {regions.map((region, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.08,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="px-5 py-2 rounded-full bg-[#f4ecdf] text-[#b46f1a] text-[13px] font-medium"
                >
                  {region}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Reserved Image Space */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[420px] md:h-[500px] overflow-hidden"
        >
          <Image
            src="/indmap.png"
            alt="India Map"
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-contain object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
