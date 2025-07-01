'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id: string
  className: string
  style?: React.CSSProperties
}

export default function Section({ children, id, className, style }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`pt-20 ${className}`} // Added padding-top to account for navbar
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  )
}
