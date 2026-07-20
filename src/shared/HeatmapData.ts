export const scaleColors: Record<number, string> = {
  0: "#C13B2A",
  20: "#E8A24A",
  40: "#E2B77A",
  60: "#A9B15C",
  80: "#5C9E72",
  100: "#1F6F5C",
};

export const scaleStops = [
  { value: 0, label: "None", color: scaleColors[0] },
  { value: 20, label: "Isolated action", color: scaleColors[20] },
  { value: 40, label: "Documented standard", color: scaleColors[40] },
  { value: 60, label: "Consistently applied", color: scaleColors[60] },
  { value: 80, label: "Regularly updated", color: scaleColors[80] },
  { value: 100, label: "Benchmark", color: scaleColors[100] },
];

export type HeatCell = { label: string; value: number };
export type HeatRow = { row: string; cells: HeatCell[] };

export const heatmapRows: HeatRow[] = [
  {
    row: "Ways of Working",
    cells: [
      { label: "Sales Leadership", value: 40 },
      { label: "Indirect Sales", value: 80 },
      { label: "Way of Selling", value: 100 },
      { label: "New Products", value: 20 },
      { label: "CRM", value: 60 },
      { label: "Existing Customers", value: 40 },
      { label: "Automation", value: 0 },
      { label: "Sales", value: 80 },
    ],
  },
  {
    row: "Sales Tech & Tools",
    cells: [
      { label: "New Products", value: 20 },
      { label: "Existing Customers", value: 40 },
      { label: "CRM", value: 60 },
      { label: "Sales", value: 80 },
      { label: "Way of Selling", value: 100 },
      { label: "Sales Leadership", value: 40 },
      { label: "Indirect Sales", value: 80 },
      { label: "Sales Structure", value: 60 },
    ],
  },
  {
    row: "People",
    cells: [
      { label: "Existing Customers", value: 40 },
      { label: "New Products", value: 20 },
      { label: "Indirect Sales", value: 80 },
      { label: "Automation", value: 0 },
      { label: "Sales Structure", value: 60 },
      { label: "Sales", value: 80 },
      { label: "Sales Leadership", value: 40 },
      { label: "Way of Selling", value: 100 },
    ],
  },
];