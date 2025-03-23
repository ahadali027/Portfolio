import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaUser, FaAward } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary-500 dark:text-primary-400" size={20} />,
      title: 'Email',
      value: 'ahadali.p027@gmail.com',
      link: 'mailto:ahadali.p027@gmail.com',
    },
    {
      icon: <FaPhone className="text-primary-500 dark:text-primary-400" size={20} />,
      title: 'Phone',
      value: '+92-343-4236498',
      link: 'tel:+923434236498',
    },
    {
      icon: <FaLinkedin className="text-primary-500 dark:text-primary-400" size={20} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/ahadali027',
      link: 'https://linkedin.com/in/ahadali027',
    },
    {
      icon: <FaGithub className="text-primary-500 dark:text-primary-400" size={20} />,
      title: 'GitHub',
      value: 'github.com/ahadali027',
      link: 'https://github.com/ahadali027',
    },
  ];

  const achievements = [
    {
      icon: <FaUser className="text-blue-500" size={18} />,
      text: 'MERN Stack Developer with 2+ years experience'
    },
    {
      icon: <FaAward className="text-yellow-500" size={18} />,
      text: 'Certified in Namaste-Javascript'
    },
    {
      icon: <FaAward className="text-green-500" size={18} />,
      text: 'Cisco Cybersecurity Essentials Certified'
    }
  ];

  const inputClasses = "w-full px-3 py-2 sm:px-4 sm:py-3 bg-white dark:bg-dark-200 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-sm sm:text-base";

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-100 to-light-200 dark:from-dark-100 dark:to-dark-200 z-0"></div>
      
      {/* Content */}
      <Container className="relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Feel free to reach out!"
          centered
        />

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 mt-8 sm:mt-10 md:mt-12">
          {/* Contact info */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white dark:bg-dark-200 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-5 sm:p-6 md:p-8 h-full flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                Ahad Ali
              </h3>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 sm:p-3 bg-primary-50 dark:bg-primary-900/20 rounded-md sm:rounded-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:underline break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Developer Profile - Replaced 3D Animation */}
              <div className="flex-grow relative min-h-[250px] sm:min-h-[300px] rounded-lg sm:rounded-xl overflow-hidden mt-3 sm:mt-4 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-900/10 dark:to-secondary-900/10 p-4 sm:p-6">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">Professional Summary</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                      Experienced MERN stack developer specializing in building scalable, secure, and user-centric web applications. Passionate about delivering high-quality solutions with a focus on performance and modern UX/UI.
                    </p>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2">Achievements & Skills</h4>
                    {achievements.map((achievement, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-2 sm:gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-white dark:bg-dark-100 p-1.5 sm:p-2 rounded-full shadow-sm flex-shrink-0">
                          {achievement.icon}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{achievement.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="w-full lg:w-7/12 mt-6 lg:mt-0">
            <motion.div 
              className="bg-white dark:bg-dark-200 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-5 sm:p-6 md:p-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                Send Me a Message
              </h3>
              
              {submitted ? (
                <motion.div 
                  className="p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg sm:text-xl font-medium text-green-700 dark:text-green-400 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm sm:text-base text-green-600 dark:text-green-300">
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block mb-1.5 sm:mb-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formState.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5 sm:mb-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-1.5 sm:mb-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Subject"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-1.5 sm:mb-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">Message</label>
                    <textarea 
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows="5" 
                      className={inputClasses}
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto"
                      size="md"
                      isLoading={isSubmitting}
                      icon={<FaPaperPlane />}
                      iconPosition="right"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact; 