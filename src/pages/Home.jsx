import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram,FaTerminal } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Termi from '../components/Termi';
import { useState } from 'react';

const Home = () => {
  const { darkMode } = useTheme();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-gray-900'}`}>
      <Navbar />
      <motion.button
    onClick={() => setIsTerminalOpen(true)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`fixed bottom-4 right-4 p-3 rounded-full ${
      darkMode 
        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
        : 'bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30'
    }`}
  >
    <FaTerminal size={20} />
  </motion.button>
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 pt-32 md:pt-40 md:pl-80"
      >
        {/* Terminal Window */}
        <div className={`rounded-lg border ${
          darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
        } p-6 backdrop-blur-sm bg-black/20 max-w-3xl mx-auto`}>
          
          {/* CRT Scan Effect */}
          <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)',
              backgroundSize: '100% 2px',
              animation: 'scan 8s linear infinite'
            }} />
          </div>

          {/* Content */}
          <motion.div variants={itemVariants} className="font-mono mb-8">
            <span className={`${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
              {`> system.user.initialize()`}
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className={`text-4xl md:text-6xl font-bold mb-4 ${
              darkMode ? 'text-green-400' : 'text-indigo-400'
            }`}
          >
            Hello, I'm <span className="inline-block">Samarth.A.K</span>
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className={`text-xl md:text-2xl mb-8 ${
              darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
            }`}
          >
            {`> Full Stack Developer`}
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className={`text-lg mb-8 ${
              darkMode ? 'text-green-200/60' : 'text-indigo-200/60'
            }`}
          >
            {`> Specialized in crafting elegant solutions through clean, efficient code.`}
          </motion.p>

      
          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-6 mb-8"
          >
            <motion.a
              href="https://github.com/ESR-style"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`text-2xl ${
                darkMode ? 'text-green-400 hover:text-green-300' : 'text-indigo-400 hover:text-indigo-300'
              }`}
           >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/samarth-a-k-463366248/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`text-2xl ${
                darkMode ? 'text-green-400 hover:text-green-300' : 'text-indigo-400 hover:text-indigo-300'
              }`}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/samarth.a.k/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`text-2xl ${
                darkMode ? 'text-green-400 hover:text-green-300' : 'text-indigo-400 hover:text-indigo-300'
              }`}
            >
              <FaInstagram />
            </motion.a>
          </motion.div>

          {/* CTA Button */}
          <Link to="/projects">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-mono px-6 py-3 rounded-lg ${
                darkMode 
                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                  : 'bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30'
              }`}
            >
              {`> View.projects()`}
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <Termi isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      {/* Add this to your global CSS */}
      <style jsx global>{`
        @keyframes scan {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;