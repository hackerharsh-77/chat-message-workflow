import { MessageCircle, GitBranch, Image as ImageIcon } from 'lucide-react';
import { NODE_TYPES } from '../constants/nodeTypes';
import { TextMessageNode } from '../components/nodes/TextMessageNode';

/**
 * Node type registry - easily extensible
 */
export const nodeTypes = {
    [NODE_TYPES.TEXT_MESSAGE]: TextMessageNode,
    // Future node types will be registered here
};

/**
 * Node configuration for the nodes panel
 */
export const NODE_CONFIGS = [
    {
        type: NODE_TYPES.TEXT_MESSAGE,
        label: 'Message',
        icon: MessageCircle,
        description: 'Send a text message',
    },
    // Future configurations:
    // {
    //   type: NODE_TYPES.IMAGE_MESSAGE,
    //   label: 'Image',
    //   icon: ImageIcon,
    //   description: 'Send an image',
    // },
];