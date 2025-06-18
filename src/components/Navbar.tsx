import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Clock, Brain } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Clock className="logo-icon" />
          <span>TimeSage</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/dashboard" 
            className={`navbar-link ${isActive('/dashboard') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Simulations
          </Link>
          <Link 
            to="/mirror-self" 
            className={`navbar-link ${isActive('/mirror-self') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Mirror Self
          </Link>
          <Link 
            to="/login" 
            className={`navbar-link ${isActive('/login') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;