import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTerminal, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Termi from '../components/Termi';

const BlinkingCursor = () => (
  <motion.span
    animate={{ opacity: [1, 0] }}
    transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
    className="inline-block w-2 h-4 ml-1 align-middle"
  />
);

const Home = () => {
  const { darkMode } = useTheme();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-gray-900'}`}>
      <Navbar />
      
      <div className="container mx-auto px-6 pt-20 md:pt-24 md:pl-80">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-lg border ${
              darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
            } overflow-hidden`}
          >
            {/* Terminal Header */}
            <div className={`p-3 ${
              darkMode ? 'bg-green-500/10' : 'bg-indigo-500/10'
            } backdrop-blur-sm border-b ${
              darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
            }`}>
              <div className="flex items-center gap-2">
                <FaTerminal className={darkMode ? 'text-green-400' : 'text-indigo-400'} />
                <span className={`text-sm font-mono ${
                  darkMode ? 'text-green-400' : 'text-indigo-400'
                }`}>
                  portfolio.terminal
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono bg-black/20 backdrop-blur-sm">
              {/* System Info */}
              <div className={`mb-8 ${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
                <div className="mb-2">{`> system.user.info`}</div>
                <div className="ml-4">
                  <div className="mb-4">
                    <span className="opacity-70">{`name: `}</span>
                    <span className="text-2xl font-bold">Samarth</span>
                    <BlinkingCursor />
                  </div>
                  <div className="mb-4">
                    <span className="opacity-70">{`role: `}</span>
                    <span>Full Stack Developer | ML Engineer | Ethical Hacker</span>
                  </div> 
                  <div className="mb-4">
                    <span className="opacity-70">{`specialization: `}</span>
                    <span>Bug Bounty Hunter & Red Team Operations</span>
                  </div>
                  <div className="mb-4">
                    <span className="opacity-70">{`status: `}</span>
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className={`mb-8 ${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
                <div className="mb-2">{`> user.about`}</div>
                <div className="ml-4">
                  I'm a passionate developer with expertise in web development, machine learning, and cybersecurity. 
                  As a manual penetration tester and bug bounty hunter, I specialize in offensive security and red team operations. 
                  I create innovative solutions, secure applications, and love turning ideas into reality while keeping them safe. 
                  Let's build something awesome and secure together!
                </div>
              </div>

              {/* Actions */}
              <div className={`mb-8 ${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
                <div className="mb-2">{`> system.actions.available`}</div>
                <div className="ml-4 flex flex-wrap gap-4">
                  <Link to="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        darkMode 
                          ? 'bg-green-500/20 hover:bg-green-500/30' 
                          : 'bg-indigo-500/20 hover:bg-indigo-500/30'
                      }`}
                    >
                      {`view.projects()`} <FaArrowRight />
                    </motion.button>
                  </Link>
                  
                  <motion.button
                    onClick={() => setIsTerminalOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-green-500/10 hover:bg-green-500/20' 
                        : 'bg-indigo-500/10 hover:bg-indigo-500/20'
                    }`}
                  >
                    {`terminal.open()`} <FaTerminal />
                  </motion.button>
                </div>
              </div>

              {/* Social Links */}
              <div className={darkMode ? 'text-green-400' : 'text-indigo-400'}>
                <div className="mb-2">{`> user.social.links`}</div>
                <div className="ml-4 flex gap-4">
                  {[
                    { icon: <FaGithub />, url: "https://github.com/ESR-style" },
                    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/samarth-a-k-463366248/" },
                    { icon: <FaInstagram />, url: "https://www.instagram.com/samarth.a.k" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-2xl hover:opacity-80"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Termi isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
};

export default Home;