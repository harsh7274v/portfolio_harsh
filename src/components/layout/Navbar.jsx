import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/' },
    { name: 'Experience', path: '/' },
    { name: 'Certificates', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/' },
  ]

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle overflow when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (path, name) => {
    const sectionMap = {
      'Projects': 'projects-section',
      'Experience': 'experience-section',
      'Certificates': 'certificates-section',
      'Contact': 'contact-section',
    };
    if (name === 'Home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (sectionMap[name]) {
      if (location.pathname === '/') {
        const section = document.getElementById(sectionMap[name]);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/', { state: { scrollTo: sectionMap[name] } });
      }
    } else {
      navigate(path);
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div 
              className="text-2xl font-bold text-dark-800 dark:text-white flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-500">&lt;/&gt;</span>
              <span className="ml-2 hidden sm:block"></span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = (link.name === 'Projects' && location.pathname === '/') || (link.path !== '/' && location.pathname === link.path);
              return (
                <span
                  key={link.name}
                  className={`nav-link cursor-pointer ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.path, link.name)}
                >
                  {link.name}
                </span>
              );
            })}
            
            {/* Theme toggle */}
            <button 
              onClick={toggleTheme}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors flex items-center justify-center -mt-0.5"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <FiSun className="text-xl text-yellow-400" />
              ) : (
                <FiMoon className="text-xl text-primary-500" />
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-1.5 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors flex items-center justify-center -mt-0.5"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <FiSun className="text-xl text-yellow-400" />
              ) : (
                <FiMoon className="text-xl text-primary-500" />
              )}
            </button>
            
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-dark-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 top-16 bg-white dark:bg-dark-900 md:hidden z-40 overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="h-full flex flex-col">
              <div className="py-8 px-4">
                <nav className="flex flex-col space-y-2">
                  {navLinks.map(link => (
                    <span
                      key={link.name}
                      className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
                      onClick={() => handleNavClick(link.path, link.name)}
                    >
                      {link.name}
                    </span>
                  ))}
                </nav>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar