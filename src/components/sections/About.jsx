import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';
import { FaCode, FaLaptopCode, FaDatabase, FaServer } from 'react-icons/fa';

const About = () => {
  const { ref, inView } = useAnimateOnScroll(0.2);

  const features = [
    {
      icon: <FaCode size={24} />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React, Redux Toolkit with RTK Query, and modern CSS frameworks.',
      color: 'bg-blue-500 dark:bg-blue-600',
    },
    {
      icon: <FaServer size={24} />,
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side applications with Node.js, Express, and various middlewares for secure, scalable solutions.',
      color: 'bg-green-500 dark:bg-green-600',
    },
    {
      icon: <FaDatabase size={24} />,
      title: 'Database Management',
      description: 'Designing and implementing database schemas using MongoDB, optimizing for performance and data integrity.',
      color: 'bg-yellow-500 dark:bg-yellow-600',
    },
    {
      icon: <FaLaptopCode size={24} />,
      title: 'Full Stack Integration',
      description: 'Seamlessly connecting frontend and backend systems to create cohesive applications with a focus on security and user experience.',
      color: 'bg-purple-500 dark:bg-purple-600',
    },
  ];

  const statItems = [
    { number: '2+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '2', label: 'Certifications' },
    { number: '4', label: 'Industry Solutions' },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-light-200 dark:bg-dark-200">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="A passionate MERN stack developer specializing in building exceptional digital experiences."
          centered
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mt-8 sm:mt-12">
          {/* Image column */}
          <motion.div 
            className="w-full lg:w-2/5 px-4 sm:px-8 md:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            ref={ref}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 dark:from-primary-500/10 dark:to-secondary-500/10 rounded-lg -translate-x-3 sm:-translate-x-5 translate-y-3 sm:translate-y-5"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-primary-600 to-secondary-600 w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center p-4 sm:p-6">
                  <p className="text-white text-base sm:text-lg md:text-xl italic text-center">
                    "I transform complex business requirements into elegant, user-friendly applications with a focus on security, performance, and exceptional user experience."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <div className="w-full lg:w-3/5 mt-8 lg:mt-0 px-4 sm:px-8 md:px-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
                Ahad Ali - MERN Stack Developer
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                With over 2+ years of experience as a MERN stack Developer, I am passionate about developing scalable, secure, and user-centric applications. 
                My technical proficiency spans across MongoDB, Express.js, React, and Node.js, allowing me to build comprehensive solutions for various business needs.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Throughout my career, I have successfully collaborated to design, develop, and deploy innovative applications for startups and enterprises. 
                I specialize in building high-performance RESTful APIs and leading frontend development with Redux Toolkit and RTK Query integration.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mb-8 sm:mb-10">
                {statItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/50 dark:bg-dark-100/50 rounded-lg py-3 px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 * (index + 3) }}
                  >
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                      {item.number}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg bg-white dark:bg-dark-100 shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 7) }}
                >
                  <div className={`p-3 rounded-lg ${feature.color} text-white self-start mx-auto sm:mx-0`}>
                    {feature.icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About; 