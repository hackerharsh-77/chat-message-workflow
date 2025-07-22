import React from 'react';
import { NODE_CONFIGS } from '../../config/nodeConfig';
import { DraggableNodeItem } from './DraggableNodeItem';

/**
 * Nodes Panel Component
 */
export const NodesPanel = () => (
    <div className="w-64 bg-gray-50 border-l border-gray-200 p-4">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Nodes Panel</h3>

        <div className="space-y-2">
            {NODE_CONFIGS.map((config) => (
                <DraggableNodeItem key={config.type} config={config} />
            ))}
        </div>

        <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-700">
                <strong>How to add nodes:</strong><br />
                Drag any node type above onto the canvas to create it.
            </p>
        </div>
    </div>
);