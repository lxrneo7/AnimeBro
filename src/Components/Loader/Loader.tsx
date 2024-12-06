import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="absolute z-50 top-0 left-0 bg-slate-950 w-full h-full flex items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-6 h-6 bg-white rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-white rounded-full animate-bounce delay-200"></div>
        <div className="w-6 h-6 bg-white rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
};
