import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  className = '',
  text = 'Loading...'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-200 border-t-primary-500`} />
      {text && (
        <p className={`${textSizes[size]} text-gray-500 font-medium`}>
          {text}
        </p>
      )}
    </div>
  );
}
