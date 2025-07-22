const http = require('http');
const port = process.env.PORT || 3000;

// Simple health check server for hosting platforms
const server = http.createServer((req, res) => {
    if (req.url === '/health' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            status: 'ok', 
            message: 'Discord selfbot is running',
            timestamp: new Date().toISOString()
        }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Health check server running on port ${port}`);
});

// Start the Discord bot
require('./index.js');

