import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/CurrentPath.css';

interface FormData {
  age: number;
  location: string;
  career: string;
  interests: string;
  goals: string;
  personality: string;
}

const CurrentPath: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    age: 25,
    location: '',
    career: '',
    interests: '',
    goals: '',
    personality: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Handle form submission
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="current-path-content">
        <div className="current-path-header">
          <h1>Define Your Current Path</h1>
          <p>Help TimeSage understand your current situation to generate accurate simulations</p>
        </div>

        <form className="current-path-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              min="16"
              max="100"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Current Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g., New York, USA"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="career">Current Career/Study</label>
            <input
              type="text"
              id="career"
              name="career"
              value={formData.career}
              onChange={handleInputChange}
              placeholder="e.g., Software Engineer, Computer Science Student"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="interests">Interests & Hobbies</label>
            <textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleInputChange}
              placeholder="Tell us about your passions, hobbies, and things you enjoy doing..."
              rows={4}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="goals">Life Goals</label>
            <textarea
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={handleInputChange}
              placeholder="What do you want to achieve in life? Career goals, personal aspirations, dreams..."
              rows={4}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="personality">Personality Type</label>
            <select
              id="personality"
              name="personality"
              value={formData.personality}
              onChange={handleInputChange}
              required
            >
              <option value="">Select your personality type</option>
              <option value="INTJ">INTJ - The Architect</option>
              <option value="INTP">INTP - The Thinker</option>
              <option value="ENTJ">ENTJ - The Commander</option>
              <option value="ENTP">ENTP - The Debater</option>
              <option value="INFJ">INFJ - The Advocate</option>
              <option value="INFP">INFP - The Mediator</option>
              <option value="ENFJ">ENFJ - The Protagonist</option>
              <option value="ENFP">ENFP - The Campaigner</option>
              <option value="ISTJ">ISTJ - The Logistician</option>
              <option value="ISFJ">ISFJ - The Protector</option>
              <option value="ESTJ">ESTJ - The Executive</option>
              <option value="ESFJ">ESFJ - The Consul</option>
              <option value="ISTP">ISTP - The Virtuoso</option>
              <option value="ISFP">ISFP - The Adventurer</option>
              <option value="ESTP">ESTP - The Entrepreneur</option>
              <option value="ESFP">ESFP - The Entertainer</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Save Current Path
          </button>
        </form>
      </div>
    </div>
  );
};

export default CurrentPath;