import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Shuffle, Sparkles, ArrowRight } from 'lucide-react';
import '../styles/FateOverride.css';

interface FateTwist {
  id: number;
  title: string;
  description: string;
  category: 'career' | 'relationship' | 'opportunity' | 'challenge' | 'discovery';
  impact: 'high' | 'medium' | 'low';
}

const FateOverride: React.FC = () => {
  const [currentTwist, setCurrentTwist] = useState<FateTwist | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const fateTwists: FateTwist[] = [
    {
      id: 1,
      title: "Unexpected Inheritance",
      description: "A distant relative leaves you a small fortune and a mysterious property in another country.",
      category: 'opportunity',
      impact: 'high'
    },
    {
      id: 2,
      title: "Chance Encounter",
      description: "You meet someone in a coffee shop who becomes your future business partner and best friend.",
      category: 'relationship',
      impact: 'high'
    },
    {
      id: 3,
      title: "Technology Breakthrough",
      description: "You accidentally discover a new algorithm that revolutionizes your field.",
      category: 'discovery',
      impact: 'high'
    },
    {
      id: 4,
      title: "Career Pivot",
      description: "A company restructuring forces you into a new role that becomes your true calling.",
      category: 'career',
      impact: 'medium'
    },
    {
      id: 5,
      title: "Health Wake-Up Call",
      description: "A minor health scare motivates you to completely transform your lifestyle and priorities.",
      category: 'challenge',
      impact: 'medium'
    },
    {
      id: 6,
      title: "Lost Opportunity Found",
      description: "A job you were rejected for years ago suddenly becomes available again, but in a different city.",
      category: 'opportunity',
      impact: 'medium'
    },
    {
      id: 7,
      title: "Skill Rediscovery",
      description: "You rediscover a childhood talent that opens unexpected doors in your adult life.",
      category: 'discovery',
      impact: 'medium'
    },
    {
      id: 8,
      title: "Mentor Appears",
      description: "An industry leader randomly notices your work and offers to mentor you.",
      category: 'relationship',
      impact: 'high'
    }
  ];

  const drawFate = () => {
    setIsDrawing(true);
    setShowResult(false);
    setCurrentTwist(null);

    // Simulate drawing animation
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fateTwists.length);
      setCurrentTwist(fateTwists[randomIndex]);
      setIsDrawing(false);
      setShowResult(true);
    }, 2000);
  };

  const simulateOutcome = () => {
    // TODO: Implement simulation logic
    console.log('Simulating outcome for:', currentTwist);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      career: '#3B82F6',
      relationship: '#EC4899',
      opportunity: '#10B981',
      challenge: '#F59E0B',
      discovery: '#8B5CF6'
    };
    return colors[category as keyof typeof colors] || '#6B7280';
  };

  const getImpactBadge = (impact: string) => {
    const badges = {
      high: { text: 'High Impact', class: 'high-impact' },
      medium: { text: 'Medium Impact', class: 'medium-impact' },
      low: { text: 'Low Impact', class: 'low-impact' }
    };
    return badges[impact as keyof typeof badges] || badges.medium;
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="fate-override-content">
        <div className="fate-override-header">
          <h1>Fate Override</h1>
          <p>Discover unexpected life twists and prepare for the unpredictable</p>
        </div>

        <div className="fate-drawing-area">
          {!currentTwist && !isDrawing && (
            <div className="draw-prompt">
              <div className="fate-icon">
                <Sparkles size={64} />
              </div>
              <h2>Ready to discover your fate?</h2>
              <p>Click the button below to draw a random life twist and see how it could change your path.</p>
            </div>
          )}

          {isDrawing && (
            <div className="drawing-animation">
              <div className="spinning-cards">
                <div className="card-placeholder card-1"></div>
                <div className="card-placeholder card-2"></div>
                <div className="card-placeholder card-3"></div>
              </div>
              <p className="drawing-text">Drawing your fate...</p>
            </div>
          )}

          {currentTwist && showResult && (
            <div className="fate-result">
              <div className="result-card">
                <div className="result-header">
                  <div 
                    className="category-badge"
                    style={{ backgroundColor: getCategoryColor(currentTwist.category) }}
                  >
                    {currentTwist.category.charAt(0).toUpperCase() + currentTwist.category.slice(1)}
                  </div>
                  <div className={`impact-badge ${getImpactBadge(currentTwist.impact).class}`}>
                    {getImpactBadge(currentTwist.impact).text}
                  </div>
                </div>
                
                <h2 className="twist-title">{currentTwist.title}</h2>
                <p className="twist-description">{currentTwist.description}</p>
                
                <div className="result-actions">
                  <button 
                    onClick={simulateOutcome}
                    className="simulate-button"
                  >
                    Simulate Outcome
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="fate-actions">
          <button 
            onClick={drawFate}
            disabled={isDrawing}
            className="draw-fate-button"
          >
            <Shuffle size={24} />
            {isDrawing ? 'Drawing...' : 'Draw Your Fate'}
          </button>
        </div>

        <div className="fate-info">
          <h3>How Fate Override Works</h3>
          <div className="info-grid">
            <div className="info-item">
              <strong>Random Events:</strong>
              <p>Life is unpredictable. This tool helps you prepare for unexpected opportunities and challenges.</p>
            </div>
            <div className="info-item">
              <strong>Scenario Planning:</strong>
              <p>Each twist comes with simulation options to explore how you might adapt and thrive.</p>
            </div>
            <div className="info-item">
              <strong>Mental Preparation:</strong>
              <p>By considering unlikely scenarios, you build resilience and adaptability for real-life surprises.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FateOverride;