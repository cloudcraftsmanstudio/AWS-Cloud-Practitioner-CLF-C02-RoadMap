import * as React from "react"
import { format, isSameDay, startOfMonth, addDays, getDay } from "date-fns"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { MovingBorder } from "@/components/ui/moving-border"
import { GooeyText } from "@/components/ui/gooey-text-morphing"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { FloatingAwsIcons } from "@/components/ui/floating-aws-icons"

interface Event {
  id: number
  name: string
  time: string
  datetime: string
  className?: string
  isStart?: boolean
  isEnd?: boolean
  isMiddle?: boolean
  position?: number
}

interface CalendarData {
  day: Date
  events: Event[]
}

interface FullScreenCalendarProps {
  data: CalendarData[]
  showRoadmap: boolean
  zoomDomain1: boolean
  zoomDomain2: boolean
  zoomDomain3: boolean
  zoomDomain4: boolean
}

export function FullScreenCalendar({ 
  data, 
  showRoadmap,
  zoomDomain1,
  zoomDomain2,
  zoomDomain3,
  zoomDomain4 
}: FullScreenCalendarProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const days = React.useMemo(() => {
    const result: number[] = [];
    const totalDays = 30;

    // Create array of 30 numbers (1-30)
    for (let i = 1; i <= totalDays; i++) {
      result.push(i);
    }

    return result;
  }, []);

  const getEventStyle = (event: Event) => {
    const baseStyle = "domain-event";
    const zoomStyle = "zoomed";
    
    let isZoomed = false;
    let shouldShow = true;
    
    // Check if any domain is zoomed
    const anyDomainZoomed = zoomDomain1 || zoomDomain2 || zoomDomain3 || zoomDomain4;
    
    // Determine if this event should be zoomed and visible
    if (event.className === "domain1-event") {
      isZoomed = zoomDomain1;
      shouldShow = !anyDomainZoomed || zoomDomain1;
    } else if (event.className === "domain2-event") {
      isZoomed = zoomDomain2;
      shouldShow = !anyDomainZoomed || zoomDomain2;
    } else if (event.className === "domain3-event") {
      isZoomed = zoomDomain3;
      shouldShow = !anyDomainZoomed || zoomDomain3;
    } else if (event.className === "domain4-event") {
      isZoomed = zoomDomain4;
      shouldShow = !anyDomainZoomed || zoomDomain4;
    }
    
    // If event should not be shown, add a class to hide it
    if (!shouldShow) {
      return cn(baseStyle, event.className, "opacity-10");
    }
    
    // If event should be zoomed, add zoom style
    if (isZoomed) {
      return cn(baseStyle, event.className, "z-50", zoomStyle);
    }
    
    return cn(baseStyle, event.className);
  };

  return (
    <div className="flex flex-1 flex-col relative">
      {/* Add FloatingAwsIcons as background */}
      <div className="absolute inset-0 z-0">
        <FloatingAwsIcons />
      </div>
      
      <div className="flex flex-auto flex-col relative z-20">
        <div className="grid grid-cols-7 text-center text-xs font-semibold text-white bg-gradient-to-r from-[#232f3e] to-[#0073bb] border-b border-white/10">
          <div className="border-r border-white/10 py-3">Mon</div>
          <div className="border-r border-white/10 py-3">Tue</div>
          <div className="border-r border-white/10 py-3">Wed</div>
          <div className="border-r border-white/10 py-3">Thu</div>
          <div className="border-r border-white/10 py-3">Fri</div>
          <div className="border-r border-white/10 py-3">Sat</div>
          <div className="py-3">Sun</div>
        </div>

        <div className="flex-1">
          <div className="grid h-full grid-cols-7 grid-rows-5">
            {days.map((day, dayIdx) => (
              <div
                key={dayIdx}
                className={cn(
                  "relative border-b border-r p-2",
                  "min-h-[100px]",
                  "hover:bg-black/5 bg-transparent"
                )}
              >
                <div className="ml-auto block text-sm text-white">
                  {day}
                </div>
              </div>
            ))}
          </div>
          
          {/* Overlay for continuous events */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full">
              {/* Manual Domain 1 placement - Days 1-4 */}
              <div
                className={cn(
                  "absolute flex items-center",
                  "bg-transparent relative h-8 p-[1px] overflow-hidden",
                  {
                    'zoomed': zoomDomain1
                  }
                )}
                style={{
                  top: '180px',
                  left: '0%',
                  width: `${4 * (100/7)}%`,
                  borderRadius: '0.75rem',
                  zIndex: 10
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: 'calc(0.75rem * 0.96)' }}
                >
                  <MovingBorder duration={25000} rx="30%" ry="30%">
                  </MovingBorder>
                </div>
                <div
                  className={cn(
                    "relative bg-[#fff3b0] flex items-center w-full h-full text-[12px] antialiased border border-[#fff3b0]",
                    "domain1-event !bg-transparent font-['Tangerine']"
                  )}
                  style={{
                    borderRadius: 'calc(0.75rem * 0.96)',
                  }}
                >
                  <div className="flex w-full justify-around px-1">
                    <span className="bg-gradient-to-r from-[#ffed4a] to-[#ffd700] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 1: Day 1</span>
                    <span className="bg-gradient-to-r from-[#ffed4a] to-[#ffd700] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 1: Day 2</span>
                    <span className="bg-gradient-to-r from-[#ffed4a] to-[#ffd700] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 1: Day 3</span>
                    <span className="bg-gradient-to-r from-[#ffed4a] to-[#ffd700] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 1: Day 4</span>
                  </div>
                </div>
              </div>

              {/* Manual Domain 2 placement - Days 5-7 (First Row) */}
              <div
                className={cn(
                  "absolute flex items-center",
                  "bg-transparent relative h-8 p-[1px] overflow-hidden",
                  {
                    'zoomed': zoomDomain2
                  }
                )}
                style={{
                  top: '170px',
                  left: `${4 * (100/7)}%`,
                  width: `${3 * (100/7)}%`,
                  borderRadius: '0.75rem',
                  zIndex: 10
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: 'calc(0.75rem * 0.96)' }}
                >
                  <MovingBorder duration={25000} rx="30%" ry="30%">
                  </MovingBorder>
                </div>
                <div
                  className={cn(
                    "relative bg-[#b7ebbd] flex items-center w-full h-full text-[12px] antialiased border border-[#b7ebbd]",
                    "domain2-event !bg-transparent font-['Tangerine']"
                  )}
                  style={{
                    borderRadius: 'calc(0.75rem * 0.96)',
                  }}
                >
                  <div className="flex w-full justify-around px-1">
                    <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 2: Day 1</span>
                    <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 2: Day 2</span>
                    <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 2: Day 3</span>
                  </div>
                </div>
              </div>

              {/* Manual Domain 2 placement - Days 8-11 (Second Row) */}
              <div
                className={cn(
                  "absolute flex items-center",
                  "bg-transparent relative h-8 p-[1px] overflow-hidden",
                  {
                    'zoomed': zoomDomain2
                  }
                )}
                style={{
                  top: '270px',
                  left: '0%',
                  width: `${4 * (100/7)}%`,
                  borderRadius: '0.75rem',
                  zIndex: 10
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: 'calc(0.75rem * 0.96)' }}
                >
                  <MovingBorder duration={25000} rx="30%" ry="30%">
                  </MovingBorder>
                </div>
                <div
                  className={cn(
                    "relative bg-[#b7ebbd] flex items-center w-full h-full text-[12px] antialiased border border-[#b7ebbd]",
                    "domain2-event !bg-transparent font-['Tangerine']"
                  )}
                  style={{
                    borderRadius: 'calc(0.75rem * 0.96)',
                  }}
                >
                  <div className="flex w-full justify-around px-1">
                    <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 2: Day 4</span>
                    <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 2: Day 5</span>
                    <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 2: Day 6</span>
                    <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 2: Day 7</span>
                  </div>
                </div>
              </div>

              {/* Manual Domain 3 placement - Days 12-14 (Second Row) */}
              <div
                className={cn(
                  "absolute flex items-center",
                  "bg-transparent relative h-8 p-[1px] overflow-hidden",
                  {
                    'zoomed': zoomDomain3
                  }
                )}
                style={{
                  top: '260px',
                  left: `${4 * (100/7)}%`,
                  width: `${3 * (100/7)}%`,
                  borderRadius: '0.75rem',
                  zIndex: 10
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: 'calc(0.75rem * 0.96)' }}
                >
                  <MovingBorder duration={25000} rx="30%" ry="30%">
                  </MovingBorder>
                </div>
                <div
                  className={cn(
                    "relative bg-[#cae9ff] flex items-center w-full h-full text-[12px] antialiased border border-[#cae9ff]",
                    "domain3-event !bg-transparent font-['Tangerine']"
                  )}
                  style={{
                    borderRadius: 'calc(0.75rem * 0.96)',
                  }}
                >
                  <div className="flex w-full justify-around px-1">
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 1</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 2</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 3</span>
                  </div>
                </div>
              </div>

              {/* Manual Domain 3 placement - Days 15-21 (Third Row) */}
              <div
                className={cn(
                  "absolute flex items-center",
                  "bg-transparent relative h-8 p-[1px] overflow-hidden",
                  {
                    'zoomed': zoomDomain3
                  }
                )}
                style={{
                  top: '360px',
                  left: '0%',
                  width: `${7 * (100/7)}%`,
                  borderRadius: '0.75rem',
                  zIndex: 10
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: 'calc(0.75rem * 0.96)' }}
                >
                  <MovingBorder duration={25000} rx="30%" ry="30%">
                  </MovingBorder>
                </div>
                <div
                  className={cn(
                    "relative bg-[#cae9ff] flex items-center w-full h-full text-[12px] antialiased border border-[#cae9ff]",
                    "domain3-event !bg-transparent font-['Tangerine']"
                  )}
                  style={{
                    borderRadius: 'calc(0.75rem * 0.96)',
                  }}
                >
                  <div className="flex w-full justify-around px-1">
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 4</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 5</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 6</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 7</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 8</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 9</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 10</span>
                  </div>
                </div>
              </div>

              {/* Manual Domain 3 placement - Days 20-26 (Fourth Row) */}
              <div
                className={cn(
                  "absolute flex items-center",
                  "bg-transparent relative h-8 p-[1px] overflow-hidden",
                  {
                    'zoomed': zoomDomain3
                  }
                )}
                style={{
                  top: '480px',
                  left: '0%',
                  width: `${5 * (100/7)}%`,
                  borderRadius: '0.75rem',
                  zIndex: 10
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: 'calc(0.75rem * 0.96)' }}
                >
                  <MovingBorder duration={25000} rx="30%" ry="30%">
                  </MovingBorder>
                </div>
                <div
                  className={cn(
                    "relative bg-[#cae9ff] flex items-center w-full h-full text-[12px] antialiased border border-[#cae9ff]",
                    "domain3-event !bg-transparent font-['Tangerine']"
                  )}
                  style={{
                    borderRadius: 'calc(0.75rem * 0.96)',
                  }}
                >
                  <div className="flex w-full justify-around px-1">
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 11</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 12</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 13</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 14</span>
                    <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 3: Day 15</span>
                  </div>
                </div>
              </div>

              {/* Manual Domain 4 placement - Days 27-28 (Fourth Row) */}
              <div
                className={cn(
                  "absolute flex items-center",
                  "bg-transparent relative h-8 p-[1px] overflow-hidden",
                  {
                    'zoomed': zoomDomain4
                  }
                )}
                style={{
                  top: '470px',
                  left: `${5 * (100/7)}%`,
                  width: `${2 * (100/7)}%`,
                  borderRadius: '0.75rem',
                  zIndex: 10
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: 'calc(0.75rem * 0.96)' }}
                >
                  <MovingBorder duration={25000} rx="30%" ry="30%">
                  </MovingBorder>
                </div>
                <div
                  className={cn(
                    "relative bg-[#f3d5f9] flex items-center w-full h-full text-[12px] antialiased border border-[#f3d5f9]",
                    "domain4-event !bg-transparent font-['Tangerine']"
                  )}
                  style={{
                    borderRadius: 'calc(0.75rem * 0.96)',
                  }}
                >
                  <div className="flex w-full justify-around px-1">
                    <span className="bg-gradient-to-r from-[#e879f9] to-[#d946ef] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 4: Day 1</span>
                    <span className="bg-gradient-to-r from-[#e879f9] to-[#d946ef] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 4: Day 2</span>
                  </div>
                </div>
              </div>

              {/* Manual Domain 4 placement - Days 29-30 (Fifth Row) */}
              <div
                      className={cn(
                  "absolute flex items-center",
                  "bg-transparent relative h-8 p-[1px] overflow-hidden",
                  {
                    'zoomed': zoomDomain4
                        }
                      )}
                      style={{
                  top: '580px',
                  left: '0%',
                  width: `${2 * (100/7)}%`,
                  borderRadius: '0.75rem',
                  zIndex: 10
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: 'calc(0.75rem * 0.96)' }}
                >
                  <MovingBorder duration={25000} rx="30%" ry="30%">
                  </MovingBorder>
                </div>
                <div
                  className={cn(
                    "relative bg-[#f3d5f9] flex items-center w-full h-full text-[12px] antialiased border border-[#f3d5f9]",
                    "domain4-event !bg-transparent font-['Tangerine']"
                  )}
                  style={{
                    borderRadius: 'calc(0.75rem * 0.96)',
                  }}
                >
                  <div className="flex w-full justify-around px-1">
                    <span className="bg-gradient-to-r from-[#e879f9] to-[#d946ef] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 4: Day 3</span>
                    <span className="bg-gradient-to-r from-[#e879f9] to-[#d946ef] text-transparent bg-clip-text font-['Tangerine'] font-extrabold tracking-wider whitespace-nowrap px-0.5 text-[22px] antialiased subpixel-antialiased text-rendering-optimizeLegibility drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Domain 4: Day 4</span>
                  </div>
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
      {/* Position GooeyText next to the D4 button */}
      <div className="fixed bottom-[60px] left-[50%] translate-x-[-50%] z-[20000] flex items-center h-[50px]">
        <GooeyText
          texts={[
            "Road Map",
            "30 Days Study Guide"
          ]}
          morphTime={3.0}
          cooldownTime={2.0}
          className="text-white font-bold min-w-[500px] transition-opacity duration-1000 ease-in-out"
          textClassName="!text-white !text-3xl font-bold tracking-wider opacity-90 blur-[0.2px]"
        />
      </div>
    </div>
  )
}
