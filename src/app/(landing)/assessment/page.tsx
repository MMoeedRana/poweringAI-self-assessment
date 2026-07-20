"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AssessmentStep() {
  const [todayVal, setTodayVal] = useState(20);
  const [ambitionVal, setAmbitionVal] = useState(60);

  const stepsNodes = [
    { label: "None", val: 0, hex: "#BF4E44" },
    { label: "Isolated action", val: 20, hex: "#D9774B" },
    { label: "Documented standard", val: 40, hex: "#DCAC63" },
    { label: "Consistently applied", val: 60, hex: "#83BA61" },
    { label: "Regularly updated", val: 80, hex: "#55A46C" },
    { label: "Benchmark", val: 100, hex: "#328D68" },
  ];

  const getSegmentColor = (index: number) => {
    const colors = [
      "#BF4E44",
      "#D9774B",
      "#DCAC63",
      "#83BA61",
      "#55A46C",
      "#328D68",
    ];
    return colors[index] || "#328D68";
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-4 sm:p-6 lg:p-8 flex items-center justify-center font-sans antialiased select-none">
      <div className="w-full max-w-6xl bg-white rounded-3xl border border-gray-100/70 shadow-[0_4px_30px_rgba(0,0,0,0.015)] overflow-hidden p-6 sm:p-10 lg:p-12 space-y-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <span>Progress</span>
            <span className="text-gray-400 font-extrabold">8%</span>
          </div>
          <div className="h-1 w-full bg-[#FAF9F6] rounded-full overflow-hidden">
            <div className="h-full w-[8%] bg-[#FF6624] rounded-full" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <span className="rounded-full bg-[#FDF1EB] px-4 py-1.5 text-[11px] font-bold text-[#FF6624]">
            Ways of Working 1/5
          </span>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#FDF1EB] px-4 py-1.5 text-[11px] font-bold text-[#FF6624]">
              Ways of Working
            </span>
            <span className="rounded-full bg-[#FAF9F6] text-gray-400 px-4 py-1.5 text-[11px] font-semibold border border-transparent">
              Sales Tech &amp; Tools
            </span>
            <span className="rounded-full bg-[#FAF9F6] text-gray-400 px-4 py-1.5 text-[11px] font-semibold border border-transparent">
              People
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1E1E1E] lg:text-[2.25rem]">
          Winning More New Customers At Scale
        </h1>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex gap-4 rounded-2xl bg-[#FCF5F0] p-5 border border-[#F6EBE4]">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#F5E2D7]">
              <svg
                className="size-4 text-[#FF6624]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#FF6624] block">
                Target Vision
              </span>
              <p className="text-[13px] leading-relaxed text-gray-600 font-medium">
                We manage new-customer acquisition through a clearly defined,
                thoroughly documented, and consistently applied approach.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl bg-[#FCF5F0] p-5 border border-[#F6EBE4]">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#F5E2D7]">
              <svg
                className="size-4 text-[#FF6624]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#FF6624] block">
                Why This Matters
              </span>
              <p className="text-[13px] leading-relaxed text-gray-600 font-medium">
                Existing-account growth is often the fastest and most profitable
                source of additional revenue.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 pt-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex size-6 items-center justify-center rounded-lg bg-[#FCF5F0] border border-[#F6EBE4]">
                <svg
                  className="size-3.5 text-[#FF6624]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 className="text-[13px] font-black text-[#1E1E1E] tracking-tight">
                What We Are Today
              </h2>
            </div>

            <div className="bg-transparent rounded-xl border border-gray-200 px-8 pt-12 pb-8 relative">
              <div className="absolute left-[7%] right-[7%] top-13.75 h-0.75 flex rounded-full overflow-hidden">
                {stepsNodes.slice(0, -1).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-full"
                    style={{ backgroundColor: getSegmentColor(i) }}
                  />
                ))}
              </div>

              <div className="relative flex justify-between items-center w-full">
                {stepsNodes.map((node) => {
                  const isSelected = todayVal === node.val;
                  return (
                    <button
                      key={node.val}
                      onClick={() => setTodayVal(node.val)}
                      className="group flex flex-col items-center justify-center focus:outline-none relative z-10 w-[14%]"
                    >
                      <span
                        className={cn(
                          "text-[10.5px] text-center font-semibold block absolute -top-9 w-max max-w-30 leading-tight transition-colors tracking-tight",
                          isSelected
                            ? "text-[#1E1E1E] font-black"
                            : "text-gray-400 group-hover:text-gray-600",
                        )}
                      >
                        {node.label}
                      </span>

                      <div
                        className={cn(
                          "rounded-full transition-all duration-150 border-2 border-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]",
                          isSelected
                            ? "size-3.75"
                            : "size-2.75 group-hover:scale-110",
                        )}
                        style={{ backgroundColor: node.hex }}
                      />

                      <span
                        className={cn(
                          "text-[10px] font-bold absolute -bottom-6 transition-colors tracking-tight",
                          isSelected
                            ? "text-[#1E1E1E] font-black"
                            : "text-gray-400",
                        )}
                      >
                        {node.val}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex size-6 items-center justify-center rounded-lg bg-[#FCF5F0] border border-[#F6EBE4]">
                <svg
                  className="size-3.5 text-[#FF6624]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-[13px] font-black text-[#1E1E1E] tracking-tight">
                Ambition (Next 12 Months)
              </h2>
            </div>

            <div className="bg-transparent rounded-xl border border-gray-200 px-8 pt-12 pb-8 relative">
              <div className="absolute left-[7%] right-[7%] top-13.75 h-0.75 flex rounded-full overflow-hidden">
                {stepsNodes.slice(0, -1).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-full"
                    style={{ backgroundColor: getSegmentColor(i) }}
                  />
                ))}
              </div>

              <div className="relative flex justify-between items-center w-full">
                {stepsNodes.map((node) => {
                  const isSelected = ambitionVal === node.val;
                  return (
                    <button
                      key={node.val}
                      onClick={() => setAmbitionVal(node.val)}
                      className="group flex flex-col items-center justify-center focus:outline-none relative z-10 w-[14%]"
                    >
                      <span
                        className={cn(
                          "text-[10.5px] text-center font-semibold block absolute -top-9 w-max max-w-30 leading-tight transition-colors tracking-tight",
                          isSelected
                            ? "text-[#1E1E1E] font-black"
                            : "text-gray-400 group-hover:text-gray-600",
                        )}
                      >
                        {node.label}
                      </span>

                      <div
                        className={cn(
                          "rounded-full bg-white transition-all duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.06)]",
                          isSelected
                            ? "size-3.75 border-[3.5px]"
                            : "size-2.75 border-2 group-hover:scale-110",
                        )}
                        style={{ borderColor: node.hex }}
                      />

                      <span
                        className={cn(
                          "text-[10px] font-bold absolute -bottom-6 transition-colors tracking-tight",
                          isSelected
                            ? "text-[#1E1E1E] font-black"
                            : "text-gray-400",
                        )}
                      >
                        {node.val}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4">
          <button className="inline-flex items-center gap-2 rounded-xl border border-gray-100 bg-[#FAF9F6] px-5 py-2.5 text-[12.5px] font-bold text-gray-400/80 hover:bg-gray-50 hover:text-gray-500 transition-colors">
            <span className="text-sm font-normal">←</span> Previous
          </button>

          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-gray-100 bg-[#FAF9F6] px-5 py-2.5 text-[12.5px] font-bold text-gray-500 hover:bg-gray-50 transition-colors">
              Skip
            </button>
            <Link href="/report">
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#FF6624] px-6 py-2.5 text-[12.5px] font-bold text-white hover:bg-[#E05319] shadow-sm shadow-[#FF6624]/10 transition-colors">
                Next <span className="text-sm font-normal">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
