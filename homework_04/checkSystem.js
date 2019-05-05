const { Subject } = require('rxjs');
const os = require('os');


let myObs$ = new Subject();

myObs$.subscribe(
    value => {console.log(value)}
);

function checkSystem() {
    myObs$.next('Checking your system...');
    let completeFlag = true;

    if (os.totalmem() < 4*Math.pow(10,9)) {
        myObs$.next('This app needs at least 4 GB of RAM');
        completeFlag = false;
    }
    
    if (os.cpus().length < 2) {
        myObs$.next('Processor is not supported');
        completeFlag = false;
    }

    if (completeFlag) {
        myObs$.next('System is checked successfully');
    }

}

checkSystem();



