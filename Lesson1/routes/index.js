const routes = require('express').Router(); // Import the express module and create a new router instance
const funcReturnData = require('../controllers'); // Import a function from the controllers directory

routes.get('/', funcReturnData.displayData); // Send a response with the text "Hello World!" when the root URL is accessed

module.exports = routes; // Export the router instance so it can be used in other files