import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Send, Bot, User, Brain, Sparkles, Clock, Target } from 'lucide-react';
import '../styles/MirrorSelf.css';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  confidence?: number;
  wisdom?: string;
}

const MirrorSelf: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello there! I'm your Mirror Self - a reflection of who you could become. I've lived through countless possibilities of your future, and I'm here to share what I've learned. I know your dreams, your fears, and the paths that lead to fulfillment. What would you like to explore about your future?",
      isUser: false,
      timestamp: new Date(),
      confidence: 95,
      wisdom: "Self-Awareness"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "What should I focus on in the next 5 years?",
    "What mistakes should I avoid?",
    "How do I find my true purpose?",
    "What relationships matter most?",
    "When should I take big risks?",
    "How do I overcome my biggest fear?"
  ];

  const personalizedResponses = [
    {
      text: "I see you're at a crossroads right now. In my timeline, the choice you make in the next 6 months becomes the foundation for everything that follows. The path of least resistance isn't always the path of greatest growth.",
      confidence: 92,
      wisdom: "Decision Making"
    },
    {
      text: "Your future self wants you to know that the skills you're developing now - especially your ability to adapt and learn - become your greatest assets. Don't underestimate the compound effect of small daily improvements.",
      confidence: 88,
      wisdom: "Personal Growth"
    },
    {
      text: "I've lived through the regrets you're worried about. The biggest one isn't about the risks you take, but the opportunities you let slip by because you waited for the 'perfect' moment. Perfection is the enemy of progress.",
      confidence: 94,
      wisdom: "Risk & Opportunity"
    },
    {
      text: "Your relationships shape your reality more than your career choices. Invest in people who challenge you to grow, not just those who make you comfortable. The loneliest success is the one you achieve alone.",
      confidence: 90,
      wisdom: "Relationships"
    },
    {
      text: "That thing you're passionate about but think is 'impractical'? It becomes more relevant than you imagine. The world changes, and what seems impossible today becomes inevitable tomorrow. Trust your instincts.",
      confidence: 87,
      wisdom: "Purpose & Passion"
    },
    {
      text: "Your biggest breakthrough comes not from avoiding failure, but from failing faster and learning quicker. I've seen you succeed, and it always starts with embracing uncertainty as a teacher, not an enemy.",
      confidence: 91,
      wisdom: "Resilience"
    },
    {
      text: "The version of you that achieves your wildest dreams is the one who learns to say 'no' to good opportunities so you can say 'yes' to great ones. Focus is your superpower.",
      confidence: 89,
      wisdom: "Focus & Priorities"
    },
    {
      text: "Your intuition is more accurate than you give it credit for. In every major decision I've watched you make, the times you trusted your gut led to the most fulfilling outcomes, even when the logic wasn't clear initially.",
      confidence: 93,
      wisdom: "Intuition"
    }
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setShowSuggestions(false);

    // Simulate AI response with more realistic delay
    setTimeout(() => {
      const randomResponse = personalizedResponses[Math.floor(Math.random() * personalizedResponses.length)];
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: randomResponse.text,
        isUser: false,
        timestamp: new Date(),
        confidence: randomResponse.confidence,
        wisdom: randomResponse.wisdom
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="mirror-self-content">
        <div className="mirror-self-header">
          <h1>Mirror Self</h1>
          <p>Converse with your AI future self for personalized guidance and wisdom</p>
          <div className="personality-indicator">
            <Brain size={18} />
            <span>Future Self Active • Confidence Level: High</span>
          </div>
        </div>

        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isUser ? 'user-message' : 'ai-message'}`}
              >
                <div className="message-avatar">
                  {message.isUser ? <User size={22} /> : <Bot size={22} />}
                </div>
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-metadata">
                    <span>{formatTime(message.timestamp)}</span>
                    {!message.isUser && message.confidence && (
                      <div className="confidence-indicator">
                        <Sparkles size={12} />
                        <span>{message.confidence}% Confidence</span>
                      </div>
                    )}
                  </div>
                  {!message.isUser && message.wisdom && (
                    <div className="wisdom-tag">
                      <Target size={10} />
                      <span>{message.wisdom}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message ai-message">
                <div className="message-avatar">
                  <Bot size={22} />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="typing-text">Your future self is reflecting...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-input-container">
            {showSuggestions && (
              <div className="input-suggestions">
                {suggestions.slice(0, 3).map((suggestion, index) => (
                  <button
                    key={index}
                    className="suggestion-chip"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            
            <div className="chat-input-wrapper">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={() => setShowSuggestions(false)}
                placeholder="Ask your future self anything... What guidance do you need?"
                className="chat-input"
                rows={1}
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="send-button"
              >
                <Send size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MirrorSelf;