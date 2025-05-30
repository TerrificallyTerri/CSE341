const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
    const result = await mongodb.getDb().collection('professional').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

module.exports = {
    getData,
};