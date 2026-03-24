"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Our Process", href: "#village-board" },
  { label: "Our Story", href: "#artisan" },
  { label: "Contact", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f1f3d]/97 backdrop-blur-md shadow-lg shadow-[#0f1f3d]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="https://www.newyorksash.com" className="flex items-center gap-3 group" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://www.newyorksash.com/assets/NYLOGO-copy_1759006724430-BHTfyIKn.png"
              alt="New York Sash"
              width={120}
              height={40}
              className="h-9 w-auto brightness-0 invert"
              priority
            />
            <div className="hidden sm:flex flex-col leading-none border-l border-[#b8975a]/40 pl-3">
              <span className="text-[#b8975a] text-[9px] tracking-[0.3em] uppercase font-light">
                Cooperstown
              </span>
              <span className="text-[#f5f0e8]/60 text-[9px] tracking-[0.2em] uppercase font-light">
                Historic District
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#f5f0e8]/80 hover:text-[#b8975a] text-sm tracking-widest uppercase font-light transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+13156247344"
              className="flex items-center gap-2 bg-[#b8975a] hover:bg-[#d4b07a] text-[#0f1f3d] text-sm font-semibold tracking-widest uppercase px-6 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#b8975a]/30"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#f5f0e8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#f5f0e8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#f5f0e8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0f1f3d] border-t border-[#b8975a]/20 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#f5f0e8]/80 hover:text-[#b8975a] text-sm tracking-widest uppercase font-light transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+16075550100"
            className="flex items-center justify-center gap-2 bg-[#b8975a] text-[#0f1f3d] text-sm font-semibold tracking-widest uppercase px-6 py-3 mt-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            (315) 624-7344
          </a>
        </nav>
      </div>
    </header>
  );
}
