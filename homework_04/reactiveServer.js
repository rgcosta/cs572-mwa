const { Subject } = require('rxjs');
const url = require('url');
const { fork } = require('child_process');
const subject$ = new Subject();

subject$.subscribe(obj => {
   obj.res.end(obj.content);
});

const http = require('http');
http.createServer((req, res) => {
    let path = url.parse(req.url, true);
    // console.log(path.query.url);

    const childProcess = fork('readFile.js');
    childProcess.send(path.query.url);
    childProcess.on('message', (file) => {
        subject$.next({
            res: res,
            content: file
        });
    });

}).listen(4000, () => console.log('localhost:4000'));