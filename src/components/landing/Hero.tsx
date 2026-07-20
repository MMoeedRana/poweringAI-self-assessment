"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-[#1E1E1E] mb-7 pt-8 pb-16 lg:py-24">
      <div className="relative mx-auto flex max-w-[1500px] flex-col gap-12 px-6 pb-20 pt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-16 lg:pb-28 lg:pt-16">
        <div className="flex max-w-xl flex-col justify-center">
          <div>
            <span className="mb-6 inline-block rounded-md border border-white/10 bg-[#2A2A2A] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6624]">
              Self-Assessment
            </span>
          </div>

          <h1 className="text-[2.75rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
            Where Does Your Sales <br />
            Organization <span className="text-[#FF6624]">Stand</span> <br />
            <span className="text-[#FF6624]">Today</span>, And Where <br />
            Should It Be?
          </h1>

          <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-gray-400">
            X levers across Ways of Working, tech &amp; Tools, and People. Two
            clicks per lever: rate today, set your ambition. The result: A
            heatmap that makes the gap visible.
          </p>

          <div className="mt-8">
            <Link href="/assessment">
              <Button className="h-12 cursor-pointer rounded-md bg-[#FF6624] px-8 text-[15px] font-bold text-white transition-all hover:bg-[#E0531B]">
                Start The Assessment
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2 lg:justify-end">
          <div className="relative w-full max-w-[680px] aspect-[1010/730] rounded-3xl overflow-hidden">
            <Image
              src="/Heatmap.png"
              alt="Heatmap Assessment Preview Dashboard"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-center rounded-5xl border-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
