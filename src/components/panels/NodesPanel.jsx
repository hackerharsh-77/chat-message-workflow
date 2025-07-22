import React from 'react';
import { NODE_CONFIGS } from '../../config/nodeConfig';
import { DraggableNodeItem } from './DraggableNodeItem';
import { Sparkles } from 'lucide-react';

/**
 * Nodes Panel Component
 */
export const NodesPanel = () => (
    <div className="w-72 bg-gradient-to-b from-slate-50 to-gray-100 border-l border-gray-200 shadow-lg">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-white">
            <div className="flex items-center mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 mr-3">
                    <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Components</h3>
            </div>
            <p className="text-sm text-gray-600">Drag components to build your flow</p>
        </div>

        {/* Nodes List */}
        <div className="p-6 space-y-3">
            {NODE_CONFIGS.map((config) => (
                <DraggableNodeItem key={config.type} config={config} />
            ))}
        </div>

        {/* Instructions */}
        <div className="mx-6 mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
            <div className="flex items-start">
                <div>
                    <p className="text-sm font-semibold text-blue-900 mb-1">Quick Start</p>
                    <p className="text-xs text-blue-700 leading-relaxed">
                        Drag any component above onto the canvas to create it. Connect nodes by dragging from output (blue) to input (purple) handles.
                    </p>
                </div>
            </div>
        </div>
    </div>
);