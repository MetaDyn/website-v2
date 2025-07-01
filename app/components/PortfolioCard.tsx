'use client'

import { motion } from 'framer-motion'

interface PortfolioCardProps {
  title: string
  description: string
  image: string
  index: number
}

export default function PortfolioCard({ title, description, image, index }: PortfolioCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg aspect-video group"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`absolute inset-0 ${image} transition-transform duration-300 group-hover:scale-105`} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.div
          className="transform transition-all duration-300 ease-out"
          initial={{ y: 0 }}
          whileHover={{ y: -40 }}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
