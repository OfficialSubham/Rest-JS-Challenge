//Task 5 && Task 6 Combined
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    displayQueue() {
        console.log(this.queue);
    }

    dequeue() {
        if (this.queue != []) {
            console.log(this.queue[0]);
            let newArray = [];
            for(let i = 1; i < this.queue.length; i++) {
                newArray[i - 1] = this.queue[i];
            }
            this.queue = newArray;
        }
    }

    front() {
        if(!this.queue) {
            return;
        }
        else {
            console.log(this.queue[0])
        }
    }

    processedInOrder() {
        while(this.queue[0]) {
            this.dequeue();
        }
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.displayQueue();

queue.dequeue();
queue.displayQueue()
queue.dequeue();
queue.displayQueue()
queue.dequeue();
queue.displayQueue()
queue.dequeue();
queue.displayQueue()



const printJobs = new Queue();

printJobs.enqueue("print page 1");
printJobs.enqueue("print page 2");
printJobs.enqueue("print page 3");
printJobs.enqueue("print page 4");

printJobs.displayQueue();
printJobs.processedInOrder();