import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { 
  FaReact, FaPython, FaJava, FaNode, FaHtml5, FaCss3, FaGit,
  FaDatabase, FaGamepad, FaTerminal 
} from 'react-icons/fa';
import { 
  SiJavascript, SiCplusplus, SiC, SiLua, SiTailwindcss, 
  SiNextdotjs, SiExpress, SiPostgresql, SiTensorflow
} from 'react-icons/si';

const Skills = () => {
  const { darkMode } = useTheme();

  const skillSections = [
    {
      title: "Programming Languages",
      description: "Core languages I work with",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, proficiency: 80 },
        { name: "Python", icon: <FaPython />, proficiency: 25 },
        { name: "Java", icon: <FaJava />, proficiency: 10 },
        { name: "C++", icon: <SiCplusplus />, proficiency: 35 },
        { name: "C", icon: <SiC />, proficiency: 35 },
        { name: "Lua", icon: <SiLua />, proficiency: 45 }
      ]
    },
    {
      title: "Web Development",
      description: "Frontend and Backend technologies",
      skills: [
        { name: "React", icon: <FaReact />, proficiency: 90 },
        { name: "Node.js", icon: <FaNode />, proficiency: 75 },
        { name: "Next.js", icon: <SiNextdotjs />, proficiency: 1 },
        { name: "Express", icon: <SiExpress />, proficiency: 75 },
        { name: "HTML5", icon: <FaHtml5 />, proficiency: 95 },
        { name: "CSS3", icon: <FaCss3 />, proficiency: 70 },
        { name: "Tailwind", icon: <SiTailwindcss />, proficiency: 85 }
      ]
    },
    {
      title: "Database & Backend",
      description: "Data management and server technologies",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, proficiency: 10 },
        { name: "RESTful APIs", icon: <FaDatabase />, proficiency: 80 }
      ]
    },
    {
      title: "AI/ML & Game Development",
      description: "Artificial Intelligence and Gaming",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow />, proficiency: 10 },
        { name: "Game Dev", icon: <FaGamepad />, proficiency: 35 }
      ]
    },
    {
      title: "Tools & Version Control",
      description: "Development tools and workflows",
      skills: [
        { name: "Git", icon: <FaGit />, proficiency: 90 }
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.02 }}
                            className={`p-4 rounded-lg ${
                              darkMode ? 'bg-green-500/5' : 'bg-indigo-500/5'
                            } border ${
                              darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
                            }`}
                          >
                            <div className="flex items-center gap-3 mb-2">
  <span className={`text-xl ${
    darkMode ? 'text-green-400' : 'text-indigo-400'
  }`}>
    {skill.icon}
  </span>
  <span className={`${
    darkMode ? 'text-green-300' : 'text-indigo-300'
  }`}>
    {skill.name}
  </span>
</div>
                            {/* Proficiency Bar */}
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 rounded-full bg-black/20 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.proficiency}%` }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  className={`h-full rounded-full ${
                                    darkMode ? 'bg-green-400' : 'bg-indigo-400'
                                  }`}
                                />
                              </div>
                              <span className="text-xs">
                                {`${skill.proficiency}%`}
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