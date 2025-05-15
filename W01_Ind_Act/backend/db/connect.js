const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => { // Initialize the database connection
    if (_db) {
        console.log('Database already initialized!');
        return callback(null, _db);
    }
    MongoClient.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })// Connect to the MongoDB server
        .then((client) => {
            _db = client.db(); // Store the database connection
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDb = () => { // Get the database connection
    if (!_db) {
        throw Error('Database not initialized!');
    }
    return _db;
};

module.exports = {  // Export the functions to initialize and get the database connection
    initDb,
    getDb,
};