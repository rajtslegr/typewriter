import React, { ComponentProps, forwardRef, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  variant: 'light' | 'dark';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, ...props }, ref) => {
    const theme = {
      light:
        'bg-gray-900 border-gray-900 text-brand-500 hover:bg-brand-500 hover:text-gray-900 disabled:text-gray-900 disabled:bg-gray-500 disabled:border-gray-500 disabled:hover:shadow-none',
      dark: 'bg-brand-500 border-brand-500 text-gray-900 hover:bg-brand-400 disabled:text-gray-900 disabled:bg-gray-500 disabled:border-gray-500 disabled:hover:shadow-none',
    };

    return (
      <button
        className={`${theme[variant]} px-2 py transition rounded border hover:shadow disabled:cursor-not-allowed uppercase`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
