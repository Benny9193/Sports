/**
 * Sports Controller
 * Handles all sports-related API requests
 */

const sportsModel = require('../models/sports.model');

/**
 * Get all sports
 * @route GET /api/sports
 */
const getAllSports = (req, res) => {
    try {
        const sports = sportsModel.getAllSports();
        res.json({
            success: true,
            data: sports
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to retrieve sports data'
        });
    }
};

/**
 * Get all sports as a flat array
 * @route GET /api/sports/flat
 */
const getAllSportsFlat = (req, res) => {
    try {
        const sports = sportsModel.getAllSportsFlat();
        res.json({
            success: true,
            count: sports.length,
            data: sports
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to retrieve sports data'
        });
    }
};

/**
 * Get all categories
 * @route GET /api/categories
 */
const getCategories = (req, res) => {
    try {
        const categories = sportsModel.getCategories();
        res.json({
            success: true,
            count: categories.length,
            data: categories
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to retrieve categories'
        });
    }
};

/**
 * Get sports by category
 * @route GET /api/sports/category/:category
 */
const getSportsByCategory = (req, res) => {
    try {
        const { category } = req.params;
        const sports = sportsModel.getSportsByCategory(category);
        
        if (!sports) {
            return res.status(404).json({
                success: false,
                error: 'Category not found'
            });
        }

        res.json({
            success: true,
            data: sports
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to retrieve sports for category'
        });
    }
};

/**
 * Search sports
 * @route GET /api/sports/search?q=query
 */
const searchSports = (req, res) => {
    try {
        const { q } = req.query;
        
        if (!q) {
            return res.status(400).json({
                success: false,
                error: 'Search query is required'
            });
        }

        const results = sportsModel.searchSports(q);
        res.json({
            success: true,
            query: q,
            count: results.reduce((acc, r) => acc + r.sports.length, 0),
            data: results
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to search sports'
        });
    }
};

module.exports = {
    getAllSports,
    getAllSportsFlat,
    getCategories,
    getSportsByCategory,
    searchSports
};
