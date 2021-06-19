import React, { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'button'> {
  children: React.ReactNode;
  variant: 'light' | 'dark';
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant, ...props }, ref) => {
    const theme = {
      light:
        'bg-gray-900 border-gray-900 text-brand-500 hover:bg-brand-500 hover:text-gray-900',
      dark: 'bg-brand-500 border-brand-500 text-gray-900 hover:bg-brand-400',
    };

    return (
      <button
        className={`${theme[variant]} px-2 py transition rounded border hover:shadow`}
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
