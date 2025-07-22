import { useCallback } from 'react';
import { addEdge } from 'reactflow';

/**
 * Custom hook for edge operations with business rules
 */
export const useEdgeOperations = (edges, setEdges) => {
    const handleConnect = useCallback((params) => {
        // Business rule: Only one edge per source handle
        const existingEdge = edges.find(edge =>
            edge.source === params.source && edge.sourceHandle === params.sourceHandle
        );

        if (existingEdge) {
            setEdges((eds) => eds.filter(edge => edge.id !== existingEdge.id));
        }

        setEdges((eds) => addEdge(params, eds));
    }, [edges, setEdges]);

    return { handleConnect };
};