
import { useState } from 'react'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['About', 'Projects', 'Testimonials', 'Contact']

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Portfolio
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-md ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {darkMode ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-md ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`ml-2 p-2 rounded-md ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}