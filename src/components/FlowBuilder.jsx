// ===== FILE: src/components/FlowBuilder.jsx =====
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
            return false;
        }

        // Here you would typically call an API to save the flow
        console.log('Flow saved successfully!', {
            nodes: nodes.length,
            edges: edges.length,
            timestamp: new Date().toISOString()
        });

        return true;
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
            <div className="h-screen flex bg-gradient-to-br from-gray-50 to-slate-100">
                <div className="flex-1 relative overflow-hidden">
                    <SaveButton />
                    <FlowCanvas />

                    {/* Empty State */}
                    {nodes.length === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg max-w-md">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Start Building Your Flow</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Drag components from the right panel to create your chatbot conversation flow.
                                    Connect them to define the conversation path.
                                </p>
                            </div>
                        </div>
                    )}
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