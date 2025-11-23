# Sports API Documentation

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### Health Check

#### GET /api/health
Check if the API is running.

**Response:**
```json
{
  "success": true,
  "message": "Sports API is running",
  "timestamp": "2025-11-23T08:14:13.126Z"
}
```

---

### Categories

#### GET /api/categories
Get all available sport categories.

**Response:**
```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "id": "team",
      "title": "Team Sports"
    },
    {
      "id": "individual",
      "title": "Individual Sports"
    },
    ...
  ]
}
```

---

### Sports

#### GET /api/sports
Get all sports data organized by categories and subcategories.

**Response:**
```json
{
  "success": true,
  "data": {
    "team": {
      "title": "Team Sports",
      "subcategories": {
        "Ball Sports": [
          {
            "name": "Football (Soccer)",
            "description": "The world's most popular sport..."
          },
          ...
        ]
      }
    },
    ...
  }
}
```

#### GET /api/sports/flat
Get all sports as a flat array with category information.

**Response:**
```json
{
  "success": true,
  "count": 150,
  "data": [
    {
      "name": "Football (Soccer)",
      "description": "The world's most popular sport...",
      "category": "team",
      "categoryTitle": "Team Sports",
      "subcategory": "Ball Sports"
    },
    ...
  ]
}
```

#### GET /api/sports/category/:category
Get sports for a specific category.

**Parameters:**
- `category` (path parameter) - Category ID (e.g., "team", "individual", "water", etc.)

**Example:**
```
GET /api/sports/category/team
```

**Response:**
```json
{
  "success": true,
  "data": {
    "title": "Team Sports",
    "subcategories": {
      "Ball Sports": [...],
      "Other Team Sports": [...]
    }
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "error": "Category not found"
}
```

#### GET /api/sports/search
Search for sports by name or description.

**Query Parameters:**
- `q` (required) - Search query string

**Example:**
```
GET /api/sports/search?q=football
```

**Response:**
```json
{
  "success": true,
  "query": "football",
  "count": 3,
  "data": [
    {
      "category": "team",
      "categoryTitle": "Team Sports",
      "subcategory": "Ball Sports",
      "sports": [
        {
          "name": "Football (Soccer)",
          "description": "The world's most popular sport..."
        },
        {
          "name": "American Football",
          "description": "A contact sport with 11 players..."
        }
      ]
    },
    ...
  ]
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Search query is required"
}
```

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "success": false,
  "error": "Error message describing the issue"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Route /api/invalid-route not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Failed to retrieve data"
}
```

In development mode, error responses may include a `stack` property with the error stack trace.

---

## CORS

The API supports Cross-Origin Resource Sharing (CORS) and can be configured via the `CORS_ORIGIN` environment variable. By default, all origins are allowed (`*`).

---

## Available Categories

- `team` - Team Sports
- `individual` - Individual Sports
- `water` - Water Sports
- `winter` - Winter Sports
- `combat` - Combat Sports
- `racket` - Racket Sports
- `athletics` - Athletics and Track & Field
- `motor` - Motor Sports
- `extreme` - Extreme Sports
- `other` - Other Notable Sports

---

## Example Usage

### Using cURL

```bash
# Get all categories
curl http://localhost:3000/api/categories

# Get sports in a category
curl http://localhost:3000/api/sports/category/water

# Search for sports
curl "http://localhost:3000/api/sports/search?q=swimming"

# Get all sports (flat array)
curl http://localhost:3000/api/sports/flat
```

### Using JavaScript (Fetch API)

```javascript
// Get all categories
fetch('http://localhost:3000/api/categories')
  .then(response => response.json())
  .then(data => console.log(data));

// Search for sports
fetch('http://localhost:3000/api/sports/search?q=tennis')
  .then(response => response.json())
  .then(data => console.log(data));

// Get sports by category
fetch('http://localhost:3000/api/sports/category/winter')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Using Axios

```javascript
const axios = require('axios');

// Get all sports
axios.get('http://localhost:3000/api/sports')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

// Search with query parameters
axios.get('http://localhost:3000/api/sports/search', {
  params: { q: 'football' }
})
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

---

## Rate Limiting

Currently, there is no rate limiting implemented. This may be added in future versions.

---

## Versioning

The current API version is v1. API versioning may be implemented in future releases.
