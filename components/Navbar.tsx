
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Header styling based on variant
  const headerClass = transparent
    ? "sticky top-5 z-50 flex items-center justify-between whitespace-nowrap rounded-xl border border-solid border-white/10 bg-background-dark/80 px-6 py-3 backdrop-blur-md mx-4 md:mx-10 lg:mx-20"
    : "sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-white/10 bg-background-light/95 dark:bg-background-dark/95 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8";

  const linkClass = (path: string) => {
    const base = "text-sm font-medium leading-normal transition-colors ";
    if (transparent) {
        return base + "text-white/80 hover:text-white";
    }
    return base + (isActive(path) ? "text-primary font-bold" : "text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white");
  };

  return (
    <header className={headerClass}>
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3 text-slate-900 dark:text-white">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className={`text-lg font-bold leading-tight tracking-[-0.015em] ${transparent ? 'text-white' : 'text-slate-900 dark:text-white'}`}>GameStore</h2>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          <Link className={linkClass('/')} to="/">Store</Link>
          <Link className={linkClass('/discover')} to="/discover">Discover</Link>
          <Link className={linkClass('/about')} to="/about">About</Link>
          <Link className={linkClass('/guide')} to="/guide">Developers</Link>
        </nav>
      </div>

      <div className="flex flex-1 items-center justify-end gap-4">
        {user ? (
          <div className="relative group">
            <button className="flex items-center gap-2 focus:outline-none">
               <div className="hidden sm:block text-right">
                  <p className={`text-sm font-bold ${transparent ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{user.username}</p>
               </div>
               <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-transparent group-hover:ring-primary transition-all" style={{ backgroundImage: `url("${user.avatarUrl}")` }}></div>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1e2532] rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right z-50">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5">My Profile</Link>
                <Link to="/submit" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5">Dashboard</Link>
                <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">Sign Out</button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
             <Link to="/signin" className={`text-sm font-bold ${transparent ? 'text-white hover:text-white/80' : 'text-slate-700 dark:text-white hover:text-primary'} transition-colors`}>
               Log In
             </Link>
             <Link to="/signup" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
               <span className="truncate">Sign Up</span>
             </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
