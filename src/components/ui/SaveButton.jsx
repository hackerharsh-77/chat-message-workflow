import React from 'react';
import { useFlowBuilder } from '../../context/FlowBuilderContext';
import { Save, AlertTriangle, CheckCircle } from 'lucide-react';

/**
 * Save Button Component with validation feedback
 */
export const SaveButton = () => {
    const { nodes, saveError, handleSave } = useFlowBuilder();
    const [showSuccess, setShowSuccess] = React.useState(false);

    const handleSaveClick = async () => {
        const result = handleSave();
        if (result !== false) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }
    };

    return (
        <div className="absolute top-6 right-6 z-10 flex items-center space-x-3">
            {/* Error Message */}
            {saveError && (
                <div className="flex items-center bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-xl shadow-lg animate-pulse">
                    <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{saveError}</span>
                </div>
            )}

            {/* Success Message */}
            {showSuccess && !saveError && (
                <div className="flex items-center bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded-xl shadow-lg animate-bounce">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Saved successfully!</span>
                </div>
            )}

            {/* Save Button */}
            <button
                onClick={handleSaveClick}
                disabled={nodes.length === 0}
                className={`
          flex items-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg
          ${nodes.length === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white transform hover:-translate-y-0.5 hover:shadow-xl active:scale-95'
                    }
        `}
            >
                <Save className="w-5 h-5 mr-2" />
                Save Changes
            </button>
        </div>
    );
};