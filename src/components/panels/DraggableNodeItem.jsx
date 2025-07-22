import React, { useCallback } from 'react';
import { GripVertical } from 'lucide-react';

/**
 * Draggable Node Item Component
 */
export const DraggableNodeItem = ({ config }) => {
    const { type, label, icon: Icon, description } = config;

    const handleDragStart = useCallback((event) => {
        event.dataTransfer.setData('application/reactflow', type);
        event.dataTransfer.effectAllowed = 'move';
    }, [type]);

    return (
        <div
            className="group flex items-center p-4 bg-white border-2 border-gray-200 rounded-xl cursor-grab 
                 hover:border-blue-300 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5
                 active:scale-95"
            onDragStart={handleDragStart}
            draggable
            title={description}
        >
            {/* Icon Container */}
            <div className="p-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 mr-4 
                      group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-200">
                <Icon className="w-5 h-5 text-white" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <span className="text-sm font-semibold text-gray-800 block">{label}</span>
                {description && (
                    <span className="text-xs text-gray-500 block mt-1 leading-tight">{description}</span>
                )}
            </div>

            {/* Drag Indicator */}
            <GripVertical className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-2" />
        </div>
    );
};