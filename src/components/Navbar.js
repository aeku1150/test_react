import React from 'react';
import './Navbar.css'; // ใส่สไตล์ของ Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/services" className="navbar-link">Services</a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
