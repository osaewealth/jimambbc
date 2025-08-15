import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button';
import logo from '../assets/jimam-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-white shadow-lg' : 'bg-brand-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Jimam Bricks Logo"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg object-contain shadow-lg bg-white"
              style={{ background: 'white' }}
            />
            <div className="flex flex-col">
              <span className="font-bold text-base lg:text-lg text-[#650909]">Jimam Bricks</span>
              <span className="text-xs text-black -mt-1 hidden sm:block">Building Materials</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#650909] ${
                  location.pathname === link.to
                    ? 'text-[#650909] border-b-2 border-[#650909]'
                    : 'text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+233505277493"
              className="flex items-center space-x-2 text-brand-black hover:text-brand-blue transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            <Button to="/contact" variant="primary" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-brand-black hover:text-brand-blue hover:bg-brand-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-white border-t border-brand-blue">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`flex flex-col items-center justify-between text-base  font-medium transition-colors duration-200 hover:text-brand-blue ${
                  location.pathname === link.to ? 'text-brand-blue' : 'text-brand-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-brand-blue space-y-4">
              <a
                href="tel:+233243344009"
                className="flex items-center justify-center space-x-2 text-brand-black hover:text-brand-blue transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-base font-medium">Call Now</span>
              </a>
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                onClick={() => setIsMenuOpen(false)}
                className="w-full"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;