"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function TalkToUs() {
  return (
    <section className="bg-[#1E1E1E] px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 items-center md:grid-cols-2 lg:gap-16">
          <div className="rounded-2xl border border-[#FF6624]/40 bg-transparent p-8 sm:p-12 lg:p-16">
            <span className="mb-6 inline-block rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6624]">
              Talk To Us
            </span>

            <h2 className="font-sans text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl">
              Prefer To <span className="text-[#FF6624]">Walk Through</span> It
              Live?
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-gray-400 max-w-md">
              Book a 30-minute session with a POWERING advisor before or after
              your assessment, no obligation.
            </p>

            <div className="mt-8">
              <Link href="/assessment">
                <Button
                  size="lg"
                  className="cursor-pointer h-12 rounded-lg bg-[#FF6624] px-8 text-[15px] font-bold text-white hover:bg-[#E05319] transition-colors"
                >
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full bg-transparent">
            <Image
              src="/TalkToUs.png"
              alt="Advisor reviewing the sales maturity assessment on a laptop"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover object-left-center rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
