/**
 * Sports Application Server
 * Main entry point for the application
 */

const app = require('./src/app');
const config = require('./src/config/config');

const server = app.listen(config.port, () => {
    console.log(`🏆 Sports Compendium server running at http://localhost:${config.port}/`);
    console.log(`🌐 API endpoints available at http://localhost:${config.port}/api/`);
    console.log(`📝 Environment: ${config.nodeEnv}`);
    console.log(`Press Ctrl+C to stop the server`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
