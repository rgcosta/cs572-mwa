require('dotenv').config();
let express = require('express');
const {ObjectId} = require("bson/lib/bson/objectid");
let app = express();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}`, {useNewUrlParser: true});

let db = null;

app.use(function (req, res, next) {

    if (!db) {
        client.connect(function (err) {

            if (err)
                throw err;

            db = client.db('homework07');
            req.collection = db.collection('lectures');
            console.log('new db connection...');
            next();
        });
    } else {
        req.collection = db.collection('lectures');
        console.log('reusing db connection...');
        next();
    }
});

app.get('/lectures', function (req, res) {

    req.collection.find({}).toArray( (err, docs) => {
        if (err)
            throw err;

        res.status(200).json(docs);
        res.end();
    });

});

// app.get('/lectures/:id', function (req, res) {
//     const id = req.params.id;
//     req.collection.findOne({_id: ObjectId(id)}, (err, doc) => {
//         if (err)
//             throw err;
//
//         res.status(200).json(doc);
//         res.end();
//     })
//
// });

app.get('/lectures/:course', function (req, res) {
    const course = req.params.course;
    req.collection.find({course: course}).toArray( (err, docs) => {
        if (err)
            throw err;

        res.status(200).json(docs);
        res.end();
    })
});

app.use(express.json());
app.post('/lectures', function (req, res) {
    const lecture = req.body;
    req.collection.insert(lecture, function (err, doc) {

        if (err)
            throw err;

        res.status(200).json(doc);
        res.end();
    })
});

app.post('/search/:q', function (req, res) {
    const q = req.params.q;
    req.collection.find({course: { $regex: q}}).toArray(function (err, docs) {
        if (err)
            throw err;

        res.status(200).json(docs);
        res.end();
    })
});

app.listen(3007, () => console.log('localhost:3007'));