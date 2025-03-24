
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto mr-2" />
            <Link to="/" className="text-2xl font-bold">
              Ramjanum <span className="text-primary">C</span> Attorneys
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-primary transition-colors">
              Home
            </Link>
            <a href="#about" className="text-gray-900 hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-900 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-gray-900 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-900 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" 
              className="block px-3 py-2 text-gray-900 hover:text-primary transition-colors"
              onClick={toggleMenu}>
              Home
            </Link>
            <a href="#about" 
              className="block px-3 py-2 text-gray-900 hover:text-primary transition-colors"
              onClick={toggleMenu}>
              About
            </a>
            <a href="#services" 
              className="block px-3 py-2 text-gray-900 hover:text-primary transition-colors"
              onClick={toggleMenu}>
              Services
            </a>
            <a href="#testimonials" 
              className="block px-3 py-2 text-gray-900 hover:text-primary transition-colors"
              onClick={toggleMenu}>
              Testimonials
            </a>
            <a href="#contact" 
              className="block px-3 py-2 text-gray-900 hover:text-primary transition-colors"
              onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
