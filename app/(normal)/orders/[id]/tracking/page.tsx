"use client";

import React, { useEffect, useState } from "react";
import Link from "@/hooks/appLink"
import {
  Package,
  MapPin,
  Truck,
  CalendarClock,
  Hash,
  ChevronRight,
  CheckCircle2,
  Circle,
} from "lucide-react";

interface TrackingEvent {
  date: string;
  status: string;
  description: string;
  location?: string;
}

export default function TrackingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: orderId } = React.use(params);
  const [order, setOrder] = useState<any>(null);
  const [trackingData, setTrackingData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      const orderRes = await fetch(`/api/orders/${orderId}`);
      const orderData = await orderRes.json();
      setOrder(orderData);
      if (orderData?.trackingNumber) {
        fetchTracking(orderData.trackingNumber);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchTracking = async (trackingNumber: string) => {
    try {
      const res = await fetch(`/api/shipping/track/${trackingNumber}`);
      const data = await res.json();
      setTrackingData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#FFBF3F] border-t-transparent animate-spin" />
          <p className="text-white/50 text-sm font-montserrat tracking-widest uppercase">
            Loading tracking details...
          </p>
        </div>
      </div>
    );
  }

  const events: TrackingEvent[] = trackingData?.events ?? [];
  const latestEvent = events[0];

  return (
    <section className="min-h-screen bg-black">
      {/* ── HERO HEADER ── */}
      <div className="relative border-b border-white/10 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] md:text-xs text-white/40 mb-6 uppercase tracking-widest font-montserrat">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/orders" className="hover:text-white transition-colors">Orders</Link>
            <ChevronRight size={12} />
            <span className="text-[#FFBF3F]">Tracking</span>
          </nav>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#FFBF3F]/10 border border-[#FFBF3F]/20 mt-1">
              <Truck size={24} className="text-[#FFBF3F]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#EDEBE9] font-inter tracking-tight">
                Order Tracking
              </h1>
              <p className="text-white/40 text-sm mt-1 font-montserrat">
                Track your shipment in real-time
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-10 space-y-6">

        {/* ── ORDER META CARDS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              icon: <Hash size={16} className="text-[#FFBF3F]" />,
              label: "Tracking No.",
              value: order?.trackingNumber ?? "—",
            },
            {
              icon: <Truck size={16} className="text-[#FFBF3F]" />,
              label: "Courier",
              value: order?.courierName ?? "Envia",
            },
            {
              icon: <Package size={16} className="text-[#FFBF3F]" />,
              label: "Status",
              value: order?.shippingStatus ?? "—",
              accent: true,
            },
            {
              icon: <CalendarClock size={16} className="text-[#FFBF3F]" />,
              label: "Est. Delivery",
              value: order?.estimatedDeliveryDate
                ? new Date(order.estimatedDeliveryDate).toLocaleDateString(
                    "en-IN",
                    { day: "numeric", month: "short", year: "numeric" }
                  )
                : "5-7 Days",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-white/40">
                {card.icon}
                <span className="text-[10px] uppercase tracking-widest font-montserrat">
                  {card.label}
                </span>
              </div>
              <p
                className={`text-sm font-semibold capitalize font-inter leading-tight ${
                  card.accent ? "text-[#FFBF3F]" : "text-[#EDEBE9]"
                }`}
              >
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* ── LATEST STATUS BANNER ── */}
        {latestEvent && (
          <div className="flex items-start gap-4 bg-[#FFBF3F]/10 border border-[#FFBF3F]/25 rounded-2xl p-5">
            <MapPin size={20} className="text-[#FFBF3F] mt-0.5 shrink-0" />
            <div>
              <p className="text-[#FFBF3F] font-semibold font-inter text-sm">
                {latestEvent.status}
              </p>
              <p className="text-white/60 text-xs font-montserrat mt-0.5">
                {latestEvent.description}
                {latestEvent.location && ` · ${latestEvent.location}`}
              </p>
            </div>
            <p className="ml-auto text-white/30 text-xs font-montserrat whitespace-nowrap shrink-0 mt-0.5">
              {new Date(latestEvent.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
              })}
            </p>
          </div>
        )}

        {/* ── TIMELINE ── */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-bold text-[#EDEBE9] font-inter mb-8 uppercase tracking-widest">
            Shipment Timeline
          </h2>

          {events.length > 0 ? (
            <ol className="relative">
              {events.map((event, index) => {
                const isFirst = index === 0;
                const isLast = index === events.length - 1;

                return (
                  <li key={index} className="flex gap-5 group">
                    {/* STEM + DOT */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                          isFirst
                            ? "bg-[#FFBF3F]"
                            : "bg-zinc-800 border border-white/20"
                        }`}
                      >
                        {isFirst ? (
                          <CheckCircle2 size={12} className="text-black" />
                        ) : (
                          <Circle size={8} className="text-white/30" />
                        )}
                      </div>
                      {!isLast && (
                        <div className="w-px flex-1 bg-white/10 mt-2 mb-2 min-h-[2rem]" />
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className={`pb-8 flex-1 ${isLast ? "pb-0" : ""}`}>
                      <div className="flex items-start justify-between gap-2">
                        <p
                          className={`font-semibold font-inter text-sm leading-snug ${
                            isFirst ? "text-[#FFBF3F]" : "text-[#EDEBE9]"
                          }`}
                        >
                          {event.status}
                        </p>
                        <p className="text-[10px] text-white/30 font-montserrat whitespace-nowrap shrink-0">
                          {new Date(event.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                          })}
                        </p>
                      </div>

                      <p className="text-white/50 text-xs font-montserrat mt-1 leading-relaxed">
                        {event.description}
                      </p>

                      {event.location && (
                        <div className="flex items-center gap-1 mt-2">
                          <MapPin size={10} className="text-white/25" />
                          <p className="text-[10px] text-white/30 font-montserrat uppercase tracking-wider">
                            {event.location}
                          </p>
                        </div>
                      )}

                      <p className="text-[10px] text-white/20 font-montserrat mt-1">
                        {new Date(event.date).toLocaleTimeString("en-IN", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          ) : (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Package size={28} className="text-white/25" />
              </div>
              <p className="text-white/40 text-sm font-montserrat">
                Tracking updates not available yet.
              </p>
              <p className="text-white/20 text-xs font-montserrat">
                Please check back after a few hours.
              </p>
            </div>
          )}
        </div>

        {/* ── BACK LINK ── */}
        <div className="pb-8">
          <Link
            href="/orders"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 hover:text-[#FFBF3F] transition-colors font-montserrat"
          >
            <ChevronRight size={12} className="rotate-180" />
            Back to Orders
          </Link>
        </div>
      </div>
    </section>
  );
}