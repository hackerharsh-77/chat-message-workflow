import { nodeIdGenerator } from '../utils/NodeIdGenerator';
import { NODE_TYPES } from '../constants/nodeTypes';

/**
 * Node factory for creating different types of nodes
 */
export class NodeFactory {
    static create(type, position, additionalData = {}) {
        const baseNode = {
            id: nodeIdGenerator.generate(),
            type,
            position,
            data: { ...additionalData },
        };

        switch (type) {
            case NODE_TYPES.TEXT_MESSAGE:
                return {
                    ...baseNode,
                    data: {
                        message: 'test message',
                        ...additionalData,
                    },
                };
            default:
                throw new Error(`Unknown node type: ${type}`);
        }
    }
}