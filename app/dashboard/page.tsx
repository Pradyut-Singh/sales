"use client";

import React, { useState, useMemo } from 'react';
import DashboardTemplate from '@/components/templates/DashboardTemplate';
import SalesChart, { ChartType } from '@/components/organisms/SalesChart';
import ChartControls from '@/components/molecules/ChartControls';
import StatsCard from '@/components/molecules/StatsCard';
import Card from '@/components/atoms/Card';
import ErrorBoundary from '@/components/atoms/ErrorBoundary';
import { getDataByYear, getYearlyTotals } from '@/data/salesData';
import { BarChart3, TrendingUp, ShoppingCart, DollarSign, Sparkles } from 'lucide-react';

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState<number>(0);

  // Get filtered data based on selected year and threshold
  const filteredData = useMemo(() => {
    const yearData = getDataByYear(selectedYear);
    return yearData.filter(data => data.sales >= threshold);
  }, [selectedYear, threshold]);

  // Calculate stats for the selected year
  const yearStats = useMemo(() => {
    const yearData = getDataByYear(selectedYear);
    const totalSales = yearData.reduce((sum, data) => sum + data.sales, 0);
    const totalOrders = yearData.reduce((sum, data) => sum + data.orders, 0);
    const totalRevenue = yearData.reduce((sum, data) => sum + data.revenue, 0);
    const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    // Calculate year-over-year growth
    const previousYear = selectedYear - 1;
    const previousYearData = getDataByYear(previousYear);
    const previousTotalSales = previousYearData.reduce((sum, data) => sum + data.sales, 0);
    const salesGrowth = previousTotalSales > 0 ? 
      ((totalSales - previousTotalSales) / previousTotalSales) * 100 : 0;

    return {
      totalSales,
      totalOrders,
      totalRevenue,
      avgOrderValue,
      salesGrowth
    };
  }, [selectedYear]);

  // Get yearly comparison data
  const yearlyTotals = useMemo(() => getYearlyTotals(), []);

  const header = (
    <div className="text-center lg:text-left">
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl blur-lg opacity-30 animate-glow"></div>
          <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 p-3 sm:p-4 rounded-3xl shadow-xl">
            <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-2">
            Sales Dashboard
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full animate-pulse"></div>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500" />
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Live insights for {selectedYear}
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
        Comprehensive analytics and performance metrics with interactive visualizations 
        to track your business growth and identify trends.
      </p>
    </div>
  );

  const stats = (
    <ErrorBoundary>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <StatsCard
          title="Total Sales"
          value={`$${yearStats.totalSales.toLocaleString()}`}
          change={Math.round(yearStats.salesGrowth)}
          changeType={yearStats.salesGrowth > 0 ? 'increase' : yearStats.salesGrowth < 0 ? 'decrease' : 'neutral'}
          icon={<DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />}
          variant="gradient"
        />
        <StatsCard
          title="Total Orders"
          value={yearStats.totalOrders.toLocaleString()}
          icon={<ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />}
          variant="glass"
        />
        <StatsCard
          title="Total Revenue"
          value={`$${yearStats.totalRevenue.toLocaleString()}`}
          icon={<TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />}
          variant="gradient"
        />
        <StatsCard
          title="Avg Order Value"
          value={`$${Math.round(yearStats.avgOrderValue)}`}
          icon={<BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />}
          variant="glass"
        />
      </div>
    </ErrorBoundary>
  );

  const controls = (
    <ErrorBoundary>
      <Card variant="elevated" className="border-2 border-gray-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="p-2 sm:p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-lg">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Chart Controls</h3>
            <p className="text-xs sm:text-sm text-gray-500">Customize your visualization</p>
          </div>
        </div>
        <ChartControls
          chartType={chartType}
          threshold={threshold}
          selectedYear={selectedYear}
          onChartTypeChange={setChartType}
          onThresholdChange={setThreshold}
          onYearChange={setSelectedYear}
        />
      </Card>
    </ErrorBoundary>
  );

  const chart = (
    <ErrorBoundary>
      <SalesChart
        data={filteredData}
        chartType={chartType}
        title={`${selectedYear} Sales Performance`}
      />
    </ErrorBoundary>
  );

  const sidebar = (
    <ErrorBoundary>
      <div className="space-y-4 sm:space-y-6">
        <Card variant="glass">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full"></div>
            Yearly Comparison
          </h3>
          <div className="space-y-2 sm:space-y-3">
            {yearlyTotals.map((yearData) => (
              <div
                key={yearData.year}
                className={`p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedYear === yearData.year
                    ? 'border-primary-500 bg-gradient-to-r from-primary-50 to-primary-100 shadow-lg'
                    : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                }`}
                onClick={() => setSelectedYear(yearData.year)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedYear(yearData.year);
                  }
                }}
                aria-label={`Select year ${yearData.year} with sales of $${yearData.sales.toLocaleString()}`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">{yearData.year}</span>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-semibold text-primary-600">
                      ${yearData.sales.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {yearData.orders.toLocaleString()} orders
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="glass">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full"></div>
            Quick Insights
          </h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Best Month:</span>
              <span className="text-xs sm:text-sm font-bold text-gray-900">
                {filteredData.length > 0 
                  ? filteredData.reduce((max, data) => data.sales > max.sales ? data : max).month
                  : 'N/A'
                }
              </span>
            </div>
            <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Filtered Records:</span>
              <span className="text-xs sm:text-sm font-bold text-gray-900">{filteredData.length}/12</span>
            </div>
            <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Chart Type:</span>
              <span className="text-xs sm:text-sm font-bold text-primary-600 capitalize">{chartType}</span>
            </div>
            <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Threshold:</span>
              <span className="text-xs sm:text-sm font-bold text-gray-900">${threshold.toLocaleString()}</span>
            </div>
          </div>
        </Card>
      </div>
    </ErrorBoundary>
  );

  return (
    <DashboardTemplate
      header={header}
      stats={stats}
      controls={controls}
      chart={chart}
      sidebar={sidebar}
    />
  );
}
