import React, { useCallback } from 'react';

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
            className="flex items-center p-3 mb-2 bg-white border border-gray-200 rounded-lg cursor-grab hover:shadow-md transition-all duration-200 hover:border-blue-300"
            onDragStart={handleDragStart}
            draggable
            title={description}
        >
            <Icon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
            <div className="flex-1">
                <span className="text-sm font-medium block">{label}</span>
                {description && (
                    <span className="text-xs text-gray-500">{description}</span>
                )}
            </div>
        </div>
    );
};