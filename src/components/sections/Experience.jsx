import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';

const Experience = () => {
  const { ref, inView } = useAnimateOnScroll(0.1);

  const workExperience = [
    {
      title: 'MERN Stack Developer',
      company: 'Leading Courier Service',
      location: 'Remote',
      period: 'Jan 2022 - Present',
      description: [
        'Led frontend development, integrating Redux Toolkit with RTK Query for efficient API fetching and state management',
        'Built responsive and user-friendly interfaces with a focus on modern UI/UX principles',
        'Collaborated with the backend team to design and optimize RESTful APIs',
        'Improved application performance and user experience through code optimization techniques'
      ],
      type: 'work'
    },
    {
      title: 'Frontend Developer',
      company: 'Web Solutions Agency',
      location: 'Remote',
      period: 'May 2021 - Dec 2021',
      description: [
        'Developed high-performance RESTful APIs using Node.js and Express.js',
        'Implemented secure authentication and authorization using JWT',
        'Created responsive user interfaces with React and modern CSS frameworks',
        'Collaborated with cross-functional teams to design and deliver scalable applications'
      ],
      type: 'work'
    },
    {
      title: 'Web Development Intern',
      company: 'Tech Startup',
      location: 'Remote',
      period: 'Jan 2021 - Apr 2021',
      description: [
        'Assisted in developing components for web applications using React',
        'Gained hands-on experience with MongoDB and Express.js',
        'Participated in code reviews and implemented feedback from senior developers',
        'Contributed to the development of responsive UI designs'
      ],
      type: 'work'
    },
    {
      title: 'Namaste-Javascript Certification',
      company: 'Akshay Saini',
      location: 'Online',
      period: '2022',
      description: [
        'Advanced JavaScript concepts and patterns',
        'Deep dive into JavaScript execution context and closures',
        'Performance optimization techniques for JavaScript applications'
      ],
      type: 'education'
    },
    {
      title: 'Cisco Cybersecurity Essentials',
      company: 'Cisco Networking Academy',
      location: 'Online',
      period: '2021',
      description: [
        'Fundamentals of cybersecurity and network security principles',
        'Best practices for securing applications and data',
        'Understanding of common vulnerabilities and threat mitigation strategies'
      ],
      type: 'education'
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20">
      <Container>
        <SectionHeading
          title="Work Experience & Education"
          subtitle="My professional journey and certifications"
          centered
        />

        <div className="mt-8 sm:mt-10 md:mt-12 relative" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 sm:w-1 bg-gray-200 dark:bg-gray-800"></div>

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {workExperience.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-dark-200 border-3 sm:border-4 border-primary-500 dark:border-primary-400 z-10 flex items-center justify-center">
                  {item.type === 'work' ? (
                    <HiBriefcase className="text-primary-600 dark:text-primary-400 text-xs sm:text-sm" />
                  ) : (
                    <HiAcademicCap className="text-primary-600 dark:text-primary-400 text-xs sm:text-sm" />
                  )}
                </div>

                {/* Content */}
                <div className={`w-full pl-10 sm:pl-16 md:w-1/2 ${
                  index % 2 === 0 
                    ? 'md:pl-0 md:pr-12 lg:pr-16' 
                    : 'md:pl-12 lg:pl-16'
                }`}>
                  <div className="p-4 sm:p-5 md:p-6 bg-white dark:bg-dark-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full mb-3 sm:mb-4 ${
                      item.type === 'work' 
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300' 
                        : 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
                    }`}>
                      {item.type === 'work' ? 'Work Experience' : 'Certification'}
                    </span>
                    
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                    
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 xs:gap-0 mb-3 sm:mb-4">
                      <p className="text-sm md:text-base text-primary-600 dark:text-primary-400 font-medium">{item.company}</p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">{item.location}</p>
                    
                    <ul className="space-y-1.5 sm:space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm flex items-start">
                          <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 mt-1.5 mr-2"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;