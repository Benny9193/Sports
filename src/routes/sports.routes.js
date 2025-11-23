/**
 * Sports Routes
 * Defines all API routes for sports endpoints
 */

const express = require('express');
const router = express.Router();
const sportsController = require('../controllers/sports.controller');

// GET /api/sports - Get all sports
router.get('/', sportsController.getAllSports);

// GET /api/sports/flat - Get all sports as a flat array
router.get('/flat', sportsController.getAllSportsFlat);

// GET /api/sports/search - Search sports
router.get('/search', sportsController.searchSports);

// GET /api/sports/category/:category - Get sports by category
router.get('/category/:category', sportsController.getSportsByCategory);

module.exports = router;
