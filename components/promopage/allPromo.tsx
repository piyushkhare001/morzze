"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, ChevronDown, Clock3, ShoppingCart } from "lucide-react";

const tabs = [
  "All",
  "New Customer",
  "Category",
  "Shipping",
  "Seasonal",
  "Trade",
];

const offers = [
  {
    category: "New Customer",
    badge: "25% OFF",
    title: "New Customer Special",
    desc: "Welcome to Morzze! Enjoy exclusive savings on your first order.",
    code: "WELCOME25",
    min: "₹15,000",
    valid: "12/31/2024",
    tab: "New Customer",
  },
  {
    category: "Category",
    badge: "15% OFF",
    title: "Living Room Refresh",
    desc: "Upgrade your living space with 15% off all sofas, sectionals, and coffee tables.",
    code: "LIVING15",
    min: "₹25,000",
    valid: "11/30/2024",
    tab: "Category",
  },
  {
    category: "Shipping",
    badge: "FREE SHIPPING",
    title: "Free Shipping",
    desc: "Enjoy complimentary white glove delivery on your furniture order.",
    code: "FREESHIP",
    min: "₹50,000",
    valid: "12/31/2024",
    tab: "Shipping",
  },
  {
    category: "Seasonal",
    badge: "30% OFF",
    title: "Diwali Festival Sale",
    desc: "Celebrate the festival of lights with spectacular savings on luxury furniture.",
    code: "DIWALI30",
    min: "₹30,000",
    valid: "11/15/2024",
    tab: "Seasonal",
  },
  {
    category: "Category",
    badge: "20% OFF",
    title: "Bedroom Makeover",
    desc: "Transform your bedroom sanctuary with 20% off beds, nightstands, and dressers.",
    code: "BEDROOM20",
    min: "₹20,000",
    valid: "12/15/2024",
    tab: "Category",
  },
  {
    category: "Trade",
    badge: "10% OFF",
    title: "Interior Designer Discount",
    desc: "Special pricing for interior designers and architects on bulk orders.",
    code: "BULK10",
    min: "₹1,00,000",
    valid: "12/31/2024",
    tab: "Trade",
  },
];

export default function PromoCouponTabsCards() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? offers
      : offers.filter((item) => item.tab === activeTab);

  return (
    <section className="w-full bg-black text-white px-4 md:px-8 lg:px-10 py-12 md:py-16 border-t border-[#1b1b1b]">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 md:gap-6 border-b border-[#1d1d1d] pb-5 mb-12">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`px-6 h-10 rounded-full text-[13px] font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#e6aa12] text-black"
                  : "text-[#f5f2ea] hover:text-[#e6aa12]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="bg-[linear-gradient(90deg,#171717,#111111,#171717)] border border-[#202020] p-5 min-h-[210px]"
              >
                <div className="flex justify-between items-center mb-5">
                  <span className="px-2 py-[3px] rounded-[4px] bg-[#f5f2ea] text-black text-[10px]">
                    {item.category}
                  </span>
                  <span className="px-3 py-[4px] rounded-full bg-[#f4e6c5] text-[#9c5d00] text-[11px] font-semibold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-[16px] font-semibold text-[#f5f2ea] mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-6 text-[#7a7a7a] mb-5">
                  {item.desc}
                </p>

                <div className="flex gap-2 mb-4">
                  <div className="flex-1 h-10 bg-[#efefef] text-black flex items-center px-4 text-[14px] tracking-[0.08em] rounded-[4px]">
                    {item.code}
                  </div>
                  <button className="w-[78px] h-10 bg-[#1a1a1a] border border-[#262626] rounded-[4px] flex items-center justify-center gap-2 text-[13px] hover:border-[#3a3a3a]">
                    <Copy size={13} /> Copy
                  </button>
                </div>

                <div className="flex justify-between text-[12px] text-[#6f6f6f] mb-4">
                  <span className="flex items-center gap-1">
                    <ShoppingCart size={12} /> Min: {item.min}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock3 size={12} /> Valid until: {item.valid}
                  </span>
                </div>

                <button className="flex items-center gap-1 text-[12px] text-[#b97712] hover:text-[#e6aa12] transition-colors">
                  Terms & Conditions <ChevronDown size={12} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
