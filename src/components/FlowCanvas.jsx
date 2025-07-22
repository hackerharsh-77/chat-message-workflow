import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import { useFlowBuilder } from '../context/FlowBuilderContext';
import { nodeTypes } from '../config/nodeConfig';

/**
 * Flow Canvas Component
 */
export const FlowCanvas = () => {
    const {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        handleConnect,
        handleDrop,
        handleDragOver,
        handleNodeClick,
        handlePaneClick,
        reactFlowWrapper,
    } = useFlowBuilder();

    return (
        <div ref={reactFlowWrapper} className="w-full h-full bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={handleConnect}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onNodeClick={handleNodeClick}
                onPaneClick={handlePaneClick}
                nodeTypes={nodeTypes}
                fitView
                className="bg-transparent"
                attributionPosition="bottom-left"
                defaultEdgeOptions={{
                    style: {
                        stroke: '#6366f1',
                        strokeWidth: 3,
                        filter: 'drop-shadow(0 4px 6px rgba(99, 102, 241, 0.2))'
                    },
                    type: 'smoothstep',
                    animated: true,
                }}
                connectionLineStyle={{
                    stroke: '#6366f1',
                    strokeWidth: 3,
                    strokeDasharray: '5,5'
                }}
            >
                <Background
                    color="#e2e8f0"
                    gap={24}
                    size={1.5}
                    style={{
                        backgroundImage: `
              radial-gradient(circle at 25px 25px, #cbd5e1 2px, transparent 2px),
              radial-gradient(circle at 75px 75px, #cbd5e1 1px, transparent 1px)
            `,
                    }}
                />
                <Controls
                    showInteractive={false}
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg"
                />
            </ReactFlow>
        </div>
    );
};