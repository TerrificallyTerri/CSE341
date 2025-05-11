displayData = (req, res) => {       // Define a function to handle requests to the root URL
    const data =            // Create a variable to hold the data to be sent in the response
        'This is display data from the controller';
    res.status(200).send(data);
};

module.exports = {      // Export the function so it can be used in other files
    displayData,
};