'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';

export default function Navbar() {
  const { cart } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/ssg', label: 'SSG (Static)' },
    { href: '/ssr', label: 'SSR (Server)' },
    { href: '/csr', label: 'CSR (Client)' },
    { href: '/cart', label: 'Cart 🛒' },
  ];

  return (
    <nav className="text-white p-4 sticky top-0 z-50 shadow-lg bg-blue-600 dark:bg-blue-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-hover-light-blue transition">
          Tugas Web Platform
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-hover-light-blue transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded hover:bg-blue-300 dark:hover:bg-blue-500 transition-transform duration-500"
            aria-label="Toggle theme"
          >
            <span className={theme === 'light' ? 'inline-block rotate-0' : 'inline-block rotate-180'}>
              {theme === 'light' ? '🌙' : '☀️'}
            </span>
          </button>
          <div className="px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 bg-blue-300 dark:bg-blue-500">
            <span>🛒</span>
            <span>{cart.length}</span>
          </div>
        </div>

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

      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 bg-gray-800 p-4 rounded-lg shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-hover-light-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-3 py-1 rounded-full text-sm font-semibold w-fit bg-blue-300 dark:bg-blue-500">
            Cart: {cart.length} Items
          </div>
        </div>
      )}
    </nav>
  );
}