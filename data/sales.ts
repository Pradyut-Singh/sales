export type SalesPoint = { month: string; sales2022: number; sales2023: number; sales2024: number };

// Synthetic monthly sales numbers inspired by public retail datasets (Kaggle-style) — randomly generated for demo.
export const SALES_DATA: SalesPoint[] = [
  { month: 'Jan', sales2022: 4200, sales2023: 5200, sales2024: 6100 },
  { month: 'Feb', sales2022: 3800, sales2023: 4800, sales2024: 5900 },
  { month: 'Mar', sales2022: 5000, sales2023: 6200, sales2024: 7000 },
  { month: 'Apr', sales2022: 4700, sales2023: 5600, sales2024: 6800 },
  { month: 'May', sales2022: 5200, sales2023: 6500, sales2024: 7300 },
  { month: 'Jun', sales2022: 6100, sales2023: 7000, sales2024: 8200 },
  { month: 'Jul', sales2022: 5800, sales2023: 6700, sales2024: 7800 },
  { month: 'Aug', sales2022: 6000, sales2023: 6900, sales2024: 8000 },
  { month: 'Sep', sales2022: 5500, sales2023: 6400, sales2024: 7600 },
  { month: 'Oct', sales2022: 6300, sales2023: 7200, sales2024: 8600 },
  { month: 'Nov', sales2022: 7000, sales2023: 8200, sales2024: 9400 },
  { month: 'Dec', sales2022: 8200, sales2023: 9200, sales2024: 11000 },
];