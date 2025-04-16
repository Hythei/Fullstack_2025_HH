
// This is the main entry point for the application
// It sets up the server, connects to the database, and imports the routes
// It also starts the server and listens for incoming requests
// It uses the express framework and mongoose for MongoDB connection
// It uses dotenv for environment variable management
// It uses body-parser for parsing incoming request bodies
// It uses the routes defined in the 'opiskelijaRoutes' file for handling API requests
// It listens on the port defined in the environment variable or defaults to 3000
// It logs a message to the console when the server is running
// It connects to the MongoDB database using the URI defined in the environment variable
// It uses the 'local_library' database for the application

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI + "local_library";

// Import the routes
const opiskelijaRoutes = require('./routes/opiskelijaRoutes');

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(uri);

// Use the routes
app.use('/api', opiskelijaRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});