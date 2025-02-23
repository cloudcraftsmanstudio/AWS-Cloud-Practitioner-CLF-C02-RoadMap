"use client"

import { FullScreenCalendar } from "@/components/ui/fullscreen-calendar"
import styled from 'styled-components';
import { MenuBar } from "@/components/ui/bottom-menu"
import { useState } from "react"
import React from "react"
import { BackgroundBeams } from "@/components/ui/background-beams"

// Define the event types
interface CalendarEvent {
  id: number;
  name: string;
  time: string;
  datetime: string;
  className: string;
  position: number;
  isStart: boolean;
  isEnd: boolean;
  isMiddle: boolean;
}

interface DayEvents {
  day: Date;
  events: CalendarEvent[];
}

interface Domain {
  name: string;
  days: number;
  className: string;
}

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  user-select: none;
  overflow: visible;
  position: relative;
  z-index: 1;
  transform: scale(0.85);
  transform-origin: top center;

  /* Calendar content layer */
  .calendar-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 2;
    background: transparent;
  }

  * {
    border-color: rgba(255, 255, 255, 0.05) !important;
  }

  // Calendar grid layout
  .grid {
    display: grid !important;
    grid-template-columns: repeat(7, minmax(100px, 1fr));
    grid-template-rows: auto;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: transparent;
    gap: 1px;
  }

  // Calendar cell styling
  .grid > div {
    position: relative;
    min-height: 100px;
    padding: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: transparent;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }

    // Day number styling
    &::before {
      content: attr(data-day);
      position: absolute;
      top: 4px;
      left: 8px;
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  // Event container that spans across days
  .event-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 20px;
    bottom: 0;
    pointer-events: none;
    z-index: 10;
  }

  .domain-event-row {
    position: absolute;
    left: 8px;
    right: 8px;
    height: 28px;
    margin-top: -4px;
    display: flex;
    align-items: center;
  }

  // Domain-specific colors with better contrast
  .domain1-event, .domain2-event, .domain3-event, .domain4-event { 
    margin-top: -4px;
  }

  .domain1-event { 
    background: rgba(255, 213, 213, 0.9);
    color: #000000;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    z-index: 1;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    backdrop-filter: blur(8px);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  .domain2-event { 
    background: rgba(183, 235, 189, 0.9);
    color: #000000;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    z-index: 1;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    backdrop-filter: blur(8px);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  .domain3-event { 
    background: rgba(202, 233, 255, 0.9);
    color: #000000;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    z-index: 1;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    backdrop-filter: blur(8px);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  .domain4-event { 
    background: rgba(243, 213, 249, 0.9);
    color: #000000;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    z-index: 1;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    backdrop-filter: blur(8px);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  // Event name styling
  .event-name {
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    text-align: left;
    font-size: 0.75rem;
    padding: 2px 6px;
  }

  // Event content styling
  .event-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  // Calendar day content
  .day-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 2px;
    padding: 4px 0;
    width: 100%;
    position: relative;
    margin-top: 12px;
  }

  // Hover effect for calendar cells
  .hover\:bg-gray-50:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  /* Add zoomed rule so zoomed events are scaled and translated */
  .zoomed {
    transform: scale(1.1) !important;
    z-index: 2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const BottomMenuContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  display: flex;
  justify-content: center;
  pointer-events: all;
  z-index: 15000;
  
  /* Ensure buttons remain interactive */
  * {
    pointer-events: all !important;
    opacity: 1 !important;
    position: relative;
    z-index: 15000;
  }

  /* Style for active/inactive states without disabling */
  button {
    cursor: pointer !important;
    pointer-events: all !important;
    position: relative;
    z-index: 15000;
    &:hover {
      opacity: 0.8 !important;
    }
  }
`;

interface CalendarDemoProps {
  onRoadmapToggle: (show: boolean) => void;
  onZoomDomain1: (zoom: boolean) => void;
  onZoomDomain2: (zoom: boolean) => void;
  onZoomDomain3: (zoom: boolean) => void;
  onZoomDomain4: (zoom: boolean) => void;
  hideBottomMenu?: boolean;
}

function CalendarDemo({ 
  onRoadmapToggle,
  onZoomDomain1,
  onZoomDomain2,
  onZoomDomain3,
  onZoomDomain4,
  hideBottomMenu = false
}: CalendarDemoProps) {
  const [showRoadmap, setShowRoadmap] = useState(false);

  // Handle roadmap visibility changes
  const handleRoadmapToggle = () => {
    const newValue = !showRoadmap;
    setShowRoadmap(newValue);
    onRoadmapToggle(newValue);
  };

  const menuItems = [
    {
      icon: (props?: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...(props || {})}>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      label: "Toggle Roadmap",
      onClick: handleRoadmapToggle
    },
    {
      icon: () => (
        <div className="text-white text-xs font-semibold">D1</div>
      ),
      label: "Domain 1 Zoom",
      onClick: () => { onRoadmapToggle(true); onZoomDomain1(true); }
    },
    {
      icon: () => (
        <div className="text-white text-xs font-semibold">D2</div>
      ),
      label: "Domain 2 Zoom",
      onClick: () => { onRoadmapToggle(true); onZoomDomain2(true); }
    },
    {
      icon: () => (
        <div className="text-white text-xs font-semibold">D3</div>
      ),
      label: "Domain 3 Zoom",
      onClick: () => { onRoadmapToggle(true); onZoomDomain3(true); }
    },
    {
      icon: () => (
        <div className="text-white text-xs font-semibold">D4</div>
      ),
      label: "Domain 4 Zoom",
      onClick: () => { onRoadmapToggle(true); onZoomDomain4(true); }
    }
  ];

  return (
    <CalendarContainer>
      {/* Background layer */}
      <div className="background-layer">
        <BackgroundBeams className="opacity-80" />
      </div>
      
      {/* Calendar content layer */}
      <div className="calendar-content">
        <FullScreenCalendar 
          data={[]} 
          showRoadmap={showRoadmap}
          zoomDomain1={false}
          zoomDomain2={false}
          zoomDomain3={false}
          zoomDomain4={false}
        />
      </div>

      {/* Menu layer */}
      {!hideBottomMenu && (
        <BottomMenuContainer>
          <MenuBar items={menuItems} />
        </BottomMenuContainer>
      )}
    </CalendarContainer>
  );
}

export { CalendarDemo };