import { Node, Edge } from 'reactflow';

export interface ServiceNodeData {
  id: string;
  type: 'service' | 'category' | 'introduction';
  title: string;
  description?: string;
  completed?: boolean;
  color?: string;
  style?: {
    backgroundColor?: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
  };
}

export type RoadmapNode = Node<ServiceNodeData>;

export interface RoadmapData {
  nodes: RoadmapNode[];
  edges: Edge[];
} 