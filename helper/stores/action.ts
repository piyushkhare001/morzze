"use server";

import { db } from "@/db";
import { stores } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getStores() {
  try {
    const data = await db
      .select()
      .from(stores)
      .orderBy(desc(stores.createdAt));
    return data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    return [];
  }
}

export async function getActiveStores() {
  try {
    return await db
      .select()
      .from(stores)
      .where(eq(stores.isActive, true))
      .orderBy(desc(stores.isFeatured), desc(stores.createdAt));
  } catch (error) {
    console.error("Error fetching active stores:", error);
    return [];
  }
}

export async function getStoreById(id: string) {
  try {
    const data = await db.select().from(stores).where(eq(stores.id, id));
    return data[0] || null;
  } catch (error) {
    console.error("Error fetching store:", error);
    return null;
  }
}

function slugFromName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createStore(formData: FormData) {
  try {
    const storeName = (formData.get("storeName") as string)?.trim();
    const slug = (formData.get("slug") as string)?.trim() || slugFromName(storeName || "");
    const storeType = (formData.get("storeType") as string)?.trim();
    const state = (formData.get("state") as string)?.trim();
    const city = (formData.get("city") as string)?.trim();
    const latitude = (formData.get("latitude") as string)?.trim();
    const longitude = (formData.get("longitude") as string)?.trim();
    const address = (formData.get("address") as string)?.trim();
    const contactNumber = (formData.get("contactNumber") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const workingHours = (formData.get("workingHours") as string)?.trim();
    const featuresRaw = (formData.get("features") as string)?.trim();
    const badgeBgColor = (formData.get("badgeBgColor") as string)?.trim() || null;
    const badgeTextColor = (formData.get("badgeTextColor") as string)?.trim() || null;
    const mapEmbedUrl = (formData.get("mapEmbedUrl") as string)?.trim() || null;
    const isFeatured = formData.get("isFeatured") === "on";
    const isActive = formData.get("isActive") === "on";
    const contactPersonName = (formData.get("contactPerson") as string)?.trim() || null;
    const landLineNumber = (formData.get("landline") as string)?.trim() || null;

    if (
      !storeName ||
      !storeType ||
      !state ||
      !city ||
      !latitude ||
      !longitude ||
      !address ||
      !contactNumber ||
      !email ||
      !workingHours
    ) {
      return { success: false, message: "Missing required fields" };
    }

    const features = featuresRaw
      ? featuresRaw.split(",").map((f) => f.trim()).filter(Boolean)
      : [];

    await db.insert(stores).values({
      storeName,
      slug,
      storeType,
      state,
      city,
      latitude,
      longitude,
      address,
      contactNumber,
      email,
      workingHours,
      features,
      badgeBgColor,
      badgeTextColor,
      mapEmbedUrl,
      isFeatured,
      isActive,
      contactPersonName,
      landLineNumber,
    });

    revalidatePath("/admin/stores");
    revalidatePath("/stores");

    return { success: true, message: "Store added successfully" };
  } catch (error) {
    console.error("Error creating store:", error);
    return { success: false, message: "Failed to create store" };
  }
}

export async function updateStore(id: string, formData: FormData) {
  try {
    const storeName = (formData.get("storeName") as string)?.trim();
    const slug = (formData.get("slug") as string)?.trim();
    const storeType = (formData.get("storeType") as string)?.trim();
    const state = (formData.get("state") as string)?.trim();
    const city = (formData.get("city") as string)?.trim();
    const latitude = (formData.get("latitude") as string)?.trim();
    const longitude = (formData.get("longitude") as string)?.trim();
    const address = (formData.get("address") as string)?.trim();
    const contactNumber = (formData.get("contactNumber") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const workingHours = (formData.get("workingHours") as string)?.trim();
    const featuresRaw = (formData.get("features") as string)?.trim();
    const badgeBgColor = (formData.get("badgeBgColor") as string)?.trim() || null;
    const badgeTextColor = (formData.get("badgeTextColor") as string)?.trim() || null;
    const mapEmbedUrl = (formData.get("mapEmbedUrl") as string)?.trim() || null;
    const isFeatured = formData.get("isFeatured") === "on";
    const isActive = formData.get("isActive") === "on";
    const contactPersonName = (formData.get("contactPerson") as string)?.trim() || null;
    const landLineNumber = (formData.get("landline") as string)?.trim() || null;

    if (
      !storeName ||
      !slug ||
      !storeType ||
      !state ||
      !city ||
      !latitude ||
      !longitude ||
      !address ||
      !contactNumber ||
      !email ||
      !workingHours
    ) {
      return { success: false, message: "Missing required fields" };
    }

    const features = featuresRaw
      ? featuresRaw.split(",").map((f) => f.trim()).filter(Boolean)
      : [];

    await db
      .update(stores)
      .set({
        storeName,
        slug,
        storeType,
        state,
        city,
        latitude,
        longitude,
        address,
        contactNumber,
        email,
        workingHours,
        features,
        badgeBgColor,
        badgeTextColor,
        mapEmbedUrl,
        isFeatured,
        isActive,
        contactPersonName,
        landLineNumber,
        updatedAt: new Date(),
      })
      .where(eq(stores.id, id));

    revalidatePath("/admin/stores");
    revalidatePath("/stores");

    return { success: true, message: "Store updated successfully" };
  } catch (error) {
    console.error("Error updating store:", error);
    return { success: false, message: "Failed to update store" };
  }
}

export async function deleteStore(id: string) {
  try {
    await db.delete(stores).where(eq(stores.id, id));

    revalidatePath("/admin/stores");
    revalidatePath("/stores");

    return { success: true, message: "Store deleted successfully" };
  } catch (error) {
    console.error("Error deleting store:", error);
    return { success: false, message: "Failed to delete store" };
  }
}

// ── Bulk CSV import ───────────────────────────────────────────────────────────
type BulkResult = {
  total: number;
  success: number;
  failed: number;
  errors: string[];
};

/**
 * Accepts raw CSV text (with a header row) and inserts each row as a store.
 * Expected columns (order does NOT matter — matched by header name):
 *   storeName, state, city, latitude, longitude, address,
 *   contactNumber, email, workingHours, mapEmbedUrl (optional),
 *   landline (optional), contactPerson (optional)
 *
 * slug      → auto-generated from storeName
 * storeType → defaults to "Authorized Dealer" if not provided
 *
 * NOTE: landline & contactPerson are parsed but NOT yet written to DB.
 *       Uncomment those lines after the migration lands.
 */
export async function bulkCreateStores(csvText: string): Promise<{
  success: boolean;
  message?: string;
  result?: BulkResult;
}> {
  try {
    const lines = csvText
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length < 2) {
      return { success: false, message: "CSV must contain a header row and at least one data row" };
    }

    // Parse header
    const headers = parseCSVRow(lines[0]).map((h) => h.trim().toLowerCase());

    const col = (row: string[], key: string): string =>
      (row[headers.indexOf(key.toLowerCase())] ?? "").trim();

    const result: BulkResult = { total: 0, success: 0, failed: 0, errors: [] };

    for (let i = 1; i < lines.length; i++) {
      const rowNum = i + 1; // 1-indexed for user-facing messages
      const cells = parseCSVRow(lines[i]);
      result.total++;

      try {
        const storeName = col(cells, "storeName");
        const slugRaw = col(cells, "slug");
        const slug = slugRaw || slugFromName(storeName);
        const storeType = col(cells, "storeType") || "Authorized Dealer";
        const state = col(cells, "state");
        const city = col(cells, "city");
        const latitude = col(cells, "latitude");
        const longitude = col(cells, "longitude");
        const address = col(cells, "address");
        const contactNumber = col(cells, "contactNumber");
        const email = col(cells, "email");
        const workingHours = col(cells, "workingHours") || "10:00 AM - 9:00 PM";
        const mapEmbedUrl = col(cells, "mapEmbedUrl") || null;
        const landline = col(cells, "landline") || null;           // TODO: uncomment in db.insert after migration
        const contactPerson = col(cells, "contactPerson") || null; // TODO: uncomment in db.insert after migration

        if (!storeName || !state || !city || !latitude || !longitude || !address || !contactNumber || !email) {
          result.failed++;
          result.errors.push(`Row ${rowNum}: Missing required field(s) — storeName, state, city, latitude, longitude, address, contactNumber, email are required`);
          continue;
        }

        await db.insert(stores).values({
          storeName,
          slug,
          storeType,
          state,
          city,
          latitude,
          longitude,
          address,
          contactNumber,
          email,
          workingHours,
          features: [],
          badgeBgColor: null,
          badgeTextColor: null,
          mapEmbedUrl,
          isFeatured: false,
          isActive: true,
          // landline,       // uncomment after migration
          // contactPerson,  // uncomment after migration
        });

        result.success++;
      } catch (rowErr) {
        result.failed++;
        result.errors.push(`Row ${rowNum}: ${rowErr instanceof Error ? rowErr.message : "Insert failed"}`);
      }
    }

    revalidatePath("/admin/stores");
    revalidatePath("/stores");

    return { success: true, result };
  } catch (error) {
    console.error("Bulk store upload error:", error);
    return { success: false, message: "Failed to process CSV file" };
  }
}

/** Minimal CSV row parser that handles quoted fields (including commas inside quotes). */
function parseCSVRow(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}
