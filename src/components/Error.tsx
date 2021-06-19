import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Error: React.FC<Props> = ({ children }) => {
  return <p className="text-red-500">{children}</p>;
};

export default Error;
