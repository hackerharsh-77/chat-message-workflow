import React, { useState, useCallback, useEffect } from 'react';
import { ArrowLeft, MessageSquare, Type } from 'lucide-react';

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
        <div className="w-72 bg-gradient-to-b from-slate-50 to-gray-100 border-l border-gray-200 shadow-lg">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 bg-white">
                <div className="flex items-center mb-2">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-gray-100 rounded-lg mr-3 transition-colors group"
                        aria-label="Go back to nodes panel"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
                    </button>
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mr-3">
                        <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">Message</h3>
                        <p className="text-sm text-gray-600">Configure message</p>
                    </div>
                </div>
            </div>

            {/* Settings Form */}
            <div className="p-6">
                <div className="mb-6">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                        <Type className="w-4 h-4 mr-2 text-gray-600" />
                        Message Content
                    </label>
                    <div className="relative">
                        <textarea
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Enter your message here..."
                            className="w-full p-4 border-2 border-gray-200 rounded-xl text-sm resize-none h-32 
                         focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all
                         placeholder-gray-400 bg-white shadow-sm"
                        />
                        <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                            {message.length} characters
                        </div>
                    </div>
                </div>

                {/* Message Preview */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
                    <label className="text-sm font-semibold text-gray-700 block mb-3">Preview</label>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200">
                        <div className="text-sm text-gray-700">
                            {message || (
                                <span className="text-gray-400 italic">Your message will appear here...</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};