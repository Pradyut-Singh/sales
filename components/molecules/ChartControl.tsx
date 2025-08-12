'use client'

import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

type Props = {
  chartType: 'bar' | 'line' | 'pie'
  setChartType: (t: 'bar' | 'line' | 'pie') => void
  threshold: number
  setThreshold: (n: number) => void
}

export default function ChartControls({ chartType, setChartType, threshold, setThreshold }: Props) {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-2">
        <Button onClick={() => setChartType('bar')} size="sm" className={chartType === 'bar' ? '' : 'opacity-70'}>Bar</Button>
        <Button onClick={() => setChartType('line')} size="sm" className={chartType === 'line' ? '' : 'opacity-70'}>Line</Button>
        <Button onClick={() => setChartType('pie')} size="sm" className={chartType === 'pie' ? '' : 'opacity-70'}>Pie</Button>
      </div>

      <div className="ml-4">
        <label className="text-sm text-gray-600">Sales threshold (USD):</label>
        <Input type="number" value={threshold} onChange={(e) => setThreshold(Number(e.target.value || 0))} className="w-40" />
      </div>
    </div>
  )
}