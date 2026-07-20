"use client";

import { useState } from "react";
import { Pencil, Trash2, Check, Plus, ChevronDown } from "lucide-react";

interface ScaleLevel {
  id: string;
  percentage: number;
  maturityLevel: string;
  context: string;
  score: number;
  isEditing: boolean;
}

export default function EditScalesPage() {
  const [scales, setScales] = useState<ScaleLevel[]>([
    {
      id: "1",
      percentage: 0,
      maturityLevel: "None",
      context: "Not in place.",
      score: 0,
      isEditing: false,
    },
    {
      id: "2",
      percentage: 20,
      maturityLevel: "Isolated Action",
      context: "We have some isolated action.",
      score: 20,
      isEditing: false,
    },
    {
      id: "3",
      percentage: 40,
      maturityLevel: "Documented standard",
      context:
        "We have a documented and repeatedly communicate standard, but it is not applied consistently.",
      score: 40,
      isEditing: false,
    },
    {
      id: "4",
      percentage: 60,
      maturityLevel: "Consistently applied",
      context:
        "We consistently apply our standard, but do not track it based on KPIs.",
      score: 60,
      isEditing: false,
    },
    {
      id: "5",
      percentage: 80,
      maturityLevel: "Regularly updated",
      context: "We regularly update our standard based on KPIs.",
      score: 80,
      isEditing: false,
    },
    {
      id: "6",
      percentage: 100,
      maturityLevel: "Benchmark",
      context: "We are a benchmark for others.",
      score: 100,
      isEditing: false,
    },
  ]);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleAddScaleLevel = () => {
    const newScale: ScaleLevel = {
      id: Date.now().toString(),
      percentage: 0,
      maturityLevel: "",
      context: "",
      score: 0,
      isEditing: true,
    };
    setScales([...scales, newScale]);
  };

  const handleChange = (id: string, field: keyof ScaleLevel, value: any) => {
    setScales(
      scales.map((scale) =>
        scale.id === id ? { ...scale, [field]: value } : scale,
      ),
    );
  };

  const toggleEditMode = (id: string) => {
    setScales(
      scales.map((scale) =>
        scale.id === id ? { ...scale, isEditing: !scale.isEditing } : scale,
      ),
    );
  };

  const handleDelete = (id: string) => {
    setScales(scales.filter((scale) => scale.id !== id));
  };

  // Drag and Drop handlers
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const updated = [...scales];
    const draggedItem = updated[draggedIndex];
    updated.splice(draggedIndex, 1);
    updated.splice(index, 0, draggedItem);

    setDraggedIndex(index);
    setScales(updated);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="flex-1 min-h-screen p-8 font-sans antialiased select-none">
      <div className="flex justify-between items-center mb-5">
        <div className="bg-white border border-gray-200/50 rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-sm text-[13px] font-bold text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors">
          Self Assessment
          <ChevronDown className="size-4 text-gray-400" />
        </div>

        <button
          onClick={handleAddScaleLevel}
          className="bg-[#FF6624] text-white px-5 py-2.5 rounded-xl font-bold text-[13px] flex items-center gap-2 shadow-md shadow-orange-600/10 hover:bg-orange-600 transition-all active:scale-[0.98]"
        >
          <Plus className="size-4" strokeWidth={2.5} />
          Add scale level
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200/70 overflow-hidden shadow-[0_4px_30px_-5px_rgba(0,0,0,0.015)] mb-10">
        <div className="bg-[#FFF1E8] border-b border-gray-200/80 px-6 py-4 grid grid-cols-12 gap-4 text-[13px] font-bold tracking-wider text-gray-400/95">
          <div className="col-span-3 flex items-center gap-4 pl-7">Scale %</div>
          <div className="col-span-3 pl-2">Maturity level</div>
          <div className="col-span-4 pl-1">Self-assessment context</div>
          <div className="col-span-1 text-center">Score</div>
          <div className="col-span-1 text-right pr-12">Action</div>
        </div>

        <div className="divide-y divide-gray-100">
          {scales.map((scale, index) => (
            <div
              key={scale.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`grid grid-cols-12 gap-4 px-6 py-4 items-center transition-all duration-200 ${
                draggedIndex === index
                  ? "opacity-40 scale-[0.99]"
                  : "opacity-100"
              } ${scale.isEditing ? "bg-orange-50/15" : "hover:bg-[#FBF8F5]"}`}
            >
              <div className="col-span-3 flex items-center gap-4">
                <div
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-300 hover:text-gray-500 transition-colors cursor-grab active:cursor-grabbing flex flex-col gap-0.5 shrink-0"
                  title="Drag to reorder"
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

                <div className="flex items-center gap-3 w-full">
                  <div className="relative flex-1 flex items-center h-1.5 bg-orange-100 rounded-full">
                    <div
                      className="absolute h-full bg-[#FF6624] rounded-full"
                      style={{ width: `${scale.percentage}%` }}
                    />
                    <div
                      className="absolute size-3.5 bg-white border-2 border-[#FF6624] rounded-full shadow-sm"
                      style={{ left: `calc(${scale.percentage}% - 7px)` }}
                    />
                  </div>

                  {scale.isEditing ? (
                    <div className="flex items-center gap-1 w-20 shrink-0">
                      <input
                        type="number"
                        value={scale.percentage}
                        onChange={(e) =>
                          handleChange(
                            scale.id,
                            "percentage",
                            Number(e.target.value),
                          )
                        }
                        className="w-full text-[13px] font-bold text-[#1E1E1E] bg-white border border-gray-200 rounded-xl px-2 py-1 text-center focus:outline-none focus:border-orange-400"
                        min="0"
                        max="100"
                      />
                    </div>
                  ) : (
                    <span className="text-[13px] font-semibold text-gray-500 border border-gray-100 bg-gray-50/40 rounded-xl px-2.5 py-1 min-w-[50px] text-center">
                      {scale.percentage}%
                    </span>
                  )}
                </div>
              </div>

              <div className="col-span-3 pl-2">
                {scale.isEditing ? (
                  <input
                    type="text"
                    value={scale.maturityLevel}
                    onChange={(e) =>
                      handleChange(scale.id, "maturityLevel", e.target.value)
                    }
                    placeholder="Maturity Title"
                    className="w-full text-[13px] font-bold text-[#1E1E1E] bg-white border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-orange-400 transition-colors shadow-sm"
                  />
                ) : (
                  <span className="text-[13px] font-bold text-gray-700 truncate block">
                    {scale.maturityLevel || (
                      <span className="text-gray-300 font-normal italic">
                        Empty...
                      </span>
                    )}
                  </span>
                )}
              </div>

              <div className="col-span-4 pl-1">
                {scale.isEditing ? (
                  <input
                    type="text"
                    value={scale.context}
                    onChange={(e) =>
                      handleChange(scale.id, "context", e.target.value)
                    }
                    placeholder="Context Content"
                    className="w-full text-[13px] font-medium text-gray-600 bg-white border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-orange-400 transition-colors shadow-sm"
                  />
                ) : (
                  <span className="text-[13px] font-medium text-gray-500 line-clamp-2 leading-relaxed">
                    {scale.context || (
                      <span className="text-gray-300 italic font-normal">
                        No context detailed...
                      </span>
                    )}
                  </span>
                )}
              </div>

              <div className="col-span-1 text-center">
                {scale.isEditing ? (
                  <input
                    type="number"
                    value={scale.score}
                    onChange={(e) =>
                      handleChange(scale.id, "score", Number(e.target.value))
                    }
                    className="w-16 text-[13px] font-bold text-[#1E1E1E] bg-white border border-gray-200 rounded-xl py-1.5 text-center focus:outline-none focus:border-orange-400"
                  />
                ) : (
                  <span className="text-[13px] font-bold text-gray-700 border border-gray-100 bg-gray-50/40 rounded-xl px-3 py-1">
                    {scale.score}
                  </span>
                )}
              </div>

              <div className="col-span-1 flex items-center justify-end gap-2.5">
                <button
                  onClick={() => toggleEditMode(scale.id)}
                  className={`px-3 py-2 rounded-xl text-[11px] font-bold border transition-all flex items-center gap-1.5 shadow-sm ${
                    scale.isEditing
                      ? "bg-white border-emerald-200 text-emerald-600 hover:bg-emerald-50/50"
                      : "bg-white border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {scale.isEditing ? (
                    <>
                      <Check className="size-3.5" strokeWidth={2.5} />
                      Save
                    </>
                  ) : (
                    <>
                      <Pencil className="size-3.5" strokeWidth={2.5} />
                      Edit
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleDelete(scale.id)}
                  className="px-3 py-2 rounded-xl bg-[#E05319] text-white hover:bg-orange-700 transition-colors text-[11px] font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Trash2 className="size-3.5" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4">
          <span className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#FF6624]">
            Scoring Engine
          </span>
          <h2 className="text-lg font-black text-[#1E1E1E] mt-0.5 tracking-tight">
            Dimension weights
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200/70 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.015)] overflow-hidden">
          <div className="bg-[#FFF1E8] px-6 py-4 border-b border-gray-100/80">
            <p className="text-[12px] font-medium text-gray-400">
              Tune how each dimension contributes to the overall maturity score
              — no developer needed.
            </p>
          </div>

          <div className="divide-y divide-gray-100 px-6">
            <div className="py-5 flex items-center justify-between">
              <div>
                <h4 className="text-[14px] font-bold text-gray-800 leading-tight">
                  Ways of Working
                </h4>
                <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                  Winning, growing & selling
                </p>
              </div>
              <div className="flex items-center gap-4 w-[320px]">
                <div className="relative flex-1 flex items-center h-1.5 bg-orange-100 rounded-full">
                  <div className="absolute h-full w-[40%] bg-[#FF6624] rounded-full" />
                  <div className="absolute size-3.5 bg-white border-2 border-[#FF6624] rounded-full shadow-sm left-[40%]" />
                </div>
                <span className="text-[13px] font-bold text-gray-700 border border-gray-100 rounded-xl px-3 py-1 bg-gray-50/50 min-w-[55px] text-center">
                  40%
                </span>
              </div>
            </div>

            <div className="py-5 flex items-center justify-between">
              <div>
                <h4 className="text-[14px] font-bold text-gray-800 leading-tight">
                  Sales Tech & Tools
                </h4>
                <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                  CRM adoption & enablement
                </p>
              </div>
              <div className="flex items-center gap-4 w-[320px]">
                <div className="relative flex-1 flex items-center h-1.5 bg-orange-100 rounded-full">
                  <div className="absolute h-full w-[30%] bg-[#FF6624] rounded-full" />
                  <div className="absolute size-3.5 bg-white border-2 border-[#FF6624] rounded-full shadow-sm left-[30%]" />
                </div>
                <span className="text-[13px] font-bold text-gray-700 border border-gray-100 rounded-xl px-3 py-1 bg-gray-50/50 min-w-[55px] text-center">
                  30%
                </span>
              </div>
            </div>

            <div className="py-5 flex items-center justify-between">
              <div>
                <h4 className="text-[14px] font-bold text-gray-800 leading-tight">
                  People
                </h4>
                <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                  Leadership, skills & structure
                </p>
              </div>
              <div className="flex items-center gap-4 w-[320px]">
                <div className="relative flex-1 flex items-center h-1.5 bg-orange-100 rounded-full">
                  <div className="absolute h-full w-[30%] bg-[#FF6624] rounded-full" />
                  <div className="absolute size-3.5 bg-white border-2 border-[#FF6624] rounded-full shadow-sm left-[30%]" />
                </div>
                <span className="text-[13px] font-bold text-gray-700 border border-gray-100 rounded-xl px-3 py-1 bg-gray-50/50 min-w-[55px] text-center">
                  30%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
