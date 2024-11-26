import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaTerminal, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Termi = ({ isOpen, onClose }) => {
  const { darkMode } = useTheme();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const inputRef = useRef(null);
  const dragControls = useDragControls();
  const navigate = useNavigate();

  const pages = {
    '/': 'home',
    '/projects': 'projects',
    '/skills': 'skills',
    '/contact': 'contact'
  };
  useEffect(() => {
    if (isOpen) {
      // Get viewport dimensions
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      
      // Calculate terminal dimensions
      const terminalWidth = vw < 768 ? vw * 0.9 : Math.min(800, vw * 0.8);
      const terminalHeight = vh < 668 ? vh * 0.8 : Math.min(600, vh * 0.7);
      
      // Calculate center position with vertical offset (-20% of viewport height)
      const x = (vw - terminalWidth) / 2;
      const y = (vh - terminalHeight) / 2 - (vh * 0.2); // Added offset here
      
      // Set position with bounds checking
      setPosition({
        x: Math.max(0, Math.min(x, vw - terminalWidth)),
        y: Math.max(0, Math.min(y, vh - terminalHeight))
      });
      
      inputRef.current?.focus();
    }
  }, [isOpen]);
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const commands = {
  help: {
    description: 'List all available commands',
    execute: () => ({
      output: `Available commands:
  help     - Show this help message
  ls       - List available pages
  cd       - Navigate to a page (e.g., cd projects)
  about    - Display information about me
  skills   - List technical skills
  projects - View my projects
  contact  - Show contact information
  social   - Display social media links
  clear    - Clear terminal history
  exit     - Close terminal window`
    })
  },

  about: {
    description: 'About me',
    execute: () => ({
      output: `> Samarth A.K
Full Stack Developer
Passionate about creating elegant solutions through clean, efficient code.
Currently focused on web development and AI/ML.`
    })
  },

  skills: {
    description: 'List technical skills',
    execute: () => ({
      output: `Technical Skills:
• Frontend: React, Next.js, HTML5, CSS3, Tailwind
• Backend: Node.js, Express
• Database: PostgreSQL
• AI/ML: TensorFlow, Python
• Other: Git, RESTful APIs, Agile`
    })
  },

  projects: {
    description: 'View projects',
    execute: () => ({
      output: `Projects:
1. Agriguard - Agriculture App
   Voice-controlled mobile app for farmers
   
2. Plant Disease Detector
   AI-powered system for plant disease detection
   
3. Expense Tracker
   Full-stack expense management application`
    })
  },

  social: {
    description: 'Social media links',
    execute: () => ({
      output: `Social Media:
GitHub: https://github.com/ESR-style
LinkedIn: https://www.linkedin.com/in/samarth-a-k-463366248/
Instagram: https://www.instagram.com/samarth.a.k`
    })
  },

  contact: {
    description: 'Get contact information',
    execute: () => ({
      output: `Contact Information:
Email: esrsamarth@gmail.com`
    })
  },


  cd: {
    description: 'Navigate to a page',
    execute: (args) => {
      if (!args || args.length === 0) {
        return { output: 'Usage: cd <page>\nExample: cd projects' };
      }
  
      const pages = {
        'home': '/',
        'projects': '/projects',
        'skills': '/skills',
        'contact': '/contact'
      };
  
      const destination = args[0].toLowerCase();
  
      // Handle special case for home/root
      if (destination === '/' || destination === '~') {
        navigate('/');
        return { output: 'Navigating to home...' };
      }
  
      // Check if page exists
      if (pages.hasOwnProperty(destination)) {
        navigate(pages[destination]);
        return { output: `Navigating to ${destination}...` };
      }
  
      return { 
        output: `Directory not found: ${destination}\nAvailable pages:\n${
          Object.keys(pages).join('\n')
        }`
      };
    }
  },

  pwd: {
    description: 'Show current page',
    execute: () => ({
      output: `Current location: ${window.location.pathname || '/'}`
    })
  },

  clear: {
    description: 'Clear terminal',
    execute: () => null
  },

  exit: {
    description: 'Close terminal',
    execute: () => {
      onClose();
      return { output: 'Closing terminal...' };
    }
  },

  theme: {
    description: 'Toggle theme',
    execute: () => {
      toggleTheme();
      return { output: `Switched to ${darkMode ? 'light' : 'dark'} theme` };
    }
  }
};

  const handleCommand = (cmd) => {
    const args = cmd.trim().split(' ');
    const command = args[0].toLowerCase();
  
    if (commands[command]) {
      const result = commands[command].execute(args.slice(1));
      return result.output; // Ensure we return the output string
    }
    
    return `Command not found: ${command}. Type 'help' for available commands.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    const command = input.trim().toLowerCase();
    
    if (command === 'clear') {
      setHistory([]);
      setCommandHistory([]);
      setHistoryIndex(-1);
      setInput('');
      return;
    }
  
    const result = handleCommand(input);
    // Extract output string from result object
    const outputText = result?.output || result;
  
    setHistory([
      ...history, 
      { type: 'input', content: input }, 
      { type: 'output', content: outputText }
    ]);
    setCommandHistory([input, ...commandHistory]);
    setInput('');
    setHistoryIndex(-1);
  };
  

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInput(commandHistory[historyIndex + 1]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(commandHistory[historyIndex - 1]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };
  useEffect(() => {
    if (isOpen) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Mobile
      if (width < 768) {
        setPosition({
          x: width * 0.05, // 5% from left
          y: height * 0.1   // 10% from top
        });
      } 
      // Desktop
      else {
        setPosition({
          x: (width - Math.min(800, width * 0.8)) / 2,
          y: (height - Math.min(600, height * 0.8)) / 2
        });
      }
    }
  }, [isOpen]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

<motion.div
  initial={{ 
    opacity: 0, 
    scale: 0.95,
    y: -100 // Increased negative value to move up
  }}
  animate={{ 
    opacity: 1, 
    scale: 1,
    y: -50  // Keep it slightly elevated
  }}
  exit={{ 
    opacity: 0, 
    scale: 0.95,
    y: 50 
  }}
  transition={{ type: "spring", damping: 20, stiffness: 300 }}
  drag
  dragControls={dragControls}
  dragMomentum={false}
  className="fixed left-[45%] top-[45%] -translate-x-1/2 -translate-y-1/2
    w-[90vw] md:w-[80vw] lg:w-[800px]
    h-[80vh] md:h-[70vh] lg:h-[600px]
    max-w-[800px] max-h-[600px]
    min-h-[300px]
    rounded-lg overflow-hidden shadow-2xl z-50"
>
            <div
              onPointerDown={(e) => dragControls.start(e)}
              className={`p-3 md:p-4 ${darkMode ? 'bg-green-900/20' : 'bg-indigo-900/20'} 
                backdrop-blur-md flex items-center justify-between cursor-move`}
            >
              <div className="flex items-center gap-2">
                <FaTerminal className={`text-sm md:text-base ${darkMode ? 'text-green-400' : 'text-indigo-400'}`} />
                <span className={`text-xs md:text-sm ${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
                  terminal
                </span>
              </div>
              <button
                onClick={onClose}
                className={`p-1.5 md:p-2 rounded-full hover:${darkMode ? 'bg-green-500/20' : 'bg-indigo-500/20'}`}
              >
                <FaTimes className={`text-sm md:text-base ${darkMode ? 'text-green-400' : 'text-indigo-400'}`} />
              </button>
            </div>

            <div className={`h-[calc(100%-3rem)] md:h-[calc(100%-4rem)] overflow-auto 
              p-3 md:p-6 font-mono text-sm md:text-base
              ${darkMode ? 'bg-black/90' : 'bg-gray-900/90'} backdrop-blur-md`}
            >
              <div className="mb-4">
                <span className={darkMode ? 'text-green-400' : 'text-indigo-400'}>
                  Welcome to my portfolio terminal. Type 'help' to see available commands.
                </span>
              </div>

              {history.map((entry, i) => (
                <div key={i} className="mb-2">
                  {entry.type === 'input' ? (
                    <div className="flex items-center gap-2">
                      <span className={darkMode ? 'text-green-400' : 'text-indigo-400'}>❯</span>
                      <span className={darkMode ? 'text-green-300' : 'text-indigo-300'}>
                        {entry.content}
                      </span>
                    </div>
                  ) : (
                    <div className={`ml-4 whitespace-pre-wrap ${
                      darkMode ? 'text-green-200' : 'text-indigo-200'
                    }`}>
                      {entry.content}
                    </div>
                  )}
                </div>
              ))}

              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className={darkMode ? 'text-green-400' : 'text-indigo-400'}>❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`flex-1 bg-transparent outline-none ${
                    darkMode ? 'text-green-300' : 'text-indigo-300'
                  }`}
                  autoFocus
                />
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Termi;