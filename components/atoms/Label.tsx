import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export default function Label({ children, className = '', htmlFor }: LabelProps) {
  return (
    <label 
      htmlFor={htmlFor}
      className={`block text-sm font-semibold text-gray-700 mb-2 ${className}`}
    >
      {children}
    </label>
  );
}