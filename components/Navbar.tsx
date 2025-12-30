'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaSun, FaMoon, FaGithub } from 'react-icons/fa'

import { useTheme } from 'next-themes'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [ // navigation links
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen
          ? 'bg-white dark:bg-gray-900 shadow-md py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Muhammad Jamal
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <a
              href="https://github.com/muhammadjamal1155"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                aria-label="Use System Theme"
                onClick={() => setTheme('system')}
                className={`p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${theme === 'system' ? 'text-primary-600' : 'text-gray-700 dark:text-gray-200'}`}
                title="System"
              >
                <span className="text-xs font-semibold">SYS</span>
              </button>
              <button
                aria-label="Toggle Theme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </div>
            <button
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
