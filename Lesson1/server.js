const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Set the port to the value in the environment variable PORT or default to 3000

app.use('/', require('./routes')); // Use the routes defined in the routes file for the root URL

app.listen(port, () => { // Start the server and listen on the specified port
    console.log(`Server is running on port ${port}`); // Log a message to the console when the server starts
});