# Dummy CRUD Application Backend

## Overview
This is a simple CRUD application that allows users to create, read, update, and delete items. The backend is built using Node.js and Express, and it connects to a MongoDB database using Mongoose.

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url> dt
   cd dummy-crud-app/backendxcv
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure the database**
   Update the `db.js` file in the `src/config` directory with your MongoDB connection string.

4. **Run the application**
   ```
   npm start
   ```

## API Endpoints

### Items
- **GET /api/items**: Retrieve all items
- **GET /api/items/:id**: Retrieve a single item by ID
- **POST /api/items**: Create a new item
- **PUT /api/items/:id**: Update an existing item by ID
- **DELETE /api/items/:id**: Delete an item by ID

## Usage Examples

### Fetching all items
```bash
curl -X GET http://localhost:5000/api/items
```

### Creating a new item
```bash
curl -X POST http://localhost:5000/api/items -H "Content-Type: application/json" -d '{"name": "Item 1", "description": "Description of Item 1", "price": 10.99}'
```

### Updating an item
```bash
curl -X PUT http://localhost:5000/api/items/:id -H "Content-Type: application/json" -d '{"name": "Updated Item", "description": "Updated description", "price": 12.99}'
```

### Deleting an item
```bash
curl -X DELETE http://localhost:5000/api/items/:id
```

## License
This project is licensed under the MIT License.
