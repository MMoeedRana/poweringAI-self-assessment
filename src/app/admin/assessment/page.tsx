"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Pencil, Trash2, Check } from "lucide-react";

interface QuestionItem {
  id: string;
  indexStr: string;
  category: string;
  subCategory: string;
  languages: string;
  title: string;
  targetText: string;
  description: string;
  categoryTheme: "orange" | "blue" | "red";
  isEditing?: boolean;
}

export default function AssessmentTool() {
  const [questions, setQuestions] = useState<QuestionItem[]>([
    {
      id: "q1",
      indexStr: "01",
      category: "Ways of Working",
      subCategory: "New Customers",
      languages: "EN +3",
      title: "Winning more new customers at scale",
      targetText:
        "We manage new-customer acquisition through a clearly defined, thoroughly documented, and consistently applied approach.",
      description:
        "This enables you to win new customers systematically and at scale across priority segments.",
      categoryTheme: "orange",
      isEditing: false,
    },
    {
      id: "q2",
      indexStr: "02",
      category: "Ways of Working",
      subCategory: "Existing Customers",
      languages: "EN +3",
      title: "Developing business with existing accounts",
      targetText:
        "We manage existing-account growth through a structured, documented and consistently applied account-development approach, identifying cross-sell, up-sell, and retention opportunities.",
      description:
        "Existing-account growth is often the fastest and most profitable source of additional revenue.",
      categoryTheme: "orange",
      isEditing: false,
    },
    {
      id: "q3",
      indexStr: "03",
      category: "Ways of Working",
      subCategory: "New Products",
      languages: "EN +3",
      title: "Launching & growing new product categories & services",
      targetText:
        "We launch and scale new product categories and services through clear value propositions, systematic sales-team preparation, and execution discipline.",
      description:
        "Many growth ambitions fail because new offers are not translated into practical sales action.",
      categoryTheme: "orange",
      isEditing: false,
    },
    {
      id: "q4",
      indexStr: "04",
      category: "Ways of Working",
      subCategory: "Indirect Sales",
      languages: "EN +3",
      title: "Scaling Indirect sales",
      targetText:
        "We manage indirect sales channels through structured joint business planning, channel-engagement-based pricing, strong enablement and governance, and regular performance tracking.",
      description:
        "Partner channels can multiply reach, but only when they are actively steered and enabled.",
      categoryTheme: "orange",
      isEditing: false,
    },
    {
      id: "q5",
      indexStr: "05",
      category: "Ways of Working",
      subCategory: "Way of Selling",
      languages: "EN +3",
      title: "Implementing high-impact ways of selling",
      targetText:
        "We operate with a clearly described, best-practice-based way of selling that is trained and coached, leading to consistent sales behaviours across teams.",
      description:
        "A common way of selling is essential for consistency across people, accounts, and regions.",
      categoryTheme: "orange",
      isEditing: false,
    },
    {
      id: "q6",
      indexStr: "06",
      category: "Sales Tech & Tools",
      subCategory: "CRM",
      languages: "EN +3",
      title: "Adopting sales tech (CRM) & assuring data quality",
      targetText:
        "Our customer, pipeline, and activity data is complete and reliable enough to support consistent reporting, management reviews, and improvement decisions.",
      description:
        "Poor data quality weakens every discussion about performance and priorities.",
      categoryTheme: "blue",
      isEditing: false,
    },
    {
      id: "q7",
      indexStr: "07",
      category: "Sales Tech & Tools",
      subCategory: "Sales Enablement",
      languages: "EN +3",
      title: "Enabling KPI-based leadership decisions",
      targetText:
        "We maintain a focused set of leading and lagging sales KPIs that is visible, trusted, and used regularly to steer sales priorities and decisions.",
      description:
        "Without transparent KPIs, it is difficult to identify real performance drivers or bottlenecks.",
      categoryTheme: "blue",
      isEditing: false,
    },
    {
      id: "q8",
      indexStr: "08",
      category: "People",
      subCategory: "Sales Competencies",
      languages: "EN +3",
      title: "Ensuring consistent skill levels",
      targetText:
        "We define critical sales skills, assess capability gaps transparently, and run common onboarding, training, and coaching standards so skill levels converge.",
      description:
        "Capability gaps create performance variance and slow down growth.",
      categoryTheme: "red",
      isEditing: false,
    },
  ]);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const updateIndexes = (items: QuestionItem[]) => {
    return items.map((item, idx) => ({
      ...item,
      indexStr: String(idx + 1).padStart(2, "0"),
    }));
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const updated = [...questions];
    const draggedItem = updated[draggedIndex];
    updated.splice(draggedIndex, 1);
    updated.splice(index, 0, draggedItem);

    setDraggedIndex(index);
    setQuestions(updated);
  };

  const handleDragEnd = () => {
    setQuestions((prev) => updateIndexes(prev));
    setDraggedIndex(null);
  };

  const handleAddNewQuestion = () => {
    const nextIdxStr = String(questions.length + 1).padStart(2, "0");
    const newQuestion: QuestionItem = {
      id: `q-${Date.now()}`,
      indexStr: nextIdxStr,
      category: "Ways of Working",
      subCategory: "Custom Setup",
      languages: "EN +3",
      title: "",
      targetText: "",
      description: "",
      categoryTheme: "orange",
      isEditing: true,
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleInputChange = (
    id: string,
    field: keyof QuestionItem,
    value: string,
  ) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, [field]: value } : q)),
    );
  };

  const toggleEditMode = (id: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, isEditing: !q.isEditing } : q,
      ),
    );
  };

  const deleteQuestion = (id: string) => {
    const remaining = questions.filter((q) => q.id !== id);
    setQuestions(updateIndexes(remaining));
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
              All languages <ChevronDown className="size-4 text-gray-400" />
            </button>
            <button className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-sm text-[13px] font-bold text-gray-700 hover:bg-gray-50">
              All dimensions <ChevronDown className="size-4 text-gray-400" />
            </button>
          </div>

          <button
            onClick={handleAddNewQuestion}
            className="bg-[#FF6624] text-white px-5 py-2.5 rounded-xl font-bold text-[13px] flex items-center gap-2 shadow-md shadow-orange-600/10 hover:bg-orange-600 transition-colors"
          >
            <Plus className="size-4" strokeWidth={2.5} />
            Add new question
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {questions.map((item, index) => {
            let categoryBg = "bg-[#FFF0E8] text-[#FF6624]";
            let subCategoryBg = "bg-[#FFF5F0] text-[#FF804A]";

            if (item.categoryTheme === "blue") {
              categoryBg = "bg-[#EBF5FF] text-[#1E63E6]";
              subCategoryBg = "bg-[#F2F8FF] text-[#4A86FF]";
            } else if (item.categoryTheme === "red") {
              categoryBg = "bg-[#FFF0F0] text-[#E62E2E]";
              subCategoryBg = "bg-[#FFF5F5] text-[#FF5C5C]";
            }

            return (
              <div
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                className={`flex items-center gap-3 transition-opacity duration-200 ${
                  draggedIndex === index
                    ? "opacity-40 scale-[0.99]"
                    : "opacity-100"
                }`}
              >
                <div
                  className="p-2.5 rounded-xl hover:bg-gray-100 text-gray-300 hover:text-gray-500 transition-colors cursor-grab active:cursor-grabbing flex flex-col gap-0.5 shrink-0"
                  title="Drag this area to reorder row layout item"
                >
                  <div className="flex gap-0.5">
                    <span className="size-1 bg-current rounded-full" />
                    <span className="size-1 bg-current rounded-full" />
                    <span className="size-1 bg-current rounded-full" />
                  </div>
                  <div className="flex gap-0.5">
                    <span className="size-1 bg-current rounded-full" />
                    <span className="size-1 bg-current rounded-full" />
                    <span className="size-1 bg-current rounded-full" />
                  </div>
                  <div className="flex gap-0.5">
                    <span className="size-1 bg-current rounded-full" />
                    <span className="size-1 bg-current rounded-full" />
                    <span className="size-1 bg-current rounded-full" />
                  </div>
                </div>

                <div
                  className={`flex-1 bg-white rounded-2xl border ${
                    item.isEditing
                      ? "border-[#FF6624] bg-orange-50/5"
                      : "border-gray-200/80"
                  } shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)] p-6 relative transition-all duration-150`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-bold text-[#FF6624] bg-[#FFF5F0] rounded-lg px-2 py-0.5 border border-orange-100">
                        {item.indexStr}
                      </span>

                      {item.isEditing ? (
                        <>
                          <select
                            value={item.categoryTheme}
                            onChange={(e) =>
                              handleInputChange(
                                item.id,
                                "categoryTheme",
                                e.target.value as any,
                              )
                            }
                            className="text-[11px] font-bold px-2 py-0.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-orange-400"
                          >
                            <option value="orange">Ways of Working</option>
                            <option value="blue">Sales Tech & Tools</option>
                            <option value="red">People</option>
                          </select>
                          <input
                            type="text"
                            value={item.subCategory}
                            placeholder="Subcategory Tag"
                            onChange={(e) =>
                              handleInputChange(
                                item.id,
                                "subCategory",
                                e.target.value,
                              )
                            }
                            className="text-[11px] font-semibold px-2 py-0.5 max-w-[120px] bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-orange-400"
                          />
                        </>
                      ) : (
                        <>
                          <span
                            className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md ${categoryBg}`}
                          >
                            {item.categoryTheme === "orange"
                              ? "Ways of Working"
                              : item.categoryTheme === "blue"
                                ? "Sales Tech & Tools"
                                : "People"}
                          </span>
                          <span
                            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md ${subCategoryBg}`}
                          >
                            {item.subCategory}
                          </span>
                          <span className="text-[11px] font-medium text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
                            {item.languages}
                          </span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      {item.isEditing ? (
                        <button
                          onClick={() => toggleEditMode(item.id)}
                          className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                          title="Save Changes"
                        >
                          <Check className="size-4" strokeWidth={2.5} />
                        </button>
                      ) : (
                        <button
                          onClick={() => toggleEditMode(item.id)}
                          className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                          title="Edit Card Inline"
                        >
                          <Pencil className="size-4" />
                        </button>
                      )}

                      <button
                        onClick={() => deleteQuestion(item.id)}
                        className="p-1.5 text-gray-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 transition-colors"
                        title="Delete Card"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>

                  {item.isEditing ? (
                    <div className="flex flex-col gap-3 mt-2">
                      <input
                        type="text"
                        value={item.title}
                        placeholder="Enter primary question headline title here..."
                        onChange={(e) =>
                          handleInputChange(item.id, "title", e.target.value)
                        }
                        className="w-full text-[15px] font-extrabold text-gray-900 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#FF6624]"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] text-[#FF6624] font-bold shrink-0">
                          Target ·
                        </span>
                        <input
                          type="text"
                          value={item.targetText}
                          placeholder="Enter targeted benchmark criteria description..."
                          onChange={(e) =>
                            handleInputChange(
                              item.id,
                              "targetText",
                              e.target.value,
                            )
                          }
                          className="w-full text-[13px] text-gray-700 font-medium border border-gray-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#FF6624]"
                        />
                      </div>
                      <input
                        type="text"
                        value={item.description}
                        placeholder="Enter subtext contextual helper note..."
                        onChange={(e) =>
                          handleInputChange(
                            item.id,
                            "description",
                            e.target.value,
                          )
                        }
                        className="w-full text-[12px] text-gray-400 italic font-medium border border-gray-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#FF6624]"
                      />
                    </div>
                  ) : (
                    <>
                      <h3 className="text-[14px] font-black text-gray-900 tracking-tight mb-1.5">
                        {item.title || (
                          <span className="text-gray-300 font-normal italic">
                            Untitled Assessment Question
                          </span>
                        )}
                      </h3>

                      <div className="text-[13px] leading-relaxed mb-1">
                        <strong className="text-[#FF6624] font-bold">
                          Target ·{" "}
                        </strong>
                        <span className="text-gray-700 font-medium">
                          {item.targetText || (
                            <span className="text-gray-300 font-normal italic">
                              No baseline target text declared.
                            </span>
                          )}
                        </span>
                      </div>

                      <p className="text-[12px] text-gray-400 font-medium italic">
                        {item.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
