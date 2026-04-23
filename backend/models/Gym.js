const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        coordinates: {
            lat: Number,
            lng: Number
        } // For map display later if needed manually
    },
    contact: {
        phone: String,
        email: String
    },
    trainers: [{
        name: String,
        specialty: String,
        experience: Number
    }],
    plans: [{
        name: String,
        price: Number,
        durationMonths: Number,
        features: [String]
    }],
    averageRating: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Gym = mongoose.model('Gym', gymSchema);
module.exports = Gym;
