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
    // zips.aggregate([
    //     { $group: {_id: {state: '$state', city: '$city'}, zips: {$sum:1} }},
    //     {$match: {zips: {$gt:1}}},
    //     {$sort: {'_id.state':1, '_id.city':1}},
    //     {$project: {_id:0, State_City:'$_id', zips:1}}
    // ]).toArray(function (err, docs) {
    //     console.dir(docs);
    // })

    //Aggreagation 4:
    zips.aggregate([
        {
            $group: {
                _id: {state: '$state', city: '$city'},
                total: {$sum: '$pop'} }
                },
        {
            $sort: {'_id.state':-1, 'total': 1}
        },
        {
            $group: {
                _id: '$_id.state',
                'city': {$first: '$_id.city'}, 'total': {$first: '$total'}
            }
        },
        {
            $sort: {
                '_id':1
            }
        }

    ]).toArray(function (err, docs) {
        console.dir(docs);
    });

});