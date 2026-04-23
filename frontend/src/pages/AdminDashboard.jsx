import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import { Users, LayoutGrid, Plus, Loader2 } from 'lucide-react';

const AdminDashboard = () => {
    const { user } = useAuthStore();
    const [users, setUsers] = useState([]);
    const [gyms, setGyms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showGymModal, setShowGymModal] = useState(false);
    const [newGym, setNewGym] = useState({ name: '', description: '', address: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = { headers: { Authorization: `Bearer ${user.token}` } };
                const [usersRes, gymsRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/admin/users', config),
                    axios.get('http://localhost:5000/api/admin/gyms', config)
                ]);
                setUsers(usersRes.data);
                setGyms(gymsRes.data);
            } catch (error) {
                console.error('Error fetching admin data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [user.token]);

    const handleCreateGym = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            const payload = {
                name: newGym.name,
                description: newGym.description,
                address: { street: newGym.address }
            };
            const { data } = await axios.post('http://localhost:5000/api/admin/gyms', payload, config);
            setGyms([...gyms, data]);
            setShowGymModal(false);
            setNewGym({ name: '', description: '', address: '' });
        } catch (error) {
            alert('Failed to create gym');
        }
    };

    if (loading) return <div className="flex justify-center p-20"><Loader2 className="animate-spin h-10 w-10 text-amber-500" /></div>;

    if (user?.role !== 'admin') {
        return <div className="text-center p-20 text-red-500 font-bold text-xl">Not Authorized As Admin</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-8 border-b border-slate-200 pb-5">
                <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                    <LayoutGrid className="text-amber-500" /> Admin Control Panel
                </h1>
                <p className="text-slate-500 mt-1">Manage platform users and gym affiliates.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Users List */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-[600px] flex flex-col">
                    <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
                        <Users className="text-blue-500" />
                        <h3 className="text-xl font-bold text-slate-800">Platform Users ({users.length})</h3>
                    </div>
                    <div className="overflow-y-auto flex-grow p-4">
                        <div className="space-y-3">
                            {users.map(u => (
                                <div key={u._id} className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold text-slate-900">{u.name}</p>
                                        <p className="text-sm text-slate-500">{u.email}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${u.role === 'admin' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>
                                        {u.role.toUpperCase()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gyms List */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-[600px] flex flex-col">
                    <div className="p-6 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-slate-800">Partner Gyms ({gyms.length})</h3>
                        <button onClick={() => setShowGymModal(true)} className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1">
                            <Plus size={16} /> New Gym
                        </button>
                    </div>
                    <div className="overflow-y-auto flex-grow p-4">
                        <div className="space-y-3">
                            {gyms.map(gym => (
                                <div key={gym._id} className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                                    <h4 className="font-bold text-slate-900">{gym.name}</h4>
                                    <p className="text-sm text-slate-600 mt-1">{gym.description || 'No description'}</p>
                                    <p className="text-xs text-slate-400 mt-2 bg-slate-50 inline-block px-2 py-1 rounded">{gym.address?.street || 'No address'}</p>
                                </div>
                            ))}
                            {gyms.length === 0 && <p className="text-center text-slate-500 py-10">No Gyms available.</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showGymModal && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                        <h3 className="text-2xl font-bold mb-4">Add Partner Gym</h3>
                        <form onSubmit={handleCreateGym} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Gym Name</label>
                                <input type="text" required className="input-field" value={newGym.name} onChange={e => setNewGym({...newGym, name: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                                <textarea className="input-field" rows="2" value={newGym.description} onChange={e => setNewGym({...newGym, description: e.target.value})}></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Address/Street</label>
                                <input type="text" className="input-field" value={newGym.address} onChange={e => setNewGym({...newGym, address: e.target.value})} />
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button type="button" onClick={() => setShowGymModal(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors">Cancel</button>
                                <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium">Create Gym</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
