import { ComponentProps, forwardRef } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = 'text', ...props }, ref) => {
    return (
      <label>
        <div className="mb-1 font-medium">{label}</div>
        <input
          className="py-2 px-4 w-full text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 rounded-md border focus:border-brand-600 focus:ring-brand-500 disabled:opacity-50"
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
