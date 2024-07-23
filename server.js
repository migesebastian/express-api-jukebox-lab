const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Import the controller file
const trackRouter = require('./controllers/tracks.js'); // Assuming you have the tracks controller

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Routes
app.use('/tracks', trackRouter); // Assuming you have the tracks controller

// Start the server
app.listen(3000, () => {
  console.log('The express app is ready and listening on port 3000!');
});
