import React from 'react';

interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password';
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  id?: string;
  name?: string;
  required?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
  min,
  max,
  id,
  name,
  required = false,
  ariaLabel,
  ariaDescribedBy
}: InputProps) {
  const baseClasses = 'px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 text-gray-900 placeholder-gray-400 font-medium text-sm sm:text-base w-full';
  const disabledClasses = disabled ? 'bg-gray-50 cursor-not-allowed opacity-60' : 'bg-white hover:border-gray-300 hover:shadow-medium';
  
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      min={min}
      max={max}
      required={required}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`${baseClasses} ${disabledClasses} ${className}`}
    />
  );
}