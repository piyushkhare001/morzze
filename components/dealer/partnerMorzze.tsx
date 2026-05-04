"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Percent,
  Truck,
  Megaphone,
  Headphones,
  MapPinned,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Crown,
    title: "Exclusive Product",
    desc: "Access to our complete product range including exclusive dealer-only collections and early releases",
  },
  {
    icon: Percent,
    title: "Competitive Margins",
    desc: "Attractive wholesale pricing with margins up to 40% on select products and volume discounts.",
  },
  {
    icon: Truck,
    title: "Priority Logistics",
    desc: "Fast-track order processing, dedicated shipping support, and flexible delivery options.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    desc: "Co-branded marketing materials, showroom displays, digital assets, and promotional support",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Personal account manager, technical training, and 24/7 customer service for your clients.",
  },
  {
    icon: MapPinned,
    title: "Territory Protection",
    desc: "Exclusive territory rights ensuring no competing dealers within your designated area.",
  },
];

export default function MorzzePartnerSection() {
  return (
    <section className="w-full bg-black py-20 px-6 md:px-12 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Partner with Morzze?
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
            We provide comprehensive support to help your business thrive in the
            luxury furniture market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-950 border border-zinc-900 rounded-none hover:border-amber-200/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,215,120,0.04)] h-full">
                  <CardContent className="p-6 md:p-7 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-md bg-amber-100 flex items-center justify-center mb-5">
                      <Icon
                        className="w-4 h-4 text-amber-700"
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="text-base font-semibold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-zinc-400">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
