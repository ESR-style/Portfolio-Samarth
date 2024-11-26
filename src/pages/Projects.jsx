import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { FaGithub, FaExternalLinkAlt, FaTerminal } from 'react-icons/fa';
import { SiTensorflow, SiPostgresql, SiPython, SiNodedotjs, SiReact } from 'react-icons/si';

const Projects = () => {
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

  const projects = [
    {
      title: "Agriguard",
      description: "Voice-controlled mobile app for Indian farmers providing agricultural news, weather updates, and product recommendations.",
      tech: [<SiReact key="react" />,<SiNodedotjs key="node" />, <SiPostgresql key="postgres" />],
      links: {
        github: "https://github.com/ESR-style/AgriGuard",
        live: "https://agri-guard-five.vercel.app/"
      }
    },
    {
      title: "Plant Disease Detector",
      description: "AI-powered system for scanning and identifying plant diseases using CNN models, providing cure recommendations.",
      tech: [<SiTensorflow key="tensorflow" />, <SiPython key="python" />],
      links: {
        github: "https://github.com/ESR-style/Crop-Disease-ml",
        live: "https://github.com/ESR-style/Crop-Disease-ml"
      }
    },
    {
      title: "Expense Tracker",
      description: "Full-stack expense tracking application with interactive dashboard and data visualization.",
      tech: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiPostgresql key="postgres" />],
      links: {
        github: "https://github.com/ESR-style/Expense-tracker",
        live: "https://expense-tracker-ochre-nine-55.vercel.app/"
      }
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
        <div className={`rounded-lg border ${
          darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
        } p-6 backdrop-blur-sm bg-black/20 max-w-4xl mx-auto`}>
          
          <motion.div variants={itemVariants} className="font-mono mb-8">
            <span className={`${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
              {`> system.projects.load()`}
            </span>
          </motion.div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`p-6 rounded-lg border ${
                  darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
                } backdrop-blur-sm hover:bg-black/30 transition-colors`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-xl font-mono ${
                    darkMode ? 'text-green-400' : 'text-indigo-400'
                  }`}>
                    {`> ${project.title}`}
                  </h3>
                  <div className="flex gap-3">
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${
                        darkMode ? 'text-green-400 hover:text-green-300' : 'text-indigo-400 hover:text-indigo-300'
                      }`}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${
                        darkMode ? 'text-green-400 hover:text-green-300' : 'text-indigo-400 hover:text-indigo-300'
                      }`}
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.a>
                  </div>
                </div>

                <p className={`font-mono text-sm mb-4 ${
                  darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
                }`}>
                  {project.description}
                </p>

                <div className="flex gap-3">
                  {project.tech.map((icon, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        darkMode ? 'text-green-400/70' : 'text-indigo-400/70'
                      }`}
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Experience Section */}
            <motion.div variants={itemVariants} className="mt-8">
              <h2 className={`text-xl font-mono mb-6 ${
                darkMode ? 'text-green-400' : 'text-indigo-400'
              }`}>
                {`> system.experiences.load()`}
              </h2>

              <div className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  className={`p-6 rounded-lg border ${
                    darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
                  } backdrop-blur-sm`}
                >
                  <h3 className={`text-lg font-mono mb-2 ${
                    darkMode ? 'text-green-400' : 'text-indigo-400'
                  }`}>
                    {`> Hackathon Lead`}
                  </h3>
                  <p className={`font-mono text-sm ${
                    darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
                  }`}>
                    Led a team of beginners through hackathon projects, providing guidance and ensuring efficient collaboration.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className={`p-6 rounded-lg border ${
                    darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
                  } backdrop-blur-sm`}
                >
                  <h3 className={`text-lg font-mono mb-2 ${
                    darkMode ? 'text-green-400' : 'text-indigo-400'
                  }`}>
                    {`> Tech Club Founder & Leader`}
                  </h3>
                  <p className={`font-mono text-sm ${
                    darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
                  }`}>
                    Founded and led SJCE Mysore's tech club, focusing on AI, web development, and game development projects.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;