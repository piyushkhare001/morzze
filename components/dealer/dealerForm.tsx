"use client";

import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function DealerApplicationForm() {
  return (
    <section className="w-full bg-black text-white py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[44px] leading-none font-semibold tracking-[-0.03em] text-[#f5f2ea] mb-4">
            Apply to Become a Dealer
          </h2>
          <p className="text-[14px] text-[#7f7f7f]">
            Fill out the form below and our partnership team will contact you
            within 5 business days.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="rounded-[8px] border border-[#2a2a2a] bg-[#121212] px-6 md:px-8 py-7 md:py-8"
        >
          <div className="grid md:grid-cols-2 gap-x-5 gap-y-6">
            <Field label="Full Name *" placeholder="Your full name" />
            <Field label="Business Name *" placeholder="Your company name" />
            <Field label="Email *" placeholder="business@email.com" />
            <Field label="Phone *" placeholder="+91 98765 43210" />
            <Field label="City *" placeholder="Your city" />
            <Field label="Business Type *" placeholder="Select business type" />
          </div>

          <div className="mt-6">
            <label className="text-[12px] text-[#f5f2ea] block mb-2">
              Showroom/Office Address
            </label>
            <Textarea
              placeholder="Complete address with pincode"
              className="min-h-[82px] resize-none rounded-none border-[#555555] bg-transparent text-white placeholder:text-[#666666] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="mt-6">
            <Field label="Years in Business" placeholder="Select experience" />
          </div>

          <div className="mt-6">
            <label className="text-[12px] text-[#f5f2ea] block mb-2">
              Tell us about your business
            </label>
            <Textarea
              placeholder="Describe your current business, target customers, and why you want to partner with Morzze (max 500 characters)"
              className="min-h-[130px] resize-none rounded-none border-[#555555] bg-transparent text-white placeholder:text-[#666666] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <p className="mt-2 text-[11px] text-[#7a7a7a]">
              Maximum 500 characters
            </p>
          </div>

          <Button className="mt-7 w-full rounded-[3px] bg-[#e8ab12] hover:bg-[#d79d10] text-black h-11 text-[13px] font-semibold tracking-[0.08em] uppercase">
            Submit Application
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-[12px] text-[#f5f2ea] block mb-2">{label}</label>
      <Input
        placeholder={placeholder}
        className="h-11 rounded-none border-[#555555] bg-transparent text-white placeholder:text-[#666666] focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
}
