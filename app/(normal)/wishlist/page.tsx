"use client";

import React from "react";
import Link from "next/link";
import {
  IconShoppingBag,
  IconStarFilled,
  IconX,
  IconHeart,
  IconArrowRight,
} from "@tabler/icons-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const WishlistPage = () => {
  const { wishlistSlugs, toggleWishlist, loading } = useWishlist();
  const { addToCart } = useCart();

  const wishlistItems = wishlistSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  if (loading) {
    return (
      // <div className="min-h-screen bg-black text-white px-4 md:px-8 py-10 font-inter">
      //   <div className="flex items-center justify-between mb-10">
      //     <div>
      //       <h2 className="text-3xl font-semibold tracking-tight">
      //         My Wishlist
      //       </h2>
      //       <p className="text-zinc-500 text-sm mt-1">
      //         Loading your favourite products...
      //       </p>
      //     </div>
      //   </div>

      //   <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      //     {[1, 2, 3, 4].map((i) => (
      //       <div
      //         key={i}
      //         className="rounded-2xl overflow-hidden border border-white/10 bg-[#111111]"
      //       >
      //         <div className="aspect-square bg-zinc-900 animate-pulse" />

      //         <div className="p-5 space-y-4">
      //           <div className="h-3 w-20 bg-zinc-800 rounded animate-pulse" />
      //           <div className="h-5 w-40 bg-zinc-800 rounded animate-pulse" />
      //           <div className="h-4 w-28 bg-zinc-800 rounded animate-pulse" />
      //           <div className="h-11 w-full bg-zinc-800 rounded-xl animate-pulse" />
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      // </div>
      <div>
        not in figma that's why not build yet
      </div>
    );
  }

  // if (wishlistItems.length === 0) {
  //   return (
  //     <div className="min-h-screen bg-black text-white px-4 md:px-8 py-10 font-inter">
  //       <div className="max-w-xl mx-auto flex flex-col items-center justify-center text-center py-24 border border-white/10 rounded-3xl bg-gradient-to-b from-[#111] to-[#0a0a0a]">
  //         <div className="w-20 h-20 rounded-full bg-[#FFBF3F]/10 flex items-center justify-center mb-6">
  //           <IconHeart size={40} className="text-[#FFBF3F]" />
  //         </div>

  //         <h2 className="text-3xl font-semibold mb-3">
  //           Your Wishlist is Empty
  //         </h2>

  //         <p className="text-zinc-500 text-sm max-w-md leading-6 mb-8">
  //           Save your favourite products here and access them anytime easily.
  //         </p>

  //         <Link
  //           href="/products"
  //           className="bg-[#FFBF3F] hover:bg-[#ffb31f] text-black font-semibold py-3 px-7 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-[1.03]"
  //         >
  //           Browse Products
  //           <IconArrowRight size={18} />
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="min-h-screen bg-black text-white px-4 md:px-8 py-10 font-inter">
  //     {/* Header */}
  //     <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
  //       <div>
  //         <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
  //           My Wishlist
  //         </h2>

  //         <p className="text-zinc-500 text-sm mt-2">
  //           {wishlistItems.length} product
  //           {wishlistItems.length > 1 ? "s" : ""} saved
  //         </p>
  //       </div>

  //       <Link
  //         href="/products"
  //         className="text-sm text-[#FFBF3F] hover:text-white transition-colors flex items-center gap-2"
  //       >
  //         Continue Shopping
  //         <IconArrowRight size={16} />
  //       </Link>
  //     </div>

  //     {/* Products Grid */}
  //     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
  //       {wishlistItems.map((item: any) => (
  //         <div
  //           key={item.slug}
  //           className="group rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#151515] to-[#0c0c0c] hover:border-[#FFBF3F]/40 transition-all duration-300 hover:-translate-y-1"
  //         >
  //           {/* Image Section */}
  //           <div className="relative aspect-square overflow-hidden bg-[#0A0A0A]">
  //             {item.isNew && (
  //               <span className="absolute top-4 left-4 z-10 bg-[#FFBF3F] text-black text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide shadow-lg">
  //                 NEW
  //               </span>
  //             )}

  //             <button
  //               onClick={() => toggleWishlist(item.slug, item.productId)}
  //               className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-red-400 hover:bg-red-500/10 transition-all"
  //             >
  //               <IconX size={18} />
  //             </button>

  //             <Link href={`/products/${item.slug}`}>
  //               <img
  //                 src={item.image}
  //                 alt={item.name}
  //                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  //               />
  //             </Link>
  //           </div>

  //           {/* Content */}
  //           <div className="p-5">
  //             <p className="text-[11px] text-[#FFBF3F] font-semibold tracking-[2px] uppercase mb-2">
  //               {item.category}
  //             </p>

  //             <Link href={`/products/${item.slug}`}>
  //               <h3 className="text-base font-medium text-white leading-6 hover:text-[#FFBF3F] transition-colors min-h-[48px]">
  //                 {item.name}
  //               </h3>
  //             </Link>

  //             {/* Ratings */}
  //             <div className="flex items-center gap-1 mt-3">
  //               {[...Array(5)].map((_, i) => (
  //                 <IconStarFilled
  //                   key={i}
  //                   size={13}
  //                   className={
  //                     i < (item.rating || 4)
  //                       ? "text-[#FFBF3F]"
  //                       : "text-zinc-700"
  //                   }
  //                 />
  //               ))}

  //               <span className="text-[11px] text-zinc-500 ml-1">
  //                 ({item.reviews || 0} reviews)
  //               </span>
  //             </div>

  //             {/* Price */}
  //             <div className="flex items-center gap-3 mt-4 mb-5">
  //               <span className="text-2xl font-bold text-white">
  //                 ₹{item.price}
  //               </span>

  //               {item.oldPrice && (
  //                 <span className="text-sm text-zinc-600 line-through">
  //                   ₹{item.oldPrice}
  //                 </span>
  //               )}
  //             </div>

  //             {/* Button */}
  //             <button
  //               onClick={() => addToCart(item.slug)}
  //               className="w-full bg-[#FFBF3F] hover:bg-[#ffb31f] text-black font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 hover:shadow-[0_0_25px_rgba(255,191,63,0.25)]"
  //             >
  //               <IconShoppingBag size={18} />
  //               Add to Cart
  //             </button>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default WishlistPage;
