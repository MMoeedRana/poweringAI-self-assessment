"use client";

import { useState } from "react";
import { ChevronDown, Plus, Pencil, Trash2, Save } from "lucide-react";

interface CompanyItem {
  id: string;
  name: string;
  industry: string;
  createdAt: string;
  updatedAt: string;
  isEditing: boolean;
}

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<CompanyItem[]>([
    {
      id: "1",
      name: "Vaillant Group",
      industry: "Building & construction",
      createdAt: "16 Jun 2026",
      updatedAt: "16 Jun 2026",
      isEditing: false,
    },
    {
      id: "2",
      name: "Schneider Electric",
      industry: "Energy Management",
      createdAt: "20 Sep 2025",
      updatedAt: "20 Sep 2025",
      isEditing: false,
    },
    {
      id: "3",
      name: "Honeywell",
      industry: "Aerospace & defense",
      createdAt: "11 Jan 2027",
      updatedAt: "11 Jan 2027",
      isEditing: false,
    },
    {
      id: "4",
      name: "Johnson Controls",
      industry: "Building technologies",
      createdAt: "05 Mar 2026",
      updatedAt: "05 Mar 2026",
      isEditing: false,
    },
    {
      id: "5",
      name: "Emerson Electric",
      industry: "Industrial automation",
      createdAt: "30 Nov 2025",
      updatedAt: "30 Nov 2025",
      isEditing: false,
    },
  ]);

  const handleAddCompany = () => {
    const today = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const newCompany: CompanyItem = {
      id: `comp-${Date.now()}`,
      name: "",
      industry: "",
      createdAt: today,
      updatedAt: today,
      isEditing: true,
    };
    setCompanies([...companies, newCompany]);
  };

  const handleInputChange = (
    id: string,
    field: "name" | "industry",
    value: string,
  ) => {
    setCompanies(
      companies.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    );
  };

  const toggleEditMode = (id: string) => {
    setCompanies(
      companies.map((c) => {
        if (c.id === id) {
          const today = new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
          return { ...c, isEditing: !c.isEditing, updatedAt: today };
        }
        return c;
      }),
    );
  };

  const handleDeleteCompany = (id: string) => {
    setCompanies(companies.filter((c) => c.id !== id));
  };

  return (
    <div className="flex min-h-screen antialiased select-none">
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button className="bg-white border border-gray-200 rounded-xl px-4 py-2 flex items-center gap-3 shadow-sm text-[12.5px] font-bold text-gray-700 hover:bg-gray-50">
              Name <ChevronDown className="size-4 text-gray-400" />
            </button>
            <button className="bg-white border border-gray-200 rounded-xl px-4 py-2 flex items-center gap-3 shadow-sm text-[12.5px] font-bold text-gray-700 hover:bg-gray-50">
              All industries <ChevronDown className="size-4 text-gray-400" />
            </button>
          </div>

          <button
            onClick={handleAddCompany}
            className="bg-[#FF6624] text-white px-5 py-2.5 rounded-xl font-bold text-[13px] flex items-center gap-2 shadow-md shadow-orange-600/10 hover:bg-orange-600 transition-colors"
          >
            <Plus className="size-4" strokeWidth={2.5} />
            Add Company
          </button>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FFF1E8] border-b border-orange-100/40 text-[11px] font-bold text-gray-400 tracking-wide uppercase">
                <th className="py-4 px-6 w-[30%]">Company Name</th>
                <th className="py-4 px-4 w-[25%]">Industry</th>
                <th className="py-4 px-4 w-[15%]">Created At</th>
                <th className="py-4 px-4 w-[15%]">Updated At</th>
                <th className="py-4 px-6 w-[15%] text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {companies.map((company) => (
                <tr
                  key={company.id}
                  className="hover:bg-[#FBF8F5] transition-colors"
                >
                  <td className="py-4 px-6">
                    {company.isEditing ? (
                      <input
                        type="text"
                        value={company.name}
                        placeholder="Schneider Electric"
                        onChange={(e) =>
                          handleInputChange(company.id, "name", e.target.value)
                        }
                        className="w-full bg-[#FAFBFB] border border-gray-200 text-[13px] font-medium text-gray-800 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#FF6624] focus:bg-white"
                      />
                    ) : (
                      <span className="text-[13px] font-bold text-gray-900 tracking-tight">
                        {company.name || (
                          <span className="text-gray-300 font-normal italic">
                            Empty Name
                          </span>
                        )}
                      </span>
                    )}
                  </td>

                  <td className="py-4 px-4">
                    {company.isEditing ? (
                      <input
                        type="text"
                        value={company.industry}
                        placeholder="Energy Management"
                        onChange={(e) =>
                          handleInputChange(
                            company.id,
                            "industry",
                            e.target.value,
                          )
                        }
                        className="w-full bg-[#FAFBFB] border border-gray-200 text-[13px] font-medium text-gray-600 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#FF6624] focus:bg-white"
                      />
                    ) : (
                      <span className="text-[13px] font-medium text-gray-600">
                        {company.industry || (
                          <span className="text-gray-300 italic">
                            Unassigned
                          </span>
                        )}
                      </span>
                    )}
                  </td>

                  <td className="py-4 px-4 text-[13px] font-medium text-gray-400">
                    {company.createdAt}
                  </td>

                  <td className="py-4 px-4 text-[13px] font-medium text-gray-400">
                    {company.updatedAt}
                  </td>

                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {company.isEditing ? (
                        <button
                          onClick={() => toggleEditMode(company.id)}
                          className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-[11px] px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                        >
                          <Save
                            className="size-3 text-gray-500"
                            strokeWidth={2.5}
                          />
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => toggleEditMode(company.id)}
                          className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-[11px] px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                        >
                          <Pencil
                            className="size-3 text-gray-400"
                            strokeWidth={2.5}
                          />
                          Edit
                        </button>
                      )}

                      <button
                        onClick={() => handleDeleteCompany(company.id)}
                        className="bg-[#FF6624] hover:bg-orange-600 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm shadow-orange-600/5"
                      >
                        <Trash2 className="size-3" strokeWidth={2.5} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
