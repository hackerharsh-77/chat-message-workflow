import React, { useState, useCallback, useRef } from 'react';
import { useNodesState, useEdgesState, useReactFlow } from 'reactflow';
import { FlowBuilderContext } from '../context/FlowBuilderContext';
import { useNodeOperations } from '../hooks/useNodeOperations';
import { useEdgeOperations } from '../hooks/useEdgeOperations';
import { useFlowValidation } from '../hooks/useFlowValidations';
import { NodeFactory } from '../factories/NodeFactory';
import { FlowCanvas } from './FlowCanvas';
import { SaveButton } from './ui/SaveButton';
import { NodesPanel } from './panels/NodesPanel';
import { SettingsPanel } from './panels/SettingsPanel';

/**
 * Main Flow Builder Component
 */
export const FlowBuilder = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const [saveError, setSaveError] = useState('');
    const reactFlowWrapper = useRef(null);
    const { project } = useReactFlow();

    // Custom hooks
    const { handleNodeChange } = useNodeOperations(setNodes);
    const { handleConnect } = useEdgeOperations(edges, setEdges);
    const { validateFlow } = useFlowValidation(nodes, edges);

    // Event handlers
    const handleDrop = useCallback((event) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');

        if (!type || !reactFlowBounds) return;

        const position = project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });

        try {
            const newNode = NodeFactory.create(type, position);
            setNodes((nds) => [...nds, newNode]);
        } catch (error) {
            console.error('Failed to create node:', error);
        }
    }, [project, setNodes]);

    const handleDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const handleNodeClick = useCallback((event, node) => {
        setSelectedNode(node);
        setSaveError('');
    }, []);

    const handlePaneClick = useCallback(() => {
        setSelectedNode(null);
        setSaveError('');
    }, []);

    const handleBackToNodes = useCallback(() => {
        setSelectedNode(null);
    }, []);

    const handleSave = useCallback(() => {
        setSaveError('');

        const validation = validateFlow();

        if (!validation.isValid) {
            setSaveError(validation.error);
            return;
        }

        // Here you would typically call an API to save the flow
        console.log('Flow saved successfully!', {
            nodes: nodes.length,
            edges: edges.length,
            timestamp: new Date().toISOString()
        });

        // Show success feedback
        alert('Flow saved successfully!');
    }, [validateFlow, nodes, edges]);

    // Context value
    const contextValue = {
        nodes,
        edges,
        selectedNode,
        saveError,
        onNodesChange,
        onEdgesChange,
        handleConnect,
        handleDrop,
        handleDragOver,
        handleNodeClick,
        handlePaneClick,
        handleSave,
        reactFlowWrapper,
    };

    return (
        <FlowBuilderContext.Provider value={contextValue}>
            <div className="h-screen flex">
                <div className="flex-1 relative">
                    <SaveButton />
                    <FlowCanvas />
                </div>

                {selectedNode ? (
                    <SettingsPanel
                        selectedNode={selectedNode}
                        onNodeChange={handleNodeChange}
                        onBack={handleBackToNodes}
                    />
                ) : (
                    <NodesPanel />
                )}
            </div>
        </FlowBuilderContext.Provider>
    );
};