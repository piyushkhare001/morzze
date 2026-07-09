"use client";

import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Button } from "@/components/ui/button";
import { sanitizeRichText } from "@/lib/sanitizeRichText";
import { getImageURL } from "@/lib/getImageLin";

export type ChildRef = {
  setActiveTab: (tab: number) => void;
};

type ProductAttribute = {
  attribute: string;
  value?: string | null;
};

type PdfDocument = {
  mediaURL: string;
  title?: string | null;
};

type HtmlTab = {
  type: "html";
  label: string;
  content: string | null | undefined;
};

type PdfTab = {
  type: "pdf";
  label: string;
  documents: PdfDocument[];
};

type ProductTab = HtmlTab | PdfTab;

type DescriptionTabsProps = {
  productAttributeRes?: ProductAttribute[];
  pdfDocuments?: PdfDocument[];
};

const DescriptionTabs = forwardRef<ChildRef, DescriptionTabsProps>(
  ({ productAttributeRes, pdfDocuments }, ref) => {
    // HTML CONTENT TABS
    const tabKeys = [
      { key: "DESCRIPTION", label: "DESCRIPTION" },
      { key: "DIMENSIONS", label: "DIMENSIONS" },
      { key: "FEATURES", label: "FEATURES" },
      { key: "Accessories Included", label: "ACCESSORIES" },
    ];

    // AVAILABLE TABS
    const htmlTabs: ProductTab[] = tabKeys.flatMap((tab) => {
      const found = productAttributeRes?.find((a) => a.attribute === tab.key);

      return found
        ? [
            {
              type: "html",
              label: tab.label,
              content: found.value,
            },
          ]
        : [];
    });

    const availableTabs: ProductTab[] = pdfDocuments?.length
      ? [
          ...htmlTabs,
          {
            type: "pdf",
            label: "DOCUMENTATION",
            documents: pdfDocuments,
          },
        ]
      : htmlTabs;

    const [activeTab, setActiveTab] = useState(0);

    useImperativeHandle(ref, () => ({
      setActiveTab: (tab: number) => {
        setActiveTab(tab);
      },
    }));

    // HIDE COMPONENT IF NO DATA
    if (!availableTabs.length) return null;

    const currentTab = availableTabs[activeTab];
    return (
      <div className="w-full bg-black py-10 p-4 md:p-10 font-inter border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          {/* TAB HEADERS */}
          <div className="flex items-center gap-10 border-b border-zinc-900 overflow-x-auto no-scrollbar">
            {availableTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`pb-4 text-xs tracking-[0.25em] font-semibold relative whitespace-nowrap transition-colors ${
                  activeTab === index
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.label}

                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9C824A]" />
                )}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="py-10">
            <div className="max-w-5xl">
              {/* PDF SECTION */}
              {availableTabs[activeTab]?.type === "pdf" ? (
                <div className="space-y-4">
                  {currentTab.type === "pdf" &&
                    currentTab.documents.map((doc, index) => (
                      <a
                        key={index}
                        href={getImageURL(doc.mediaURL)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between border border-zinc-800 p-4 rounded-lg hover:border-[#9C824A] transition group"
                      >
                        <div className="flex items-center gap-3">
                          {/* PDF icon badge */}
                          <div className="flex-shrink-0 w-10 h-10 bg-[#9C824A]/15 border border-[#9C824A]/30 rounded flex items-center justify-center group-hover:bg-[#9C824A]/25 transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-[#9C824A]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="9" y1="13" x2="15" y2="13" />
                              <line x1="9" y1="17" x2="13" y2="17" />
                            </svg>
                          </div>

                          <div>
                            <p className="text-white text-sm font-medium leading-snug">
                              {doc.title?.trim() || "Product Document"}
                            </p>
                            <p className="text-zinc-500 text-xs mt-0.5 uppercase tracking-wider">
                              PDF
                            </p>
                          </div>
                        </div>

                        <Button
                          type="button"
                          className="bg-[#9C824A] text-black hover:bg-[#b89b5e] flex-shrink-0"
                        >
                          View PDF
                        </Button>
                      </a>
                    ))}
                </div>
              ) : (
                // HTML CONTENT
                <div
                  className="text-white/90 text-base leading-8 prose prose-invert"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeRichText(
                      currentTab.type === "html" ? currentTab.content : "",
                    ),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default DescriptionTabs;
