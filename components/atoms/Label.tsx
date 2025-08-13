import React from 'react';

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
  srOnly?: boolean;
}

export default function Label({ 
  htmlFor, 
  children, 
  className = '', 
  required = false,
  srOnly = false 
}: LabelProps) {
  const baseClasses = 'block font-medium text-gray-700 mb-2';
  const srOnlyClasses = 'sr-only';
  const combinedClasses = srOnly 
    ? `${srOnlyClasses} ${className}` 
    : `${baseClasses} ${className}`;

  return (
    <label 
      htmlFor={htmlFor} 
      className={combinedClasses}
    >
      {children}
      {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
    </label>
  );
}