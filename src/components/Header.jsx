import React from "react";
import kvsLogo from "/kvs.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white px-6 mb-6 flex items-center justify-between">
      {/* Logo */}
      <a href="/">
        <img src={kvsLogo} className="logo" alt="KVS logo" />
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        <a
          href="https://www.behance.net/venkateshkvs"
          target="_blank"
          className="text-black hover:text-purple"
        >
          Portfolio
        </a>
        <a
          href="https://www.linkedin.com/in/venkatesh-kvs/"
          target="_blank"
          className="text-black hover:text-purple"
        >
          Linkedin
        </a>
      </nav>

      {/* Resume Button */}
      <a
        href="/Venkatesh_Kesanakurthi_Resume_2026.pdf"
        className="bg-linear-to-br from-pink to-purple text-white px-6 py-2 rounded text-sm font-medium hover:bg-linear-to-r transition-colors"
      >
        Resume
      </a>
    </header>
  );
};

export default Header;
