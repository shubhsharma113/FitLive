import React, { useState, useEffect } from 'react';
import useAuthStore from '../store/authStore';
import { PlaySquare, Clock, Filter, ActivitySquare } from 'lucide-react';
import axios from 'axios';

const RepCounterTimer = () => {
    const [timer, setTimer] = useState(0);
    const [reps, setReps] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => setTimer(t => t + 1), 1000);
        } else if (!isActive && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timer]);

    const formatTime = (seconds) => {
        const getSeconds = `0${(seconds % 60)}`.slice(-2);
        const minutes = `${Math.floor(seconds / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        return `${getMinutes}:${getSeconds}`;
    };

    return (
        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl border border-slate-800 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><ActivitySquare className="text-brand-orange"/> Rep & Timer Tool</h3>
            
            <div className="grid grid-cols-2 gap-8 w-full mb-8">
                <div className="flex flex-col items-center bg-slate-800 py-6 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-sm mb-2 uppercase tracking-wider font-bold">Reps</span>
                    <span className="text-5xl font-extrabold text-brand-orange leading-none">{reps}</span>
                    <div className="flex gap-2 mt-4">
                        <button onClick={() => setReps(r => Math.max(0, r - 1))} className="bg-slate-700 hover:bg-slate-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors">-</button>
                        <button onClick={() => setReps(r => r + 1)} className="bg-brand-orange hover:bg-brand-orange w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors shadow-lg shadow-brand-orange/20">+</button>
                    </div>
                </div>
                
                <div className="flex flex-col items-center bg-slate-800 py-6 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-sm mb-2 uppercase tracking-wider font-bold">Time</span>
                    <span className="text-5xl font-extrabold text-emerald-400 font-mono leading-none">{formatTime(timer)}</span>
                    <div className="flex gap-2 mt-4">
                        <button onClick={() => setIsActive(!isActive)} className={`${isActive ? 'bg-amber-600 hover:bg-amber-500' : 'bg-emerald-600 hover:bg-emerald-500'} px-4 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors`}>
                            {isActive ? 'Pause' : 'Start'}
                        </button>
                    </div>
                </div>
            </div>
            
            <button 
                onClick={() => { setReps(0); setTimer(0); setIsActive(false); }} 
                className="text-slate-400 hover:text-white border border-slate-600 hover:border-slate-500 hover:bg-slate-800 py-2 px-6 rounded-lg transition-all text-sm font-medium"
            >
                Reset All
            </button>
        </div>
    );
};

const VideoLibrary = () => {
    const { user } = useAuthStore();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const config = { headers: { Authorization: `Bearer ${user.token}` } };
                const { data } = await axios.get('http://localhost:5000/api/videos', config);
                setVideos(data.length ? data : mockVideos); // Use DB or fallback
            } catch (error) {
                console.error('Error fetching videos', error);
                setVideos(mockVideos); // Use mock if API empty or fails
            } finally {
                setLoading(false);
            }
        };
        fetchVideos();
    }, [user.token]);

    const mockVideos = [
        { _id: '1', title: 'Beginner Full Body HIIT', category: 'cardio', durationMinutes: 20, difficulty: 'beginner', thumbnailUrl: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=400&q=80', videoUrl: '#' },
        { _id: '2', title: 'Advanced Chest Hypertrophy', category: 'strength', durationMinutes: 45, difficulty: 'advanced', thumbnailUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80', videoUrl: '#' },
        { _id: '3', title: 'Core Strength & Stability', category: 'flexibility', durationMinutes: 15, difficulty: 'intermediate', thumbnailUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80', videoUrl: '#' },
    ];

    if (loading) return <div className="text-center p-20">Loading videos...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-2/3">
                    <div className="mb-8 border-b border-slate-200 pb-5">
                        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                            <PlaySquare className="text-brand-orange" /> Video Library
                        </h1>
                        <p className="text-slate-500 mt-1">Guided workouts for every fitness level.</p>
                    </div>

                    <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3">
                            <Filter size={18} className="text-slate-400" />
                            <span className="font-medium text-slate-700">Filter:</span>
                            <div className="flex gap-2">
                                <button className="bg-slate-900 text-white px-3 py-1 rounded-md text-sm font-medium">All</button>
                                <button className="bg-slate-100 text-slate-600 hover:bg-slate-200 px-3 py-1 rounded-md text-sm font-medium transition-colors">Strength</button>
                                <button className="bg-slate-100 text-slate-600 hover:bg-slate-200 px-3 py-1 rounded-md text-sm font-medium transition-colors">Cardio</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {videos.map(video => (
                            <div key={video._id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-md transition-shadow">
                                <div className="relative h-48 bg-slate-200 overflow-hidden">
                                     <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                     <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                                         <div className="bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100">
                                            <PlaySquare className="text-brand-orange ml-1" size={24} />
                                         </div>
                                     </div>
                                     <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                                         <Clock size={12} /> {video.durationMinutes}m
                                     </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-slate-900 mb-2 truncate">{video.title}</h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="bg-brand-orange text-black text-xs px-2.5 py-1 rounded-full font-medium border border-brand-orange capitalize">
                                            {video.category}
                                        </span>
                                        <span className={`text-xs px-2.5 py-1 text-slate-700 rounded-full font-medium border capitalize ${video.difficulty === 'beginner' ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : video.difficulty === 'advanced' ? 'bg-red-50 border-red-100 text-red-700' : 'bg-amber-50 border-amber-100 text-amber-700'}`}>
                                            {video.difficulty}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/3">
                    <div className="sticky top-24">
                        <RepCounterTimer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoLibrary;
