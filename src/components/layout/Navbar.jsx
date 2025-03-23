import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiMoon, HiSun, HiMenu, HiX, HiHome, HiUser, HiCode, 
  HiCollection, HiBriefcase, HiMail 
} from 'react-icons/hi';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicatorPosition, setIndicatorPosition] = useState({ left: 0, width: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef(null);
  const itemsRef = useRef([]);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/', icon: <HiHome size={16} /> },
    { name: 'About', path: '/about', icon: <HiUser size={16} /> },
    { name: 'Skills', path: '/skills', icon: <HiCode size={16} /> },
    { name: 'Projects', path: '/projects', icon: <HiCollection size={16} /> },
    { name: 'Experience', path: '/experience', icon: <HiBriefcase size={16} /> },
    { name: 'Contact', path: '/contact', icon: <HiMail size={16} /> },
  ];

  // Set active nav link based on current route
  useEffect(() => {
    const activeIdx = navLinks.findIndex(link => 
      link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path)
    );
    if (activeIdx !== -1) {
      setActiveIndex(activeIdx);
      if (itemsRef.current[activeIdx] && !isOpen) {
        updateIndicatorPosition(activeIdx);
      }
    }
  }, [location, isOpen]);

  // Check if scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update indicator position
  const updateIndicatorPosition = (index) => {
    if (!itemsRef.current[index] || !navRef.current) return;
    
    const item = itemsRef.current[index];
    const nav = navRef.current;
    
    // Calculate position relative to nav container
    const itemRect = item.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    
    setIndicatorPosition({
      left: itemRect.left - navRect.left,
      width: itemRect.width,
    });
  };

  // Handle window resize
  useEffect(() => {
    const handleScroll = () => {
      if (activeIndex !== null && !isOpen) {
        updateIndicatorPosition(activeIndex);
      }
    };
    
    const handleResize = () => {
      if (activeIndex !== null && !isOpen) {
        updateIndicatorPosition(activeIndex);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeIndex, isOpen]);

  // Handle mouse enter
  const handleMouseEnter = (index) => {
    updateIndicatorPosition(index);
  };

  // Handle mouse leave - return to active index
  const handleMouseLeave = () => {
    if (activeIndex !== null) {
      updateIndicatorPosition(activeIndex);
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when a link is clicked or on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check if link is active
  const isLinkActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-white/80 dark:bg-dark-200/80 backdrop-blur-md shadow-md' : 'py-3 md:py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-xl md:text-2xl font-bold font-heading text-primary-600 dark:text-primary-400 flex items-center">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-sm md:text-base mr-1.5 md:mr-2">
              AP
            </div>
            <span className="text-secondary-600 dark:text-secondary-400">Ahad</span>&nbsp;Portfolio
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block" ref={navRef}>
          <div className="relative">
            <ul className="flex space-x-2">
              {navLinks.map((link, index) => (
                <li key={link.name} ref={el => itemsRef.current[index] = el}>
                  <Link
                    to={link.path}
                    className={`relative px-3 py-2 rounded-md text-sm flex items-center transition-colors ${
                      isLinkActive(link.path)
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setActiveIndex(index)}
                    aria-current={isLinkActive(link.path) ? 'page' : undefined}
                  >
                    <span className="mr-1.5">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
              
              {/* Animated Indicator */}
              <motion.div
                className="absolute bottom-0 h-full bg-primary-50 dark:bg-primary-900/20 rounded-md -z-10"
                animate={{
                  left: indicatorPosition.left,
                  width: indicatorPosition.width,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30
                }}
              />
            </ul>
          </div>
        </nav>
        
        {/* Mobile Nav Toggle and Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="relative p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDarkMode ? (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMoon size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiSun size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          
          {/* Contact Button (Show only on larger screens) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="py-1.5 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white text-sm font-medium rounded-md shadow-md hover:shadow-lg transition-all"
            >
              Get in Touch
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-full transition-colors lg:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
          >
            <div className="container mx-auto px-4 pb-5">
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-dark-200 rounded-2xl shadow-lg overflow-hidden"
              >
                <ul className="py-2 divide-y divide-gray-100 dark:divide-gray-800">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * (index + 1) }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center px-4 py-3 ${
                          isLinkActive(link.path)
                            ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-300/50'
                        }`}
                        onClick={() => {
                          setIsOpen(false);
                          setActiveIndex(index);
                        }}
                      >
                        <span className="mr-3 text-lg">{link.icon}</span>
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Contact button in mobile menu */}
                <div className="px-4 py-4 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark-300/30">
                  <Link
                    to="/contact"
                    className="w-full py-2.5 flex justify-center items-center bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium rounded-md shadow-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <HiMail className="mr-2" />
                    Get in Touch
                  </Link>
                </div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 