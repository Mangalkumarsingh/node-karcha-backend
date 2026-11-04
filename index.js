require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // JSON data parse karne ke liye

// Test Route
app.get('/api/health', (req, res) => {
    res.json({ status: "success", message: "Kharcha App backend is running fast on Node.js!" });
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});