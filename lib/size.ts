/**
 * Normalize a size string to the canonical `WxH` form.
 *
 * Handles variants like:
 *   "18 X 16"  →  "18x16"
 *   "18 x16"   →  "18x16"
 *   "18X16"    →  "18x16"
 *   "18 x 16"  →  "18x16"
 *   "18x16"    →  "18x16"  (no-op)
 */
export function normalizeSize(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    // collapse any whitespace around 'x' into just 'x'
    .replace(/\s*x\s*/gi, "x");
}

/**
 * Format a normalized size value for display.
 *
 * "18x16"  →  "18 × 16"
 */
export function formatSize(normalized: string): string {
  return normalized.replace(/x/gi, " × ");
}
