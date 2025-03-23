import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
// import MernStack3D from '../3d/MernStack3D';
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Hero = () => {
  const particlesRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Parallax effect for decorative elements
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] },
    },
  };

  // Create animated background with canvas
  useEffect(() => {
    if (!particlesRef.current) return;

    const canvas = particlesRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(${Math.random() * 80 + 100}, ${
          Math.random() * 80 + 100
        }, ${Math.random() * 120 + 135}, ${Math.random() * 0.3 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around canvas edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles = [];
    // Adjust particle count based on screen size
    const particleCount = Math.min(100, Math.max(30, window.innerWidth * 0.04));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      // Connect particles within a certain distance
      // Adjust connection distance based on screen width
      const connectionDistance = window.innerWidth < 768 ? 70 : 100;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 120, 255, ${
              0.2 * (1 - distance / connectionDistance)
            })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-0px)]  md:min-h-screen flex items-center py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Animated Particle Background */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0  z-0 bg-gradient-to-r from-primary-900/30 via-transparent to-secondary-900/30 dark:from-primary-900/40 dark:to-secondary-900/40 pointer-events-none"></div>

      {/* Animated Blobs - Responsive positioning */}
      <div className="absolute top-1/4 left-[5%] md:left-1/6 w-40 h-40 md:w-72 md:h-72 rounded-full bg-primary-500/20 dark:bg-primary-500/10 blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/3 right-[5%] md:right-1/6 w-52 h-52 md:w-96 md:h-96 rounded-full bg-secondary-500/20 dark:bg-secondary-500/10 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-2/3 left-1/4 md:left-1/3 w-36 h-36 md:w-60 md:h-60 rounded-full bg-indigo-500/20 dark:bg-indigo-500/10 blur-3xl animate-blob animation-delay-4000"></div>

      {/* Geometric shapes - only visible on larger screens */}
      <div
        className="absolute top-24 right-[20%] w-16 h-16 md:w-20 md:h-20 border-2 border-primary-400/30 dark:border-primary-400/20 rotate-12 hidden lg:block"
        style={{
          transform: `rotate(${12 + mousePosition.x * 0.01}deg) translateX(${
            mousePosition.x * 0.01
          }px)`,
          transition: "transform 0.2s ease-out",
        }}
      ></div>
      <div
        className="absolute bottom-32 left-[15%] w-12 h-12 md:w-16 md:h-16 border-2 border-secondary-400/30 dark:border-secondary-400/20 rotate-45 hidden lg:block"
        style={{
          transform: `rotate(${45 + mousePosition.y * 0.01}deg) translateY(${
            mousePosition.y * 0.01
          }px)`,
          transition: "transform 0.2s ease-out",
        }}
      ></div>
      <div
        className="absolute top-[40%] left-[5%] w-16 h-16 md:w-24 md:h-24 border-2 border-dashed border-indigo-400/30 dark:border-indigo-400/20 rounded-full hidden lg:block"
        style={{
          transform: `translateY(${mousePosition.y * 0.005}px)`,
          transition: "transform 0.2s ease-out",
        }}
      ></div>

      <Container className="relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Content */}
          <motion.div
            className="lg:col-span-7 z-10 order-2 lg:order-1 text-center lg:text-left mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <motion.div
              className="relative inline-block mb-4 md:mb-6"
              variants={itemVariants}
            >
              <span className="inline-flex items-center py-1 md:py-1.5 px-4 md:px-6 rounded-full bg-primary-900/10 dark:bg-primary-400/10 text-primary-700 dark:text-primary-300 text-xs md:text-sm font-medium">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-500 dark:bg-primary-400 rounded-full mr-1.5 md:mr-2 animate-pulse"></span>
                MERN Stack Developer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 md:mb-8 text-gray-900 dark:text-white leading-tight"
            >
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400">
                digital
              </span>{" "}
              experiences that{" "}
              <span className="relative">
                elevate
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                  viewBox="0 0 100 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,3 Q25,10 50,3 Q75,-4 100,3"
                    stroke="url(#gradient-underline)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-underline"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Building modern, responsive, and intuitive web applications that
              solve real-world problems and deliver exceptional user
              experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5 mb-8 md:mb-12"
            >
              <Button
                to="/contact"
                icon={<FaArrowRight />}
                iconPosition="right"
                size="lg"
                className="shadow-lg shadow-primary-500/25 dark:shadow-primary-500/15 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
              >
                Get in Touch
              </Button>
              <Button
                to="/projects"
                variant="outline"
                size="lg"
                className="border-2 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 dark:hover:from-primary-900/30 dark:hover:to-secondary-900/30 transition-all"
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-5 md:gap-6"
            >
              <motion.a
                href="https://github.com/ahadali027"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="block p-2 md:p-3 bg-white dark:bg-dark-200 rounded-lg shadow-md group-hover:shadow-lg transition-all">
                  <FaGithub size={20} />
                </span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ahadali027"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="block p-2 md:p-3 bg-white dark:bg-dark-200 rounded-lg shadow-md group-hover:shadow-lg transition-all">
                  <FaLinkedin size={20} />
                </span>
              </motion.a>
              <div className="h-10 md:h-12 w-0.5 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700 hidden sm:block"></div>
              <motion.span
                className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg hidden sm:block"
                whileHover={{ scale: 1.05 }}
              >
                Let's build something amazing
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            className="lg:col-span-5 order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative mx-auto max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-md">
              {/* Main circular display */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="relative w-full aspect-square"
              >
                {/* Background glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 dark:from-primary-500/20 dark:to-secondary-500/20 blur-2xl"></div>

                {/* Main circle */}
                <div className="absolute inset-0 backdrop-blur-sm bg-white/50 dark:bg-dark-800/50 rounded-full border border-white/30 dark:border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 animate-gradient-slow"></div>

                  {/* Glass panels for MERN stack */}
                  <div className="relative w-4/5 h-4/5 grid grid-cols-2 gap-3 md:gap-4">
                    <motion.div
                      className="bg-white/70 dark:bg-dark-200/70 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg flex flex-col items-center justify-center group"
                      whileHover={{ scale: 1.05, rotateZ: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <SiMongodb className="text-4xl sm:text-5xl md:text-6xl text-green-600 group-hover:scale-110 transition-transform" />
                      <span className="mt-1 md:mt-2 text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                        MongoDB
                      </span>
                    </motion.div>
                    <motion.div
                      className="bg-white/70 dark:bg-dark-200/70 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg flex flex-col items-center justify-center group"
                      whileHover={{ scale: 1.05, rotateZ: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <SiExpress className="text-4xl sm:text-5xl md:text-6xl text-black dark:text-white group-hover:scale-110 transition-transform" />
                      <span className="mt-1 md:mt-2 text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                        Express
                      </span>
                    </motion.div>
                    <motion.div
                      className="bg-white/70 dark:bg-dark-200/70 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg flex flex-col items-center justify-center group"
                      whileHover={{ scale: 1.05, rotateZ: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <FaReact className="text-4xl sm:text-5xl md:text-6xl text-blue-500 group-hover:scale-110 transition-transform animate-spin-slow" />
                      <span className="mt-1 md:mt-2 text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                        React
                      </span>
                    </motion.div>
                    <motion.div
                      className="bg-white/70 dark:bg-dark-200/70 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg flex flex-col items-center justify-center group"
                      whileHover={{ scale: 1.05, rotateZ: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <FaNodeJs className="text-4xl sm:text-5xl md:text-6xl text-green-500 group-hover:scale-110 transition-transform" />
                      <span className="mt-1 md:mt-2 text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                        Node.js
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Orbiting tech indicators - Responsive sizing and positioning */}
                <motion.div
                  className="absolute -top-4 -right-4 md:-top-6 md:-right-6 p-3 md:p-4 bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm rounded-full shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 flex items-center justify-center text-white font-bold text-sm md:text-base">
                    A
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-3 left-8 md:-bottom-4 md:left-10 p-3 md:p-4 bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm rounded-full shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 dark:from-secondary-400 dark:to-secondary-500 flex items-center justify-center text-white font-bold text-sm md:text-base">
                    P
                  </div>
                </motion.div>

                {/* Tech skill badges - Hide on very small screens, responsive on others */}
                <motion.div
                  className="absolute -left-6 md:-left-10 top-1/3 py-1 px-2 md:py-1.5 md:px-3 bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm rounded-full shadow-lg text-[10px] md:text-xs font-medium hidden sm:block"
                  animate={{
                    x: [0, -5, 0],
                    rotate: [0, -3, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <span className="text-primary-600 dark:text-primary-400">
                    Responsive
                  </span>
                </motion.div>

                <motion.div
                  className="absolute -right-10 md:-right-16 top-2/3 py-1 px-2 md:py-1.5 md:px-3 bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm rounded-full shadow-lg text-[10px] md:text-xs font-medium hidden sm:block"
                  animate={{
                    x: [0, 5, 0],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.5,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <span className="text-secondary-600 dark:text-secondary-400">
                    Interactive
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
