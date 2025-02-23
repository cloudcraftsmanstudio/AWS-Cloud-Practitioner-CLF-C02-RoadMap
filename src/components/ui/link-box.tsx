"use client"

import React from "react"
import { motion } from "framer-motion"

interface LinkBoxProps {
  githubUrl: string
  youtubeUrl: string
  title: string
  description: string
  isIntroNode?: boolean
}

export const LinkBox: React.FC<LinkBoxProps> = ({
  githubUrl,
  youtubeUrl,
  title,
  description,
  isIntroNode = false
}) => {
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Rainbow glow effect with reduced intensity */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/40 via-pink-600/40 to-blue-600/40 rounded-lg blur-[2px] opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      
      {/* Main container with reduced size */}
      <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl min-w-[180px]">
        <div className="flex flex-col gap-2">
          <a 
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#ff0000] hover:bg-[#cc0000] text-white px-4 py-1.5 rounded-md transition-colors w-full justify-center text-xs"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            {isIntroNode ? 'YouTube Playlist' : 'YouTube'}
          </a>
          {!isIntroNode && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#f4b400] hover:bg-[#f09a00] text-white px-4 py-1.5 rounded-md transition-colors w-full justify-center text-xs"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z"/>
              </svg>
              Slides
            </a>
          )}
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#2b3137] hover:bg-[#373e47] text-white px-4 py-1.5 rounded-md transition-colors w-full justify-center text-xs"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            {isIntroNode ? 'Mock Exam' : 'Practice Test'}
          </a>
        </div>
      </div>
    </motion.div>
  )
} 