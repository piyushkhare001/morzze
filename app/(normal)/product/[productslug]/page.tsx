import React from "react";
import ProductClient from "./productClient";
import { notFound } from "next/navigation";
import { getFullProductDetails } from "@/helper/product/action";
import { getProductReviews } from "@/helper/review/action";

// ISR: revalidate page shell every 24 h (same as data cache TTL).
// unstable_cache inside data helpers handles per-slug data caching.
export const revalidate = 86400;

// ─── Server-side cache logger ────────────────────────────────────────────────
function logCacheEvent(
  label: string,
  slug: string,
  durationMs: number,
  data: unknown,
  error?: unknown
) {
  const timestamp = new Date().toISOString();
  // Heuristic: unstable_cache DB round-trips typically take >20 ms.
  // If the call returns in <15 ms it almost certainly came from the cache.
  const cacheStatus = durationMs < 15 ? "✅ CACHE HIT" : "🔄 CACHE MISS (DB fetch)";

  console.log(
    `\n──────────────────────────────────────────────────────────────────`
  );
  console.log(`[PRODUCT DETAIL] ${label}`);
  console.log(`  📅 Timestamp   : ${timestamp}`);
  console.log(`  🔑 Slug        : ${slug}`);
  console.log(`  ⏱  Duration    : ${durationMs} ms`);
  console.log(`  📦 Cache Status: ${cacheStatus}`);

  if (error) {
    console.log(`  ❌ Error       :`, error);
  } else if (data !== undefined && data !== null) {
    // Log shape / key info without dumping entire payload
    if (typeof data === "object" && !Array.isArray(data)) {
      const d = data as Record<string, unknown>;
      console.log(`  📄 Product ID  : ${d.id ?? "N/A"}`);
      console.log(`  📄 Product Name: ${d.name ?? "N/A"}`);
      console.log(`  📄 Slug (DB)   : ${d.slug ?? "N/A"}`);
      console.log(`  📄 In Stock    : ${d.isInStock ?? "N/A"}`);
      const media = d.productMediaRes;
      console.log(`  🖼  Media count : ${Array.isArray(media) ? media.length : "N/A"}`);
      const faqs = d.productFaqRes;
      console.log(`  ❓ FAQ count   : ${Array.isArray(faqs) ? faqs.length : "N/A"}`);
      const attrs = d.productAttributeRes;
      console.log(`  🏷  Attr count  : ${Array.isArray(attrs) ? attrs.length : "N/A"}`);
    } else if (Array.isArray(data)) {
      console.log(`  📊 Item count  : ${data.length}`);
    }
  } else {
    console.log(`  ⚠️  Data       : null / undefined`);
  }
  console.log(
    `──────────────────────────────────────────────────────────────────\n`
  );
}
// ─────────────────────────────────────────────────────────────────────────────

const page = async ({
  params,
}: {
  params: Promise<{ productslug: string }>;
}) => {
  const { productslug } = await params;

  console.log(
    `\n[PRODUCT DETAIL] 🚀 Request received — slug: "${productslug}" at ${new Date().toISOString()}`
  );

  try {
    // ── Fetch product details (cached via unstable_cache) ──
    const productStart = performance.now();
    const product = await getFullProductDetails(productslug);
    const productDuration = Math.round(performance.now() - productStart);
    logCacheEvent("getFullProductDetails", productslug, productDuration, product);

    // ── Fetch reviews (cached) ──
    const reviewsStart = performance.now();
    const reviews = await getProductReviews(productslug);
    const reviewsDuration = Math.round(performance.now() - reviewsStart);
    logCacheEvent(
      "getProductReviews",
      productslug,
      reviewsDuration,
      reviews
    );

    // ── 404 guard ──
    if (!product || Object.keys(product).length === 0) {
      console.warn(
        `[PRODUCT DETAIL] ⚠️  Product not found for slug: "${productslug}"`
      );
      return notFound();
    }

    console.log(
      `[PRODUCT DETAIL] ✔️  Rendering ProductClient for slug: "${productslug}"\n`
    );
    return <ProductClient product={product} slug={productslug} reviews={reviews} />;

  } catch (error) {
    console.error(`[PRODUCT DETAIL] ❌ Fetch Error for slug: "${productslug}":`, error);
    return notFound();
  }
};

export default page;