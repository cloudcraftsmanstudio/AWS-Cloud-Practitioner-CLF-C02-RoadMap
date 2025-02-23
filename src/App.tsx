import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactFlowProvider } from 'reactflow';
import Roadmap from './components/Roadmap';
import roadmapData from './data/roadmapData';
import { CalendarDemo } from './components/calendar-demo';
import { MenuBar } from './components/ui/bottom-menu';
import { ContainerScroll } from './components/ui/container-scroll-animation';

const RootContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #000000;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const HeaderContainer = styled.div`
  text-shadow: 0 0 80px rgb(192 219 255 / 0.8), 0 0 32px rgb(65 120 255 / 0.24);
  text-align: center;
  margin-top: 0.5rem;

  h1 {
    background: linear-gradient(to right, #ffffff, #c7d2fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  p {
    color: #94a3b8;
    font-size: 1.125rem;
    margin-top: 0.25rem;
    font-weight: 500;
  }
`;

const RoadmapWrapper = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: ${props => props.$visible ? 1 : 0};
  pointer-events: ${props => props.$visible ? 'all' : 'none'};
  transition: opacity 0.3s ease-in-out;
  z-index: 11000;
  background: rgba(0, 0, 0, 0.9);
`;

// New styled component for the menu container at app level
const AppMenuContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20000;
  pointer-events: none;

  > * {
    pointer-events: all;
  }
`;

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [zoomDomain1, setZoomDomain1] = useState(false);
  const [zoomDomain2, setZoomDomain2] = useState(false);
  const [zoomDomain3, setZoomDomain3] = useState(false);
  const [zoomDomain4, setZoomDomain4] = useState(false);

  // Function to reset all zoom states
  const resetZoom = () => {
    setZoomDomain1(false);
    setZoomDomain2(false);
    setZoomDomain3(false);
    setZoomDomain4(false);
  };

  return (
    <RootContainer>
      <ContainerScroll
        titleComponent={
          <HeaderContainer>
            <h1>AWS Certified Cloud Practitioner</h1>
            <p>CLF-C02 Certification</p>
          </HeaderContainer>
        }
      >
        <CalendarContainer>
          <CalendarDemo 
            onRoadmapToggle={setShowRoadmap}
            onZoomDomain1={(zoom) => {
              if (zoomDomain1) {
                resetZoom();
              } else {
                setShowRoadmap(true);
                resetZoom();
                setZoomDomain1(zoom);
              }
            }}
            onZoomDomain2={(zoom) => {
              if (zoomDomain2) {
                resetZoom();
              } else {
                setShowRoadmap(true);
                resetZoom();
                setZoomDomain2(zoom);
              }
            }}
            onZoomDomain3={(zoom) => {
              if (zoomDomain3) {
                resetZoom();
              } else {
                setShowRoadmap(true);
                resetZoom();
                setZoomDomain3(zoom);
              }
            }}
            onZoomDomain4={(zoom) => {
              if (zoomDomain4) {
                resetZoom();
              } else {
                setShowRoadmap(true);
                resetZoom();
                setZoomDomain4(zoom);
              }
            }}
            hideBottomMenu={true}
          />
        </CalendarContainer>
      </ContainerScroll>
      <ReactFlowProvider>
        <RoadmapWrapper $visible={showRoadmap}>
          <Roadmap 
            initialData={roadmapData}
            zoomDomain1={zoomDomain1}
            zoomDomain2={zoomDomain2}
            zoomDomain3={zoomDomain3}
            zoomDomain4={zoomDomain4}
          />
        </RoadmapWrapper>
      </ReactFlowProvider>
      <AppMenuContainer>
        <MenuBar 
          items={[
            {
              icon: (props?: React.SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...(props || {})}>
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ),
              label: "Toggle Roadmap",
              onClick: () => setShowRoadmap(!showRoadmap)
            },
            {
              icon: () => <div className="text-white text-xs font-semibold">D1</div>,
              label: "Domain 1",
              onClick: () => {
                if (zoomDomain1) {
                  resetZoom();
                } else {
                  setShowRoadmap(true);
                  resetZoom();
                  setZoomDomain1(true);
                }
              }
            },
            {
              icon: () => <div className="text-white text-xs font-semibold">D2</div>,
              label: "Domain 2",
              onClick: () => {
                if (zoomDomain2) {
                  resetZoom();
                } else {
                  setShowRoadmap(true);
                  resetZoom();
                  setZoomDomain2(true);
                }
              }
            },
            {
              icon: () => <div className="text-white text-xs font-semibold">D3</div>,
              label: "Domain 3",
              onClick: () => {
                if (zoomDomain3) {
                  resetZoom();
                } else {
                  setShowRoadmap(true);
                  resetZoom();
                  setZoomDomain3(true);
                }
              }
            },
            {
              icon: () => <div className="text-white text-xs font-semibold">D4</div>,
              label: "Domain 4",
              onClick: () => {
                if (zoomDomain4) {
                  resetZoom();
                } else {
                  setShowRoadmap(true);
                  resetZoom();
                  setZoomDomain4(true);
                }
              }
            }
          ]} 
        />
      </AppMenuContainer>
    </RootContainer>
  );
};

export default App;