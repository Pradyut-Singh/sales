import React from 'react';
import Card from '../atoms/Card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon?: React.ReactNode;
  variant?: 'default' | 'gradient' | 'glass';
}

export default function StatsCard({ 
  title, 
  value, 
  change, 
  changeType = 'neutral',
  icon,
  variant = 'default'
}: StatsCardProps) {
  const getTrendIcon = () => {
    switch (changeType) {
      case 'increase':
        return <TrendingUp className="w-4 h-4 text-accent-500" />;
      case 'decrease':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTrendColor = () => {
    switch (changeType) {
      case 'increase':
        return 'text-accent-600 bg-accent-50 border-accent-200';
      case 'decrease':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getIconBg = () => {
    switch (changeType) {
      case 'increase':
        return 'bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg';
      case 'decrease':
        return 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg';
      default:
        return 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg';
    }
  };

  const getCardVariant = () => {
    switch (variant) {
      case 'gradient':
        return 'gradient';
      case 'glass':
        return 'glass';
      default:
        return 'default';
    }
  };

  return (
    <Card variant={getCardVariant()} className="group cursor-pointer animate-fade-in-up">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
            {value}
          </p>
          {change !== undefined && (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${getTrendColor()} transition-all duration-200 group-hover:scale-105`}>
              {getTrendIcon()}
              <span>
                {changeType === 'increase' ? '+' : changeType === 'decrease' ? '-' : ''}
                {Math.abs(change)}%
              </span>
            </div>
          )}
        </div>
        {icon && (
          <div className={`p-4 rounded-2xl ${getIconBg()} group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl`}>
            <div className="w-6 h-6">
              {icon}
            </div>
          </div>
        )}
      </div>
      
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
}