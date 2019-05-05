var http = require('http');
var fs =  require('fs');
var path = require('path');
var server = http.createServer();


//Creates a big file
var buffer = Buffer.alloc(200*1000000).fill('X');
fs.writeFileSync('bigFile.txt', buffer.toString());


//Using readFileSync
server.on('request', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var file = fs.readFileSync(path.join(__dirname, 'bigFile.txt'), 'utf8');
    res.end(file);
});
server.listen(4000, () => console.log('Listening on 4000'));


//Using readFile
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile(path.join(__dirname, 'bigFile.txt'), 'utf8', function (err, data) {
        if (err)
            throw err;

        res.end(data);
    })
}).listen(5000, () => console.log('Listening on 5000'));

//Using Streams
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var readable = fs.createReadStream(path.join(__dirname, 'bigFile.txt'), {encoding: 'utf8', highWaterMark: 2*1024})
        .pipe(res);

}).listen(3000, () => console.log('Listening on 3000'));