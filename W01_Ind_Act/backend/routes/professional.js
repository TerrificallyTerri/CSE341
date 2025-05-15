const express = require('express');

const professionalController = require('../controllers/professional');
const router = express.Router();

router.get('/', professionalController.getData); // Route to get all professional data

module.exports = router; // Export the router