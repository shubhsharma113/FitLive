import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Dumbbell, LogOut, User, Settings } from 'lucide-react';
import useAuthStore from '../../store/authStore';

const Navbar = () => {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const isHome = location.pathname === '/';

    return (
        <nav className={`w-full z-50 transition-colors ${isHome ? 'bg-[#111111] absolute top-0 left-0 border-none' : 'bg-[#111111] border-b border-[#222222] sticky top-0'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <Dumbbell className="h-7 w-7 text-brand-orange" />
                            <span className="text-2xl font-bold tracking-tight text-white">Fitlife</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {user ? (
                            <>
                                <Link to="/dashboard" className="text-white hover:text-brand-orange text-sm font-semibold transition-colors">Dashboard</Link>
                                <Link to="/gyms" className="text-white hover:text-brand-orange text-sm font-semibold transition-colors">Find Gyms</Link>
                                <Link to="/videos" className="text-white hover:text-brand-orange text-sm font-semibold transition-colors">Video Library</Link>
                                <Link to="/ai-coach" className="text-white hover:text-brand-orange text-sm font-semibold transition-colors">AI Coach</Link>

                                {user.role === 'admin' && (
                                    <Link to="/admin" className="text-brand-orange hover:text-white px-3 py-2 rounded-md text-sm font-bold transition-colors flex gap-1 items-center">
                                        <Settings size={16} /> Admin
                                    </Link>
                                )}

                                <div className="ml-4 flex items-center gap-3">
                                    <div className="flex items-center gap-2 text-sm text-slate-300 font-medium border-l border-[#333] pl-6 py-1">
                                        <User size={16} className="text-brand-orange" />
                                        <span>{user.name}</span>
                                    </div>
                                    <button 
                                        onClick={handleLogout}
                                        className="text-slate-400 hover:text-brand-orange transition-colors"
                                        title="Logout"
                                    >
                                        <LogOut size={18} />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/" className="text-brand-orange font-bold text-sm">Home</Link>
                                <Link to="/gyms" className="text-white hover:text-brand-orange font-bold text-sm transition-colors">About Us</Link>
                                <Link to="/videos" className="text-white hover:text-brand-orange font-bold text-sm transition-colors">Classes</Link>
                                <Link to="/ai-coach" className="text-white hover:text-brand-orange font-bold text-sm transition-colors">Blog</Link>
                                <Link to="/login" className="text-white hover:text-brand-orange font-bold text-sm transition-colors mr-2">Contact Us</Link>
                                
                                <Link to="/register" className="bg-white text-brand-orange hover:bg-slate-100 px-6 py-2.5 rounded text-sm font-bold transition-colors">JOIN NOW</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
