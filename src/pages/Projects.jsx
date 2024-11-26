import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { SiTensorflow, SiPostgresql, SiPython, SiNodedotjs, SiReact, SiFramer,SiJavascript } from 'react-icons/si';
import { 
  BiLineChart 
} from 'react-icons/bi'; 

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
      title: 'Agriguard',
      description: 'Voice-controlled mobile app for Indian farmers providing agricultural news, weather updates, and product recommendations.',
      category: 'web',
      tech: [SiReact,SiTensorflow, SiPython, BiLineChart],
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
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-gray-900'}`}>
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-6 pt-20 md:pt-24 md:pl-80"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8"
          >
            <h1 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-green-400' : 'text-indigo-400'
            }`}>
              Projects
            </h1>
            <p className={`${
              darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
            }`}>
              Explore my recent projects and experiments
            </p>
          </motion.div>

          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                darkMode ? 'text-green-400' : 'text-indigo-400'
              }`} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-lg ${
                  darkMode 
                    ? 'bg-green-500/5 text-green-400 placeholder-green-400/50' 
                    : 'bg-indigo-500/5 text-indigo-400 placeholder-indigo-400/50'
                } border ${
                  darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
                } focus:outline-none focus:ring-1 focus:ring-opacity-50 ${
                  darkMode ? 'focus:ring-green-500' : 'focus:ring-indigo-500'
                }`}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filter === category.id
                      ? darkMode 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-indigo-500/20 text-indigo-400'
                      : darkMode
                        ? 'bg-green-500/5 text-green-400/70 hover:bg-green-500/10' 
                        : 'bg-indigo-500/5 text-indigo-400/70 hover:bg-indigo-500/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid gap-6 md:grid-cols-2"
          >
            <AnimatePresence>
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project.title}
                  project={project}
                  darkMode={darkMode}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;