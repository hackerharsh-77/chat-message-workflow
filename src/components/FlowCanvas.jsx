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
        <div ref={reactFlowWrapper} className="w-full h-full">
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
                className="bg-gray-50"
                attributionPosition="bottom-left"
            >
                <Background color="#f1f5f9" gap={20} />
                <Controls showInteractive={false} />
            </ReactFlow>
        </div>
    );
};