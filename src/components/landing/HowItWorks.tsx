"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const steps = [
  {
    n: 1,
    title: "Rate where you are today",
    body: 'Pick the maturity stage that matches your organization right now from "None" to "Benchmark."',
  },
  {
    n: 2,
    title: "Set your ambition",
    body: "Pick where you want to be in the next 12 months. That's the gap we'll help you close.",
  },
  {
    n: 3,
    title: "See the heatmap",
    body: "Every lever is color-coded red to green, so the biggest opportunities jump out immediately.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#FAF8F5] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header Title Section */}
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          <span className="mb-5 inline-block rounded-lg bg-[#FDF0E9] border border-[#FADCD0] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6624]">
            How does it work?
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#1E1E1E] leading-tight w-full">
            Two Clicks <span className="text-[#FF6624]">Per Lever.</span> One
            Clear Picture.
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-gray-600 max-w-2xl text-center">
            13 levers across Ways of Working, Sales Tech &amp; Tools, and
            People. For each, you rate where you stand today and set your
            ambition for the next 12 months. The result: a heatmap that makes
            the gap visible.
          </p>
        </div>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex justify-center lg:justify-end w-full overflow-hidden rounded-2xl bg-transparent">
            <div className="relative w-full max-w-[530px] max-h-[400px] aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                alt="How Does It Work Graphic Layout"
                src="/HowDoesItWork.png"
                fill
                priority
                sizes="(max-w-768px) 100vw, 540px"
                className="object-cover object-left-top scale-[1.05] transition-transform duration-300"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[23px] top-6 bottom-11 w-0.5 bg-[#FF6624]/20" />

            <ol className="space-y-12 relative">
              {steps.map((step) => {
                const isActive = step.n === 2;
                return (
                  <li key={step.n} className="relative flex gap-6 items-start">
                    <div
                      className={cn(
                        "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isActive
                          ? "bg-[#FDDCCF] shadow-sm scale-105"
                          : "bg-[#FDF2EC]",
                      )}
                    >
                      <div
                        className={cn(
                          "flex size-6 items-center justify-center rounded-full text-[11px] font-bold leading-none select-none transition-colors",
                          isActive
                            ? "border border-black text-black font-extrabold bg-[#FDDCCF]"
                            : "border border-slate-300 text-slate-500 bg-[#FDF2EC]",
                        )}
                      >
                        {step.n}
                      </div>
                    </div>

                    <div className="pt-2.5">
                      <h3 className="text-xl font-bold text-[#1E1E1E] tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-gray-600 max-w-md">
                        {step.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
