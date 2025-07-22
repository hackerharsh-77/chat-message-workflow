import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import { FlowBuilder } from './components/FlowBuilder';

/**
 * Root App Component
 */
const App = () => {
  return (
    <ReactFlowProvider>
      <div className="w-full h-screen">
        <FlowBuilder />
      </div>
    </ReactFlowProvider>
  );
};

export default App;