"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white sticky top-0 z-50">
      <h1 className="text-xl font-bold text-purple-600">Hirad</h1>

      <div className="hidden md:flex gap-6 text-gray-700">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href="#contact"
        className="bg-purple-600 text-white px-4 py-2 rounded-lg"
      >
        Get Started
      </a>
    </nav>
  );
}
