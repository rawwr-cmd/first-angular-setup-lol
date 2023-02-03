class Queue {
  private data: string[] = [];
  push(item: string) {
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
class QueueIt<T> {
  private data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

const nameQueueIt = new QueueIt<string>();
nameQueueIt.push('luis');
nameQueueIt.push('jose');

const numberQueueIt = new QueueIt<number>();
numberQueueIt.push(10);
numberQueueIt.push(20);
numberQueueIt.push(30);
