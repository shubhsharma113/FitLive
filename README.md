# Smart Gym Management & AI-Based Fitness Recommendation System

A complete MERN stack web application with AI integration and Google Maps.

## 📁 Repository Structure
- `/backend` - Node.js + Express API
- `/frontend` - React.js + Vite Application

## 🗄️ Database Schemas (MongoDB)
- **User**: Stores profiles, passwords (bcrypt), goals.
- **Gym**: Admin-managed fitness centers with locations.
- **ProgressLog**: Tracks user weight and body fat over time.
- **Attendance**: Tracks daily check-ins.
- **Video**: Workout video links and categories.

## 🚀 Setup Steps

### 1. Backend Setup
1. `cd backend`
2. `npm install`
3. Configure the `.env` file (see guide below).
4. `npm run dev` (Runs on `http://localhost:5000`)

### 2. Frontend Setup
1. `cd frontend`
2. `npm install`
3. Create `.env` in frontend root for `VITE_GOOGLE_MAPS_API_KEY`.
4. `npm run dev` (Runs on `http://localhost:5173`)

## 🔐 `.env` File Guide
### `backend/.env`
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/smartgym
JWT_SECRET=supersecretjwtkey_for_gym_management_123

# Get this from https://console.mistral.ai/
MISTRAL_API_KEY=your_mistral_api_key_here

# Get this from Google Cloud Console (Enable Places API & Maps JavaScript API)
# RESTRICT THIS KEY to your backend server IPs in production!
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### `frontend/.env`
```env
# Same as above, but for the map renderer. 
# RESTRICT THIS KEY to HTTP Referrers (e.g. localhost:5173 or your production domain)!
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

## 🧠 Mistral AI Prompt
The prompt used internally is:
*"Act as an expert fitness trainer and nutritionist. Generate a structured weekly workout and diet plan for a user with the following profile: Age: [Age], Weight: [Weight] kg, Height: [Height] cm, Goal: [Goal], Fitness Level: [Level]. Format the response clearly with bullet points, using a 'Workout Plan' section and a 'Diet Plan' section."*

## 📍 Google Maps Setup Guide
1. Go to Google Cloud Console.
2. Create Project -> Search "Places API (New)" and "Maps JavaScript API". Enable both.
3. Go to APIs & Services -> Credentials -> Create Credentials -> API Key.
4. **Important**: You must restrict the keys. 
   - Backend key: Restrict by IP address.
   - Frontend key: Restrict to "HTTP referrers (web sites)" and add `http://localhost:5173/*` and your production domain.
5. Paste keys in `.env`.

## 📡 API Endpoints List (Postman Examples)

### Auth
- **POST** `/api/auth/register` - `{ "name": "Admin", "email": "admin@gym.com", "password": "123", "role": "admin" }`
- **POST** `/api/auth/login` - `{ "email": "admin@gym.com", "password": "123" }`
- **GET/PUT** `/api/auth/profile` - Protected

### Tracking
- **POST** `/api/tracking/progress` - Protected `{ "weight": 70, "bodyFatPercentage": 15, "notes": "Felt good" }`
- **GET** `/api/tracking/progress` - Protected
- **POST** `/api/tracking/attendance` - Protected

### AI Generation
- **POST** `/api/ai/generate` - Protected `{ "age": 25, "weight": 70, "height": 175, "goal": "Build Muscle" }`

### Maps
- **GET** `/api/maps/nearby?lat=37.77&lng=-122.41&radius=5000` - Protected (Fetches gyms securely via backend)

### Admin (Protected, Admin Only)
- **POST** `/api/admin/gyms` - `{ "name": "Gold's Gym", "address": "123 Main St" }`
- **GET** `/api/admin/users`
