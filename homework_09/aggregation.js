require('dotenv').config();
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}`, {useNewUrlParser: true});

client.connect(function (err) {
    if (err)
        throw err;

    const db = client.db('homework09');
    const zips = db.collection('zipcodes');

    //Aggreation 1:
    // zips.aggregate([
    //     {$match: {'state': 'WA'}},
    //     {$project: {'_id':0, 'zipcode': '$_id', 'state':1}}
    // ]).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Aggreation 2:
    // zips.aggregate([
    //     {$match: {'pop': {$lt: 5000}}},
    //     {$project: {'_id':0, 'zipcode': '$_id', 'pop':1}}
    // ]).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Aggreation 3:
    zips.aggregate([
        {$group: {_id: {}}}


        // {$sort: {'city':1, 'state':1}},
        // {$group: {_id: '$city', 'zips': {$push: '$_id'}, 'QtyZips': {$sum:1}}},
        // {$match: {'QtyZips': {$gt:1}}},
        // {$project: {_id:0, 'city':'$_id', 'QtyZips':1, 'zips':1}}
    ]).toArray(function (err, docs) {
        console.dir(docs);
    })

});