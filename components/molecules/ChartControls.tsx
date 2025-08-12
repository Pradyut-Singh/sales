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
    <div className="flex flex-wrap items-center gap-8 p-2">
      {/* Year Selection */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
          <div className="p-2 bg-primary-100 rounded-xl">
            <Calendar className="w-4 h-4 text-primary-600" />
          </div>
          Year:
        </div>
        <select
          value={selectedYear}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="px-4 py-3 border-2 border-gray-200 rounded-xl shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white hover:border-gray-300 transition-all duration-200 font-medium min-w-[120px]"
        >
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Chart Type Buttons */}
      <div className="flex items-center gap-4">
        <div className="text-sm font-semibold text-gray-700">Chart Type:</div>
        <div className="flex gap-1 p-1 bg-gray-100 rounded-2xl border border-gray-200">
          {chartTypes.map(({ type, label, icon }) => (
            <Button
              key={type}
              onClick={() => onChartTypeChange(type)}
              variant={chartType === type ? 'primary' : 'ghost'}
              size="sm"
              className={`flex items-center gap-2 rounded-xl transition-all duration-200 ${
                chartType === type 
                  ? 'shadow-md' 
                  : 'hover:bg-white hover:shadow-sm'
              }`}
            >
              {icon}
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* Threshold Input */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
          <div className="p-2 bg-accent-100 rounded-xl">
            <Filter className="w-4 h-4 text-accent-600" />
          </div>
          Min Sales:
        </div>
        <Input
          type="number"
          placeholder="0"
          value={threshold}
          onChange={(e) => onThresholdChange(Number(e.target.value))}
          min={0}
          className="w-32"
        />
      </div>
    </div>
  );
}