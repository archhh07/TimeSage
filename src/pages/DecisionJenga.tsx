import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { RefreshCw, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import '../styles/DecisionJenga.css';

interface Decision {
  id: number;
  title: string;
  description: string;
  effects: Effect[];
}

interface Effect {
  type: 'mood' | 'energy' | 'productivity' | 'health' | 'social';
  change: number;
  label: string;
}

const DecisionJenga: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [selectedDecisions, setSelectedDecisions] = useState<number[]>([]);

  const dailyDecisions: Decision[] = [
    {
      id: 1,
      title: "Skipped Breakfast",
      description: "Rushed out without eating breakfast this morning",
      effects: [
        { type: 'energy', change: -2, label: 'Energy' },
        { type: 'mood', change: -1, label: 'Mood' },
        { type: 'productivity', change: -1, label: 'Focus' }
      ]
    },
    {
      id: 2,
      title: "Took the Stairs",
      description: "Chose stairs over elevator at work",
      effects: [
        { type: 'health', change: 1, label: 'Health' },
        { type: 'energy', change: 1, label: 'Energy' },
        { type: 'mood', change: 1, label: 'Mood' }
      ]
    },
    {
      id: 3,
      title: "Helped a Colleague",
      description: "Spent 30 minutes helping a teammate with their project",
      effects: [
        { type: 'social', change: 2, label: 'Relationships' },
        { type: 'mood', change: 1, label: 'Mood' },
        { type: 'productivity', change: -1, label: 'Personal Work' }
      ]
    }
  ];

  const toggleDecision = (decisionId: number) => {
    setSelectedDecisions(prev => 
      prev.includes(decisionId) 
        ? prev.filter(id => id !== decisionId)
        : [...prev, decisionId]
    );
  };

  const getEffectIcon = (change: number) => {
    if (change > 0) return <TrendingUp size={16} />;
    if (change < 0) return <TrendingDown size={16} />;
    return <Minus size={16} />;
  };

  const getEffectColor = (change: number) => {
    if (change > 0) return 'positive';
    if (change < 0) return 'negative';
    return 'neutral';
  };

  const nextDay = () => {
    setCurrentDay(prev => prev + 1);
    setSelectedDecisions([]);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="decision-jenga-content">
        <div className="decision-jenga-header">
          <h1>Decision Jenga</h1>
          <p>See how small daily choices create ripple effects in your life</p>
          <div className="day-counter">
            <span>Day {currentDay}</span>
          </div>
        </div>

        <div className="decisions-container">
          <h2>Today's Decisions</h2>
          <div className="decisions-grid">
            {dailyDecisions.map((decision) => (
              <div
                key={decision.id}
                className={`decision-card ${
                  selectedDecisions.includes(decision.id) ? 'selected' : ''
                }`}
                onClick={() => toggleDecision(decision.id)}
              >
                <div className="decision-header">
                  <h3>{decision.title}</h3>
                  <p>{decision.description}</p>
                </div>

                <div className="effects-container">
                  <h4>Ripple Effects:</h4>
                  <div className="effects-list">
                    {decision.effects.map((effect, index) => (
                      <div
                        key={index}
                        className={`effect-chip ${getEffectColor(effect.change)}`}
                      >
                        {getEffectIcon(effect.change)}
                        <span className="effect-label">{effect.label}</span>
                        <span className="effect-value">
                          {effect.change > 0 ? '+' : ''}{effect.change}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="decision-overlay">
                  <div className="checkmark">✓</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cumulative-effects">
          <h3>Today's Impact</h3>
          <div className="impact-summary">
            {selectedDecisions.length > 0 ? (
              <div className="selected-effects">
                {selectedDecisions.map(decisionId => {
                  const decision = dailyDecisions.find(d => d.id === decisionId);
                  return decision?.effects.map((effect, index) => (
                    <div key={`${decisionId}-${index}`} className="summary-effect">
                      <span>{effect.label}: </span>
                      <span className={getEffectColor(effect.change)}>
                        {effect.change > 0 ? '+' : ''}{effect.change}
                      </span>
                    </div>
                  ));
                })}
              </div>
            ) : (
              <p className="no-selection">Select decisions to see their combined impact</p>
            )}
          </div>
        </div>

        <div className="game-actions">
          <button onClick={nextDay} className="next-day-button">
            <RefreshCw size={20} />
            Next Day
          </button>
        </div>
      </div>
    </div>
  );
};

export default DecisionJenga;