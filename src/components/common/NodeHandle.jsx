import React from 'react';
import { Handle } from 'reactflow';

/**
 * Reusable Handle component with consistent styling
 */
export const NodeHandle = ({ type, position, className = '', style = {} }) => (
    <Handle
        type={type}
        position={position}
        className={`w-3 h-3 !bg-gray-500 border-2 border-white ${className}`}
        style={style}
    />
);