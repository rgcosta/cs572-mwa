var fs = require('fs');
var path = require('path');

function readFileSync(filUrl) {
    return fs.readFileSync(path.join(__dirname, filUrl), 'utf8');
}

process.on('message', (filUrl) => {
    const file = readFileSync(filUrl);
    process.send(file);
});