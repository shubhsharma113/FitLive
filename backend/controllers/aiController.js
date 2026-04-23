const axios = require('axios');

// @desc    Generate Workout and Diet Plan
// @route   POST /api/ai/generate
// @access  Private
const generatePlan = async (req, res) => {
    const { age, weight, height, goal, fitnessLevel } = req.body;

    const prompt = `Act as an expert fitness trainer and nutritionist. Generate a structured weekly workout and diet plan for a user with the following profile:
- Age: ${age}
- Weight: ${weight} kg
- Height: ${height} cm
- Goal: ${goal}
- Fitness Level: ${fitnessLevel || 'Beginner'}
    
Format the response clearly with bullet points, using a "Workout Plan" section and a "Diet Plan" section. Ensure it is motivating and safe.`;

    try {
        const response = await axios.post(
            'https://api.mistral.ai/v1/chat/completions',
            {
                model: 'mistral-tiny', // Can use mistral-small or mistral-medium based on tier
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const aiResponse = response.data.choices[0].message.content;
        res.json({ result: aiResponse });

    } catch (error) {
        console.error("Mistral API Error: ", error.response?.data || error.message);
        res.status(500).json({ 
            message: 'Failed to generate plan via AI', 
            error: error.response?.data?.message || error.message 
        });
    }
};

module.exports = { generatePlan };
