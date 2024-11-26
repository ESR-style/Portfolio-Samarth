import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { 
  FaReact, FaPython, FaJava, FaNode, FaHtml5, FaCss3, FaGit,
  FaDatabase, FaGamepad 
} from 'react-icons/fa';
import { 
  SiJavascript, SiCplusplus, SiC, SiLua, SiTailwindcss, 
  SiNextdotjs, SiExpress, SiPostgresql, SiTensorflow
} from 'react-icons/si';

const SkillCard = ({ skill, darkMode }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className={`p-4 rounded-lg ${
      darkMode ? 'bg-green-500/5' : 'bg-indigo-500/5'
    } backdrop-blur-sm border ${
      darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
    } hover:border-opacity-50 transition-all duration-300`}
  >
    <div className="flex items-center gap-3 mb-2">
      <span className={`text-2xl ${
        darkMode ? 'text-green-400' : 'text-indigo-400'
      }`}>
        {skill.icon}
      </span>
      <h3 className={`font-semibold ${
        darkMode ? 'text-green-400' : 'text-indigo-400'
      }`}>
        {skill.name}
      </h3>
    </div>
    {skill.proficiency && (
      <div className="w-full h-2 rounded-full bg-black/20 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full rounded-full ${
            darkMode ? 'bg-green-400' : 'bg-indigo-400'
          }`}
        />
      </div>
    )}
  </motion.div>
);

const Skills = () => {
  const { darkMode } = useTheme();

  const skillSections = [
    {
      title: "Programming Languages",
      description: "Core languages I work with",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, proficiency: 75 },
        { name: "Python", icon: <FaPython />, proficiency: 25 },
        { name: "Java", icon: <FaJava />, proficiency: 5 },
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
        { name: "Node.js", icon: <FaNode />, proficiency: 65 },
        { name: "Next.js", icon: <SiNextdotjs />, proficiency: 0 },
        { name: "Express", icon: <SiExpress />, proficiency: 65 },
        { name: "HTML5", icon: <FaHtml5 />, proficiency: 95 },
        { name: "CSS3", icon: <FaCss3 />, proficiency: 70 },
        { name: "Tailwind", icon: <SiTailwindcss />, proficiency: 95 }
      ]
    },
    {
      title: "Database & Backend",
      description: "Data management and server technologies",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, proficiency: 25 },
        { name: "RESTful APIs", icon: <FaDatabase />, proficiency: 95 }
      ]
    },
    {
      title: "AI/ML & Game Development",
      description: "Artificial Intelligence and Gaming",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow />, proficiency: 15 },
        { name: "Game Dev", icon: <FaGamepad />, proficiency: 25 }
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
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-6 pt-20 md:pt-24 md:pl-80"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-12"
          >
            <h1 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-green-400' : 'text-indigo-400'
            }`}>
              Skills & Expertise
            </h1>
            <p className={`${
              darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
            }`}>
              A comprehensive overview of my technical capabilities
            </p>
          </motion.div>

          <div className="space-y-12">
            {skillSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className={`text-xl font-semibold mb-2 ${
                  darkMode ? 'text-green-400' : 'text-indigo-400'
                }`}>
                  {section.title}
                </h2>
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-green-300/70' : 'text-indigo-300/70'
                }`}>
                  {section.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.skills.map((skill) => (
                    <SkillCard 
                      key={skill.name}
                      skill={skill}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;