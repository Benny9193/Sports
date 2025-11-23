/**
 * Sports Application Server
 * Main entry point for the application
 */

const app = require('./src/app');
const config = require('./src/config/config');

const PORT = config.port;

// Start server
app.listen(PORT, () => {
    console.log(`🏆 Sports Compendium server running at http://localhost:${PORT}/`);
    console.log(`📋 Atlanta Falcons Roster: http://localhost:${PORT}/roster.html`);
    console.log(`Press Ctrl+C to stop the server`);
});
