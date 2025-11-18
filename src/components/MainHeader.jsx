import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
  <Link
    href="/"
    className="flex text-2xl font-bold ml-[-80px] bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600 transition-all duration-500"
  >
    <img src="/logo.png" className="w-10 mr-4" />
    Moolmantra Technologies
  </Link>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-300 relative group ${
                isActive("/")
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/about-us"
              className={`font-medium transition-colors duration-300 relative group ${
                isActive("/about-us")
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              About Us
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  isActive("/about-us") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/services"
              className={`font-medium transition-colors duration-300 relative group ${
                isActive("/services")
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              Services
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  isActive("/services") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/projects"
              className={`font-medium transition-colors duration-300 relative group ${
                isActive("/projects")
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              Portfolio
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  isActive("/projects") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact-us">
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
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isActive("/")
                  ? "text-cyan-400 bg-slate-700"
                  : "text-white hover:text-cyan-400 hover:bg-slate-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isActive("/services")
                  ? "text-cyan-400 bg-slate-700"
                  : "text-white hover:text-cyan-400 hover:bg-slate-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isActive("/projects")
                  ? "text-cyan-400 bg-slate-700"
                  : "text-white hover:text-cyan-400 hover:bg-slate-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about-us"
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isActive("/about-us")
                  ? "text-cyan-400 bg-slate-700"
                  : "text-white hover:text-cyan-400 hover:bg-slate-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
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
