import { useCallback } from 'react';
import { VALIDATION_RULES } from '../constants/nodeTypes';

/**
 * Custom hook for flow validation
 */
export const useFlowValidation = (nodes, edges) => {
    const validateFlow = useCallback(() => {
        if (nodes.length <= 1) return { isValid: true };

        const nodesWithoutTargets = nodes.filter(node => {
            return !edges.some(edge => edge.target === node.id);
        });

        const isValid = nodesWithoutTargets.length <= VALIDATION_RULES.MAX_EMPTY_TARGET_NODES;

        return {
            isValid,
            error: isValid ? null : 'Cannot save Flow',
            nodesWithoutTargets,
        };
    }, [nodes, edges]);

    return { validateFlow };
};
