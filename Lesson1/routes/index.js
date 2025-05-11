const routes = require('express').Router();     // Importing the express router
const funcReturnData = require('../controllers'); // Importing the function to return data

routes.get('/', funcReturnData.displayData); // Define a route for the root URL that uses the imported function

module.exports = routes; // Export the routes so they can be used in other files   