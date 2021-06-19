import React from 'react';

interface Props {
  children: React.ReactNode;
  type: 'submit' | 'button';
  clicked: React.MouseEventHandler<HTMLButtonElement>;
  variant: 'light' | 'dark';
}

const Button: React.FC<Props> = ({ children, type, clicked, variant }) => {
  const theme = {
    light:
      'bg-gray-900 border-gray-900 text-brand-500 hover:bg-brand-500 hover:text-gray-900',
    dark: 'bg-brand-500 border-brand-500 text-gray-900 hover:bg-brand-400',
  };

  return (
    <button
      className={`${theme[variant]} px-2 py transition rounded border hover:shadow`}
      type={type}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default Button;
