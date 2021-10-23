import React from 'react';

interface CountDownProps {
  countDown: number;
}

const CountDown: React.FC<CountDownProps> = ({ countDown }) => (
  <div className="absolute p-3 text-gray-900 rounded animate-ping bg-brand-500">
    {countDown}
  </div>
);

export default CountDown;
