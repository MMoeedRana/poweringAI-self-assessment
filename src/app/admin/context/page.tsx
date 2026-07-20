"use client";

import { useState } from "react";
import {
  ChevronDown,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

type TabType =
  | "Hero Section"
  | "13 levers"
  | "The scale"
  | "What you get"
  | "Talk to us";

export default function WebsiteContextPage() {
  const [activeTab, setActiveTab] = useState<TabType>("Hero Section");

  const [formData, setFormData] = useState({
    hero: {
      beforeHighlight: "Where does your sales organization",
      highlight: "stand today",
      afterHighlight: "and where should it be?",
      badgeHeading: "Self-Assessment",
      description:
        "X levers across Ways of Working, tech & Tools, and People. Two clicks per lever: rate today, set your ambition. The result: A heatmap that makes the gap visible.",
      btnText: "Start the assessment",
    },
    levers13: {
      beforeHighlight: "Two clicks per",
      highlight: "lever. One",
      afterHighlight: "picture",
      badgeHeading: "How does it work?",
      description:
        "13 levers across Ways of Working, Sales Tech & Tools, and People. For each, you rate where you stand today and set your ambition for the next 12 months. The result: a heatmap that makes the gap visible.",
      p1Heading: "Rate where you are today",
      p1Desc:
        "13 levers across Ways of Working, Sales Tech & Tools, and People. For each, you rate where you stand today and set your ambition for the next 12 months. The result: a heatmap that makes the gap visible.",
      p2Heading: "Set your ambition",
      p2Desc:
        "13 levers across Ways of Working, Sales Tech & Tools, and People. For each, you rate Pick where you want to be in the next 12 months. That's the gap we'll help you close.",
      p3Heading: "See the heatmap",
      p3Desc:
        "Every lever is color-coded red to green, so the biggest opportunities jump out immediately.",
    },
    scale: {
      beforeHighlight: "Two clicks per",
      highlight: "lever. One",
      afterHighlight: "picture",
      badgeHeading: "The scale",
      description:
        "Every lever today and your ambition is rated on the same six stage scale, so results are always comparable across your whole organization.",
    },
    whatYouGet: {
      beforeHighlight: "Prefer to",
      highlight: "walk through",
      afterHighlight: "it live?",
      badgeHeading: "What you get",
      description:
        "Book a 30-minute session with a POWERING advisor before or after your assessment, no obligation.",
      btnText: "Start the assessment",
    },
    talkToUs: {
      beforeHighlight: "Prefer to",
      highlight: "walk through",
      afterHighlight: "it live?",
      badgeHeading: "Talk to us",
      description:
        "Book a 30-minute session with a POWERING advisor before or after your assessment, no obligation.",
      btnText: "Book a session",
    },
  });

  const renderRichEditor = (
    label: string,
    value: string,
    onChangeHandler: (val: string) => void,
    isOrangeText: boolean = false,
  ) => (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[12.5px] font-bold text-gray-700">{label}</label>
      <div className="bg-[#FAF9F5]/50 border border-gray-200/70 rounded-xl overflow-hidden focus-within:border-[#FF6624] focus-within:ring-1 focus-within:ring-orange-100 transition-all">
        <div className="flex items-center gap-4 px-3 py-1.5 bg-[#FAF9F5] border-b border-gray-200/50 text-gray-400">
          <div className="flex items-center gap-2 border-r border-gray-200/60 pr-3">
            <Bold
              className="size-3.5 cursor-pointer hover:text-gray-700"
              strokeWidth={2.5}
            />
            <Italic
              className="size-3.5 cursor-pointer hover:text-gray-700"
              strokeWidth={2.5}
            />
            <Underline
              className="size-3.5 cursor-pointer hover:text-gray-700"
              strokeWidth={2.5}
            />
          </div>
          <div className="flex items-center gap-1.5 border-r border-gray-200/60 pr-3 text-[11.5px] font-semibold text-gray-500">
            <span>Inter</span> <ChevronDown className="size-3 text-gray-400" />
          </div>
          <div className="flex items-center gap-1.5 border-r border-gray-200/60 pr-3 text-[11.5px] font-semibold text-gray-500">
            <span>14px</span> <ChevronDown className="size-3 text-gray-400" />
          </div>
          <div className="flex items-center gap-2 border-r border-gray-200/60 pr-3">
            <div
              className={`size-3.5 rounded ${isOrangeText ? "bg-[#FF6624]" : "bg-[#505D68]"}`}
            />
          </div>
          <div className="flex items-center gap-2">
            <AlignLeft className="size-3.5 text-gray-600" />
            <AlignCenter className="size-3.5 cursor-pointer hover:text-gray-600" />
            <AlignRight className="size-3.5 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
        <textarea
          rows={label.toLowerCase().includes("description") ? 4 : 2}
          value={value}
          onChange={(e) => onChangeHandler(e.target.value)}
          className={`w-full bg-white px-3 py-2.5 text-[13px] font-medium leading-relaxed tracking-tight border-none outline-none resize-none focus:ring-0 ${
            isOrangeText ? "text-[#FF6624] font-bold" : "text-gray-700"
          }`}
        />
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen antialiased select-none">
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-[20px] font-black text-gray-900 tracking-tight">
            Edit Website Context
          </h2>
          <p className="text-[13px] text-gray-400 font-medium mt-0.5">
            Edit the landing page context
          </p>
        </div>

        <div className="bg-white border border-gray-200/70 rounded-full p-1.5 flex items-center justify-between shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] mb-8">
          {(
            [
              "Hero Section",
              "13 levers",
              "The scale",
              "What you get",
              "Talk to us",
            ] as TabType[]
          ).map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-center py-2.5 text-[12.5px] font-bold rounded-full transition-all tracking-tight ${
                  isSelected
                    ? "bg-[#FF6624] text-white shadow-md shadow-orange-600/10"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.01)] flex flex-col gap-8">
          {activeTab === "Hero Section" && (
            <>
              <div>
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Main Heading
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {renderRichEditor(
                    "Before Highlighted Text",
                    formData.hero.beforeHighlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        hero: { ...formData.hero, beforeHighlight: v },
                      }),
                  )}
                  {renderRichEditor(
                    "Highlight (Orange Text)",
                    formData.hero.highlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        hero: { ...formData.hero, highlight: v },
                      }),
                    true,
                  )}
                  {renderRichEditor(
                    "After Highlighted Text",
                    formData.hero.afterHighlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        hero: { ...formData.hero, afterHighlight: v },
                      }),
                  )}
                  {renderRichEditor(
                    "Badge Heading",
                    formData.hero.badgeHeading,
                    (v) =>
                      setFormData({
                        ...formData,
                        hero: { ...formData.hero, badgeHeading: v },
                      }),
                  )}
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Description
                </h3>
                {renderRichEditor(
                  "Description Text Area",
                  formData.hero.description,
                  (v) =>
                    setFormData({
                      ...formData,
                      hero: { ...formData.hero, description: v },
                    }),
                )}
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Call To Action
                </h3>
                <div className="w-1/2 pr-3">
                  {renderRichEditor("Button Text", formData.hero.btnText, (v) =>
                    setFormData({
                      ...formData,
                      hero: { ...formData.hero, btnText: v },
                    }),
                  )}
                </div>
              </div>
            </>
          )}

          {activeTab === "13 levers" && (
            <>
              <div>
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Main Heading
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {renderRichEditor(
                    "Before Highlighted Text",
                    formData.levers13.beforeHighlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        levers13: { ...formData.levers13, beforeHighlight: v },
                      }),
                  )}
                  {renderRichEditor(
                    "Highlight (Orange Text)",
                    formData.levers13.highlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        levers13: { ...formData.levers13, highlight: v },
                      }),
                    true,
                  )}
                  {renderRichEditor(
                    "After Highlighted Text",
                    formData.levers13.afterHighlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        levers13: { ...formData.levers13, afterHighlight: v },
                      }),
                  )}
                  {renderRichEditor(
                    "Badge Heading",
                    formData.levers13.badgeHeading,
                    (v) =>
                      setFormData({
                        ...formData,
                        levers13: { ...formData.levers13, badgeHeading: v },
                      }),
                  )}
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Description
                </h3>
                {renderRichEditor(
                  "Description Text Area",
                  formData.levers13.description,
                  (v) =>
                    setFormData({
                      ...formData,
                      levers13: { ...formData.levers13, description: v },
                    }),
                )}
              </div>
              <div className="border-t border-gray-100 pt-6 flex flex-col gap-5">
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight">
                  Point Lists Details
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {renderRichEditor(
                    "Point 1 Heading",
                    formData.levers13.p1Heading,
                    (v) =>
                      setFormData({
                        ...formData,
                        levers13: { ...formData.levers13, p1Heading: v },
                      }),
                  )}
                  {renderRichEditor(
                    "Point 1 Description",
                    formData.levers13.p1Desc,
                    (v) =>
                      setFormData({
                        ...formData,
                        levers13: { ...formData.levers13, p1Desc: v },
                      }),
                  )}
                </div>
                <div className="grid grid-cols-2 gap-6 border-t border-gray-50 pt-4">
                  {renderRichEditor(
                    "Point 2 Heading",
                    formData.levers13.p2Heading,
                    (v) =>
                      setFormData({
                        ...formData,
                        levers13: { ...formData.levers13, p2Heading: v },
                      }),
                  )}
                  {renderRichEditor(
                    "Point 2 Description",
                    formData.levers13.p2Desc,
                    (v) =>
                      setFormData({
                        ...formData,
                        levers13: { ...formData.levers13, p2Desc: v },
                      }),
                  )}
                </div>
                <div className="grid grid-cols-2 gap-6 border-t border-gray-50 pt-4">
                  {renderRichEditor(
                    "Point 3 Heading",
                    formData.levers13.p3Heading,
                    (v) =>
                      setFormData({
                        ...formData,
                        levers13: { ...formData.levers13, p3Heading: v },
                      }),
                  )}
                  {renderRichEditor(
                    "Point 3 Description",
                    formData.levers13.p3Desc,
                    (v) =>
                      setFormData({
                        ...formData,
                        levers13: { ...formData.levers13, p3Desc: v },
                      }),
                  )}
                </div>
              </div>
            </>
          )}

          {activeTab === "The scale" && (
            <>
              <div>
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Main Heading
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {renderRichEditor(
                    "Before Highlighted Text",
                    formData.scale.beforeHighlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        scale: { ...formData.scale, beforeHighlight: v },
                      }),
                  )}
                  {renderRichEditor(
                    "Highlight (Orange Text)",
                    formData.scale.highlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        scale: { ...formData.scale, highlight: v },
                      }),
                    true,
                  )}
                  {renderRichEditor(
                    "After Highlighted Text",
                    formData.scale.afterHighlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        scale: { ...formData.scale, afterHighlight: v },
                      }),
                  )}
                  {renderRichEditor(
                    "Badge Heading",
                    formData.scale.badgeHeading,
                    (v) =>
                      setFormData({
                        ...formData,
                        scale: { ...formData.scale, badgeHeading: v },
                      }),
                  )}
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Description
                </h3>
                {renderRichEditor(
                  "Description Text Area",
                  formData.scale.description,
                  (v) =>
                    setFormData({
                      ...formData,
                      scale: { ...formData.scale, description: v },
                    }),
                )}
              </div>
            </>
          )}

          {activeTab === "What you get" && (
            <>
              <div>
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Main Heading
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {renderRichEditor(
                    "Before Highlighted Text",
                    formData.whatYouGet.beforeHighlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        whatYouGet: {
                          ...formData.whatYouGet,
                          beforeHighlight: v,
                        },
                      }),
                  )}
                  {renderRichEditor(
                    "Highlight (Orange Text)",
                    formData.whatYouGet.highlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        whatYouGet: { ...formData.whatYouGet, highlight: v },
                      }),
                    true,
                  )}
                  {renderRichEditor(
                    "After Highlighted Text",
                    formData.whatYouGet.afterHighlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        whatYouGet: {
                          ...formData.whatYouGet,
                          afterHighlight: v,
                        },
                      }),
                  )}
                  {renderRichEditor(
                    "Badge Heading",
                    formData.whatYouGet.badgeHeading,
                    (v) =>
                      setFormData({
                        ...formData,
                        whatYouGet: { ...formData.whatYouGet, badgeHeading: v },
                      }),
                  )}
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Description
                </h3>
                {renderRichEditor(
                  "Description Text Area",
                  formData.whatYouGet.description,
                  (v) =>
                    setFormData({
                      ...formData,
                      whatYouGet: { ...formData.whatYouGet, description: v },
                    }),
                )}
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Call To Action
                </h3>
                <div className="w-1/2 pr-3">
                  {renderRichEditor(
                    "Button Text",
                    formData.whatYouGet.btnText,
                    (v) =>
                      setFormData({
                        ...formData,
                        whatYouGet: { ...formData.whatYouGet, btnText: v },
                      }),
                  )}
                </div>
              </div>
            </>
          )}

          {activeTab === "Talk to us" && (
            <>
              <div>
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Main Heading
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {renderRichEditor(
                    "Before Highlighted Text",
                    formData.talkToUs.beforeHighlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        talkToUs: { ...formData.talkToUs, beforeHighlight: v },
                      }),
                  )}
                  {renderRichEditor(
                    "Highlight (Orange Text)",
                    formData.talkToUs.highlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        talkToUs: { ...formData.talkToUs, highlight: v },
                      }),
                    true,
                  )}
                  {renderRichEditor(
                    "After Highlighted Text",
                    formData.talkToUs.afterHighlight,
                    (v) =>
                      setFormData({
                        ...formData,
                        talkToUs: { ...formData.talkToUs, afterHighlight: v },
                      }),
                  )}
                  {renderRichEditor(
                    "Badge Heading",
                    formData.talkToUs.badgeHeading,
                    (v) =>
                      setFormData({
                        ...formData,
                        talkToUs: { ...formData.talkToUs, badgeHeading: v },
                      }),
                  )}
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Description
                </h3>
                {renderRichEditor(
                  "Description Text Area",
                  formData.talkToUs.description,
                  (v) =>
                    setFormData({
                      ...formData,
                      talkToUs: { ...formData.talkToUs, description: v },
                    }),
                )}
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-[15px] font-black text-gray-900 tracking-tight mb-4">
                  Call To Action
                </h3>
                <div className="w-1/2 pr-3">
                  {renderRichEditor(
                    "Button Text",
                    formData.talkToUs.btnText,
                    (v) =>
                      setFormData({
                        ...formData,
                        talkToUs: { ...formData.talkToUs, btnText: v },
                      }),
                  )}
                </div>
              </div>
            </>
          )}

          <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-6 mt-4">
            <button className="border border-gray-200 text-gray-500 font-bold text-[12.5px] px-5 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button className="bg-[#FF6624] hover:bg-orange-600 text-white font-bold text-[12.5px] px-5 py-2 rounded-xl transition-colors shadow-md shadow-orange-600/10">
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
