import { createContext, useContext } from 'react';

export const FlowBuilderContext = createContext(null);

export const useFlowBuilder = () => {
    const context = useContext(FlowBuilderContext);
    if (!context) {
        throw new Error('useFlowBuilder must be used within FlowBuilderProvider');
    }
    return context;
};