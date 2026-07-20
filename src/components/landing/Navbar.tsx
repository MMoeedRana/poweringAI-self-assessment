"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#1E1E1E] border-b border-white/5">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 lg:px-16">
        <div className="relative flex items-center">
          <Image
            src="/logo.png"
            alt="Powering AI Self Assessment Logo"
            width={180}
            height={40}
            priority
            className="object-contain"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="cursor-pointer flex h-12 items-center gap-2 rounded bg-white px-5 text-sm font-semibold text-[#1E1E1E] border border-transparent transition-colors hover:border-[#FF6624] hover:text-[#FF6624]">
            <span>EN</span>
            <ChevronDown className="size-4 text-[#FF6624]" />
          </button>
          <Link href="/assessment">
            <Button className="h-12 cursor-pointer rounded bg-[#FF6624] px-6 text-sm font-bold text-white transition-colors hover:bg-[#E0531B]">
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
