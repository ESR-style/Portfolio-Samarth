import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';
import { FaTerminal } from 'react-icons/fa';

const Contact = () => {
  const { darkMode } = useTheme();
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

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

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('> Sending message...');

    try {
      await emailjs.sendForm(
        'service_xcc5h0a', // Service ID in quotes
        'template_9jym61j', // Template ID in quotes
        form.current,
        'Ix8Lw4ds0-z53MRan' // Public key in quotes
      );
      setStatus('> Message sent successfully!');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('> Error sending message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-gray-900'}`}>
      <Navbar />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 pt-20 md:pt-24 md:pl-80"
      >
        <div className={`rounded-lg border ${
          darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
        } p-6 backdrop-blur-sm bg-black/20 max-w-2xl mx-auto`}>
          
          <motion.div variants={itemVariants} className="font-mono mb-8">
            <span className={`${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
              {`> system.contact.initialize()`}
            </span>
          </motion.div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label className={`block font-mono mb-2 ${
                darkMode ? 'text-green-400' : 'text-indigo-400'
              }`}>
                {`> user.name`}
              </label>
              <input
                type="text"
                name="user_name"
                required
                className={`w-full bg-black/30 rounded-lg border ${
                  darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
                } p-3 font-mono text-sm ${
                  darkMode ? 'text-green-300' : 'text-indigo-300'
                } focus:outline-none focus:ring-1 ${
                  darkMode ? 'focus:ring-green-500' : 'focus:ring-indigo-500'
                }`}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className={`block font-mono mb-2 ${
                darkMode ? 'text-green-400' : 'text-indigo-400'
              }`}>
                {`> user.email`}
              </label>
              <input
                type="email"
                name="user_email"
                required
                className={`w-full bg-black/30 rounded-lg border ${
                  darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
                } p-3 font-mono text-sm ${
                  darkMode ? 'text-green-300' : 'text-indigo-300'
                } focus:outline-none focus:ring-1 ${
                  darkMode ? 'focus:ring-green-500' : 'focus:ring-indigo-500'
                }`}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className={`block font-mono mb-2 ${
                darkMode ? 'text-green-400' : 'text-indigo-400'
              }`}>
                {`> message.content`}
              </label>
              <textarea
                name="message"
                required
                rows="6"
                className={`w-full bg-black/30 rounded-lg border ${
                  darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
                } p-3 font-mono text-sm ${
                  darkMode ? 'text-green-300' : 'text-indigo-300'
                } focus:outline-none focus:ring-1 ${
                  darkMode ? 'focus:ring-green-500' : 'focus:ring-indigo-500'
                }`}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={sending}
                className={`font-mono px-6 py-3 rounded-lg ${
                  darkMode 
                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                    : 'bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {sending ? '> Processing...' : '> send.message()'}
              </button>
            </motion.div>

            {status && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`font-mono text-sm ${
                  status.includes('successfully')
                    ? 'text-green-400'
                    : status.includes('Error')
                    ? 'text-red-400'
                    : darkMode ? 'text-green-400' : 'text-indigo-400'
                }`}
              >
                {status}
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;