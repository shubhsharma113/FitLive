import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('userInfo')) || null,
    isLoading: false,
    error: null,

    login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await axios.post(`${API_URL}/login`, { email, password });
            localStorage.setItem('userInfo', JSON.stringify(data));
            set({ user: data, isLoading: false });
        } catch (error) {
            set({ 
                error: error.response?.data?.message || 'Login failed', 
                isLoading: false 
            });
        }
    },

    register: async (userData) => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await axios.post(`${API_URL}/register`, userData);
            localStorage.setItem('userInfo', JSON.stringify(data));
            set({ user: data, isLoading: false });
        } catch (error) {
            set({ 
                error: error.response?.data?.message || 'Registration failed', 
                isLoading: false 
            });
        }
    },

    logout: () => {
        localStorage.removeItem('userInfo');
        set({ user: null });
    }
}));

export default useAuthStore;
