"use client";

import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // This function handles the smooth scrolling when a link is clicked
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight hover:text-purple-600 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
              David<span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">Shim</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-1">
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="px-4 py-2 text-gray-800 hover:text-purple-700 font-medium transition-colors rounded-lg hover:bg-purple-50 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, 'projects')}
              className="px-4 py-2 text-gray-800 hover:text-indigo-700 font-medium transition-colors rounded-lg hover:bg-indigo-50 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-4 py-2 text-gray-800 hover:text-amber-700 font-medium transition-colors rounded-lg hover:bg-amber-50 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              <a 
                href="#about" 
                onClick={(e) => handleScroll(e, 'about')}
                className="px-4 py-3 text-gray-800 hover:text-purple-700 hover:bg-purple-50 font-medium transition-colors rounded-lg"
              >
                About
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleScroll(e, 'projects')}
                className="px-4 py-3 text-gray-800 hover:text-indigo-700 hover:bg-indigo-50 font-medium transition-colors rounded-lg"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="px-4 py-3 text-gray-800 hover:text-amber-700 hover:bg-amber-50 font-medium transition-colors rounded-lg"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}