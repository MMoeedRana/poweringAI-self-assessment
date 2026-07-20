"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const routeConfig: Record<string, { badge: string; title: string }> = {
    "/admin/scales": {
      badge: "Configuration",
      title: "Edit Scales",
    },
    "/admin/assessment": {
      badge: "Configuration",
      title: "Assessment Tool",
    },
    "/admin/recommendations": {
      badge: "Configuration",
      title: "Recommendations",
    },
    "/admin/submissions": {
      badge: "Data",
      title: "Submissions & Reports",
    },
    "/admin/companies": {
      badge: "Configuration",
      title: "Add Company",
    },
    "/admin/context": {
      badge: "Configuration",
      title: "Website Context",
    },
    "/admin/settings": {
      badge: "Data",
      title: "Profile Settings",
    },
  };

  const getRouteConfig = () => {
    if (routeConfig[pathname]) {
      return routeConfig[pathname];
    }

    for (const [route, config] of Object.entries(routeConfig)) {
      const pattern = route.replace(/\/:[^/]+/g, "/[^/]+");
      const regex = new RegExp(`^${pattern}$`);
      if (regex.test(pathname)) {
        return config;
      }
    }

    return {
      badge: "Overview",
      title: "Dashboard",
    };
  };

  const { badge, title } = getRouteConfig();

  return (
    <header className="w-full bg-white border-b border-gray-100 px-8 h-[80px] flex items-center justify-between shrink-0 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] sticky top-0 z-50">
      <div className="space-y-0.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6624]">
          {badge}
        </span>
        <h1 className="text-xl font-bold text-[#1E1E1E] tracking-tight">
          {title}
        </h1>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <div className="size-5 rounded bg-[#FF6624] text-white text-[9px] font-black flex items-center justify-center">
            DT
          </div>
        </div>

        <select
          defaultValue="Deutsche Telekom"
          className="appearance-none bg-white border border-gray-200 rounded-xl pl-11 pr-10 py-2 text-[12.5px] font-bold text-gray-500 tracking-tight cursor-pointer focus:outline-none focus:border-[#FF6624]/40 transition-colors shadow-sm"
        >
          <option value="Deutsche Telekom">Deutsche Telekom</option>
          <option value="Dummy Client 1">Dummy Client 1</option>
          <option value="Dummy Client 2">Dummy Client 2</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-gray-400">
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  );
}