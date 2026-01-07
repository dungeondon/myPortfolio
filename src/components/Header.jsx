import React from "react";
import kvsLogo from "/kvs.svg";

const Header = () => {
  return (
    <header className="w-full bg-white px-6 pb-6 flex items-center justify-between">
      {/* Logo */}
      <a href="https://vite.dev" target="_blank">
        <img src={kvsLogo} className="logo" alt="KVS logo" />
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        <a href="#about" className="text-black hover:text-gray-700">
          Behance
        </a>
        <a href="#playground" className="text-black hover:text-gray-700">
          Linkedin
        </a>
      </nav>

      {/* Resume Button */}
      <a
        href="/Venkatesh_Resume.pdf"
        className="bg-black text-white px-6 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        Resume
      </a>
    </header>
  );
};

export default Header;
