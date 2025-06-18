import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Clock, TrendingUp, Zap, Eye, ArrowRight, Play } from 'lucide-react';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Welcome to TimeSage</h1>
          <p>Your AI-powered life simulation dashboard - where every decision shapes your destiny</p>
        </div>
        
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">
              <Clock />
            </div>
            <h3>Current Timeline</h3>
            <p>Track your progress and see how your current path is unfolding. Monitor key life metrics and milestones as they develop in real-time.</p>
          </div>
          
          <div className="dashboard-card">
            <div className="card-icon">
              <TrendingUp />
            </div>
            <h3>Future Projections</h3>
            <p>AI-generated insights into your potential future outcomes. Explore different scenarios and their probability distributions.</p>
          </div>
          
          <div className="dashboard-card">
            <div className="card-icon">
              <Zap />
            </div>
            <h3>Decision Impact</h3>
            <p>Understand how small daily choices create massive ripple effects in your life trajectory. Every decision matters more than you think.</p>
          </div>
        </div>
        
        <div className="welcome-message">
          <h2>Ready to explore your infinite possibilities?</h2>
          <p>
            Start by defining your current path, then dive into AI-powered simulations that reveal 
            the hidden connections between your choices and your future. Your destiny is not fixed - 
            it's a canvas waiting for your conscious decisions.
          </p>
          <div className="welcome-actions">
            <Link to="/current-path" className="action-button">
              <Play size={20} />
              Define Your Path
            </Link>
            <Link to="/mirror-self" className="action-button secondary">
              <Eye size={20} />
              Meet Future You
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;