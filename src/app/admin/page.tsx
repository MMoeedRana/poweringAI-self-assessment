"use client";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased selection:bg-[#FF6624]/10">
      <div className="p-8 space-y-6 flex-1 max-w-[1600px] w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#FBEAE0]/60 border border-[#F5EBE4]/60 rounded-2xl p-5 flex items-start gap-3.5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)]">
            <div className="size-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#FF6624] shrink-0 border border-orange-50">
              <svg
                className="size-5.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <span className="text-[12.5px] font-medium text-gray-400 tracking-tight leading-none">
                Total Assessments
              </span>
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <h3 className="text-2.5xl font-bold text-[#1E1E1E] leading-none tracking-tight pt-2">
                  1170
                </h3>
                <span className="text-[10px] font-bold text-emerald-600 bg-white px-1.5 py-0.5 rounded border border-emerald-100/60 shadow-[0_1px_2px_rgba(0,0,0,0.01)] whitespace-nowrap ml-8">
                  ▲ 15.7%{" "}
                  <span className="text-gray-400 font-normal ml-0.5">
                    vs last month
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#FBEAE0]/60 border border-[#F5EBE4]/60 rounded-2xl p-5 flex items-start gap-3.5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)]">
            <div className="size-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#FF6624] shrink-0 border border-orange-50">
              <svg
                className="size-5.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <span className="text-[12.5px] font-medium text-gray-400 tracking-tight leading-none">
                Completed
              </span>
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <h3 className="text-2.5xl font-bold text-[#1E1E1E] leading-none tracking-tight pt-2">
                  800
                </h3>
                <span className="text-[10px] font-bold text-emerald-600 bg-white px-1.5 py-0.5 rounded border border-emerald-100/60 shadow-[0_1px_2px_rgba(0,0,0,0.01)] whitespace-nowrap ml-6">
                  ▲ 78.8%{" "}
                  <span className="text-gray-400 font-normal ml-0.5">
                    completion rate
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#FBEAE0]/60 border border-[#F5EBE4]/60 rounded-2xl p-5 flex items-start gap-3.5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)]">
            <div className="size-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#FF6624] shrink-0 border border-orange-50">
              <svg
                className="size-5.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <span className="text-[12.5px] font-medium text-gray-400 tracking-tight leading-none">
                Report Downloads
              </span>
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <h3 className="text-2.5xl font-bold text-[#1E1E1E] leading-none tracking-tight pt-2">
                  600
                </h3>
                <span className="text-[10px] font-bold text-emerald-600 bg-white px-1.5 py-0.5 rounded border border-emerald-100/60 shadow-[0_1px_2px_rgba(0,0,0,0.01)] whitespace-nowrap ml-10">
                  ▲ 12.1%{" "}
                  <span className="text-gray-400 font-normal ml-0.5">
                    PDF exports
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#FBEAE0]/60 border border-[#F5EBE4]/60 rounded-2xl p-5 flex items-start gap-3.5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)]">
            <div className="size-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#FF6624] shrink-0 border border-orange-50">
              <svg
                className="size-5.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <span className="text-[12.5px] font-medium text-gray-400 tracking-tight leading-none">
                Avg. Completion Time
              </span>
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <h3 className="text-2.5xl font-bold text-[#1E1E1E] leading-none tracking-tight pt-2">
                  7:42
                </h3>
                <span className="text-[10px] font-bold text-rose-600 bg-white px-1.5 py-0.5 rounded border border-rose-100 shadow-[0_1px_2px_rgba(0,0,0,0.01)] whitespace-nowrap ml-5">
                  ▼ 0:38{" "}
                  <span className="text-gray-400 font-normal ml-0.5">
                    under 10-min target
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(0,0,0,0.01)]">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-[15px] font-bold text-[#1E1E1E] tracking-tight">
                Assessments over time
              </h4>
              <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="size-2.5 rounded bg-[#FF6624]" />
                  Started
                </span>
                <span className="flex items-center gap-2">
                  <span className="size-2.5 rounded bg-[#F7D8C8]" />
                  Completed
                </span>
              </div>
            </div>

            <div className="h-56 flex items-end justify-between gap-4 pt-6 border-b border-gray-100 relative px-2">
              {[
                { m: "Jan", s: 75, c: 55 },
                { m: "Feb", s: 70, c: 62 },
                { m: "Mar", s: 90, c: 45, alert: true },
                { m: "Apr", s: 78, c: 52 },
                { m: "May", s: 80, c: 58 },
                { m: "Jun", s: 76, c: 68 },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center gap-3 group relative h-full justify-end"
                >
                  {item.alert && (
                    <span className="absolute top-0 px-2 py-0.5 bg-[#FFF0E8] text-[9.5px] font-bold text-[#FF6624] rounded-md border border-orange-100 shadow-sm transform -translate-y-2">
                      ▲ 15.7%
                    </span>
                  )}
                  <div className="w-full flex items-end justify-center gap-2 h-40">
                    <div
                      className="w-[18px] bg-[#FF6624] rounded-t-md group-hover:opacity-90 transition-opacity"
                      style={{ height: `${item.s}%` }}
                    />
                    <div
                      className="w-[18px] bg-[#F7D8C8] rounded-t-md group-hover:opacity-90 transition-opacity"
                      style={{ height: `${item.c}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 tracking-tight whitespace-nowrap">
                    {item.m}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(0,0,0,0.01)]">
            <h4 className="text-[15px] font-bold text-[#1E1E1E] tracking-tight mb-4">
              By language
            </h4>

            <div className="relative flex items-center justify-center my-4">
              <svg
                className="w-44 h-44 transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  className="text-gray-100"
                  strokeWidth="2.8"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#FF6624]"
                  strokeWidth="3.2"
                  strokeDasharray="56, 100"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#FFA375]"
                  strokeWidth="3"
                  strokeDasharray="21, 100"
                  strokeDashoffset="-56"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#FFD1BC]"
                  strokeWidth="3"
                  strokeDasharray="13, 100"
                  strokeDashoffset="-77"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block">
                  Total
                </span>
                <span className="text-2xl font-bold text-[#1E1E1E]">1,170</span>
                <span className="text-[10px] font-medium text-gray-400 block mt-0.5">
                  Assessments
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[11.5px] pt-4 border-t border-gray-50 font-bold text-gray-400">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#FF6624]" />
                  English
                </span>
                <span className="text-[#1E1E1E] font-bold">
                  36%{" "}
                  <span className="text-gray-400 font-medium text-[11px]">
                    (420)
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#FFA375]" />
                  French
                </span>
                <span className="text-[#1E1E1E] font-bold">
                  21%{" "}
                  <span className="text-gray-400 font-medium text-[11px]">
                    (240)
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-orange-600" />
                  German
                </span>
                <span className="text-[#1E1E1E] font-bold">
                  30%{" "}
                  <span className="text-gray-400 font-medium text-[11px]">
                    (350)
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#FFD1BC]" />
                  Spanish
                </span>
                <span className="text-[#1E1E1E] font-bold">
                  13%{" "}
                  <span className="text-gray-400 font-medium text-[11px]">
                    (160)
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.01)]">
            <div className="flex items-center justify-between">
              <h4 className="text-[15px] font-bold text-[#1E1E1E] tracking-tight">
                Largest gaps by dimension
              </h4>
              <select className="bg-white border border-gray-200 rounded-xl text-[11.5px] font-bold text-gray-500 px-3 py-1.5 focus:outline-none shadow-sm cursor-pointer">
                <option>All industries</option>
              </select>
            </div>

            <div className="space-y-6 pt-2">
              {[
                {
                  name: "Ways of Working",
                  current: 55,
                  target: 82,
                  gap: "+22",
                },
                {
                  name: "Sales Tech & Tools",
                  current: 42,
                  target: 78,
                  gap: "+32",
                },
                { name: "People", current: 32, target: 74, gap: "+34" },
              ].map((row, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-[13px] font-bold">
                    <span className="text-[#1E1E1E] tracking-tight font-bold">
                      {row.name}
                    </span>
                    <span className="text-[#1E1E1E] font-bold text-[14px]">
                      {row.gap}
                    </span>
                  </div>
                  <div className="relative h-1.5 bg-[#FDFBF9] border border-gray-100 rounded-full w-full flex items-center">
                    <div
                      className="absolute h-1 bg-[#FFA375]"
                      style={{
                        left: `${row.current}%`,
                        right: `${100 - row.target}%`,
                      }}
                    />
                    <div
                      className="absolute size-3.5 rounded-full bg-[#FF6624] shadow-[0_1px_4px_rgba(0,0,0,0.15)] z-10 transform -translate-x-1/2 cursor-pointer"
                      style={{ left: `${row.current}%` }}
                    />
                    <div
                      className="absolute size-3.5 rounded-full bg-white border-[3px] border-[#FF6624] shadow-[0_1px_4px_rgba(0,0,0,0.15)] z-10 transform -translate-x-1/2 cursor-pointer"
                      style={{ left: `${row.target}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#FF6624]" />
                Current status
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full border-2 border-[#FF6624] bg-white" />
                12-month ambition
              </span>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(0,0,0,0.01)]">
            <h4 className="text-[15px] font-bold text-[#1E1E1E] tracking-tight mb-3">
              Response highlights
            </h4>
            <div className="divide-y divide-gray-100/70 text-[12.5px] font-medium tracking-tight flex-1 flex flex-col justify-center">
              {[
                {
                  label: "Lowest current",
                  desc: "Sales Tech & Tools · CRM data quality",
                  val: "38",
                },
                {
                  label: "Highest ambition",
                  desc: "Ways of Working · New customers",
                  val: "86",
                },
                {
                  label: "Biggest gap",
                  desc: "People · Sales competencies",
                  val: "+34",
                  highlight: true,
                },
                {
                  label: "Most consistent",
                  desc: "Ways of Working · Way of selling",
                  val: "72",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 flex items-center justify-between gap-4"
                >
                  <span className="text-gray-400 shrink-0 w-28 font-bold">
                    {item.label}
                  </span>
                  <span className="text-gray-400 font-medium truncate flex-1 text-left text-[12px]">
                    {item.desc}
                  </span>
                  <span
                    className={`font-bold shrink-0 text-sm ${item.highlight ? "text-[#FF6624]" : "text-[#1E1E1E]"}`}
                  >
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.01)]">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-[15px] font-bold text-[#1E1E1E] tracking-tight">
              Industry Analytics
            </h4>
            <div className="flex items-center gap-2.5">
              <select className="bg-[#FAFAFA] border border-gray-200 rounded-xl text-[11.5px] font-bold text-gray-500 px-3 py-1.5 focus:outline-none shadow-sm cursor-pointer">
                <option>All industries</option>
              </select>
              <select className="bg-[#FAFAFA] border border-gray-200 rounded-xl text-[11.5px] font-bold text-gray-500 px-3 py-1.5 focus:outline-none shadow-sm cursor-pointer">
                <option>Gap To Ambition</option>
              </select>
            </div>
          </div>

          <div className="space-y-6 divide-y divide-gray-100/80">
            {[
              {
                title: "Marketing, advertising",
                sub: "58 assessments",
                data: [
                  { n: "Ways of Working", v: 70 },
                  { n: "Sales Tech & Tools", v: 82 },
                  { n: "People", v: 55 },
                ],
                score: 60,
                gap: "+22 to ambition",
              },
              {
                title: "Software Development",
                sub: "85 assessments",
                data: [
                  { n: "Ways of Working", v: 88 },
                  { n: "Sales Tech & Tools", v: 94 },
                  { n: "People", v: 62 },
                ],
                score: 80,
                gap: "+20 to ambition",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className={`${idx > 0 ? "pt-5" : ""} grid grid-cols-1 md:grid-cols-[240px_1fr_140px] gap-6 items-center`}
              >
                <div>
                  <h5 className="text-[13.5px] font-bold text-[#1E1E1E] tracking-tight">
                    {ind.title}
                  </h5>
                  <p className="text-[11px] text-gray-400 font-bold mt-0.5">
                    {ind.sub}
                  </p>
                </div>
                <div className="space-y-2.5">
                  {ind.data.map((bar, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-center gap-4 text-[11px] font-bold"
                    >
                      <span className="w-28 text-gray-400 truncate tracking-tight">
                        {bar.n}
                      </span>
                      <div className="flex-1 h-2 bg-[#FAF6F2] rounded-full overflow-hidden relative border border-gray-100/30">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#DE7442] via-[#E2A054] to-[#4FA374]"
                          style={{ width: `${bar.v}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-right space-y-0.5 self-center">
                  <span className="text-[28px] font-bold text-[#FF6624] tracking-tighter block leading-none">
                    {ind.score}
                  </span>
                  <span className="text-[11px] font-bold text-gray-400 tracking-tight block">
                    {ind.gap}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6624] block">
                Lead Capture
              </span>
              <h4 className="text-[15px] font-bold text-[#1E1E1E] tracking-tight mt-0.5">
                Recent submissions
              </h4>
            </div>
            <button className="inline-flex items-center gap-2 bg-white text-[#1E1E1E] border border-gray-200 font-bold text-[12px] px-3.5 py-2 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              Export all
            </button>
          </div>

          <div className="w-full overflow-x-auto bg-white border border-gray-100 rounded-2xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)]">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#FFF1E8] border-b border-gray-100 text-[13px] font-bold text-gray-500 tracking-wider">
                  <th className="py-4 px-6">Respondent</th>
                  <th className="py-4 px-5">Company</th>
                  <th className="py-4 px-5">Industry</th>
                  <th className="py-4 px-4 text-center">Language</th>
                  <th className="py-4 px-4 text-center">Score</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-6">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-[13px] font-bold text-gray-600 tracking-tight">
                {[
                  {
                    name: "Lena Hoffmann",
                    comp: "Vaillant Group",
                    ind: "Building & construction",
                    lang: "DE",
                    score: 72,
                    date: "16 Jun 2026",
                    bg: "bg-[#FFF0E8]",
                    text: "text-[#FF6624]",
                  },
                  {
                    name: "Jonas Schmidt",
                    comp: "Siemens",
                    ind: "Industrial Automation",
                    lang: "FR",
                    score: 85,
                    date: "09 Sep 2025",
                    bg: "bg-[#FFF0E8]",
                    text: "text-[#FF6624]",
                  },
                  {
                    name: "Maria Klein",
                    comp: "BMW Group",
                    ind: "Automotive",
                    lang: "ES",
                    score: 90,
                    date: "11 Nov 2026",
                    bg: "bg-[#FFF0E8]",
                    text: "text-[#FF6624]",
                  },
                  {
                    name: "Andreas Schulz",
                    comp: "Deutsche Telekom",
                    ind: "Telecommunications",
                    lang: "EN",
                    score: 78,
                    date: "22 Jan 2026",
                    bg: "bg-[#FFF0E8]",
                    text: "text-[#FF6624]",
                  },
                ].map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-[#FBF8F5] transition-colors"
                  >
                    <td className="py-4 px-6 text-[#1E1E1E] font-bold flex items-center gap-3">
                      <div
                        className={`size-7 rounded-lg ${row.bg} ${row.text} text-[10px] font-bold flex items-center justify-center shadow-sm`}
                      >
                        {row.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      {row.name}
                    </td>
                    <td className="py-4 px-5 text-gray-500 font-medium">
                      {row.comp}
                    </td>
                    <td className="py-4 px-5 text-gray-400 font-medium">
                      {row.ind}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-gray-50 border border-gray-100 rounded-md px-2 py-0.5 text-[11px] font-bold text-gray-400">
                        {row.lang}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-[#1E1E1E] text-sm">
                      {row.score}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100/50">
                        <span className="size-1.5 rounded-full bg-emerald-500" />{" "}
                        Completed
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-400 text-[12px] font-medium">
                      {row.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
