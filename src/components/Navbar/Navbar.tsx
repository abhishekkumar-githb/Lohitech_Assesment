import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, ChevronDown } from 'lucide-react';
import NavLink from './NavLink';
import { Button } from '../ui/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white/0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Brand
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#">Home</NavLink>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Services <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#web-dev" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Web Development</a>
                <a href="#design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">UI/UX Design</a>
                <a href="#marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Digital Marketing</a>
              </div>
            </div>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <div className="relative">
              <button className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                <ShoppingCart className="h-5 w-5" />
              </button>
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
            <Button variant="primary" size="sm" className="hidden md:flex">
              Get Started
            </Button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-500" />
              ) : (
                <Menu className="h-6 w-6 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">Home</a>
            <a href="#services" className="block text-gray-700 hover:text-indigo-600 font-medium">Services</a>
            <a href="#products" className="block text-gray-700 hover:text-indigo-600 font-medium">Products</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-indigo-600 font-medium">Testimonials</a>
            <a href="#contact" className="block text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
            <Button variant="primary" size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;