import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import { Activity, Calendar, Award, Plus, Loader2 } from 'lucide-react';

const Dashboard = () => {
    const { user } = useAuthStore();
    const [progressLogs, setProgressLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showLogModal, setShowLogModal] = useState(false);
    const [newLog, setNewLog] = useState({ weight: '', bodyFatPercentage: '', notes: '' });

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const config = { headers: { Authorization: `Bearer ${user.token}` } };
                const { data } = await axios.get('http://localhost:5000/api/tracking/progress', config);
                setProgressLogs(data);
            } catch (error) {
                console.error('Error fetching logs', error);
            } finally {
                setLoading(false);
            }
        };
        fetchLogs();
    }, [user.token]);

    const handleAddLog = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            const { data } = await axios.post('http://localhost:5000/api/tracking/progress', newLog, config);
            setProgressLogs([data, ...progressLogs]);
            setShowLogModal(false);
            setNewLog({ weight: '', bodyFatPercentage: '', notes: '' });
        } catch (error) {
            console.error('Failed to add log', error);
        }
    };

    const handleAttendance = async () => {
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            await axios.post('http://localhost:5000/api/tracking/attendance', {}, config);
            alert('Attendance marked for today!');
        } catch (error) {
            alert(error.response?.data?.message || 'Failed to mark attendance');
        }
    };

    if (loading) return <div className="flex justify-center p-20"><Loader2 className="animate-spin h-10 w-10 text-brand-orange" /></div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Welcome, {user.name}!</h1>
                    <p className="text-slate-500">Track your progress and stay consistent.</p>
                </div>
                <button onClick={handleAttendance} className="btn-primary flex items-center gap-2">
                    <Calendar size={18} /> Mark Attendance
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="card bg-gradient-to-br from-brand-orange to-indigo-600 text-white border-none">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-brand-orange mb-1">Current Weight</p>
                            <h2 className="text-4xl font-bold">{progressLogs[0]?.weight || '--'} kg</h2>
                        </div>
                        <Activity className="h-8 w-8 text-brand-orange opacity-50" />
                    </div>
                </div>
                <div className="card">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-slate-500 mb-1">Total Workouts</p>
                            <h2 className="text-4xl font-bold text-slate-900">{progressLogs.length}</h2>
                        </div>
                        <Award className="h-8 w-8 text-amber-400" />
                    </div>
                </div>
                <div className="card">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-slate-500 mb-1">Latest Body Fat %</p>
                            <h2 className="text-4xl font-bold text-slate-900">{progressLogs[0]?.bodyFatPercentage ? progressLogs[0].bodyFatPercentage + '%' : '--'}</h2>
                        </div>
                        <Activity className="h-8 w-8 text-emerald-400" />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                    <h3 className="text-xl font-bold text-slate-800">Progress History</h3>
                    <button onClick={() => setShowLogModal(true)} className="flex items-center gap-1 text-brand-orange font-medium hover:text-brand-orange transition-colors">
                        <Plus size={18} /> Add Log
                    </button>
                </div>
                <div className="divide-y divide-slate-100">
                    {progressLogs.length === 0 ? (
                        <div className="p-10 text-center text-slate-500">No logs yet. Start tracking your progress!</div>
                    ) : (
                        progressLogs.map(log => (
                            <div key={log._id} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-slate-50 transition-colors">
                                <div>
                                    <p className="font-semibold text-slate-900">{new Date(log.date).toLocaleDateString()}</p>
                                    <p className="text-sm text-slate-500 mt-1">{log.notes || 'No notes'}</p>
                                </div>
                                <div className="mt-2 sm:mt-0 flex gap-4 text-sm font-medium bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                                    <span className="text-slate-700">Weight: <span className="text-brand-orange">{log.weight}kg</span></span>
                                    {log.bodyFatPercentage && <span className="text-slate-700">Fat: <span className="text-brand-orange">{log.bodyFatPercentage}%</span></span>}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Modal */}
            {showLogModal && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                        <h3 className="text-2xl font-bold mb-4">Add Progress Log</h3>
                        <form onSubmit={handleAddLog} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Weight (kg)</label>
                                <input type="number" required className="input-field" value={newLog.weight} onChange={e => setNewLog({...newLog, weight: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Body Fat % (optional)</label>
                                <input type="number" className="input-field" value={newLog.bodyFatPercentage} onChange={e => setNewLog({...newLog, bodyFatPercentage: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
                                <textarea className="input-field" rows="3" value={newLog.notes} onChange={e => setNewLog({...newLog, notes: e.target.value})}></textarea>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button type="button" onClick={() => setShowLogModal(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors">Cancel</button>
                                <button type="submit" className="btn-primary">Save Log</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
