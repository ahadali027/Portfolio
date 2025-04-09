import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'MongoDB', level: 80, color: '#47A248' },
    { name: 'Express', level: 85, color: '#000000' },
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'TypeScript', level: 80, color: '#3178C6' },
    { name: 'HTML5', level: 95, color: '#E34F26' },
    { name: 'CSS3', level: 90, color: '#1572B6' },
    { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
    { name: 'Git', level: 85, color: '#F05032' },
    { name: 'Docker', level: 75, color: '#2496ED' },
    { name: 'AWS', level: 70, color: '#232F3E' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Here are some of the technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 