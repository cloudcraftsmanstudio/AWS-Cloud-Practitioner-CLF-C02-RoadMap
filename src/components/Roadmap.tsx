import React, { useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import styled from 'styled-components';
import RoadmapNode from './RoadmapNode';
import { RoadmapNodes } from './roadmap-nodes';
import { RoadmapData } from '../types/RoadmapTypes';

const RoadmapContainer = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 1000;

  .react-flow__renderer {
    background: transparent;
  }

  .react-flow__pane {
    background: transparent;
  }

  .react-flow__background {
    background: transparent;
  }

  /* Position controls away from the bottom menu */
  .react-flow__controls {
    bottom: 100px;
    right: 20px;
    z-index: 1000;
  }

  /* Ensure controls don't interfere with menu */
  .react-flow__controls button {
    z-index: 1000;
  }

  .react-flow__node {
    width: auto;
    height: auto;
  }

  /* Ensure pan mode doesn't block menu */
  .react-flow__pane {
    z-index: 1;
  }
`;

const nodeTypes = {
  roadmapNode: RoadmapNode,
};

interface RoadmapProps {
  initialData: RoadmapData;
  zoomDomain1?: boolean;
  zoomDomain2?: boolean;
  zoomDomain3?: boolean;
  zoomDomain4?: boolean;
}

const Roadmap: React.FC<RoadmapProps> = ({ 
  initialData,
  zoomDomain1,
  zoomDomain2,
  zoomDomain3,
  zoomDomain4
}) => {
  const [nodes] = useNodesState(initialData.nodes);
  const [edges] = useEdgesState(initialData.edges);
  const { setViewport, fitView } = useReactFlow();

  // Function to get domain nodes including all task nodes
  const getDomainNodes = (domainNumber: string) => {
    // Get all nodes that belong to this domain
    return nodes.filter(node => {
      const nodeId = node.id.toLowerCase();
      return nodeId === `domain${domainNumber}` || 
             nodeId.startsWith(`task${domainNumber}.`);
    });
  };

  // Function to zoom to a specific domain
  const zoomToDomain = (domainNumber: string) => {
    if (domainNumber === '3') {
      // Find Domain 3 and Task 3.3 nodes (instead of 3.8)
      const domain3Node = nodes.find(node => node.id === 'domain3');
      const task33Node = nodes.find(node => node.id === 'task3.3');

      if (domain3Node && task33Node) {
        console.log('Domain 3 node:', domain3Node.position);
        console.log('Task 3.3 node:', task33Node.position);

        // Calculate the bounds that include both nodes
        const minX = Math.min(domain3Node.position.x, task33Node.position.x) - 100;
        const maxX = Math.max(
          domain3Node.position.x + (domain3Node.width || 200),
          task33Node.position.x + (task33Node.width || 200)
        ) + 100;
        const minY = Math.min(domain3Node.position.y, task33Node.position.y) - 50;
        const maxY = Math.max(
          domain3Node.position.y + (domain3Node.height || 100),
          task33Node.position.y + (task33Node.height || 100)
        ) + 50;

        const width = maxX - minX;
        const height = maxY - minY;
        const centerX = minX + width / 2;
        const centerY = minY + height / 2;

        // Calculate zoom level
        const widthZoom = window.innerWidth / width;
        const heightZoom = window.innerHeight / height;
        const zoom = Math.min(widthZoom, heightZoom) * 0.95; // 95% of the calculated zoom

        // Move viewport to center of the area
        setViewport({
          x: -centerX + window.innerWidth / 2,
          y: -centerY + window.innerHeight / 2,
          zoom: Math.min(Math.max(zoom, 0.3), 0.9)
        }, { duration: 800 });
        return;
      }
    }

    // For other domains, use the original logic
    const domainNodes = getDomainNodes(domainNumber);
    if (domainNodes.length === 0) return;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    domainNodes.forEach(node => {
      const nodeWidth = node.width || 200;
      const nodeHeight = node.height || 100;
      
      minX = Math.min(minX, node.position.x);
      maxX = Math.max(maxX, node.position.x + nodeWidth);
      minY = Math.min(minY, node.position.y);
      maxY = Math.max(maxY, node.position.y + nodeHeight);
    });

    // Add padding
    const padding = 50;
    minX -= padding;
    maxX += padding;
    minY -= padding;
    maxY += padding;

    const width = maxX - minX;
    const height = maxY - minY;
    const centerX = minX + width / 2;
    const centerY = minY + height / 2;

    const widthZoom = window.innerWidth / width;
    const heightZoom = window.innerHeight / height;
    let zoom = Math.min(widthZoom, heightZoom) * 0.9;

    // Clamp zoom level
    zoom = Math.min(Math.max(zoom, 0.3), 0.9);

    setViewport({
      x: -centerX + window.innerWidth / 2,
      y: -centerY + window.innerHeight / 2,
      zoom
    }, { duration: 800 });
  };

  // Watch for zoom changes
  useEffect(() => {
    if (zoomDomain1) zoomToDomain('1');
    else if (zoomDomain2) zoomToDomain('2');
    else if (zoomDomain3) zoomToDomain('3');
    else if (zoomDomain4) zoomToDomain('4');
    else {
      fitView({ padding: 0.2, duration: 800 });
    }
  }, [zoomDomain1, zoomDomain2, zoomDomain3, zoomDomain4]);

  return (
    <RoadmapContainer>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.2}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        fitViewOptions={{
          padding: 0.2,
          includeHiddenNodes: true,
          minZoom: 0.2,
          maxZoom: 1.0
        }}
      >
        <Background />
        <Controls />
      </ReactFlow>
      <div className="absolute inset-0 pointer-events-none">
        <RoadmapNodes />
      </div>
    </RoadmapContainer>
  );
};

export default Roadmap;