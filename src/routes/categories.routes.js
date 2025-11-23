/**
 * Categories Routes
 * Defines all API routes for categories endpoints
 */

const express = require('express');
const router = express.Router();
const sportsController = require('../controllers/sports.controller');

// GET /api/categories - Get all categories
router.get('/', sportsController.getCategories);

module.exports = router;
