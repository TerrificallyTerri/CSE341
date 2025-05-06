displayData = (req, res) => { // Define a function to handle requests to the root URL
    const data = // Create an object with some data
        'This is display data';
    res.status(200).send(data);
};

module.exports = { // Export the function so it can be used in other files
    displayData, // Export the displayData function
};