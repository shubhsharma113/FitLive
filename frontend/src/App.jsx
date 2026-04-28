import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import GymFinder from './pages/GymFinder';
import AIGenerator from './pages/AIGenerator';
import VideoLibrary from './pages/VideoLibrary';
import useAuthStore from './store/authStore';

import Home from './pages/Home';

const App = () => {
  const { user } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/admin" element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/dashboard" />} />
            <Route path="/gyms" element={user ? <GymFinder /> : <Navigate to="/login" />} />
            <Route path="/ai-coach" element={user ? <AIGenerator /> : <Navigate to="/login" />} />
            <Route path="/videos" element={user ? <VideoLibrary /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
