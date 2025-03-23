import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="py-32 md:py-40">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-md"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="flex justify-center gap-4">
              <Button to="/">Back to Home</Button>
              <Button to="/contact" variant="outline">Contact Me</Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
