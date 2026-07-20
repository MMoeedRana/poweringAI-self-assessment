"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] border-t border-white/5 px-6 py-10 lg:px-16">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-6 sm:flex-row w-full">
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

        <p className="text-sm text-gray-200 text-center sm:text-right mr-7">
          © 2026 POWERING Sales Consultants GmbH. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
