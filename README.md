# 🤖 Chatbot Flow Builder

A modern, intuitive visual flow builder for creating chatbot conversation flows. Built with React and React Flow, featuring a production-ready architecture with beautiful UI design.

## 🚀 Live Demo

**[View Live Application](https://chat-message-workflow.vercel.app/)**

## ✨ Features

### 🎯 Core Functionality
- **Visual Flow Builder**: Drag-and-drop interface for creating conversation flows
- **Text Message Nodes**: Support for text-based conversation nodes
- **Smart Connections**: Connect nodes with validation rules
- **Real-time Editing**: Instant updates to node content and flow structure
- **Flow Validation**: Prevents invalid flow configurations before saving
- **Responsive Design**: Works seamlessly across desktop and tablet devices

### 🎨 Modern UI/UX
- **Beautiful Design**: Modern gradient-based UI with smooth animations
- **Interactive Feedback**: Hover effects, transitions, and visual state changes
- **Professional Layout**: Clean, organized interface with intuitive navigation
- **Empty State Guidance**: Helpful onboarding for new users
- **Visual Node Handles**: Color-coded connection points (blue for output, purple for input)

### 🏗️ Technical Excellence
- **Modular Architecture**: Well-organized codebase with separation of concerns
- **Custom Hooks**: Reusable business logic with React hooks
- **Context Management**: Centralized state management with React Context
- **Factory Pattern**: Extensible node creation system
- **Production Ready**: Scalable architecture suitable for enterprise use

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Flow Library**: React Flow
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Language**: JavaScript (TypeScript-ready architecture)

## 📁 Project Structure

```
src/
├── App.jsx                          # Root component
├── components/
│   ├── FlowBuilder.jsx             # Main flow builder container
│   ├── FlowCanvas.jsx              # React Flow canvas wrapper
│   ├── common/
│   │   ├── BaseNode.jsx            # Base node component
│   │   └── NodeHandle.jsx          # Reusable handle component
│   ├── nodes/
│   │   └── TextMessageNode.jsx     # Text message node implementation
│   ├── panels/
│   │   ├── NodesPanel.jsx          # Left sidebar with available nodes
│   │   ├── SettingsPanel.jsx       # Right sidebar for node settings
│   │   └── DraggableNodeItem.jsx   # Individual draggable node item
│   └── ui/
│       └── SaveButton.jsx          # Save button with validation
├── config/
│   └── nodeConfig.js               # Node types registry and configs
├── constants/
│   └── nodeTypes.js                # Constants and validation rules
├── context/
│   └── FlowBuilderContext.js       # React context for state management
├── factories/
│   └── NodeFactory.js              # Factory pattern for node creation
├── hooks/
│   ├── useNodeOperations.js        # Custom hook for node operations
│   ├── useEdgeOperations.js        # Custom hook for edge operations
│   └── useFlowValidation.js        # Custom hook for flow validation
└── utils/
    └── NodeIdGenerator.js          # Utility for generating unique IDs
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chatbot-flow-builder.git
   cd chatbot-flow-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📖 How to Use

### 1. **Adding Nodes**
- Drag the "Message" component from the right panel onto the canvas
- Multiple nodes can be added to create complex flows

### 2. **Connecting Nodes**
- Click and drag from the **blue handle** (output) of one node
- Connect to the **purple handle** (input) of another node
- Each output can connect to multiple inputs
- Each output handle can only have one connection (existing connections are replaced)

### 3. **Editing Messages**
- Click on any node to select it
- The right panel will switch to settings mode
- Edit the message content in the text area
- Changes are reflected immediately in the node

### 4. **Saving Your Flow**
- Click the "Save Changes" button in the top-right corner
- The system validates your flow before saving
- Error messages appear if validation fails

### 5. **Validation Rules**
- Flows with multiple nodes must have at most one node without incoming connections
- This ensures a clear conversation entry point

## 🔧 Extending the Application

### Adding New Node Types

1. **Define the node type**
   ```javascript
   // src/constants/nodeTypes.js
   export const NODE_TYPES = {
     TEXT_MESSAGE: 'textMessage',
     IMAGE_MESSAGE: 'imageMessage', // New type
   };
   ```

2. **Create the component**
   ```javascript
   // src/components/nodes/ImageMessageNode.jsx
   export const ImageMessageNode = ({ data, selected }) => (
     <BaseNode selected={selected}>
       {/* Your component implementation */}
     </BaseNode>
   );
   ```

3. **Register the node**
   ```javascript
   // src/config/nodeConfig.js
   export const nodeTypes = {
     [NODE_TYPES.TEXT_MESSAGE]: TextMessageNode,
     [NODE_TYPES.IMAGE_MESSAGE]: ImageMessageNode,
   };
   ```

### Adding Custom Validation Rules

```javascript
// src/constants/nodeTypes.js
export const VALIDATION_RULES = {
  MAX_EMPTY_TARGET_NODES: 1,
  MIN_NODES_REQUIRED: 2,        // New rule
  MAX_DEPTH_ALLOWED: 10,        // New rule
};
```

## 📊 Architecture Highlights

### Design Patterns Used
- **Factory Pattern**: For creating different node types
- **Context Pattern**: For state management
- **Custom Hooks Pattern**: For reusable business logic
- **Component Composition**: For building complex UI from simple components

### Key Architectural Decisions
- **Separation of Concerns**: Clear separation between UI, business logic, and data
- **Extensibility**: Easy to add new node types and features
- **Maintainability**: Well-organized code structure with clear interfaces
- **Performance**: Optimized with React hooks and memoization
- **Accessibility**: ARIA labels and semantic HTML structure

## 🙏 Acknowledgments

- **React Flow** - For the excellent flow building library
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide React** - For the beautiful icon set
- **Vercel** - For the seamless deployment platform
