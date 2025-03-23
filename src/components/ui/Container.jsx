const Container = ({ children, className = "", fullWidth = false, id }) => {
  return (
    <div 
      id={id}
      className={`${fullWidth ? 'w-full' : 'container mx-auto px-4 md:px-6'} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container; 