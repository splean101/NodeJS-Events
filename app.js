const EventEmitter = require('events');

class Hare extends EventEmitter {
    constructor(x, y) {
        super();
        this._x = x;
        this._y = y
    }
    mooving() {
        this._x = Math.round(Math.random() * 100);
        this._y = Math.round(Math.random() * 100);
        this.emit('jump', [this._x, this._y]);
    }
};

class Hunter {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    watch(data) {
        setImmediate(() => {
            let [hareX, hareY] = data;
            console.log(`Hunter ${this.name} is watching hare cordinates x: ${hareX} y: ${hareY}`);
        });
    }
};

const hare = new Hare(0, 0);
const hunter1 = new Hunter('Thompson');
const hunter2 = new Hunter('Jeferson');

hare.on('jump', hunter1.watch.bind(hunter1));
hare.on('jump', hunter1.watch.bind(hunter2));

hare.mooving();
hare.mooving();
hare.mooving();





