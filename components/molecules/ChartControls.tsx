import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { BarChart3, LineChart, PieChart, Calendar, Filter } from 'lucide-react';

export type ChartType = 'line' | 'bar' | 'pie';

interface ChartControlsProps {
  chartType: ChartType;
  threshold: number;
  selectedYear: number;
  onChartTypeChange: (type: ChartType) => void;
  onThresholdChange: (threshold: number) => void;
  onYearChange: (year: number) => void;
}

export default function ChartControls({
  chartType,
  threshold,
  selectedYear,
  onChartTypeChange,
  onThresholdChange,
  onYearChange
}: ChartControlsProps) {
  const years = [2022, 2023, 2024];
  const chartTypes: { type: ChartType; label: string; icon: React.ReactNode }[] = [
    { type: 'line', label: 'Line', icon: <LineChart className="w-4 h-4" /> },
    { type: 'bar', label: 'Bar', icon: <BarChart3 className="w-4 h-4" /> },
    { type: 'pie', label: 'Pie', icon: <PieChart className="w-4 h-4" /> }
  ];

  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 p-2">
      {/* Year Selection */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <div className="flex items-center gap-2 sm:gap-3 text-sm font-semibold text-gray-700">
          <div className="p-1.5 sm:p-2 bg-primary-100 rounded-xl">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600" />
          </div>
          <span className="whitespace-nowrap">Year:</span>
        </div>
        <select
          value={selectedYear}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-black hover:border-gray-300 transition-all duration-200 font-medium min-w-[100px] sm:min-w-[120px] text-sm sm:text-base"
          aria-label="Select year for data visualization"
        >
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Chart Type Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <div className="text-sm font-semibold text-gray-700 whitespace-nowrap">Chart Type:</div>
        <div className="flex gap-1 p-1 bg-gray-100 rounded-2xl border border-gray-200 w-full sm:w-auto">
          {chartTypes.map(({ type, label, icon }) => (
            <Button
              key={type}
              onClick={() => onChartTypeChange(type)}
              variant={chartType === type ? 'primary' : 'ghost'}
              size="sm"
              className={`flex items-center gap-1 sm:gap-2 rounded-xl transition-all duration-200 flex-1 sm:flex-none justify-center ${
                chartType === type 
                  ? 'shadow-md' 
                  : 'hover:bg-white hover:shadow-sm'
              }`}
              aria-label={`Switch to ${label.toLowerCase()} chart`}
              aria-pressed={chartType === type}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Threshold Input */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <div className="flex items-center gap-2 sm:gap-3 text-sm font-semibold text-gray-700">
          <div className="p-1.5 sm:p-2 bg-accent-100 rounded-xl">
            <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-accent-600" />
          </div>
          <span className="whitespace-nowrap">Min Sales:</span>
        </div>
        <Input
          type="number"
          placeholder="0"
          value={threshold}
          onChange={(e) => onThresholdChange(Number(e.target.value))}
          min={0}
          className="w-full sm:w-32 text-sm sm:text-base"
          aria-label="Set minimum sales threshold for filtering data"
        />
      </div>
    </div>
  );
}