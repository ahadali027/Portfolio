import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from '../../context/ThemeContext';

const Layout = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-light-100 dark:bg-dark-100 text-gray-800 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout; 