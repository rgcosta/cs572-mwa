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
    // restaurants.find({}).project({"restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1}).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Question 3:
    // restaurants.find({}).project({"_id": 0, "restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1}).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Question 4:
    // restaurants.find({}).project({"_id": 0, "restaurant_id": 1, "name": 1, "district": 1, "address.zipcode": 1}).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Question 5:
    // restaurants.find({"district": "Bronx"}).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Question 6:
    // restaurants.find({"district": "Bronx"}).limit(5).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Question 7:
    // restaurants.find({"district": "Bronx"}).skip(5).limit(5).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Question 8:
    // restaurants.find({"address.coord.0":{$lt:-95.754168}}).toArray(function (err, docs) {
    //     require('http').createServer((req, res) => {
    //         res.end(JSON.stringify(docs));
    //     }).listen(3008, () => console.log('localhost:3008'));
    // });

    //Question 9:
    // restaurants.find({"cuisine": {$ne: "American"}, "grades": {$elemMatch: {"score": {$gt: 70}}}, "address.coord.0": {$lt: -65.754168} }).toArray(function (err, docs) {
    //         require('http').createServer((req, res) => {
    //             res.end(JSON.stringify(docs));
    //         }).listen(3008, () => console.log('localhost:3008'));
    // })

    //Question 10:
    // restaurants.find({name: {$regex: "^Wil"}}).project({"restaurant_id":1, "name":1, "district":1, "cuisine":1, _id: 0}).toArray(function (err, docs) {
    //         console.dir(docs);
    // });

    //Question 11:
    // restaurants.find({name: {$regex: "ces$"}}).project({"restaurant_id":1, "name":1, "district":1, "cuisine":1, _id: 0}).toArray(function (err, docs) {
    //         console.dir(docs);
    // });

    //Question 12:
    // restaurants.find({name: {$regex: "Reg"}}).project({"restaurant_id":1, "name":1, "district":1, "cuisine":1, _id: 0}).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Question 13:
    // restaurants.find({$and: [{"district": "Bronx"}, {"cuisine": {$in: ["American ", "Chinese"]} }]}).toArray(function (err, docs) {
    //     console.dir(docs);
    // })

    //Question 14:
    // restaurants.find({"district": {$in: ["State Island", "Queens", "Bronx", "Brooklyn"]}})
    //     .project({"restaurant_id":1, "name":1, "district":1, "cuisine":1, "_id":0})
    //     .toArray(function (err, docs) {
    //         console.dir(docs);
    //     });

    //Question 15:
    // restaurants.find({"district": {$nin: ["State Island", "Queens", "Bronx", "Brooklyn"]}})
    //     .project({"restaurant_id":1, "name":1, "district":1, "cuisine":1, "_id":0})
    //     .toArray(function (err, docs) {
    //         console.dir(docs);
    //     });

    //Question 16:
    // restaurants.find({"grades": {$elemMatch: {"score": {$lte: 10}}}})
    //     .project({"restaurant_id":1, "name":1, "district":1, "cuisine":1, "_id":0})
    //     .toArray(function (err, docs) {
    //         console.dir(docs);
    //     });

    //Question 17:
    // restaurants.find({"address.coord.1": {$gt: 42, $lte: 52}})
    //     .project({"restaurant_id":1, "name":1, "address.street":1, "address.coord":1, "_id":0})
    //     .toArray(function (err, docs) {
    //             require('http').createServer((req, res) => {
    //                 res.end(JSON.stringify(docs));
    //             }).listen(3008, () => console.log('localhost:3008'));
    //     });

    //Question 18:
    // restaurants.find({}).sort({"name":1}).toArray(function (err, docs) {
    //     console.dir(docs);
    // })

    //Question 19:
    // restaurants.find({}).sort({"name":-1}).toArray(function (err, docs) {
    //     console.dir(docs);
    // })

    //Question 20:
    // restaurants.find({}).sort({"cuisine":1, "district":-1}).toArray(function (err, docs) {
    //     console.dir(docs);
    // })

    //Question 21:
    // restaurants.find({"address.coord": {$type:'double'}}).toArray(function (err, docs) {
    //     console.dir(docs);
    // });

    //Question 22:
    restaurants.find({"name": {$regex: "^Mad"}}).project({"name":1, "district":1, "cuisine":1, "address.coord":1, "_id":0})
        .toArray(function (err, docs) {
            console.dir(docs);
        })



});

