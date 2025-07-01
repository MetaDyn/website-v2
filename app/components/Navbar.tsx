export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-2xl font-bold">MetaDyn</span>
          </div>
          <div className="flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white">Home</a>
            <a href="#services" className="text-gray-300 hover:text-white">Services</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
