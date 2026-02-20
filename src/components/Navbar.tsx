'use client'; // Wajib karena menggunakan hook useState dan useCart

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const { cart } = useCart(); // Mengambil global state cart
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/ssg', label: 'SSG (Static)' },
    { href: '/ssr', label: 'SSR (Server)' },
    { href: '/csr', label: 'CSR (Client)' },
  ];

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold hover:text-blue-400 transition">
          Tugas Web Platform
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-300 transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Cart Indicator (Demonstrasi Global State) */}
          <div className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            <span>🛒</span>
            <span>{cart.length}</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 bg-gray-800 p-4 rounded-lg shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold w-fit">
            Cart: {cart.length} Items
          </div>
        </div>
      )}
    </nav>
  );
}