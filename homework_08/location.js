require('dotenv').config();
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}`, {useNewUrlParser: true});

const express = require('express');
const app = express();

let db = null;
app.use(function (req, res, next) {

    if (!db) {
        client.connect(function (err) {
            if (err)
                throw err;

            db = client.db('homework08');
            req.locations = db.collection('locations');
            req.locations.createIndex({location: '2d'}, {background: true});
            next();
        })
    } else {
        req.locations = db.collection('locations');
        req.locations.createIndex({location: '2d'}, {background: true});
        next();
    }
});

app.use(express.json());
app.post('/insert', function (req, res) {
    const location = req.body;
    req.locations.insert(location, function (err, doc) {
        if (err)
            throw err;

        console.log(doc);
        res.status(200).json(doc);
        res.end();
    });

});

app.get('/find2d/:category/', function (req, res) {
    const name = req.query.name;
    const category = req.params.category;

    req.locations.find({'category': category, location: {$near:[-91.9665342, 41.017654]}}).limit(3).toArray(function (err, docs) {
            res.status(200).json(docs);
            res.end();
    })
});

app.listen(3008, () => console.log('localhost:3008'));