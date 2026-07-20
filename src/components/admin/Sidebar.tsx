"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const manageLinks = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: (
        <svg
          className="size-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"
          />
        </svg>
      ),
    },
    {
      name: "Edit Scales",
      href: "/admin/scales",
      icon: (
        <svg
          className="size-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      name: "Assessment Tool",
      href: "/admin/assessment",
      icon: (
        <svg
          className="size-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      name: "Recommendations",
      href: "/admin/recommendations",
      icon: (
        <svg
          className="size-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];

  const dataLinks = [
    {
      name: "Submissions & Reports",
      href: "/admin/submissions",
      icon: (
        <svg
          className="size-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      name: "Companies",
      href: "/admin/companies",
      icon: (
        <svg
          className="size-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      name: "Website Context",
      href: "/admin/context",
      icon: (
        <svg
          className="size-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside className="hidden md:flex w-[238px] bg-white border-r border-gray-100 flex-col justify-between shrink-0 h-screen sticky top-0 p-0">
      <div className="space-y-8 p-5">
        <div className="px-3 flex justify-center text-center items-center flex-col -mx-5">
          <Image
            src="/logo.png"
            alt="Powering AI Self Assessment Logo"
            width={120}
            height={120}
          />
          <div className="w-screen max-w-[238px] mt-7 border-t border-gray-200/80 -mx-5" />
        </div>

        <nav className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-3 block mb-2">
              Manage
            </span>
            {manageLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded text-[13px] font-bold tracking-tight transition-all ${
                    active
                      ? "bg-[#FF6624] text-white shadow-sm shadow-[#FF6624]/20"
                      : "text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-3 block mb-2">
              Data
            </span>
            {dataLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded text-[13px] font-bold tracking-tight transition-all ${
                    active
                      ? "bg-[#FF6624] text-white shadow-sm shadow-[#FF6624]/20"
                      : "text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      <div className="space-y-4 pt-4 mb-1 shrink-0 border-t border-gray-200/80 p-5">
        <button className="w-full flex items-center gap-3 px-4 py-2 text-[12.5px] font-bold text-gray-400 hover:text-gray-600 transition-colors">
          <Settings className="w-3.5 h-3.5" />
          Profile Settings
        </button>

        <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-[#FAFAFA] p-3">
          <div className="flex items-center gap-2.5">
            <div className="size-9 bg-[#FF6624] rounded-full text-white text-[11px] font-black flex items-center justify-center">
              AR
            </div>
            <div className="space-y-0.5">
              <h5 className="text-[12.5px] font-bold tracking-tight text-[#1E1E1E]">
                Albert Raymond
              </h5>
              <p className="text-[10px] text-gray-400 font-medium">Admin</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-[#FF6624] transition-colors p-1">
            <svg
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
