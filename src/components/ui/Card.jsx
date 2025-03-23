import { motion } from 'framer-motion';
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';

const Card = ({ 
  children, 
  className = "", 
  hover = true, 
  shadow = true, 
  border = false,
  delay = 0 
}) => {
  const { ref, inView } = useAnimateOnScroll(0.1);

  return (
    <motion.div
      ref={ref}
      className={`
        rounded-lg overflow-hidden
        ${shadow ? 'shadow-lg dark:shadow-gray-900/20' : ''}
        ${border ? 'border border-gray-200 dark:border-gray-800' : ''}
        ${hover ? 'hover:shadow-xl dark:hover:shadow-gray-900/30 hover:-translate-y-1' : ''}
        bg-white dark:bg-dark-200
        transition-all duration-300
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default Card; 