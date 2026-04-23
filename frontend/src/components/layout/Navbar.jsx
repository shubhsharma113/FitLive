import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell, LogOut, User, Map, PlaySquare, Settings } from 'lucide-react';
import useAuthStore from '../../store/authStore';

const Navbar = () => {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <Dumbbell className="h-8 w-8 text-blue-500" />
                            <span className="text-xl font-bold tracking-tight">SmartGym<span className="text-blue-500">.</span></span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {user ? (
                            <>
                                <Link to="/dashboard" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Dashboard</Link>
                                <Link to="/gyms" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Find Gyms</Link>
                                <Link to="/videos" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Video Library</Link>
                                <Link to="/ai-coach" className="bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 px-3 py-2 rounded-md text-sm font-medium transition-colors border border-blue-500/20">AI Coach</Link>

                                {user.role === 'admin' && (
                                    <Link to="/admin" className="text-amber-400 hover:text-amber-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex gap-1 items-center">
                                        <Settings size={16} /> Admin
                                    </Link>
                                )}

                                <div className="ml-4 flex items-center gap-3">
                                    <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
                                        <User size={16} />
                                        <span>{user.name}</span>
                                    </div>
                                    <button 
                                        onClick={handleLogout}
                                        className="text-slate-400 hover:text-red-400 p-2 rounded-full hover:bg-slate-800 transition-colors"
                                        title="Logout"
                                    >
                                        <LogOut size={18} />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium">Log in</Link>
                                <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-600/20">Sign up</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
