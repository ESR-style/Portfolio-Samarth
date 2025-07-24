import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { 
  FaReact, FaPython, FaJava, FaNode, FaHtml5, FaCss3, FaGit,
  FaDatabase, FaGamepad, FaTerminal, FaShieldAlt, FaBug, FaUserSecret
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiCplusplus, SiC, SiLua, SiTailwindcss, 
  SiNextdotjs, SiExpress, SiPostgresql, SiTensorflow, SiKalilinux,
  SiFastapi
} from 'react-icons/si';

const Skills = () => {
  const { darkMode } = useTheme();

  const skillSections = [
    {
      title: "Programming Languages",
      description: "Core languages I work with",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "C", icon: <SiC /> },
        { name: "Lua", icon: <SiLua /> }
      ]
    },
    {
      title: "Web Development",
      description: "Frontend and Backend technologies",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNode /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3 /> },
        { name: "Tailwind", icon: <SiTailwindcss /> }
      ]
    },
    {
      title: "Database & Backend",
      description: "Data management and server technologies",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "RESTful APIs", icon: <FaDatabase /> }
      ]
    },
    {
      title: "Machine Learning & AI",
      description: "Artificial Intelligence and Data Science",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Machine Learning", icon: <FaTerminal /> },
        { name: "Data Analysis", icon: <FaDatabase /> }
      ]
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      description: "Offensive security and penetration testing",
      skills: [
        { name: "Manual Penetration Testing", icon: <FaUserSecret /> },
        { name: "Bug Bounty Hunting", icon: <FaBug /> },
        { name: "Red Team Operations", icon: <FaShieldAlt /> },
        { name: "Kali Linux", icon: <SiKalilinux /> },
        { name: "Caido", icon: <FaTerminal /> },
        { name: "Web Application Security", icon: <FaShieldAlt /> },
        { name: "Network Security", icon: <FaTerminal /> }
      ]
    },
    {
      title: "Game Development & Tools",
      description: "Gaming and development tools",
      skills: [
        { name: "Game Development", icon: <FaGamepad /> },
        { name: "Git", icon: <FaGit /> }
      ]
    }
  ];

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
                  skills.terminal
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono bg-black/20 backdrop-blur-sm">
              <div className={`mb-8 ${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
                <div className="mb-2">{`> system.skills.list()`}</div>
              </div>

              <div className="space-y-8">
                {skillSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`mb-4 ${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
                      {`> skills.get("${section.title}")`}
                    </div>
                    <div className="ml-4 space-y-4">
                      <div className={`text-sm ${
                        darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
                      }`}>
                        {section.description}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05 }}
                            className={`p-4 rounded-lg ${
                              darkMode ? 'bg-green-500/5' : 'bg-indigo-500/5'
                            } border ${
                              darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
                            } transition-all duration-300`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`text-xl ${
                                darkMode ? 'text-green-400' : 'text-indigo-400'
                              }`}>
                                {skill.icon}
                              </span>
                              <span className={`${
                                darkMode ? 'text-green-300' : 'text-indigo-300'
                              } font-medium`}>
                                {skill.name}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;