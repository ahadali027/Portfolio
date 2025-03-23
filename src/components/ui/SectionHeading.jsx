import { motion } from 'framer-motion';
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false, 
  light = false, 
  className = "" 
}) => {
  const { ref, inView } = useAnimateOnScroll(0.2);

  return (
    <div 
      ref={ref} 
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold font-heading mb-4
          ${light ? 'text-white' : 'text-gray-800 dark:text-white'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="relative inline-block">
          {title}
          <motion.span 
            className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary-500 dark:bg-primary-400"
            initial={{ width: 0 }}
            animate={inView ? { width: '50%' } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''}
            ${light ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading; 