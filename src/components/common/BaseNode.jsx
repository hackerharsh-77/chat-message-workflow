import React from 'react';

/**
 * Base Node Component - provides common node structure
 */
export const BaseNode = ({ children, selected, className = '' }) => (
    <div className={`
    px-5 py-4 shadow-lg rounded-xl bg-white border-2 transition-all duration-200
    ${selected
            ? 'border-blue-500 shadow-blue-200 ring-4 ring-blue-100'
            : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
        }
    min-w-[240px] max-w-[320px] relative backdrop-blur-sm ${className}
  `}>
        {children}
    </div>
);