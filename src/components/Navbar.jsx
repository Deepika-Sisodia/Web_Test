import React, { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="sticky top-0 w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Site Name */}
          <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer hover:text-gray-200 transition-colors">
            Wv3 Shopping App
          </h1>

          {/* Desktop Menu + Search */}
          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-gray-300 transition-colors duration-200 font-medium">Home</a>
            <a href="#products" className="hover:text-gray-300 transition-colors duration-200 font-medium">Products</a>
            <a href="#about" className="hover:text-gray-300 transition-colors duration-200 font-medium">About</a>

            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-3 pr-10 py-2 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm w-64"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                🔍
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
