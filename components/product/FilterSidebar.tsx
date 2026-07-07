"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

type Category = {
  id?: string;
  name: string;
  slug: string;
};

type FilterOption = {
  label: string;
  value: string;
};

type FilterSidebarProps = {
  categories: Category[];
  materialOptions?: FilterOption[];
  finishOptions?: FilterOption[];
  steelSinkCategorySlugs?: string[];
  currentCategorySlug?: string;
};

// Static inch sizes shown for steel sink categories
const STEEL_SINK_SIZES: FilterOption[] = [
  { label: '15–19"', value: "15-19" },
  { label: '20–24"', value: "20-24" },
  { label: '25–29"', value: "25-29" },
  { label: '30–34"', value: "30-34" },
  { label: '35–39"', value: "35-39" },
  { label: '40–45"', value: "40-45" },
];

const getPriceParams = (item: string) => {
  if (item === "Under ₹5,000") return { min: "", max: "5000" };
  if (item === "₹5,000 - ₹10,000") return { min: "5000", max: "10000" };
  if (item === "₹10,000 - ₹20,000") return { min: "10000", max: "20000" };
  if (item === "Above ₹20,000") return { min: "20000", max: "" };

  return { min: "", max: "" };
};

const FilterSidebar = ({
  categories,
  materialOptions = [],
  finishOptions = [],
  steelSinkCategorySlugs = ["stainless-steel-sinks", "pulse"],
  currentCategorySlug,
}: FilterSidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategories = searchParams.getAll("category");
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const getCategoryRank = (cat: { name?: string; slug?: string }) => {
    const text = `${cat.name || ""} ${cat.slug || ""}`
      .toLowerCase()
      .replace(/-/g, " ");

    if (text.includes("stainless steel")) return 1;
    if (text.includes("vertex granite")) return 6;
    if (
      text.includes("granite sink") ||
      text.includes("granite basin") ||
      text.includes("granite")
    )
      return 2;
    if (text.includes("edge steel")) return 3;
    if (text.includes("neo steel")) return 4;
    if (text.includes("pulse steel") || text.includes("pulse")) return 5;
    if (text.includes("kitchen faucet")) return 7;
    if (text.includes("air tap")) return 8;
    if (text.includes("kitchen accessor")) return 9;
    if (
      text.includes("liquid soap dispenser") ||
      text.includes("soap dispenser")
    )
      return 10;
    if (text.includes("food waste disposer") || text.includes("waste disposer"))
      return 11;
    if (
      text.includes("sink drain adaptor") ||
      text.includes("sink drainer adaptor") ||
      text.includes("sink drain adapter") ||
      text.includes("sink drainer adapter") ||
      text.includes("drain pipe") ||
      text.includes("sink drain")
    ) {
      return 12;
    }
    if (text.includes("sink strainer cover")) return 14;
    if (text.includes("sink strainer")) return 13;
    if (
      text.includes("wash basin") ||
      text.includes("bathroom basin") ||
      text.includes("vanity") ||
      text.includes("basin")
    )
      return 15;
    if (text.includes("bathroom faucet")) return 16;
    if (text.includes("hand shower")) return 17;
    if (text.includes("towel warmer") || text.includes("heated towel"))
      return 18;
    if (text.includes("floor drainer") || text.includes("floor drain"))
      return 19;
    if (text.includes("new arrival")) return 20;
    if (text.includes("signature piece")) return 21;
    if (text.includes("trending now") || text.includes("trending")) return 22;

    // Fallbacks for generic terms if exact match didn't trigger
    if (text.includes("steel sink")) return 1;
    if (text.includes("sink")) return 1;
    if (text.includes("faucet")) return 16;
    if (text.includes("drain")) return 19;

    return 999;
  };

  const filterData = [
    {
      id: "category",
      title: "CATEGORY",
      items:
        categories
          ?.filter(
            (cat) =>
              !cat.name?.toLowerCase().includes("aura") &&
              !cat.slug?.toLowerCase().includes("aura"),
          )
          .sort((a, b) => {
            const rankA = getCategoryRank(a);
            const rankB = getCategoryRank(b);
            if (rankA !== rankB) {
              return rankA - rankB;
            }
            return (a.name || "").localeCompare(b.name || "");
          })
          .map((cat) => ({
            label: cat.name,
            value: cat.slug,
          })) || [],
    },
    {
      id: "material",
      title: "MATERIAL",
      items: materialOptions,
    },
    {
      id: "finish",
      title: "FINISH",
      items: finishOptions,
    },
    {
      id: "size",
      title: "SIZE ",
      items: STEEL_SINK_SIZES,
    },
    {
      id: "price",
      title: "PRICE RANGE",
      items: [
        { label: "Under ₹5,000", value: "Under ₹5,000" },
        { label: "₹5,000 - ₹10,000", value: "₹5,000 - ₹10,000" },
        { label: "₹10,000 - ₹20,000", value: "₹10,000 - ₹20,000" },
        { label: "Above ₹20,000", value: "Above ₹20,000" },
      ],
    },
  ].filter((section) => section.items.length > 0);

  const updateFilter = (sectionId: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("page");

    if (sectionId === "price") {
      const { min, max } = getPriceParams(value);

      const currentMin = searchParams.get("min") || "";
      const currentMax = searchParams.get("max") || "";

      const alreadyChecked = currentMin === min && currentMax === max;

      if (alreadyChecked) {
        params.delete("min");
        params.delete("max");
      } else {
        min ? params.set("min", min) : params.delete("min");
        max ? params.set("max", max) : params.delete("max");
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      return;
    }

    const currentValues = params.getAll(sectionId);

    if (currentValues.includes(value)) {
      params.delete(sectionId);
      currentValues
        .filter((v) => v !== value)
        .forEach((v) => params.append(sectionId, v));
    } else {
      params.append(sectionId, value);
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const updateStock = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("page");

    if (params.get("stock") === "true") {
      params.delete("stock");
    } else {
      params.set("stock", "true");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const isChecked = (sectionId: string, value: string) => {
    if (sectionId === "price") {
      const { min, max } = getPriceParams(value);

      const currentMin = searchParams.get("min") || "";
      const currentMax = searchParams.get("max") || "";

      return currentMin === min && currentMax === max;
    }

    return searchParams.getAll(sectionId).includes(value);
  };

  return (
    <div className="w-full bg-transparent p-0 select-none">
      {filterData.map((section) => {
        const isOpen = openSections.includes(section.id);
        const selectedCount = section.items.filter((item) =>
          isChecked(section.id, item.value),
        ).length;

        return (
          <div
            key={section.id}
            className="mb-8 border-b border-white/5 pb-4 last:border-b-0"
          >
            <div
              className="flex items-center justify-between cursor-pointer mb-4 group"
              onClick={() => toggleSection(section.id)}
              role="button"
              aria-expanded={isOpen}
              aria-label={`Toggle ${section.title} filter section`}
            >
              <h3 className="text-sm tracking-[0.15em] font-montserrat text-white/80 uppercase group-hover:text-white transition-colors">
                {section.title} {selectedCount > 0 && `(${selectedCount})`}
              </h3>
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-white/60 group-hover:text-white" />
              ) : (
                <ChevronDown className="w-4 h-4 text-white/60 group-hover:text-white" />
              )}
            </div>

            {isOpen && (
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item.value}
                    onClick={() => updateFilter(section.id, item.value)}
                    className="flex items-center space-x-3 group cursor-pointer"
                  >
                    <Checkbox
                      id={`${section.id}-${item.value}`}
                      checked={isChecked(section.id, item.value)}
                      className="w-4 h-4 border-[#CBA14D] rounded-none data-checked:!bg-[#FFBF3F] data-checked:!border-[#FFBF3F] data-checked:!text-black"
                    />

                    <label
                      htmlFor={`${section.id}-${item.value}`}
                      className="text-sm font-inter text-[#EDEBE9] cursor-pointer group-hover:text-white transition-colors"
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* <div
        onClick={updateStock}
        className="flex items-center space-x-3 mt-4 group cursor-pointer border-t border-white/5 pt-6"
      >
        <Checkbox
          id="stock"
          checked={searchParams.get("stock") === "true"}
          className="w-4 h-4 border-[#CBA14D] rounded-none data-checked:!bg-[#FFBF3F] data-checked:!border-[#FFBF3F] data-checked:!text-black"
        />

        <label
          htmlFor="stock"
          className="text-[13px] text-[#999999] cursor-pointer group-hover:text-white"
        >
          In Stock Only
        </label>
      </div> */}
    </div>
  );
};

export default FilterSidebar;
