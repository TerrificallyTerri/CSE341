const express = require('express');
const mongodb = require('./database.connect.js'); // Import the MongoDB connection module
const mongoClient = require('mongodb').MongoClient; // Import the MongoDB client
const bodyParser = require('body-parser'); // Import the body-parser middleware
const professionalRoutes = require('./routes/professional.js'); // Import the professional routes

const app = express();
const port = process.env.PORT || 8080; //create a variable for ease of use

// app.use('/', routes); predefined Express router or middleware function stored in the routes variable to the / path i.e const router = express.Router();. This allows you to define routes in a separate file and import them into your main server file.
app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
        next(); // Call the next middleware function in the stack
    })
    .use('/professional', professionalRoutes) // Use the professional routes for any requests to /professional

mongodb.initDb((err, mongodb) => { // Initialize the MongoDB connection
    if (err) {
        console.log(err); // Log any errors that occur during the connection
    } else {
        app.listen(port, () => { // Start the server and listen on the specified port
            console.log(`Connected to DB and listening on port ${port}`); // Log a message indicating the server is running
        });
    }
});