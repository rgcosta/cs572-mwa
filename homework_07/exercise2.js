var express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');

let db = null;

app.use(function (req, res, next) {

    if (!db) {
        client.connect(function (err) {

            if (err)
                throw err;

            db = client.db('homework01');
            req.collection = db.collection('data');
            console.log('new db connection...');
            next();
        });
    } else {
        req.collection = db.collection('data');
        console.log('reusing db connection...');
        next();
    }

});

app.get('/secret', function (req, res) {

    req.collection.findOne({}, {key: 1, message: 1}, function (err, doc) {

        if (err)
            throw err;

        const encryptor = require('simple-encryptor')(doc.key);
        let msgDecrypted = encryptor.decrypt(doc.message);
        res.status(200).json({message: msgDecrypted});
        res.end();
    })

});

app.listen(3000, () => console.log('localhost:3000'));