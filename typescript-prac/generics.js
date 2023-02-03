class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    remove() {
        this.data.shift();
    }
}
//generating an instance of the Queue class
const nameQueue = new Queue();
nameQueue.push('luis');
nameQueue.push('jose');
const numberQueue = new Queue();
// numberQueue.push(10); // error
// using generics (u can use anything inplace of T)
class QueueIt {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    remove() {
        this.data.shift();
    }
}
const nameQueueIt = new QueueIt();
nameQueueIt.push('luis');
nameQueueIt.push('jose');
const numberQueueIt = new QueueIt();
numberQueueIt.push(10);
numberQueueIt.push(20);
numberQueueIt.push(30);
