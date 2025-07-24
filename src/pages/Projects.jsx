import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { FaGithub, FaExternalLinkAlt, FaTerminal, FaShieldAlt } from 'react-icons/fa';
import { SiTensorflow, SiPostgresql, SiPython, SiNodedotjs, SiReact, SiFramer, SiJavascript } from 'react-icons/si';
import { BiLineChart } from 'react-icons/bi';
import { BsFillMicFill } from 'react-icons/bs';

const ProjectCard = ({ project, darkMode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    whileHover={{ y: -5 }}
    className={`p-6 rounded-lg ${
      darkMode ? 'bg-black/30' : 'bg-gray-800/30'
    } backdrop-blur-sm border ${
      darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
    } hover:border-opacity-50 transition-all duration-300`}
  >
    <h3 className={`text-xl font-bold mb-3 ${
      darkMode ? 'text-green-400' : 'text-indigo-400'
    }`}>
      {project.title}
    </h3>
    
    <p className={`mb-4 ${
      darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
    }`}>
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((Icon, index) => (
        <Icon key={index} className={`text-xl ${
          darkMode ? 'text-green-400/70' : 'text-indigo-400/70'
        }`} />
      ))}
    </div>

    <div className="flex gap-4">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
          darkMode 
            ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20' 
            : 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20'
        } transition-colors`}
      >
        <FaGithub />
        GitHub
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            darkMode 
              ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20' 
              : 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20'
          } transition-colors`}
        >
          <FaExternalLinkAlt />
          Demo
        </a>
      )}
    </div>
  </motion.div>
);

const Projects = () => {
  const { darkMode } = useTheme();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      title: 'Surakshamitra',
      description: 'Behaviour-based authentication for banking apps with just 7 dataset and along with cognitive intelligence for enhanced security.',
      category: ['security', 'ai'],
      tech: [SiPython, SiTensorflow, BiLineChart],
      github: 'https://github.com/ESR-style/SurakshaMitra',
      demo: '#'
    },
    {
      title: 'Rytamitra',
      description: 'A finance app for farmers, offering expense tracking, savings management, and AI-driven insights with voice control in Kannada to simplify financial planning.',
      category: ['web', 'ai'],
      tech: [SiReact, SiNodedotjs, SiJavascript, BsFillMicFill],
      github: 'https://github.com/ESR-style/RytaMitra',
      demo: 'https://finathon.vercel.app/'
    },
    {
      title: 'Agriguard',
      description: 'A web application for farmers that provides real time irrigation requirement flood alerts and crop detection along with much more features using NASA data',
      category: 'web',
      tech: [SiReact, SiTensorflow, SiPython, BiLineChart],
      github: 'https://github.com/ESR-style/agriguard',
      demo: 'https://github.com/ESR-style/agriguard'
    },
    {
      title: 'Plant Disease Detector',
      description: 'AI-powered system for scanning and identifying plant diseases using CNN models, providing cure recommendations.',
      category: 'ai',
      tech: [SiTensorflow, SiPython],
      github: 'https://github.com/ESR-style/Crop-Disease-ml',
      demo: 'https://github.com/ESR-style/Crop-Disease-ml'
    },
    {
      title: 'Expense Tracker',
      description: 'Full-stack expense tracking application with interactive dashboard and data visualization.',
      category: 'web',
      tech: [SiReact, SiNodedotjs, SiPostgresql],
      github: 'https://github.com/ESR-style/expense-tracker',
      demo: 'https://expense-tracker-ochre-nine-55.vercel.app/'
    },
    {
      title: 'Finance Dashboard Template',
      description: 'Modern finance tracking dashboard template with interactive charts, dark/light mode, and smooth animations. Features responsive design and reusable components.',
      category: 'web',
      tech: [SiReact, SiFramer, BiLineChart],
      github: 'https://github.com/ESR-style/finance-template',
      demo: 'https://finance-template-ruddy.vercel.app/'
    },
  ];


  const categories = [
    { id: 'all', name: 'all' },
    { id: 'web', name: 'web' },
    { id: 'ai', name: 'ai' },
    { id: 'security', name: 'security' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || (Array.isArray(project.category) ? 
      project.category.includes(filter) : project.category === filter);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-gray-900'}`}>
      <Navbar />
      
      <div className="container mx-auto px-6 pt-20 md:pt-24 md:pl-80">
        <div className="max-w-4xl mx-auto">
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
                  projects.terminal
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono bg-black/20 backdrop-blur-sm">
              {/* Command Input */}
              <div className={`mb-8 ${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
                <div className="mb-4">{`> projects.filter --category "${filter}" ${searchQuery ? `--search "${searchQuery}"` : ''}`}</div>
                
                {/* Filters */}
                <div className="ml-4 flex flex-wrap gap-2 mb-6">
                  {categories.map(category => (
                    <motion.button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1 rounded-lg ${
                        filter === category.id
                          ? darkMode 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-indigo-500/20 text-indigo-400'
                          : darkMode
                            ? 'bg-green-500/5 text-green-400/70 hover:bg-green-500/10' 
                            : 'bg-indigo-500/5 text-indigo-400/70 hover:bg-indigo-500/10'
                      }`}
                    >
                      {`--${category.name}`}
                    </motion.button>
                  ))}
                </div>

                {/* Search */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className={`w-full px-4 py-2 rounded-lg ${
                    darkMode 
                      ? 'bg-green-500/5 text-green-400 placeholder-green-400/50' 
                      : 'bg-indigo-500/5 text-indigo-400 placeholder-indigo-400/50'
                  } border ${
                    darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
                  } focus:outline-none`}
                />
              </div>

              {/* Projects Output */}
              <div className={`${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
                <div className="mb-4">{`> projects.list()`}</div>
                <div className="ml-4 space-y-6">
                  <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-4 rounded-lg ${
                          darkMode ? 'bg-green-500/5' : 'bg-indigo-500/5'
                        } border ${
                          darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
                        }`}
                      >
                        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                        <p className={`mb-4 ${
                          darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
                        }`}>
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 items-center">
                          <div className="flex gap-2">
                            {project.tech.map((Icon, i) => (
                              <Icon key={i} className="text-xl" />
                            ))}
                          </div>
                          
                          <div className="flex gap-3 ml-auto">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:opacity-80"
                            >
                              <FaGithub size={20} />
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:opacity-80"
                            >
                              <FaExternalLinkAlt size={18} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;