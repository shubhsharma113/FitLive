import React, { useState } from 'react';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import { Bot, Sparkles, Loader2, ArrowRight } from 'lucide-react';

const AIGenerator = () => {
    const { user } = useAuthStore();
    const [profile, setProfile] = useState({
        age: user?.profile?.age || 25,
        weight: user?.profile?.weight || 70,
        height: user?.profile?.height || 175,
        goal: user?.profile?.goal || 'Build Muscle',
        fitnessLevel: 'Beginner'
    });
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedPlan, setGeneratedPlan] = useState('');

    const handleGenerate = async (e) => {
        e.preventDefault();
        setIsGenerating(true);
        setGeneratedPlan('');
        
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            const { data } = await axios.post('http://localhost:5000/api/ai/generate', profile, config);
            setGeneratedPlan(data.result);
        } catch (error) {
            console.error(error);
            setGeneratedPlan('Failed to generate plan. Please verify the Mistral API Key in the backend .env file is correct and try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-8 text-center max-w-2xl mx-auto">
                <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                    <Bot className="h-10 w-10 text-blue-600" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900">AI Workout & Diet Generator</h1>
                <p className="text-lg text-slate-600 mt-4 leading-relaxed">Let our Mistral AI model analyze your body metrics and fitness goals to create a highly personalized, structured weekly plan just for you.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Form Section */}
                <div className="lg:col-span-4 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-blue-50/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                    <form onSubmit={handleGenerate} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Age</label>
                                <input type="number" required className="input-field bg-slate-50" value={profile.age} onChange={e => setProfile({...profile, age: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Weight (kg)</label>
                                <input type="number" required className="input-field bg-slate-50" value={profile.weight} onChange={e => setProfile({...profile, weight: e.target.value})} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Height (cm)</label>
                            <input type="number" required className="input-field bg-slate-50" value={profile.height} onChange={e => setProfile({...profile, height: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Fitness Goal</label>
                            <select className="input-field bg-slate-50" value={profile.goal} onChange={e => setProfile({...profile, goal: e.target.value})}>
                                <option>Build Muscle</option>
                                <option>Lose Fat</option>
                                <option>Improve Endurance</option>
                                <option>Increase Flexibility</option>
                                <option>Maintain Weight</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Current Level</label>
                            <select className="input-field bg-slate-50" value={profile.fitnessLevel} onChange={e => setProfile({...profile, fitnessLevel: e.target.value})}>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </div>
                        
                        <button type="submit" disabled={isGenerating} className="btn-primary w-full mt-6 py-3 flex items-center justify-center gap-2 group relative overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                {isGenerating ? <><Loader2 className="animate-spin" size={18}/> Generating...</> : <><Sparkles size={18} /> Generate Plan</>}
                            </span>
                            <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                        </button>
                    </form>
                </div>

                {/* Response Section */}
                <div className="lg:col-span-8 bg-slate-900 rounded-2xl shadow-xl min-h-[500px] border border-slate-700 flex flex-col relative overflow-hidden">
                    {/* Decorative lights */}
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

                    <div className="p-6 border-b border-slate-800 bg-slate-900/50 z-10 backdrop-blur-md">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">Your Custom AI Plan</h3>
                    </div>
                    <div className="flex-grow p-6 md:p-8 z-10 overflow-y-auto">
                        {!generatedPlan && !isGenerating ? (
                            <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
                                <Sparkles className="w-16 h-16 opacity-20" />
                                <p className="text-lg">Fill out your profile and click generate to create your plan.</p>
                            </div>
                        ) : isGenerating ? (
                            <div className="h-full flex flex-col items-center justify-center space-y-6">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-[spin_1s_linear_infinite] w-16 h-16 blur-[2px]"></div>
                                    <div className="rounded-full border-t-2 border-blue-400 animate-spin w-16 h-16"></div>
                                </div>
                                <p className="text-blue-400 animate-pulse font-medium text-lg tracking-wide">AI is composing your structured plan...</p>
                            </div>
                        ) : (
                            <div className="prose prose-invert prose-blue max-w-none">
                                {/* Simple line breaks text rendering */}
                                {generatedPlan.split('\n').map((line, i) => (
                                    <p key={i} className="mb-2 text-slate-300 leading-relaxed text-[15px]">
                                        {line.startsWith('#') || line.startsWith('-') ? <strong className="text-white font-semibold">{line}</strong> : line}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIGenerator;
