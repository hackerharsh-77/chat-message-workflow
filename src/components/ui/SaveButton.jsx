import React from 'react';
import { useFlowBuilder } from '../../context/FlowBuilderContext';

/**
 * Save Button Component with validation feedback
 */
export const SaveButton = () => {
    const { nodes, saveError, handleSave } = useFlowBuilder();

    return (
        <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
            {saveError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm animate-pulse">
                    {saveError}
                </div>
            )}
            <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg"
                disabled={nodes.length === 0}
            >
                Save Changes
            </button>
        </div>
    );
};