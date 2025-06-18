import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Eye, Layers, Shuffle, Brain, Clock, Users, TrendingUp, Play } from 'lucide-react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              TimeSage: See Your Future 
              <span className="gradient-text"> Before You Live It</span>
            </h1>
            <p className="hero-subtitle">
              AI-powered life simulator that helps you make smarter decisions by exploring infinite possibilities of your future self.
            </p>
            <div className="hero-buttons">
              <Link to="/dashboard" className="hero-button">
                Start Your Journey
                <ArrowRight size={20} />
              </Link>
              <Link to="/mirror-self" className="hero-button secondary">
                <Play size={20} />
                Meet Your Future Self
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
            <div className="central-orb">
              <Clock size={40} color="white" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Life Simulations Run</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Decision Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Future Scenarios</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">AI Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How TimeSage Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <Brain />
              </div>
              <h3>Define Your Path</h3>
              <p>Input your current situation, goals, personality, and life preferences. Our AI creates a comprehensive profile of your unique journey.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <Zap />
              </div>
              <h3>AI Simulation Engine</h3>
              <p>Advanced algorithms analyze millions of data points to simulate countless future scenarios based on your choices and external factors.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <Eye />
              </div>
              <h3>Explore & Decide</h3>
              <p>Visualize different life paths, chat with your future self, and make informed decisions with confidence about your journey ahead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Eye />
              </div>
              <h3>Mirror Self Chat</h3>
              <p>Have deep conversations with an AI version of your future self. Get personalized advice, warnings, and insights from someone who knows you best.</p>
              <span className="feature-badge">Most Popular</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Layers />
              </div>
              <h3>Parallel Life Simulator</h3>
              <p>Explore alternate timelines and compare different life trajectories. See how different choices lead to completely different outcomes.</p>
              <span className="feature-badge">New</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp />
              </div>
              <h3>Decision Impact Analysis</h3>
              <p>Understand how small daily choices create massive ripple effects in your life. Every decision matters more than you think.</p>
              <span className="feature-badge">AI-Powered</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shuffle />
              </div>
              <h3>Fate Override Mode</h3>
              <p>Prepare for unexpected life twists and opportunities. Our AI generates random scenarios to build your adaptability and resilience.</p>
              <span className="feature-badge">Unique</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h3>Relationship Dynamics</h3>
              <p>See how your relationships evolve over time and how they impact your life trajectory. Family, friends, and romantic connections matter.</p>
              <span className="feature-badge">Coming Soon</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Brain />
              </div>
              <h3>Wisdom Extraction</h3>
              <p>Extract key insights and life lessons from your simulations. Build a personal wisdom database that grows with every exploration.</p>
              <span className="feature-badge">Beta</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Meet Your Future Self?</h2>
          <p className="cta-subtitle">
            Join thousands of people who are already using TimeSage to make better life decisions. 
            Your future self is waiting to guide you.
          </p>
          <Link to="/dashboard" className="hero-button">
            Begin Your Simulation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;