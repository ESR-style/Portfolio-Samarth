import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { 
  FaTerminal, 
  FaReact, 
  FaNode, 
  FaHtml5, 
  FaCss3, 
  FaDatabase, 
  FaGamepad, 
  FaPython, 
  FaGithub,
  FaJava // Added FaJava instead of SiJava
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiLua, 
  SiTensorflow, 
  SiPostman, 
  SiJavascript, 
  SiCplusplus, 
  SiC, 
  SiFramer, 
  SiExpress 
} from 'react-icons/si';

const Skills = () => {
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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

  const skillSections = [
    {
        title: "Programming Languages",
        skills: [
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Java", icon: <FaJava /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "C", icon: <SiC /> },
            { name: "Lua", icon: <SiLua /> }
          ]
      },
      {
        title: "Web Development",
        skills: [
          { name: "React", icon: <FaReact /> },
          { name: "Node.js", icon: <FaNode /> },
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "Express.js", icon: <SiExpress /> },
          { name: "HTML", icon: <FaHtml5 /> },
          { name: "CSS", icon: <FaCss3 /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss /> },
          { name: "Framer Motion", icon: <SiFramer /> }
        ]
      },
    {
      title: "Database & Backend",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> }
      ]
    },
    {
      title: "Game Development",
      skills: [
        { name: "Lua", icon: <SiLua /> }
      ]
    },
    {
      title: "AI/ML",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Python (ML)", icon: <FaPython /> }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "VS Code", icon: <FaTerminal /> }
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-gray-900'}`}>
      <Navbar />
      
      <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="container mx-auto px-6 pt-20 md:pt-24 md:pl-80" // Reduced top padding
>
        <div className={`rounded-lg border ${
          darkMode ? 'border-green-500/20' : 'border-indigo-500/20'
        } p-6 backdrop-blur-sm bg-black/20 max-w-4xl mx-auto`}>
          
          <motion.div variants={itemVariants} className="font-mono mb-8">
            <span className={`${darkMode ? 'text-green-400' : 'text-indigo-400'}`}>
              {`> system.skills.load()`}
            </span>
          </motion.div>

          {skillSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="mb-8"
            >
              <h2 className={`text-xl font-mono mb-4 ${
                darkMode ? 'text-green-400' : 'text-indigo-400'
              }`}>
                {`> ${section.title}`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-lg ${
                      darkMode ? 'bg-green-500/10' : 'bg-indigo-500/10'
                    } backdrop-blur-sm`}
                  >
                    <div className="flex items-center gap-3">
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;