import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'gradient' | 'glass' | 'elevated' | 'bordered' | 'gradient-border';
  hover?: boolean;
  // Accessibility props
  role?: string;
  tabIndex?: number;
  'aria-label'?: string;
  onClick?: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

export default function Card({ 
  children, 
  className = '', 
  padding = 'md',
  variant = 'default',
  hover = true,
  role,
  tabIndex,
  'aria-label': ariaLabel,
  onClick,
  onKeyDown
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const variantClasses = {
    default: 'bg-white border border-gray-100 shadow-soft',
    gradient: 'bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-soft',
    glass: 'glass border border-white/20 shadow-glass-soft',
    elevated: 'bg-white border border-gray-100 shadow-medium',
    bordered: 'bg-white border-2 border-gray-200 shadow-soft',
    'gradient-border': 'bg-white relative before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-primary-500 before:to-secondary-500 before:rounded-2xl before:-z-10'
  };

  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-medium hover:scale-[1.02] active:scale-[0.98]' : '';
  
  return (
    <div 
      className={`rounded-2xl ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
}