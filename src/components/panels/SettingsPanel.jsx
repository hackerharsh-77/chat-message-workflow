import React, { useState, useCallback, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

/**
 * Settings Panel Component
 */
export const SettingsPanel = ({ selectedNode, onNodeChange, onBack }) => {
    const [message, setMessage] = useState(selectedNode?.data?.message || '');

    const handleMessageChange = useCallback((e) => {
        const newMessage = e.target.value;
        setMessage(newMessage);
        onNodeChange(selectedNode.id, { message: newMessage });
    }, [selectedNode.id, onNodeChange]);

    // Reset message when selectedNode changes
    useEffect(() => {
        setMessage(selectedNode?.data?.message || '');
    }, [selectedNode]);

    if (!selectedNode) return null;

    return (
        <div className="w-64 bg-gray-50 border-l border-gray-200 p-4">
            <div className="flex items-center mb-4">
                <button
                    onClick={onBack}
                    className="p-1 hover:bg-gray-200 rounded mr-2 transition-colors"
                    aria-label="Go back to nodes panel"
                >
                    <ArrowLeft className="w-4 h-4" />
                </button>
                <h3 className="text-lg font-semibold text-gray-800">Message Settings</h3>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Text
                </label>
                <textarea
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Enter your message..."
                    className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none h-20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
            </div>
        </div>
    );
};