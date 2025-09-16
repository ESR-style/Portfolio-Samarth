import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { FaTerminal, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'esrsamarth@gmail.com',
      link: 'mailto:esrsamarth@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Mysuru, Karnataka, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      username: '@ESR-style',
      url: 'https://github.com/ESR-style'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      username: 'Samarth A.K',
      url: 'https://www.linkedin.com/in/samarth-a-k-463366248/'
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      username: '@samarth.a.k',
      url: 'https://www.instagram.com/samarth.a.k'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-gray-900'}`}>
      <Navbar />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 pt-20 md:pt-24 md:pl-80"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Terminal Window */}
          <motion.div
            variants={itemVariants}
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
                  contact.terminal
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono bg-black/20 backdrop-blur-sm">
              <motion.div variants={itemVariants} className={`mb-8 ${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
                <div className="mb-2">{`> system.contact.info`}</div>
                <div className="ml-4">
                  <div className="mb-4">
                    <span className="opacity-70">{`name: `}</span>
                    <span className="text-xl font-bold">Samarth A.K</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={itemVariants} className={`mb-8 ${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
                <div className="mb-4">{`> contact.methods`}</div>
                <div className="ml-4 space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-xl">{contact.icon}</span>
                      <div>
                        <span className="opacity-70">{contact.label}: </span>
                        {contact.link ? (
                          <a 
                            href={contact.link}
                            className="hover:underline hover:opacity-80"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span>{contact.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className={darkMode ? 'text-green-400' : 'text-indigo-400'}>
                <div className="mb-4">{`> social.networks`}</div>
                <div className="ml-4 space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-xl">{social.icon}</span>
                      <div>
                        <span className="opacity-70">{social.label}: </span>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:opacity-80"
                        >
                          {social.username}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Connect Message */}
              <motion.div 
                variants={itemVariants} 
                className={`mt-8 p-4 rounded-lg ${
                  darkMode ? 'bg-green-500/10 text-green-300' : 'bg-indigo-500/10 text-indigo-300'
                }`}
              >
                <div className="mb-2">{`> message.connect`}</div>
                <div className="ml-4 text-sm leading-relaxed">
                  Feel free to reach out for collaborations, opportunities, or just to connect! 
                  I'm always interested in discussing new projects, cybersecurity challenges, 
                  or innovative development ideas. Let's build something awesome together! 
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;