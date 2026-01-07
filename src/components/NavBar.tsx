"use client";

import React from 'react';

export default function NavBar() {
  
  // This function handles the smooth scrolling when a link is clicked
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // This accounts for the fixed navbar height so content isn't hidden
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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold text-gray-800 tracking-tight"
            >
              My<span className="text-blue-600">Portfolio</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, 'projects')}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}