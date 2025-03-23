import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, 
  FaFigma, FaDatabase, FaDocker, FaAws
} from 'react-icons/fa';
import { 
  SiRedux, SiMongodb, SiExpress, SiTailwindcss, SiTypescript,
  SiFirebase, SiNextdotjs, SiGraphql 
} from 'react-icons/si';

const Skills = () => {
  const { ref, inView } = useAnimateOnScroll(0.1);

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact size={24} />, color: "#61DAFB" },
        { name: "Redux", icon: <SiRedux size={24} />, color: "#764ABC" },
        { name: "JavaScript", icon: <FaJs size={24} />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript size={24} />, color: "#3178C6" },
        { name: "HTML5", icon: <FaHtml5 size={24} />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt size={24} />, color: "#1572B6" },
        { name: "Tailwind", icon: <SiTailwindcss size={24} />, color: "#06B6D4" },
        { name: "Next.js", icon: <SiNextdotjs size={24} />, color: "#000000" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={24} />, color: "#339933" },
        { name: "Express", icon: <SiExpress size={24} />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb size={24} />, color: "#47A248" },
        { name: "GraphQL", icon: <SiGraphql size={24} />, color: "#E10098" },
        { name: "Firebase", icon: <SiFirebase size={24} />, color: "#FFCA28" },
        { name: "REST API", icon: <FaDatabase size={24} />, color: "#4169E1" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt size={24} />, color: "#F05032" },
        { name: "Docker", icon: <FaDocker size={24} />, color: "#2496ED" },
        { name: "AWS", icon: <FaAws size={24} />, color: "#FF9900" },
        { name: "Figma", icon: <FaFigma size={24} />, color: "#F24E1E" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-white dark:bg-dark-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-500/50 filter blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-secondary-500/50 filter blur-3xl"></div>
      </div>
      
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="Technologies I work with"
          centered
        />
        
        <div className="relative mt-10 sm:mt-16" ref={ref}>
          {skillGroups.map((group, groupIndex) => (
            <motion.div 
              key={group.title} 
              className="mb-12 md:mb-16 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8 inline-block relative">
                {group.title}
                <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
                {group.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) + (groupIndex * 0.1) }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col items-center bg-gray-50 dark:bg-dark-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                      <div 
                        className="w-12 h-12 mb-3 flex items-center justify-center rounded-md transition-all duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Simple decorative element */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </Container>
    </section>
  );
};

export default Skills; 