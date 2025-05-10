const express = require('express');
const app = express();
const port = process.env.PORT || 3000; //create a variable for ease of use

// app.use('/', routes); predefined Express router or middleware function stored in the routes variable to the / path i.e const router = express.Router();. This allows you to define routes in a separate file and import them into your main server file.
app.use('/', require('./routes')); // Imports the routes from the routes.js file and uses them in the app. This allows you to define your routes in a separate file for better organization and maintainability.

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); // Log a message to the console when the server starts, indicating the URL where it's running.
});