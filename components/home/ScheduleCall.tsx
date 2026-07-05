"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ScheduleCall = () => {
    return (
        <section className="bg-black text-white py-14 md:py-20 border-y border-[#2E2E2E] px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-10">

                    {/* Left Side: Tagline & Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl space-y-4"
                    >
                        <span className="block font-montserrat text-[10px] md:text-xs font-bold text-[#CBA14D] uppercase tracking-[0.4em]">
                            EXPERT CONSULTATION
                        </span>

                        <h2 className="font-montserrat text-2xl md:text-3xl lg:text-3xl font-medium text-white leading-tight">
                            Need Expert Guidance? Schedule a Call With Our Design Specialists
                        </h2>

                        <p className="font-inter text-white/80 text-sm md:text-md leading-relaxed">
                            Connect one-on-one with our design specialists to explore luxury fixtures tailored to your space.
                        </p>
                    </motion.div>

                    {/* Right Side: CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-auto flex justify-start lg:justify-end shrink-0"
                    >
                        <Link href="/call-request">
                            <Button
                                type="button"
                                variant="outline"
                                className="rounded-md border-[#CBA14D] font-montserrat text-[#CBA14D] hover:bg-[#CBA14D] hover:text-black font-bold uppercase tracking-[0.2em] md:px-10 md:h-14 transition-all duration-500 bg-transparent w-full sm:w-auto"
                            >
                                SCHEDULE A CALL
                            </Button>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ScheduleCall;
