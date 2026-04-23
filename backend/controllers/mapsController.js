const axios = require('axios');

// @desc    Get nearby gyms from Google Places API
// @route   GET /api/maps/nearby
// @access  Private
const getNearbyGyms = async (req, res) => {
    const { lat, lng, radius = 5000 } = req.query;

    if (!lat || !lng) {
        return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    try {
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=gym&key=${apiKey}`;

        // Call Google Places API securely from the backend
        const response = await axios.get(url);

        // Map and filter the results to send a clean payload to the frontend
        const gyms = response.data.results.map(place => ({
            id: place.place_id,
            name: place.name,
            address: place.vicinity,
            rating: place.rating || 0,
            userRatingsTotal: place.user_ratings_total || 0,
            location: place.geometry.location, // { lat, lng }
            openNow: place.opening_hours ? place.opening_hours.open_now : null,
            photoReference: place.photos && place.photos.length > 0 ? place.photos[0].photo_reference : null
        }));

        res.json(gyms);
    } catch (error) {
        console.error("Google Maps API Error: ", error.response?.data || error.message);
        res.status(500).json({ 
            message: 'Failed to fetch gyms', 
            error: error.response?.data?.error_message || error.message 
        });
    }
};

module.exports = { getNearbyGyms };
