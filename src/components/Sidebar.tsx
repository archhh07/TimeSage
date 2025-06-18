import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3, Zap, Shuffle, User } from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const sidebarLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/current-path', label: 'Current Path', icon: User },
    { path: '/simulations', label: 'Simulations', icon: BarChart3 },
    { path: '/decision-jenga', label: 'Decision Jenga', icon: Zap },
    { path: '/fate-override', label: 'Fate Override', icon: Shuffle },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {sidebarLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`sidebar-link ${isActive(link.path) ? 'active' : ''}`}
            >
              <IconComponent size={20} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;