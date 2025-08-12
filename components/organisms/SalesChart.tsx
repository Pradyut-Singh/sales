"use client";

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import Card from '../atoms/Card';
import { SalesData } from '@/data/salesData';
import { TrendingUp } from 'lucide-react';

export type ChartType = 'line' | 'bar' | 'pie';

interface SalesChartProps {
  data: SalesData[];
  chartType: ChartType;
  title?: string;
}

// Modern color palette using our design system
const COLORS = [
  "#0ea5e9", // Primary
  "#22c55e", // Accent
  "#d946ef", // Secondary
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#8b5cf6", // Violet
  "#06b6d4", // Cyan
  "#84cc16", // Lime
  "#f97316", // Orange
  "#ec4899", // Pink
];

export default function SalesChart({ data, chartType, title = "Sales Performance" }: SalesChartProps) {
  const formatTooltip = (value: number, name: string) => {
    if (name === 'sales') return [`$${value.toLocaleString()}`, 'Sales'];
    if (name === 'orders') return [value.toLocaleString(), 'Orders'];
    if (name === 'revenue') return [`$${value.toLocaleString()}`, 'Revenue'];
    return [value, name];
  };

  interface TooltipProps {
    active?: boolean;
    payload?: Array<{
      color: string;
      name: string;
      value: number;
      dataKey: string;
    }>;
    label?: string;
  }

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm">
          <p className="font-semibold text-gray-900 mb-3">{label}</p>
          {payload.map((entry, index: number) => (
            <p key={index} className="text-sm font-medium" style={{ color: entry.color }}>
              {entry.name}: {formatTooltip(entry.value, entry.dataKey)[0]}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={450}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS[0]} stopOpacity={0.1}/>
                  <stop offset="95%" stopColor={COLORS[0]} stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS[1]} stopOpacity={0.1}/>
                  <stop offset="95%" stopColor={COLORS[1]} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748B', fontSize: 12, fontWeight: 500 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748B', fontSize: 12, fontWeight: 500 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke={COLORS[0]} 
                strokeWidth={3}
                dot={{ fill: COLORS[0], strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: COLORS[0], strokeWidth: 2, fill: '#fff' }}
              />
              <Line 
                type="monotone" 
                dataKey="orders" 
                stroke={COLORS[1]} 
                strokeWidth={3}
                dot={{ fill: COLORS[1], strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: COLORS[1], strokeWidth: 2, fill: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={450}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="barSalesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS[0]} stopOpacity={0.9}/>
                  <stop offset="95%" stopColor={COLORS[0]} stopOpacity={0.6}/>
                </linearGradient>
                <linearGradient id="barOrdersGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS[1]} stopOpacity={0.9}/>
                  <stop offset="95%" stopColor={COLORS[1]} stopOpacity={0.6}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748B', fontSize: 12, fontWeight: 500 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748B', fontSize: 12, fontWeight: 500 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                dataKey="sales" 
                fill="url(#barSalesGradient)" 
                radius={[6, 6, 0, 0]}
              />
              <Bar 
                dataKey="orders" 
                fill="url(#barOrdersGradient)" 
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={450}>
            <PieChart>
              <defs>
                {COLORS.map((color, index) => (
                  <linearGradient key={index} id={`pieGradient${index}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={0.9}/>
                    <stop offset="100%" stopColor={color} stopOpacity={0.6}/>
                  </linearGradient>
                ))}
              </defs>
              <Pie
                data={data}
                dataKey="sales"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={140}
                innerRadius={60}
                paddingAngle={3}
                label={({ month, sales }) => `${month}: $${sales.toLocaleString()}`}
              >
                {data.map((_, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`url(#pieGradient${index % COLORS.length})`}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card variant="elevated" className="w-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-lg">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">Interactive visualization of your sales data</p>
        </div>
      </div>
      {data.length > 0 ? (
        <div>
          {renderChart()}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <TrendingUp className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-xl font-medium mb-2">No data available</p>
          <p className="text-sm">Try adjusting your filters to see results</p>
        </div>
      )}
    </Card>
  );
}
