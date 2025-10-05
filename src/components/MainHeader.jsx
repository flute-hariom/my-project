import React, { useState } from "react";
import Link from "next/link";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-white text-2xl font-bold hover:text-cyan-400 transition-colors duration-300"
            >
              LOGO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about-us"
              className="text-white font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="text-white font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              // href="/portfolio"
              href="/projects"
              className="text-white font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/start-project">
              <button className="bg-cyan-400 text-slate-900 px-6 py-2.5 rounded-md font-semibold hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-0.5 transition-all duration-300">
                Start Your Project
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-white hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-white hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              // href="/portfolio"
              href="/projects"
              className="block px-3 py-2 rounded-md text-white hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Portfolio */}
              projects
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-white hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/start-project"
              className="block w-full mt-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full bg-cyan-400 text-slate-900 px-6 py-2.5 rounded-md font-semibold hover:bg-cyan-300 transition-colors duration-300">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
