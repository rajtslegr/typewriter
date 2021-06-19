import React from 'react';

interface Props {
  countDown: number;
}

const CountDown: React.FC<Props> = ({ countDown }) => (
  <div className="absolute p-3 text-gray-900 rounded animate-ping bg-brand-500">
    {countDown}
  </div>
);

export default CountDown;
