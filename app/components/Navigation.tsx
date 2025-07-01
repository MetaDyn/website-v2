'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/50 backdrop-blur-sm p-4 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <motion.h1 
          className="text-2xl font-bold text-white cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => scrollToSection('home')}
        >
          MetaDyn
        </motion.h1>
        <div className="flex gap-6">
          {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative px-1 py-2 text-white transition-all duration-300 ${
                activeSection === section ? 'text-blue-400' : 'hover:text-blue-400'
              }`}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 8px rgb(59, 130, 246, 0.5)" 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <motion.span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform origin-left`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeSection === section ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  )
}
