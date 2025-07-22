import React from 'react';
import { Position } from 'reactflow';
import { MessageCircle } from 'lucide-react';
import { BaseNode } from '../common/BaseNode';
import { NodeHandle } from '../common/NodeHandle';

/**
 * Text Message Node Component
 */
export const TextMessageNode = ({ data, selected }) => (
    <BaseNode selected={selected}>
        <NodeHandle type="target" position={Position.Left} style={{ left: -6 }} />

        <div className="flex items-center mb-2">
            <MessageCircle className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Send Message</span>
        </div>

        <div className="text-sm text-gray-600 break-words">
            {data.message || 'Enter your message...'}
        </div>

        <NodeHandle type="source" position={Position.Right} style={{ right: -6 }} />
    </BaseNode>
);
