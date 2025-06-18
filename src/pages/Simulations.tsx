import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { TrendingUp, DollarSign, Heart, BarChart } from 'lucide-react';
import '../styles/Simulations.css';

const Simulations: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Mock data for demonstration
  const mockData = {
    careerGrowth: {
      current: 'Software Engineer',
      probability: 85,
      projectedRole: 'Senior Software Engineer',
      timeline: '2-3 years'
    },
    financialProjection: {
      currentSalary: 75000,
      projectedSalary: 120000,
      savings: 45000,
      timeline: '5 years'
    },
    lifeSatisfaction: {
      current: 7.2,
      projected: 8.5,
      factors: ['Career Growth', 'Financial Stability', 'Work-Life Balance']
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="simulations-content">
        <div className="simulations-header">
          <h1>Life Simulation Results</h1>
          <p>AI-generated projections based on your current path</p>
        </div>

        <div className={`simulations-grid ${isLoaded ? 'loaded' : ''}`}>
          {/* Career Growth Card */}
          <div className="simulation-card career-card">
            <div className="card-header">
              <div className="card-icon">
                <TrendingUp />
              </div>
              <h3>Career Growth</h3>
            </div>
            <div className="card-content">
              <div className="progress-section">
                <div className="progress-label">
                  <span>Success Probability</span>
                  <span className="probability">{mockData.careerGrowth.probability}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill career-progress"
                    style={{ width: `${mockData.careerGrowth.probability}%` }}
                  ></div>
                </div>
              </div>
              <div className="projection-details">
                <div className="detail-item">
                  <span className="label">Current:</span>
                  <span className="value">{mockData.careerGrowth.current}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Projected:</span>
                  <span className="value">{mockData.careerGrowth.projectedRole}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Timeline:</span>
                  <span className="value">{mockData.careerGrowth.timeline}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Projection Card */}
          <div className="simulation-card financial-card">
            <div className="card-header">
              <div className="card-icon">
                <DollarSign />
              </div>
              <h3>Financial Projection</h3>
            </div>
            <div className="card-content">
              <div className="financial-chart">
                <div className="chart-bars">
                  <div className="bar current-bar">
                    <div className="bar-fill" style={{ height: '60%' }}></div>
                    <span className="bar-label">Current</span>
                  </div>
                  <div className="bar projected-bar">
                    <div className="bar-fill" style={{ height: '95%' }}></div>
                    <span className="bar-label">5 Years</span>
                  </div>
                </div>
              </div>
              <div className="financial-details">
                <div className="detail-item">
                  <span className="label">Current Salary:</span>
                  <span className="value">${mockData.financialProjection.currentSalary.toLocaleString()}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Projected Salary:</span>
                  <span className="value highlight">${mockData.financialProjection.projectedSalary.toLocaleString()}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Estimated Savings:</span>
                  <span className="value">${mockData.financialProjection.savings.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Life Satisfaction Card */}
          <div className="simulation-card satisfaction-card">
            <div className="card-header">
              <div className="card-icon">
                <Heart />
              </div>
              <h3>Life Satisfaction</h3>
            </div>
            <div className="card-content">
              <div className="satisfaction-meter">
                <div className="meter-current">
                  <div className="meter-circle">
                    <span className="meter-value">{mockData.lifeSatisfaction.current}</span>
                    <span className="meter-max">/10</span>
                  </div>
                  <span className="meter-label">Current</span>
                </div>
                <div className="meter-arrow">→</div>
                <div className="meter-projected">
                  <div className="meter-circle projected">
                    <span className="meter-value">{mockData.lifeSatisfaction.projected}</span>
                    <span className="meter-max">/10</span>
                  </div>
                  <span className="meter-label">Projected</span>
                </div>
              </div>
              <div className="satisfaction-factors">
                <h4>Key Factors:</h4>
                <ul>
                  {mockData.lifeSatisfaction.factors.map((factor, index) => (
                    <li key={index}>{factor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="simulation-actions">
          <button className="action-button primary">
            <BarChart />
            Generate New Simulation
          </button>
          <button className="action-button secondary">
            Export Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Simulations;