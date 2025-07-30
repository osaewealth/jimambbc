import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import logo from '../assets/jimam-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3d2502] to-[#3d2502] text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Jimam Bricks Logo"
                className="w-14 h-14 rounded-lg object-contain shadow-lg bg-white p-1"
                style={{ background: 'white' }}
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">Jimam</span>
                <span className="text-sm text-white">Bricks and Tiles</span>
              </div>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Quality clay bricks and building materials for all your construction needs. 
              Building strong foundations with decades of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-200 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-white" />
                <span className="text-gray-200 text-sm">
                  Ghana, Ekumfi Atwa
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white" />
                <a href="tel:+233505277493" className="text-gray-200 hover:text-white transition-colors text-sm">
                  +233 50 527 7493
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:ceo@jimambricks.com" className="text-gray-200 hover:text-white transition-colors text-sm">
                  ceo@jimambricks.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:info@jimambricks.com" className="text-gray-200 hover:text-white transition-colors text-sm">
                  info@jimambricks.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <a href="https://wa.me/233505277493" className="text-gray-200 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +233 50 527 7493
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/jimanconstruction"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#650909] transition-colors"
                aria-label="Facebook"
                target="_blank" rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/jimanconstruction"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#650909] transition-colors"
                aria-label="Instagram"
                target="_blank" rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/233505277493?text=Hello%20from%20jimanconstruction"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
                target="_blank" rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-white">Newsletter</h4>
              <p className="text-gray-200 text-sm">Get updates on new products and projects</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-[#650909] text-white placeholder-gray-400"
                />
                <button className="bg-[#650909] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4b1313] transition-colors text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-200 text-sm">
              © 2024 Jimam Bricks. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;