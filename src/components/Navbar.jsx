import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About Us", href: "#about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Pinterest Downloader", href: "/downloader" },
    { name: "User Guide", href: "#guide" },
    { name: "Feature Requests", href: "/feature-requests" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://www.sortpin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.974adfe7.png&w=2048&q=75"
            alt="Logo"
            className="h-12 w-12 object-contain rounded-md"
          />
           <span className="text-2xl font-bold text-pink-600">SortPin</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.name}
                to={link.href}
                className="px-3 py-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition font-medium"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition font-medium"
              >
                {link.name}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
