// Mock sales data inspired by typical e-commerce patterns
export interface SalesData {
  year: number;
  month: string;
  sales: number;
  orders: number;
  revenue: number;
}

export const salesData: SalesData[] = [
  // 2022 Data
  { year: 2022, month: "Jan", sales: 4200, orders: 156, revenue: 84000 },
  { year: 2022, month: "Feb", sales: 3800, orders: 142, revenue: 76000 },
  { year: 2022, month: "Mar", sales: 5100, orders: 189, revenue: 102000 },
  { year: 2022, month: "Apr", sales: 4600, orders: 171, revenue: 92000 },
  { year: 2022, month: "May", sales: 5400, orders: 201, revenue: 108000 },
  { year: 2022, month: "Jun", sales: 4900, orders: 182, revenue: 98000 },
  { year: 2022, month: "Jul", sales: 5200, orders: 193, revenue: 104000 },
  { year: 2022, month: "Aug", sales: 4800, orders: 178, revenue: 96000 },
  { year: 2022, month: "Sep", sales: 5600, orders: 208, revenue: 112000 },
  { year: 2022, month: "Oct", sales: 6100, orders: 227, revenue: 122000 },
  { year: 2022, month: "Nov", sales: 7200, orders: 268, revenue: 144000 },
  { year: 2022, month: "Dec", sales: 8500, orders: 316, revenue: 170000 },

  // 2023 Data (Growth trend)
  { year: 2023, month: "Jan", sales: 5200, orders: 193, revenue: 104000 },
  { year: 2023, month: "Feb", sales: 4800, orders: 178, revenue: 96000 },
  { year: 2023, month: "Mar", sales: 6300, orders: 234, revenue: 126000 },
  { year: 2023, month: "Apr", sales: 5800, orders: 216, revenue: 116000 },
  { year: 2023, month: "May", sales: 6700, orders: 249, revenue: 134000 },
  { year: 2023, month: "Jun", sales: 6200, orders: 230, revenue: 124000 },
  { year: 2023, month: "Jul", sales: 6500, orders: 242, revenue: 130000 },
  { year: 2023, month: "Aug", sales: 6000, orders: 223, revenue: 120000 },
  { year: 2023, month: "Sep", sales: 7100, orders: 264, revenue: 142000 },
  { year: 2023, month: "Oct", sales: 7800, orders: 290, revenue: 156000 },
  { year: 2023, month: "Nov", sales: 9200, orders: 342, revenue: 184000 },
  { year: 2023, month: "Dec", sales: 10800, orders: 402, revenue: 216000 },

  // 2024 Data (Continued growth)
  { year: 2024, month: "Jan", sales: 6400, orders: 238, revenue: 128000 },
  { year: 2024, month: "Feb", sales: 5900, orders: 219, revenue: 118000 },
  { year: 2024, month: "Mar", sales: 7800, orders: 290, revenue: 156000 },
  { year: 2024, month: "Apr", sales: 7200, orders: 268, revenue: 144000 },
  { year: 2024, month: "May", sales: 8300, orders: 309, revenue: 166000 },
  { year: 2024, month: "Jun", sales: 7700, orders: 287, revenue: 154000 },
  { year: 2024, month: "Jul", sales: 8100, orders: 301, revenue: 162000 },
  { year: 2024, month: "Aug", sales: 7500, orders: 279, revenue: 150000 },
  { year: 2024, month: "Sep", sales: 8800, orders: 327, revenue: 176000 },
  { year: 2024, month: "Oct", sales: 9600, orders: 357, revenue: 192000 },
  { year: 2024, month: "Nov", sales: 11400, orders: 424, revenue: 228000 },
  { year: 2024, month: "Dec", sales: 13200, orders: 491, revenue: 264000 },
];

export const getDataByYear = (year: number): SalesData[] => {
  return salesData.filter(data => data.year === year);
};

export const getYearlyTotals = () => {
  const yearlyTotals = salesData.reduce((acc, curr) => {
    if (!acc[curr.year]) {
      acc[curr.year] = { year: curr.year, sales: 0, orders: 0, revenue: 0 };
    }
    acc[curr.year].sales += curr.sales;
    acc[curr.year].orders += curr.orders;
    acc[curr.year].revenue += curr.revenue;
    return acc;
  }, {} as Record<number, { year: number; sales: number; orders: number; revenue: number }>);

  return Object.values(yearlyTotals);
};