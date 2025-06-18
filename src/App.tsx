import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CurrentPath from './pages/CurrentPath';
import Simulations from './pages/Simulations';
import MirrorSelf from './pages/MirrorSelf';
import DecisionJenga from './pages/DecisionJenga';
import FateOverride from './pages/FateOverride';
import Login from './pages/Login';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/current-path" element={<CurrentPath />} />
          <Route path="/simulations" element={<Simulations />} />
          <Route path="/mirror-self" element={<MirrorSelf />} />
          <Route path="/decision-jenga" element={<DecisionJenga />} />
          <Route path="/fate-override" element={<FateOverride />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;