import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const { ref, inView } = useAnimateOnScroll(0.1);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'EduLearn LMS Platform',
      description: 'A comprehensive learning management system with course creation, enrollment, progress tracking, and interactive quizzes.',
      gradient: 'from-indigo-600 to-purple-600',
      category: 'lms',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 2,
      title: 'ShopSmart E-commerce',
      description: 'Full-featured e-commerce platform with product catalog, user authentication, shopping cart, and payment integration.',
      gradient: 'from-blue-500 to-cyan-500',
      category: 'ecommerce',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 3,
      title: 'Swift POS System',
      description: 'Point of sale system for retail businesses with inventory management, sales tracking, and reporting features.',
      gradient: 'from-emerald-500 to-green-500',
      category: 'pos',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 4,
      title: 'CloudTask SaaS Application',
      description: 'Project management SaaS tool with task tracking, team collaboration, and analytics dashboard.',
      gradient: 'from-purple-500 to-pink-500',
      category: 'saas',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'WebSockets'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 5,
      title: 'HealthTrack Portal',
      description: 'Healthcare patient management system with appointment scheduling, medical records, and patient portal.',
      gradient: 'from-pink-500 to-rose-500',
      category: 'saas',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 6,
      title: 'Inventory Master',
      description: 'Advanced inventory management system for small businesses with barcode scanning and supplier management.',
      gradient: 'from-amber-500 to-yellow-500',
      category: 'pos',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redux'],
      links: {
        live: '#',
        github: '#',
      },
    },
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'LMS', value: 'lms' },
    { label: 'E-commerce', value: 'ecommerce' },
    { label: 'POS', value: 'pos' },
    { label: 'SaaS', value: 'saas' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-light-200 dark:bg-dark-200">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore some of my recent work showcasing expertise in MERN stack development"
          centered
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-10 md:mb-12 gap-2 sm:gap-3" ref={ref}>
          {filters.map((item, index) => (
            <motion.button
              key={item.value}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300
                ${filter === item.value
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300'
                }
              `}
              onClick={() => setFilter(item.value)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden" delay={index}>
              <div className="relative overflow-hidden group">
                <div className={`w-full h-40 sm:h-44 md:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <h3 className="text-white text-xl sm:text-2xl font-bold text-center px-4">{project.title}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 sm:p-4 w-full">
                    <div className="flex gap-2 sm:gap-3 justify-end">
                      <a 
                        href={project.links.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-colors"
                      >
                        <FaGithub className="text-white" size={16} />
                      </a>
                      <a 
                        href={project.links.live} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-colors"
                      >
                        <FaExternalLinkAlt className="text-white" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-[10px] sm:text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 text-[10px] sm:text-xs rounded">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-gray-800 dark:text-white line-clamp-1">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                <Button to={`/projects/${project.id}`} variant="outline" size="xs" className="w-full">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View more button */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <Button to="/projects" variant="primary" size="md">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Projects; 