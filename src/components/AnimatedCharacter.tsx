import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Character = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 1000;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
`;

const CharacterEmoji = styled(motion.div)`
  font-size: 28px;
  line-height: 1;
  transform-origin: center;
`;

interface AnimatedCharacterProps {
  targetNodeId: string | null;
  nodePositions: Record<string, { x: number; y: number }>;
}

export const AnimatedCharacter: React.FC<AnimatedCharacterProps> = ({
  targetNodeId,
  nodePositions,
}) => {
  const [prevPosition, setPrevPosition] = useState<{ x: number; y: number } | null>(null);
  const [isJumping, setIsJumping] = useState(false);
  
  const currentPosition = targetNodeId ? nodePositions[targetNodeId] : null;

  useEffect(() => {
    if (targetNodeId && currentPosition) {
      setIsJumping(true);
      const timer = setTimeout(() => setIsJumping(false), 500);
      setPrevPosition(currentPosition);
      return () => clearTimeout(timer);
    }
  }, [targetNodeId, currentPosition]);

  if (!currentPosition) return null;

  const xOffset = -20;
  const yOffset = -20;

  return (
    <AnimatePresence>
      <Character
        key={targetNodeId}
        initial={{ 
          x: prevPosition ? prevPosition.x + xOffset : currentPosition.x + xOffset,
          y: prevPosition ? prevPosition.y + yOffset : currentPosition.y + yOffset,
          scale: prevPosition ? 1 : 0
        }}
        animate={{ 
          x: currentPosition.x + xOffset,
          y: currentPosition.y + yOffset,
          scale: 1,
          ...(isJumping ? {
            y: [
              currentPosition.y + yOffset,
              currentPosition.y + yOffset - 40,
              currentPosition.y + yOffset
            ]
          } : {})
        }}
        transition={{ 
          type: "spring",
          stiffness: 500,
          damping: 25,
          y: isJumping ? {
            duration: 0.5,
            times: [0, 0.5, 1],
            ease: "easeInOut"
          } : undefined
        }}
      >
        <CharacterEmoji
          animate={{
            rotate: isJumping ? [0, -10, 10, -10, 0] : 0,
            scale: isJumping ? [1, 1.2, 1] : 1
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          {isJumping ? "🦘" : "🚀"}
        </CharacterEmoji>
      </Character>
    </AnimatePresence>
  );
};

export default AnimatedCharacter;