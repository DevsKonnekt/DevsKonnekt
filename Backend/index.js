// Import required libraries and modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const logger = require('./config/logger');
const apiRoutes = require('./routes/apiRoutes');

// Load environment variables from .env file
require('dotenv').config();

// Initialize Express application
const app = express();

// Middleware setup
app.use(express.json());
app.use(morgan('combined', { stream: logger.stream }));

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  logger.info('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
});

// Define your API routes
app.use('/api', apiRoutes);

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
