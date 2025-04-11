import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const SkillCard = ({ skill, index }) => {
  const renderStars = (level) => {
    const stars = [];
    const fullStars = Math.floor(level / 20);
    const hasHalfStar = (level / 20) % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (hasHalfStar && i === fullStars + 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400 dark:text-gray-600" />);
      }
    }
    
    return stars;
  };

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, rotateY: -10, scale: 0.95 }}
      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
      whileHover={{ scale: 1.03, y: -5 }}
    >
      <div className="relative h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-white dark:bg-dark-200 transform-style-3d hover:rotate-y-10">
        {/* Gradient Background */}
        <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${skill.color}`}></div>
        
        {/* Card Content */}
        <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-100 dark:to-dark-300 shadow-md">
              <span className="text-2xl font-bold" style={{ color: skill.color }}>
                {skill.name.charAt(0)}
              </span>
            </div>
            <div className="flex">
              {renderStars(skill.level)}
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">{skill.name}</h3>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {skill.level}% Proficiency
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard; 