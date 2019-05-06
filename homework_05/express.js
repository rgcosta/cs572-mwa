var express = require('express');
var app = express();
var axios = require('axios');

app.disable('etag');
app.enable('trust proxy');
app.enable('case sensitive routing');
app.set('strict routing',true);
app.set('x-powered-by', false);

app.get('/users', function (request, response) {

    var fetchUsersData = async function() {
        try {
            const usersData = await axios.get('https://randomuser.me/api/?results=10');
            console.log(usersData.data);
            response.status(200);
            response.set('Content-Type', 'application/json');
            response.send(usersData.data);
            response.end();
        } catch (e) {
            console.log(e);
        }
    };

    fetchUsersData();

});

app.listen(3000, () => console.log('Running on localhost:3000'));