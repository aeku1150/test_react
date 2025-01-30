import React, { useState } from "react";
import { FaSearch, FaBell, FaUserCircle, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Left - Logo */}
          <div className="flex items-center space-x-4">
            <a href="/" className="text-blue-600 text-2xl font-bold">
              BeautySocial
            </a>
            {/* Search Box */}
            <div className="hidden md:flex bg-gray-100 rounded-full px-4 py-1 items-center">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent ml-2 outline-none text-gray-600"
              />
            </div>
          </div>

          {/* Right - Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-blue-600" />
            <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-blue-600" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 text-2xl md:hidden focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md text-center">
          <li className="py-2 hover:bg-gray-100">
            <a href="/">Home</a>
          </li>
          <li className="py-2 hover:bg-gray-100">
            <a href="/notifications">Notifications</a>
          </li>
          <li className="py-2 hover:bg-gray-100">
            <a href="/profile">Profile</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
