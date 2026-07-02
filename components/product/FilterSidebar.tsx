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
};

// Static inch sizes shown for steel sink categories
const STEEL_SINK_SIZES: FilterOption[] = Array.from({ length: 31 }, (_, i) => {
  const inch = 15 + i;
  return { label: `${inch}  inches`, value: String(inch) };
});

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
}: FilterSidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategories = searchParams.getAll("category");
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

const showSteelSinkSizes = selectedCategories.some((cat) =>
  steelSinkCategorySlugs.includes(cat)
);

  const filterData = [
    {
      id: "category",
      title: "CATEGORY",
      items:
        categories?.map((cat) => ({
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
   ...(showSteelSinkSizes
  ? [
      {
        id: "size",
        title: "SIZE ",
        items: STEEL_SINK_SIZES,
      },
    ]
  : []),
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
    <div className="w-full bg-black p-0 select-none md:block hidden">
      {filterData.map((section) => {
        const isOpen = openSections.includes(section.id);
        const selectedCount = section.items.filter((item) => 
          isChecked(section.id, item.value)
        ).length;
        
        return (
        <div key={section.id} className="mb-8 border-b border-white/5 pb-4 last:border-b-0">
          <div 
            className="flex items-center justify-between cursor-pointer mb-4 group"
            onClick={() => toggleSection(section.id)}
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
      )})}

      <div
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
      </div>
    </div>
  );
};

export default FilterSidebar;