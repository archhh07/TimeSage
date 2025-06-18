import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard') || 
                     location.pathname === '/current-path' ||
                     location.pathname === '/simulations' ||
                     location.pathname === '/decision-jenga' ||
                     location.pathname === '/fate-override';

  return (
    <div className="layout">
      <Navbar />
      <main className={isDashboard ? 'dashboard-main' : 'main'}>
        {children}
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
};

export default Layout;