const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let filePath = req.url;

    // Handle root path
    if (filePath === '/') {
        filePath = '/index.html';
    }

    // Determine the full file path
    let fullPath;

    // Check if requesting from data directory
    if (filePath.startsWith('/data/')) {
        fullPath = path.join(__dirname, filePath);
    }
    // Check if requesting from public directory
    else if (filePath.startsWith('/public/')) {
        fullPath = path.join(__dirname, filePath);
    }
    // Otherwise, look in root directory first
    else {
        fullPath = path.join(__dirname, filePath);
    }

    const extname = path.extname(fullPath);
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(fullPath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`🏆 Sports Compendium server running at http://localhost:${PORT}/`);
    console.log(`📋 Atlanta Falcons Roster: http://localhost:${PORT}/roster.html`);
    console.log(`Press Ctrl+C to stop the server`);
});
