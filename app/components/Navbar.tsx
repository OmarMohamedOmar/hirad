"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <Image
          src="/hirad-logo.png" // put your logo in /public
          alt="Hirad logo"
          width={140}
          height={140}
          className="object-contain"
        />
      </div>

      {/* LINKS */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="#services" className="hover:text-[#5B21B6] transition">
          Services
        </a>
        <a href="#projects" className="hover:text-[#5B21B6] transition">
          Projects
        </a>
        <a href="#about" className="hover:text-[#5B21B6] transition">
          About
        </a>
        <a href="#contact" className="hover:text-[#5B21B6] transition">
          Contact
        </a>
      </div>

      {/* BUTTON */}
      <a
        href="#contact"
        className="bg-[#5B21B6] hover:bg-[#4C1D95] text-white px-5 py-2.5 rounded-xl transition shadow-sm"
      >
        Get Started
      </a>
    </nav>
  );
}
