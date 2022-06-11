import { ReactNode } from 'react';

interface ErrorProps {
  children: ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => {
  return <p className="text-red-500">{children}</p>;
};

export default Error;
