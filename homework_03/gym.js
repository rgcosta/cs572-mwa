const EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
        this.message = "New Gym";

    }

    visit() {
        console.log(this.message);
        const obj = this;
        setInterval(function () {
            obj.emit('boom');
        }, 1000);
    }
}


const gym = new Gym();
gym.on('boom', function () {
    console.log(`Athlete is working out`);
});
gym.visit();