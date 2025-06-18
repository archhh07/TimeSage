import React from 'react';
import { Github, Mail, FileText, Shield } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#about" className="footer-link">
            <FileText size={18} />
            About
          </a>
          <a href="#contact" className="footer-link">
            <Mail size={18} />
            Contact
          </a>
          <a href="#github" className="footer-link">
            <Github size={18} />
            GitHub
          </a>
          <a href="#privacy" className="footer-link">
            <Shield size={18} />
            Privacy
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 TimeSage. See your future before you live it.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;