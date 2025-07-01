'use client'

import HeroScene from './components/HeroScene'
import { motion } from 'framer-motion'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import Section from './components/Section'
import PortfolioCard from './components/PortfolioCard'
import CustomCursor from './components/CustomCursor'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/0">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <HeroScene />

      <Section id="home" className="h-screen flex items-center justify-center">
        <motion.div 
          className="text-center z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-6xl font-bold text-white mb-4">Welcome to MetaDyn</h2>
          <p className="text-xl text-gray-300">Building the Future of the Metaverse</p>
        </motion.div>
      </Section>

      <Section 
        id="about" 
        className="min-h-screen bg-black/60 backdrop-blur-sm py-20"
        style={{ zIndex: 2, position: 'relative' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-400">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                At MetaDyn, we're pioneering the next evolution of digital experiences. Our mission is to bridge the gap between reality and the virtual world, creating immersive spaces where imagination knows no bounds.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe the metaverse is more than just a digital space—it's a new frontier for human connection, creativity, and innovation.
              </p>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-400">Our Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Combining cutting-edge technology with creative excellence, we craft metaverse experiences that push the boundaries of what's possible in virtual reality.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of experts brings together expertise in 3D modeling, blockchain technology, and interactive design to create seamless and engaging virtual environments.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="mt-12 p-6 bg-black/40 backdrop-blur-sm rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-blue-400 mb-6">Why Choose MetaDyn?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-bold mb-2">Innovation First</h4>
                <p className="text-gray-300">Pushing the boundaries of what's possible in virtual spaces</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Expert Team</h4>
                <p className="text-gray-300">Industry leaders in metaverse development and design</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Future Ready</h4>
                <p className="text-gray-300">Building with tomorrow's technology today</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section 
        id="services" 
        className="min-h-screen bg-gray-900/80 backdrop-blur-sm py-20"
        style={{ zIndex: 2, position: 'relative' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Metaverse Development',
                description: 'Custom virtual worlds and experiences'
              },
              {
                title: '3D Asset Creation',
                description: 'High-quality 3D models and environments'
              },
              {
                title: 'Virtual Events',
                description: 'Immersive digital event spaces'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-black/40 backdrop-blur-sm p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section 
        id="portfolio" 
        className="min-h-screen bg-black/60 backdrop-blur-sm py-20"
        style={{ zIndex: 2, position: 'relative' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Portfolio
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Virtual Concert Hall',
                description: 'Interactive music venue for digital performances',
                image: 'bg-gradient-to-r from-purple-500/70 to-blue-500/70'
              },
              {
                title: 'Digital Art Gallery',
                description: 'NFT showcase platform with virtual exhibitions',
                image: 'bg-gradient-to-r from-pink-500/70 to-purple-500/70'
              },
              {
                title: 'Corporate Metaverse',
                description: 'Virtual office space for remote collaboration',
                image: 'bg-gradient-to-r from-blue-500/70 to-teal-500/70'
              },
              {
                title: 'Virtual Education Campus',
                description: 'Interactive learning environment for students',
                image: 'bg-gradient-to-r from-teal-500/70 to-green-500/70'
              }
            ].map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section 
        id="contact" 
        className="min-h-screen bg-gray-900/80 backdrop-blur-sm py-20"
        style={{ zIndex: 2, position: 'relative' }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="bg-black/50 backdrop-blur-sm p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600/90 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
