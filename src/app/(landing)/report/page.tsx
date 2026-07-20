"use client";

import { useState } from "react";
import ReportModal from "@/components/landing/ReportModal";

export default function UnlockReportStep() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Andrew",
    lastName: "Johnson",
    email: "Andrewjohnson@gmail.com",
    companyName: "BMW Group",
    role: "",
    phone: "",
    industry: "",
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-4 sm:p-6 lg:p-8 flex items-center justify-center font-sans antialiased select-none">
      <div className="w-full max-w-6xl bg-white rounded-3xl border border-gray-100/70 shadow-[0_4px_30px_rgba(0,0,0,0.015)] overflow-hidden p-6 sm:p-8 lg:p-10 space-y-6">
        <div className="space-y-2">
          <span className="inline-block rounded-md bg-[#FDF1EB] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#FF6624]">
            Get My Report
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1E1E1E] lg:text-[2.1rem]">
            Ready To Unlock Your Report?
          </h1>
          <p className="text-[13px] text-gray-400 font-medium tracking-tight">
            Enter your details to unlock your personalized Sales Excellence
            report. No password needed.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr] pt-2">
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-b from-[#251A14] to-[#1C130E] p-6 text-white flex flex-col justify-between min-h-115">
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-3.5">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#FF6624] text-white">
                  <svg
                    className="size-3.5 stroke-3"
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
                <div className="space-y-0.5">
                  <h4 className="text-[13px] font-bold text-white tracking-tight">
                    Take the Assessment
                  </h4>
                  <p className="text-[10.5px] text-gray-400/90 font-medium">
                    13 questions • ~8 min
                  </p>
                </div>
              </div>

              <div className="absolute left-3 top-6 w-[1.5px] h-8 bg-gray-600/70" />

              <div className="flex items-start gap-3.5 pt-2 relative">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-white bg-transparent text-[11px] font-black text-white shadow-[0_0_8px_rgba(255,255,255,0.15)]">
                  2
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[13px] font-black text-white tracking-tight">
                    Your Details
                  </h4>
                  <p className="text-[10.5px] text-gray-400/90 font-medium">
                    So we know where to send it
                  </p>
                </div>
              </div>

              <div className="absolute left-3 top-18.5 w-[1.5px] h-8 bg-gray-700/50" />

              <div className="flex items-start gap-3.5 pt-2 opacity-40">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-gray-400 bg-transparent text-[11px] font-bold text-gray-300">
                  3
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[13px] font-bold text-gray-300 tracking-tight">
                    Email My Report
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-10 border-t border-gray-800/60 space-y-1">
              <span className="text-xl font-black tracking-tight text-white block">
                500+
              </span>
              <p className="text-[10.5px] leading-relaxed text-gray-400 font-medium">
                Sales teams have already benchmarked their maturity with
                Powering
              </p>
            </div>

            <div className="absolute -bottom-12 -right-12 size-48 rounded-full border-10 border-white/2" />
            <div className="absolute -bottom-6 -right-6 size-48 rounded-full border-10 border-white/1.5" />
            <div className="absolute bottom-0 right-0 size-48 rounded-full border-10 border-white/1" />
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-[#1E1E1E] tracking-tight block">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[13px] font-medium text-gray-700 focus:border-[#FF6624] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-[#1E1E1E] tracking-tight block">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[13px] font-medium text-gray-700 focus:border-[#FF6624] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-[#1E1E1E] tracking-tight block">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[13px] font-medium text-gray-700 focus:border-[#FF6624] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-[#1E1E1E] tracking-tight block">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[13px] font-medium text-gray-700 focus:border-[#FF6624] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-[#1E1E1E] tracking-tight block">
                  Role{" "}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[13px] font-medium text-gray-700 focus:border-[#FF6624] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-[#1E1E1E] tracking-tight block">
                  Phone{" "}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[13px] font-medium text-gray-700 focus:border-[#FF6624] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-[#1E1E1E] tracking-tight block">
                Industry{" "}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[13px] font-medium text-gray-400 appearance-none focus:border-[#FF6624] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="">Select industry...</option>
                  <option value="tech">Technology &amp; Software</option>
                  <option value="automotive">
                    Automotive &amp; Manufacturing
                  </option>
                  <option value="finance">Finance &amp; Banking</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-3 text-[10px] leading-normal text-gray-400 font-medium">
              <label className="flex gap-3 cursor-pointer select-none items-start">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-0.5 size-3.5 shrink-0 accent-[#FF6624] rounded border-gray-300"
                />
                <span className="block">
                  <strong className="text-gray-600 font-black block mb-0.5">
                    Assessment &amp; Benchmarking
                  </strong>
                  I agree that POWERING Sales Consultants GmbH may process my
                  personal data (including my assessment responses, contact
                  details, assessment results, and interaction with emails,
                  websites, events and webinars) to generate my assessment
                  report, conduct benchmarking analyses, and develop research
                  and thought leadership insights.
                </span>
              </label>

              <label className="flex gap-3 cursor-pointer select-none items-start">
                <input
                  type="checkbox"
                  className="mt-0.5 size-3.5 shrink-0 accent-[#FF6624] rounded border-gray-300"
                />
                <span className="block">
                  <strong className="text-gray-600 font-black block mb-0.5">
                    Thought Leadership &amp; Marketing Communications
                  </strong>
                  I agree to receive thought leadership content, benchmark
                  reports, research updates, event invitations, and information
                  about relevant products and services from POWERING Sales
                  Consultants GmbH. Communications may be personalized based on
                  my interests, assessment results, and interactions.
                </span>
              </label>

              <label className="flex gap-3 cursor-pointer select-none items-start">
                <input
                  type="checkbox"
                  className="mt-0.5 size-3.5 shrink-0 accent-[#FF6624] rounded border-gray-300"
                />
                <span className="block">
                  <strong className="text-gray-600 font-black block mb-0.5">
                    Communications From Affiliated Companies
                  </strong>
                  I agree that POWERING Sales Consultants GmbH may share my
                  contact details and business profile with affiliated companies
                  within its group so that they may send me leadership content,
                  benchmark reports, event invitations, and information about
                  relevant products and services.
                </span>
              </label>

              <p className="pt-2 text-[9.5px] text-gray-400 font-medium leading-relaxed">
                You may withdraw your consent at any time with future effect.
                For more information about how we process your personal data,
                please see our{" "}
                <span className="text-[#FF6624] underline cursor-pointer font-bold">
                  Privacy Notice
                </span>
                .
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-[#FF6624] px-6 py-2.5 text-[12.5px] font-black text-white hover:bg-[#E05319] shadow-sm shadow-[#FF6624]/10 transition-colors"
              >
                Email My Report <span className="text-sm font-normal">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        email={formData.email}
      />
    </div>
  );
}
