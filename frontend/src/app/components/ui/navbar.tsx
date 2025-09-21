"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between p-4 md:max-w-4xl mx-auto">
      {/* Logo */}
      <a href="/" className="flex-shrink-0">
        <img
          src="/Logo_Desktop_purple.svg"
          alt="Logo"
          className="w-24 object-contain"
        />
      </a>

      {/* Hamburger (mobile only) */}
      <button id="navbar-mobile"
        className="block md:hidden text-2xl text-purple"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Desktop Nav */}
      <ul id="nav-desktop">
        <li className="group">
          <a>Shop</a>
          <span></span>
        </li>
        <li className="group">
          <a>How it Works</a>
          <span></span>
        </li>
        <li className="group">
          <a>Contact Us</a>
          <span></span>
        </li>
      </ul>

      {/* Flag */}
      <div className="hidden md:flex justify-between gap-x-2 items-baseline">
        <div className="space-x-1">
          <img
            src="/ca.svg"
            alt="canada_flag"
            className="w-4 object-contain inline"
          />
          <span className="font-poppins font-bold text-xxs text-right">CAD</span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul id="nav-mobile">
          <li><a>Shop</a></li>
          <li><a>How it Works</a></li>
          <li><a>Contact Us</a></li>
        </ul>
      )}
    </div>
  );
}
