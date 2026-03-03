import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between glass-card !bg-dark-bg/40 border-white/5 shadow-none">
        <Link to="/" className="text-xl font-bold gradient-text tracking-tight">
          Dhanush N G
        </Link>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-accent-blue relative ${location.pathname === item.path ? 'text-white' : 'text-slate-400'
                }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 gradient-bg rounded-full"
                />
              )}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu toggle could be added here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
