import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'SKILLS', path: '/skills' },
    { name: 'CONTACT', path: '/contact' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
    if (isMobile) setIsOpen(false);
  }, [location, isMobile]);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuButtonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        variants={menuButtonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed top-4 left-4 z-[60] p-3 rounded-lg ${
          darkMode 
            ? 'bg-green-500/10 text-green-400' 
            : 'bg-indigo-500/10 text-indigo-400'
        } backdrop-blur-md border ${
          darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
        }`}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        <motion.aside
          initial={isMobile ? "closed" : false}
          animate={isMobile ? (isOpen ? "open" : "closed") : false}
          variants={sidebarVariants}
          className={`fixed left-0 top-0 h-screen w-72 z-50
            ${darkMode ? 'bg-black/95' : 'bg-gray-900/95'} 
            backdrop-blur-md
            border-r ${darkMode ? 'border-green-500/20' : 'border-indigo-500/20'}`}
        >
          {/* Terminal Effect Overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
            <motion.div 
              className="absolute inset-0"
              animate={{
                backgroundPosition: ["0% 0%", "0% 100%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
                backgroundSize: '100% 4px'
              }}
            />
          </div>

          <div className="relative h-full p-6 flex flex-col pt-16 md:pt-6">
            {/* Terminal Header */}
            <div className={`font-mono mb-8 ${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
              <motion.div 
                className="flex items-center gap-2 mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <FaTerminal />
                <span className="text-sm">system.terminal</span>
              </motion.div>
              <motion.div 
                className="text-xs opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.4 }}
              >
                {`> navigation.initialize()`}
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 font-mono">
            {menuItems.map((item, index) => (
  <Link
    key={item.name}
    to={item.path}
    onClick={() => isMobile && setIsOpen(false)}
  >
<motion.div
  whileHover={{ 
    x: 10, 
    backgroundColor: darkMode ? 'rgba(34, 197, 94, 0.05)' : 'rgba(99, 102, 241, 0.05)'
  }}
  transition={{ 
    type: "spring",
    stiffness: 200,
    damping: 15,
    mass: 0.5
  }}
  className={`w-full text-left mb-4 p-2 rounded-lg ${
    darkMode ? 'text-green-400' : 'text-indigo-400'
  } ${
    activeIndex === index ? 'opacity-100' : 'opacity-70'
  } hover:opacity-100 transition-opacity duration-200 ease-in-out`}
>
  <div className="flex items-center font-mono">
    <span className="mr-2">{`>`}</span>
    <span className="relative inline-flex items-center">
      {`cd ./`}{item.name.toLowerCase()}
      {activeIndex === index && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0] }}
          transition={{ 
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className={`absolute -right-3 ${
            darkMode ? 'bg-green-400' : 'bg-indigo-400'
          } w-2 h-[1em] inline-block ml-1 translate-y-[1px]`}
        />
      )}
    </span>
  </div>
</motion.div>
  </Link>
))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`font-mono text-sm ${
                darkMode ? 'text-green-400' : 'text-indigo-400'
              } opacity-70 hover:opacity-100 transition-opacity`}
            >
              <div className="flex items-center">
                <span className="mr-2">{`>`}</span>
                <span>{darkMode ? 'switch.theme.light' : 'switch.theme.dark'}</span>
              </div>
            </motion.button>
          </div>
        </motion.aside>
      </AnimatePresence>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;