import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  primary: "bg-primary-600 hover:bg-primary-700 text-white dark:bg-primary-500 dark:hover:bg-primary-600",
  secondary: "bg-secondary-600 hover:bg-secondary-700 text-white dark:bg-secondary-500 dark:hover:bg-secondary-600",
  outline: "bg-transparent border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-dark-200",
  ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-700 dark:text-gray-300",
};

const sizes = {
  sm: "py-1.5 px-3 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-2.5 px-5 text-lg",
  xl: "py-3 px-6 text-xl",
};

const Button = ({
  variant = "primary",
  size = "md",
  href,
  to,
  children,
  className = "",
  disabled = false,
  isLoading = false,
  icon,
  iconPosition = "left",
  ...props
}) => {
  const buttonClasses = `
    font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-dark-300
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${disabled || isLoading ? "opacity-60 cursor-not-allowed" : ""}
    ${className}
  `;

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && iconPosition === "left" && !isLoading && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { scale: disabled || isLoading ? 1 : 1.03 },
    whileTap: { scale: disabled || isLoading ? 1 : 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={`inline-flex items-center justify-center ${buttonClasses}`} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <a href={href} className={`inline-flex items-center justify-center ${buttonClasses}`} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={`inline-flex items-center justify-center ${buttonClasses}`}
      disabled={disabled || isLoading}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button; 