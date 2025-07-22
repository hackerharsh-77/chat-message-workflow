import React from 'react';

/**
 * Base Node Component - provides common node structure
 */
export const BaseNode = ({ children, selected, className = '' }) => (
    <div className={`
    px-4 py-2 shadow-md rounded-md bg-white border-2 
    ${selected ? 'border-blue-500' : 'border-gray-200'}
    min-w-[200px] relative ${className}
  `}>
        {children}
    </div>
);