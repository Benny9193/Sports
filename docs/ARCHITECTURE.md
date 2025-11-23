# Architecture

## Overview

The Sports application is a full-stack web application built with Node.js and Express.js. It provides a comprehensive sports compendium with both a web interface and a RESTful API.

## Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with Grid and Flexbox
- **Vanilla JavaScript** - Client-side interactivity

## Project Structure

```
Sports/
├── src/                      # Backend source code
│   ├── app.js               # Express application setup
│   ├── config/              # Configuration files
│   │   └── config.js        # App configuration
│   ├── controllers/         # Request handlers
│   │   └── sports.controller.js
│   ├── models/              # Data models
│   │   └── sports.model.js
│   ├── routes/              # API routes
│   │   ├── sports.routes.js
│   │   └── categories.routes.js
│   └── middleware/          # Custom middleware
│       ├── errorHandler.js
│       └── notFound.js
├── public/                  # Static frontend files
│   ├── css/
│   ├── js/
│   └── index.html
├── tests/                   # Test files
├── docs/                    # Documentation
│   ├── API.md              # API documentation
│   └── ARCHITECTURE.md     # This file
├── server.js               # Application entry point
├── package.json            # Dependencies and scripts
├── .env.example            # Environment variables template
└── .gitignore             # Git ignore rules
```

## Backend Architecture

### Application Layer (`src/app.js`)
- Initializes Express application
- Configures middleware (CORS, body parsing)
- Sets up routes
- Handles static file serving
- Implements error handling

### Routes (`src/routes/`)
Define API endpoints and connect them to controllers:
- `sports.routes.js` - Sports-related endpoints
- `categories.routes.js` - Category endpoints

### Controllers (`src/controllers/`)
Handle business logic and request/response:
- `sports.controller.js` - Sports data operations
  - Get all sports
  - Get sports by category
  - Search sports
  - Get categories

### Models (`src/models/`)
Manage data and business logic:
- `sports.model.js` - Sports data structure and queries
  - Data storage
  - Query functions
  - Data transformations

### Middleware (`src/middleware/`)
Process requests before they reach controllers:
- `errorHandler.js` - Global error handling
- `notFound.js` - 404 error handling

### Configuration (`src/config/`)
Application settings and environment variables:
- `config.js` - Centralized configuration management

## API Architecture

### RESTful Design
The API follows REST principles:
- Resource-based URLs
- HTTP methods for operations
- JSON response format
- Consistent error handling

### Response Format
All API responses follow a standard format:
```json
{
  "success": true|false,
  "data": {...},
  "error": "error message if failed"
}
```

### Endpoints
- `GET /api/health` - Health check
- `GET /api/categories` - List all categories
- `GET /api/sports` - Get all sports (structured)
- `GET /api/sports/flat` - Get all sports (flat array)
- `GET /api/sports/category/:category` - Get sports by category
- `GET /api/sports/search?q=query` - Search sports

See [API.md](./API.md) for detailed API documentation.

## Data Model

Sports data is organized hierarchically:
```
Category (e.g., "team")
└── Subcategory (e.g., "Ball Sports")
    └── Sport
        ├── name
        └── description
```

## Error Handling

### Middleware Chain
1. Route handlers
2. Not Found middleware (404)
3. Error Handler middleware (500)

### Error Types
- **400 Bad Request** - Invalid input
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Server errors

## Configuration

### Environment Variables
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `CORS_ORIGIN` - Allowed CORS origins (default: *)

## Frontend Architecture

### Static File Serving
- Express serves static files from root and `public/` directories
- Frontend files (HTML, CSS, JS) are separate from backend logic

### Client-Side Features
- Search functionality
- Category filtering
- Responsive design
- Dark mode support
- Local storage for preferences

## Security Considerations

- CORS configuration for cross-origin requests
- Environment variables for sensitive data
- Input validation in controllers
- Error messages don't expose system details in production

### Known Limitations
- **Rate Limiting**: Not currently implemented. This is a read-only API with public data, but rate limiting should be added for production use to prevent abuse. See Future Enhancements section.

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and authorization
- [ ] Rate limiting
- [ ] API versioning
- [ ] Caching layer (Redis)
- [ ] GraphQL API option
- [ ] WebSocket support for real-time updates
- [ ] Comprehensive test suite
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] API documentation with Swagger/OpenAPI
