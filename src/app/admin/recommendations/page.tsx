"use client";

import { useState } from "react";
import { ChevronDown, Plus, Pencil, Trash2, Check } from "lucide-react";

interface RecommendationItem {
  id: string;
  numStr: string;
  category: "Ways of Working" | "Sales Tech & Tools" | "People";
  title: string;
  description: string;
  isEditing?: boolean;
}

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState<RecommendationItem[]>([
    {
      id: "r1",
      numStr: "01",
      category: "Ways of Working",
      title: "Document your new-customer approach",
      description:
        "Write down your ICP, qualification logic, and pipeline cadence so effort is repeatable.",
      isEditing: false,
    },
    {
      id: "r2",
      numStr: "02",
      category: "Ways of Working",
      title: "Formalise account plans",
      description:
        "Give your top accounts a simple, shared plan with owners and goals.",
      isEditing: false,
    },
    {
      id: "r3",
      numStr: "03",
      category: "Ways of Working",
      title: "Define one common way of selling",
      description:
        "Agree a single best-practice sales motion and train the team on it.",
      isEditing: false,
    },
    {
      id: "r4",
      numStr: "01",
      category: "Sales Tech & Tools",
      title: "Clean up CRM data quality",
      description:
        "Set required fields and a weekly hygiene routine so reporting can be trusted.",
      isEditing: false,
    },
    {
      id: "r5",
      numStr: "02",
      category: "Sales Tech & Tools",
      title: "Agree a core KPI set",
      description: "Pick a handful of leading & lagging KPIs everyone watches.",
      isEditing: false,
    },
    {
      id: "r6",
      numStr: "03",
      category: "Sales Tech & Tools",
      title: "Automate one routine task",
      description: "Remove one repetitive low-value step to free selling time.",
      isEditing: false,
    },
    {
      id: "r7",
      numStr: "01",
      category: "People",
      title: "Set a management cadence",
      description: "Introduce monthly team reviews and weekly pipeline calls.",
      isEditing: false,
    },
    {
      id: "r8",
      numStr: "02",
      category: "People",
      title: "Define critical sales skills",
      description: "Agree the competencies each role needs and assess gaps.",
      isEditing: false,
    },
    {
      id: "r9",
      numStr: "03",
      category: "People",
      title: "Standardise onboarding",
      description:
        "Give new reps a structured induction to reach productivity faster.",
      isEditing: false,
    },
  ]);

  const handleAddNewRecommendation = () => {
    const newRec: RecommendationItem = {
      id: `rec-${Date.now()}`,
      numStr: "04",
      category: "Ways of Working",
      title: "",
      description: "",
      isEditing: true,
    };
    setRecommendations([newRec, ...recommendations]);
  };

  const handleInputChange = (
    id: string,
    field: keyof RecommendationItem,
    value: string,
  ) => {
    setRecommendations(
      recommendations.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );
  };

  const toggleEditMode = (id: string) => {
    setRecommendations(
      recommendations.map((r) =>
        r.id === id ? { ...r, isEditing: !r.isEditing } : r,
      ),
    );
  };

  const deleteRecommendation = (id: string) => {
    setRecommendations(recommendations.filter((r) => r.id !== id));
  };

  const renderCategoryGroup = (
    categoryTitle: "Ways of Working" | "Sales Tech & Tools" | "People",
  ) => {
    const filtered = recommendations.filter(
      (item) => item.category === categoryTitle,
    );

    if (filtered.length === 0) return null;

    return (
      <div className="mb-8">
        <div className="inline-block bg-[#FF6624] text-white font-bold text-[11px] px-3 py-1 rounded-full tracking-wide shadow-sm mb-4">
          {categoryTitle}
        </div>

        <div className="flex flex-col gap-3.5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between bg-white border ${
                item.isEditing
                  ? "border-[#FF6624] ring-1 ring-orange-100"
                  : "border-gray-200/80"
              } rounded-2xl p-5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] transition-all`}
            >
              <div className="flex items-center gap-4 flex-1 mr-6">
                <div className="size-8 rounded-xl bg-[#FF6624] text-white text-[13px] font-black flex items-center justify-center shrink-0">
                  {item.numStr}
                </div>

                {item.isEditing ? (
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      value={item.title}
                      placeholder="Recommendation Heading Title"
                      onChange={(e) =>
                        handleInputChange(item.id, "title", e.target.value)
                      }
                      className="w-full text-[14px] font-bold text-gray-900 border border-gray-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#FF6624]"
                    />
                    <input
                      type="text"
                      value={item.description}
                      placeholder="Provide actionable descriptive text instructions..."
                      onChange={(e) =>
                        handleInputChange(
                          item.id,
                          "description",
                          e.target.value,
                        )
                      }
                      className="w-full text-[12.5px] text-gray-500 border border-gray-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#FF6624]"
                    />
                  </div>
                ) : (
                  <div>
                    <h3 className="text-[14px] font-extrabold text-gray-900 tracking-tight leading-snug">
                      {item.title || (
                        <span className="text-gray-300 font-normal italic">
                          Untitled Recommendation
                        </span>
                      )}
                    </h3>
                    <p className="text-[12.5px] text-gray-500 font-medium mt-0.5 leading-relaxed">
                      {item.description || (
                        <span className="text-gray-300 font-normal italic">
                          No details assigned.
                        </span>
                      )}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {item.isEditing ? (
                  <button
                    onClick={() => toggleEditMode(item.id)}
                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
                  >
                    <Check className="size-4" strokeWidth={2.5} />
                  </button>
                ) : (
                  <button
                    onClick={() => toggleEditMode(item.id)}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <Pencil className="size-4" strokeWidth={2} />
                  </button>
                )}

                <button
                  onClick={() => deleteRecommendation(item.id)}
                  className="p-2 text-gray-400 hover:text-rose-500 rounded-xl hover:bg-rose-50 transition-colors"
                >
                  <Trash2 className="size-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen antialiased select-none">
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-sm text-[13px] font-bold text-gray-700 hover:bg-gray-50">
              Self Assessment <ChevronDown className="size-4 text-gray-400" />
            </button>
            <button className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-sm text-[13px] font-bold text-gray-700 hover:bg-gray-50">
              Emerging (0-40) <ChevronDown className="size-4 text-gray-400" />
            </button>
          </div>

          <button
            onClick={handleAddNewRecommendation}
            className="bg-[#FF6624] text-white px-5 py-2.5 rounded-xl font-bold text-[13px] flex items-center gap-2 shadow-md shadow-orange-600/10 hover:bg-orange-600 transition-colors"
          >
            <Plus className="size-4" strokeWidth={2.5} />
            Add recommendation
          </button>
        </div>

        <div className="mt-8">
          {renderCategoryGroup("Ways of Working")}
          {renderCategoryGroup("Sales Tech & Tools")}
          {renderCategoryGroup("People")}
        </div>
      </main>
    </div>
  );
}
