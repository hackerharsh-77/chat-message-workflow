import { useCallback } from 'react';

/**
 * Custom hook for managing node operations
 */
export const useNodeOperations = (setNodes) => {
    const handleNodeChange = useCallback((nodeId, newData) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === nodeId) {
                    return {
                        ...node,
                        data: { ...node.data, ...newData },
                    };
                }
                return node;
            })
        );
    }, [setNodes]);

    return { handleNodeChange };
};