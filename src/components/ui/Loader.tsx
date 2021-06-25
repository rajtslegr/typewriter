import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex p-5 space-x-3 rounded-full bg-brand-500">
        <div className="w-2 h-2 rounded-full bg-brand-800 animate-bounce"></div>
        <div className="w-2 h-2 rounded-full bg-brand-800 animate-bounce"></div>
        <div className="w-2 h-2 rounded-full bg-brand-800 animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
