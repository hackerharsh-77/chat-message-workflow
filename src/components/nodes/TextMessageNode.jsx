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
        <NodeHandle type="target" position={Position.Left} style={{ left: -8 }} />
        <div className="flex items-center mb-3 pb-2 border-b border-gray-100">
            <div className="p-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 mr-3">
                <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-800">Send Message</span>
        </div>
        <div className="text-sm text-gray-700 leading-relaxed min-h-[2rem] flex items-center">
            {data.message ? (
                <span className="font-medium">{data.message}</span>
            ) : (
                <span className="text-gray-400 italic">Enter your message...</span>
            )}
        </div>
        <NodeHandle type="source" position={Position.Right} style={{ right: -8 }} />
    </BaseNode>
);