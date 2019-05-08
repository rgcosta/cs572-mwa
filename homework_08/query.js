require('dotenv').config();
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}`, {useNewUrlParser: true});

client.connect(function (err) {
    if (err)
        throw err;

    const db = client.db('homework08');
    const restaurants = db.collection('restaurants');

    //Question 1:
    // restaurants.find({}).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Question 2:
    // restaurants.find({}).project({'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1}).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Question 3:
    // restaurants.find({}).project({'_id': 0, 'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1}).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Question 4:
    restaurants.find({}).project({'_id': 0, 'restaurant_id': 1, 'name': 1, 'district': 1, 'address.zipcode': 1}).toArray(function (err, docs) {
        console.dir(docs);
    });


});

