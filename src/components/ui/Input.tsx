import React, { ComponentProps, forwardRef } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = 'text', ...props }, ref) => {
    return (
      <label>
        <div className="mb-1 font-medium">{label}</div>
        <input
          className="w-full px-4 py-2 text-gray-800 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-200 focus:border-brand-600 focus:ring-brand-500 disabled:opacity-50"
          type={type}
          ref={ref}
          {...props}
        />
      </label>
    );
  },
);

Input.displayName = 'Input';

export default Input;
