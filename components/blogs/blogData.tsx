"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import { IconBrandFacebook, IconBrandLinkedin } from "@tabler/icons-react";

const related = [
  { title: "Sustainable Furniture: Making...", date: "2024-01-05" },
  { title: "Small Space Solutions...", date: "2023-12-28" },
  { title: "The Perfect Dining Room Entertaini...", date: "2023-12-20" },
];

export default function BlogDetailPage() {
  return (
    <section className="w-full bg-black text-white px-4 md:px-8 lg:px-10 py-10 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="px-3 py-[4px] rounded-full bg-[#f4e8c7] text-[#9b5d00] text-[10px]">
            Trends
          </span>
          <span className="text-[12px] text-[#6f6f6f]">2024-01-10</span>
          <span className="text-[12px] text-[#6f6f6f]">7 min read</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-[34px] md:text-[54px] font-semibold leading-[1.08] tracking-[-0.03em] mb-5"
        >
          2024 Furniture Trends: What&apos;s Shaping Modern Homes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl text-[14px] leading-7 text-[#7b7b7b] mb-10"
        >
          From curved silhouettes to sustainable materials, explore the trends
          defining furniture design this year.
        </motion.p>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[230px] md:h-[420px] rounded-[8px] overflow-hidden mb-8"
            >
              <Image
                src="/slug.png"
                alt="Blog Main"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="space-y-6 text-[14px] md:text-[15px] leading-8 text-[#d0d0d0]">
              <p>
                The furniture industry is constantly evolving, responding to
                changing lifestyles, technological advances, and growing
                environmental consciousness. As we move through 2024, several
                key trends are emerging that promise to shape how we furnish and
                experience our homes.
              </p>
              <p>
                <strong>Curved and Organic Shapes</strong>
                <br />
                After years of sharp angles and straight lines dominating
                interior design, we&apos;re seeing a return to softer, more
                organic forms. Curved sofas, rounded coffee tables, and arched
                headboards are making a comeback, bringing a sense of comfort
                and fluidity to living spaces.
              </p>
              <p>
                <strong>Sustainable and Natural Materials</strong>
                <br />
                Environmental consciousness continues to drive furniture design.
                Consumers are increasingly seeking pieces made from sustainably
                sourced wood, recycled materials, and natural fibers.
              </p>
              <p>
                <strong>Multi-Functional Furniture</strong>
                <br />
                As homes become more versatile spaces—serving as offices, gyms,
                and entertainment centers—furniture that can adapt to multiple
                uses is essential.
              </p>
              <p>
                <strong>Warm, Earthy Color Palettes</strong>
                <br />
                While minimalism remains popular, we&apos;re seeing a shift from
                cool grays toward warmer, earthier tones.
              </p>
              <p>
                <strong>Artisanal and Handcrafted Details</strong>
                <br />
                In an age of mass production, there&apos;s growing appreciation
                for handcrafted furniture that tells a story.
              </p>
            </div>

            <div className="border-t border-[#1f1f1f] mt-10 pt-8">
              <div className="flex flex-wrap gap-2 mb-8">
                {["#trends", "#2024", "#modern design"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full border border-[#2f2f2f] text-[11px] text-[#9a9a9a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[13px] text-[#7a7a7a] mr-2">
                  Share this article:
                </span>
                {[IconBrandFacebook, X, IconBrandLinkedin, Mail].map(
                  (Icon, i) => (
                    <button
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#2a2a2a] transition"
                    >
                      <Icon size={14} />
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-[#121212] border border-[#1e1e1e] rounded-[8px] p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#333333]" />
                <div>
                  <p className="text-[13px] font-medium">Rajesh Kumar</p>
                  <p className="text-[11px] text-[#777777]">Design Director</p>
                </div>
              </div>
              <p className="text-[12px] leading-6 text-[#7b7b7b]">
                Rajesh Kumar leads the design team at Morzze, bringing 15 years
                of experience in luxury furniture design and manufacturing.
              </p>
            </div>

            <div className="bg-[#121212] border border-[#1e1e1e] rounded-[8px] p-5">
              <h4 className="text-[15px] font-semibold mb-4">
                Related Articles
              </h4>
              <div className="space-y-4">
                {related.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="relative w-[72px] h-[52px] rounded overflow-hidden bg-[#222222]">
                      <Image
                        src="/slug.png"
                        alt="Related"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[12px] leading-5 text-white">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-[#6d6d6d] mt-1">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#121212] border border-[#1e1e1e] rounded-[8px] p-5">
              <h4 className="text-[15px] font-semibold mb-3">Stay Updated</h4>
              <p className="text-[12px] leading-6 text-[#777777] mb-4">
                Get design tips and inspiration delivered to your inbox.
              </p>
              <input
                placeholder="Your email"
                className="w-full h-10 bg-[#151515] border border-[#2b2b2b] px-3 text-[12px] mb-3 outline-none"
              />
              <button className="w-full h-10 bg-[#e6aa12] text-black text-[12px] font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
