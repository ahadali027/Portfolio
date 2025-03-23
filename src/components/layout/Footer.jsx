import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={18} />, url: 'https://github.com/ahadali027' },
    { name: 'LinkedIn', icon: <FaLinkedin size={18} />, url: 'https://linkedin.com/in/ahadali027' },
    { name: 'Twitter', icon: <FaTwitter size={18} />, url: 'https://twitter.com' },
    { name: 'Email', icon: <FaEnvelope size={18} />, url: 'mailto:ahadali.p027@gmail.com' },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-light-200 dark:bg-dark-200 py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Logo & Description */}
          <div className="col-span-1 sm:col-span-2">
            <Link to="/" className="inline-block mb-2 sm:mb-4">
              <div className="text-xl sm:text-2xl font-bold font-heading text-primary-600 dark:text-primary-400">
                <span className="text-secondary-600 dark:text-secondary-400">Ahad</span> Portfolio
              </div>
            </Link>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-md">
              Passionate MERN Stack developer specializing in creating responsive and dynamic web applications. 
              Expertise in building scalable and secure solutions with a focus on modern user experiences.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 mt-4 sm:mt-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 mt-4 sm:mt-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4">Contact Info</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <li>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Location</p>
                <p className="font-medium">Remote</p>
              </li>
              <li>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Email</p>
                <a 
                  href="mailto:ahadali.p027@gmail.com" 
                  className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all"
                >
                  ahadali.p027@gmail.com
                </a>
              </li>
              <li>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Phone</p>
                <a 
                  href="tel:+923434236498" 
                  className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  +92-343-4236498
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-6">
          <p className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Ahad Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 