import { Handle } from 'reactflow';

/**
 * Reusable Handle component
 */
export const NodeHandle = ({ type, position, className = '', style = {} }) => (
    <Handle
        type={type}
        position={position}
        className={`w-4 h-4 border-3 border-white shadow-lg transition-all duration-200 hover:scale-110 ${type === 'source'
            ? '!bg-gradient-to-r !from-blue-500 !to-indigo-500'
            : '!bg-gradient-to-r !from-purple-500 !to-pink-500'
            } ${className}`}
        style={{
            ...style,
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
    />
);