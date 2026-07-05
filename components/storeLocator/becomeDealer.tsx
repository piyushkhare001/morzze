"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BecomeDealerSection() {
  return (
    <section className="bg-black text-white py-14 md:py-20 border-y border-[#2E2E2E] px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-10">
          {/* Left Side: Tagline & Heading */}
          <div className="max-w-2xl space-y-4">
            <span className="block font-montserrat text-[10px] md:text-xs font-bold text-[#CBA14D] uppercase tracking-[0.4em]">
              PARTNER WITH US
            </span>

            <h2 className="font-montserrat text-2xl md:text-3xl lg:text-3xl font-medium text-white leading-tight">
              Want to Become an Authorized Dealer?
            </h2>

            <p className="font-inter text-white/80 text-sm md:text-base leading-relaxed">
              Join the Morzze family and bring premium architectural kitchen and bathroom fixtures to your clientele. Partner with us for exclusive dealer support and collections.
            </p>
          </div>

          {/* Right Side: CTA Button */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end shrink-0">
            <Link href="/contact">
              <Button
                type="button"
                variant="outline"
                className="rounded-md border-[#CBA14D] font-montserrat text-[#CBA14D] hover:bg-[#CBA14D] hover:text-black font-bold uppercase tracking-[0.2em] md:px-10 md:h-14 transition-all duration-500 bg-transparent w-full sm:w-auto"
              >
                JOIN OUR FAMILY
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
