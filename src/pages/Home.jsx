import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTerminal, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Termi from '../components/Termi';

const Home = () => {
  const { darkMode } = useTheme();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-gray-900'}`}>
      <Navbar />
      
      <div className="container mx-auto px-6 pt-20 md:pt-24 md:pl-80">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-lg border ${
              darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
            } backdrop-blur-sm bg-black/20`}
          >
            <h1 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-green-400' : 'text-indigo-400'
            }`}>
              Samarth A.K
            </h1>
            <p className={`text-xl mb-6 ${
              darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
            }`}>
              Full Stack Developer & AI Enthusiast
            </p>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    darkMode 
                      ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                      : 'bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30'
                  }`}
                >
                  View Projects <FaArrowRight />
                </motion.button>
              </Link>
              
              <motion.button
                onClick={() => setIsTerminalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  darkMode 
                    ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20' 
                    : 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20'
                }`}
              >
                Open Terminal <FaTerminal />
              </motion.button>
            </div>

            {/* About Section */}
            <div className={`mb-6 ${
              darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
            }`}>
              <h2 className={`text-xl font-semibold mb-2 ${
                darkMode ? 'text-green-400' : 'text-indigo-400'
              }`}>About Me</h2>
              <p>

              "I’m a passionate developer exploring the realms of web dev, AI, and game dev. I create innovative solutions and love turning ideas into reality. Let’s build something awesome together!"
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
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
                  className={`text-2xl ${
                    darkMode ? 'text-green-400 hover:text-green-300' : 'text-indigo-400 hover:text-indigo-300'
                  }`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Experience & Projects Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className={`p-6 rounded-lg border ${
              darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
            } backdrop-blur-sm bg-black/20`}>
              <h2 className={`text-xl font-semibold mb-4 ${
                darkMode ? 'text-green-400' : 'text-indigo-400'
              }`}>Experience</h2>
              <ul className={`space-y-3 ${
                darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
              }`}>
                <li>• Tech Club Founder & Leader – SJCE Mysore</li>
                <li>• Hackathon Team Leadership</li>
                <li>• Full Stack Development Projects</li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg border ${
              darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
            } backdrop-blur-sm bg-black/20`}>
              <h2 className={`text-xl font-semibold mb-4 ${
                darkMode ? 'text-green-400' : 'text-indigo-400'
              }`}>Recent Projects</h2>
              <ul className={`space-y-3 ${
                darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
              }`}>
                <li>• Agriguard – Agriculture App</li>
                <li>• Plant Disease Detector</li>
                <li>• Expense Tracker</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <Termi isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
};

export default Home;