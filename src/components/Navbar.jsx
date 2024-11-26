import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTerminal } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  
  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'SKILLS', path: '/skills' },
    { name: 'CONTACT', path: '/contact' }
  ];

  useEffect(() => {
    const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
  }, [location]);

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-[60] p-3 rounded-lg bg-black/20 backdrop-blur-sm"
      >
        <FaTerminal className={darkMode ? 'text-green-400' : 'text-indigo-500'} />
      </motion.button>

      <motion.aside
        initial={false}
        animate={{ 
          x: isOpen || window.innerWidth >= 768 ? 0 : '-100%'
        }}
        className={`fixed left-0 top-0 h-screen w-72 z-50
          ${darkMode ? 'bg-black' : 'bg-gray-900'} 
          border-r ${darkMode ? 'border-green-500/20' : 'border-indigo-500/20'}`}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)',
            backgroundSize: '100% 2px'
          }} />
        </div>

        <div className="relative h-full p-6 flex flex-col pt-16 md:pt-6">
          <div className={`font-mono mb-8 ${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
            <div className="flex items-center gap-2 mb-2">
              <FaTerminal />
              <span className="text-sm">system.terminal</span>
            </div>
            <div className="text-xs opacity-70">
              {`> boot.sequence.initialized`}
            </div>
          </div>

          <div className="flex-1 font-mono">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  className={`w-full text-left mb-4 ${
                    darkMode ? 'text-green-400' : 'text-indigo-400'
                  } opacity-70 hover:opacity-100`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{`>`}</span>
                    <span>{`cd ./`}{item.name.toLowerCase()}</span>
                  </div>
                  {activeIndex === index && (
                    <motion.div
                      layoutId="cursor"
                      className={`w-2 h-4 mt-1 ${
                        darkMode ? 'bg-green-400' : 'bg-indigo-400'
                      }`}
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={toggleTheme}
            className={`font-mono text-sm ${
              darkMode ? 'text-green-400' : 'text-indigo-400'
            } opacity-70 hover:opacity-100`}
          >
            <div className="flex items-center">
              <span className="mr-2">{`>`}</span>
              <span>{darkMode ? 'switch.theme.light' : 'switch.theme.dark'}</span>
            </div>
          </motion.button>
        </div>
      </motion.aside>

      <AnimatePresence>
        {isOpen && (
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