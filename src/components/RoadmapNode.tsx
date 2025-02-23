import React, { useState } from 'react';
import styled from 'styled-components';
import { Handle, Position, NodeProps } from 'reactflow';
import { motion, AnimatePresence } from "framer-motion";
import { GradientTracing } from "./ui/gradient-tracing";
import { LinkBox } from "./ui/link-box";

const NodeWrapper = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  min-width: 200px;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #00A3FF;
  cursor: pointer;
  position: relative;
`;

const NodeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  text-align: center;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #232F3E;
`;

const Description = styled.div`
  font-size: 0.9rem;
  color: #666666;
  line-height: 1.4;
`;

const LinkContainer = styled(motion.div)`
  position: absolute;
  left: -200px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  width: 180px;
`;

const RoadmapNode: React.FC<NodeProps> = ({ data }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <NodeWrapper onClick={() => setShowLinks(!showLinks)}>
        <NodeContent>
          <Handle type="target" position={Position.Top} />
          <Title>{data?.title}</Title>
          {data?.description && <Description>{data?.description}</Description>}
          <Handle type="source" position={Position.Bottom} />
        </NodeContent>
      </NodeWrapper>

      <AnimatePresence>
        {showLinks && data?.githubUrl && data?.youtubeUrl && (
          <>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute left-0 top-1/2 -translate-y-1/2"
              style={{ width: '200px', height: '2px' }}
            >
              <GradientTracing
                width={200}
                height={2}
                baseColor="#4f46e5"
                gradientColors={["#4f46e5", "#06b6d4", "#0ea5e9"]}
                animationDuration={2.5}
                strokeWidth={2}
              />
            </motion.div>

            <LinkContainer
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.1 }}
            >
              <LinkBox
                title={data?.title}
                description={data?.description}
                githubUrl={data?.githubUrl}
                youtubeUrl={data?.youtubeUrl}
                isIntroNode={data?.type === 'introduction'}
              />
            </LinkContainer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default RoadmapNode;