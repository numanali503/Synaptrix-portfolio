import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Banner from "./Banner";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Banner />
      <header
        className={`fixed left-0 right-0 w-full z-[99] transition-all duration-300 
        flex flex-wrap md:justify-start md:flex-nowrap text-gray-800
        ${
          isScrolled
            ? "top-0 backdrop-blur-md bg-white/70 shadow-md"
            : "top-12 bg-transparent"
        }`}
      >
        <nav className="relative max-w-[80rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between w-full">
            <Link
              to="/"
              className="flex-none font-semibold text-xl focus:outline-none focus:opacity-80"
            >
              <img src={logo} alt="logo" className="w-72 z-[99]" />
            </Link>

            {/* Hamburger/Cross Icon for Tablet/Mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-gray-600 focus:outline-none transition-colors duration-200 z-[101]"
                aria-label="Toggle menu"
              >
                <i
                  className={`fas ${
                    isMenuOpen ? "fa-times" : "fa-bars"
                  } text-2xl`}
                ></i>
              </button>
            </div>

            {/* Desktop Navigation (Unchanged) */}
            <div className="hidden md:flex items-center justify-center space-x-3">
              <Link to="/" className="p-2 flex items-center text-sm">
                Home
              </Link>
              <Link to="/about" className="p-2 flex items-center text-sm">
                About
              </Link>
              <Link to="/services" className="p-2 flex items-center text-sm">
                Services
              </Link>
              <Link to="/careers" className="p-2 flex items-center text-sm">
                Careers
              </Link>
              <div className="border-l border-gray-400 h-4 flex items-center cursor-pointer">
                <Link to="/contact" className="p-2 flex items-center text-sm">
                  <svg
                    className="shrink-0 size-4 me-3 md:me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Full-Screen Menu */}
          <div
            className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } md:hidden`}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
              onClick={toggleMenu}
            ></div>

            {/* Sliding Menu */}
            <div
              className={`absolute top-0 right-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-gray-800">
                <Link
                  to="/"
                  className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  to="/careers"
                  className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="text-xl font-semibold bg-primary text-white hover:bg-blue-700 transition-colors duration-200 flex items-center px-4 py-2 rounded-md"
                  onClick={toggleMenu}
                >
                  <i className="fas fa-user-check mr-2"></i>
                  Consultation
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
