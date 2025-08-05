const express = require('express');
const itemRoutes = require('./routes/itemRoutes');
const dbConfig = require('./config/db');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
dbConfig();

// Routes
app.use('/api', itemRoutes); // <-- FIXED

//  dummy file rourre for testing
app.get('/', (req, res) => {
    res.send('Welcome to the Item API');    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});