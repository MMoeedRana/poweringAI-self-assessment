"use client";

import Link from "next/link";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export default function ReportModal({
  isOpen,
  onClose,
  email,
}: ReportModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4 animate-fade-in">
      <div className="relative w-full max-w-3xl rounded-xl bg-white p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] text-center flex flex-col items-center justify-center border border-gray-100">
        <div className="relative mb-6">
          <div className="flex size-24 items-center justify-center rounded-full bg-[#FFF0E8]">
            <svg
              className="size-10 text-[#FF6624]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="absolute bottom-1 right-1 flex size-6 items-center justify-center rounded-full bg-[#22C55E] border-[3px] border-white text-white">
            <svg
              className="size-3 stroke-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-3 max-w-md mx-auto mb-8">
          <h2 className="text-2xl md:text-2xl font-bold tracking-tight text-[#1E1E1E]">
            Your report is on its way!
          </h2>
          <p className="text-[13px] text-gray-400 font-medium tracking-tight">
            We&apos;ve sent your personalized Sales Excellence report to
          </p>

          <div className="inline-block rounded-xl bg-[#FFF0E8] px-6 py-2.5 text-[13.5px] font-bold text-[#FF6624] tracking-tight border border-[#FFE4D6]/50">
            {email || "Andrewjohnson@gmail.com"}
          </div>

          <p className="text-[12px] text-gray-400 font-medium tracking-tight pt-1">
            Check your inbox — it should arrive within a few minutes.
          </p>
        </div>

        <div className="w-full rounded-2xl bg-[#FAF6F0] p-4 md:p-5 flex items-center gap-4 text-left border border-[#EFE9E0]/40 mb-5">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#FF6624]">
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div className="space-y-0.5 w-full min-w-0">
            <h4 className="text-[13.5px] font-black text-[#1E1E1E] tracking-tight">
              Elevate Your Results
            </h4>
            <p className="text-[11.5px] text-gray-400 font-medium tracking-tight whitespace-nowrap block">
              Schedule a consultation with our experts to dive into your results
              and unlock your level of growth.
            </p>
          </div>
        </div>

        <div className="w-full space-y-4">
          <Link href="/admin">
            <button className="cursor-pointer w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF6624] py-4 text-[13.5px] font-bold text-white hover:bg-[#E05319] transition-colors shadow-sm shadow-[#FF6624]/10">
              <svg
                className="size-4 mr-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Schedule A Consultation
            </button>
          </Link>

          <button
            onClick={onClose}
            className="cursor-pointer text-[12.5px] font-medium text-gray-400 hover:text-gray-600 transition-colors block mx-auto pt-1 tracking-tight"
          >
            I&apos;ll check my inbox later
          </button>
        </div>
      </div>
    </div>
  );
}
