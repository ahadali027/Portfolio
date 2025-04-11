import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { 
      name: 'React', 
      description: 'Building interactive UIs',
      color: '#61DAFB' 
    },
    { 
      name: 'Node.js', 
      description: 'Server-side development',
      color: '#339933' 
    },
    { 
      name: 'MongoDB', 
      description: 'NoSQL database management',
      color: '#47A248' 
    },
    { 
      name: 'Express', 
      description: 'RESTful API development',
      color: '#000000' 
    },
    { 
      name: 'JavaScript', 
      description: 'Frontend & backend logic',
      color: '#F7DF1E' 
    },
    { 
      name: 'TypeScript', 
      description: 'Type-safe development',
      color: '#3178C6' 
    },
    { 
      name: 'HTML5', 
      description: 'Semantic web structure',
      color: '#E34F26' 
    },
    { 
      name: 'CSS3', 
      description: 'Styling & animations',
      color: '#1572B6' 
    },
    { 
      name: 'Tailwind CSS', 
      description: 'Utility-first styling',
      color: '#06B6D4' 
    },
    { 
      name: 'Bootstrap', 
      description: 'Responsive framework',
      color: '#7952B3' 
    },
    { 
      name: 'Redux Toolkit', 
      description: 'State management',
      color: '#764ABC' 
    },
    { 
      name: 'Material UI', 
      description: 'React component library',
      color: '#007FFF' 
    },
    { 
      name: 'Shadcn UI', 
      description: 'Modern component system',
      color: '#18181B' 
    },
    { 
      name: 'Framer Motion', 
      description: 'Animation library',
      color: '#0055FF' 
    },
    { 
      name: 'Git', 
      description: 'Version control system',
      color: '#F05032' 
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`
                  }}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <span 
                      className="text-2xl font-bold"
                      style={{ color: skill.color }}
                    >
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 