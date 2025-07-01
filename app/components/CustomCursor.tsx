'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(target.tagName === 'BUTTON' || target.tagName === 'A' || 
                    target.closest('button') !== null || target.closest('a') !== null ||
                    target.closest('.group') !== null)
    }

    window.addEventListener('mousemove', (e) => {
      updateMousePosition(e)
      updateHoverState(e)
    })
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[100] rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,  // Reduced from 16
          y: mousePosition.y - 8,  // Reduced from 16
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="relative w-4 h-4"> {/* Reduced from w-8 h-8 */}
          <div className="absolute inset-0 rounded-full bg-blue-400/30 backdrop-blur-sm" />
          <div className="absolute inset-0 rounded-full border border-blue-400/50 animate-pulse" />
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-blue-400/80" // Reduced from w-1 h-1
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 90}deg) translateY(-6px)`, // Reduced from -12px
                  transformOrigin: '50% 50%',
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[99] w-12 h-12 rounded-full" // Reduced from w-24 h-24
        animate={{
          x: mousePosition.x - 24, // Reduced from 48
          y: mousePosition.y - 24, // Reduced from 48
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 1,
        }}
      >
        <div className="w-full h-full rounded-full bg-blue-400/10 backdrop-blur-sm" />
      </motion.div>

      <style jsx global>{`
        body {
          cursor: none;
        }
        
        a, button, .group {
          cursor: none;
        }
      `}</style>
    </>
  )
}
