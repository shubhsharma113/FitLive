import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import GymFinder from './pages/GymFinder';
import AIGenerator from './pages/AIGenerator';
import VideoLibrary from './pages/VideoLibrary';
import useAuthStore from './store/authStore';

const Home = () => (
    <div className="flex flex-col items-center justify-center p-20 min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-50 to-slate-100">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight text-center">Your Ultimate <span className="text-blue-600">Fitness Companion</span></h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl text-center">Smart Gym Management, AI-based recommendations, and video-guided workouts all in one seamless platform.</p>
        <div className="flex gap-4">
           <a href="/login" className="btn-primary px-8 py-3 text-lg">Get Started</a>
        </div>
    </div>
);

const App = () => {
  const { user } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
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
      </div>
    </Router>
  );
};

export default App;
