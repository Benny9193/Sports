/**
 * Express Application Setup
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./config/config');
const sportsRoutes = require('./routes/sports.routes');
const categoriesRoutes = require('./routes/categories.routes');
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

const app = express();

// Middleware
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '..')));

// API Routes
app.use('/api/sports', sportsRoutes);
app.use('/api/categories', categoriesRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Sports API is running',
        timestamp: new Date().toISOString()
    });
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// 404 handler
app.use(notFound);

// Error handler
app.use(errorHandler);

module.exports = app;
