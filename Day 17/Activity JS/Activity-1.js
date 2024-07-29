//Task 1 && Task 2 Combined

class Node {

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;//as of starting it has no element
    }

    addNode(value) {
        this.head = new Node(value, this.head); 
        //This create the head into a node
        //Where it stores the value and the location of
        //another none
    }

    removeEndNode() {
        let current = this.head;
        let secondLast;
        if(this.head == null) {
            return;
        }
        
        while(current.next) {
            secondLast = current; //giving the second last value
            current = current.next;
        }
        
        secondLast.next = null;//hence the 2nd last value becom the last
    }

    displayNodes() {
        let current = this.head
        while(current) {
            console.log(current);
            current = current.next;
        }
    }

}

const linkedList = new LinkedList();

linkedList.addNode(12);
linkedList.addNode(13);
linkedList.addNode(14);
linkedList.addNode(15);
linkedList.addNode(16);
linkedList.addNode(17);

linkedList.displayNodes();

linkedList.removeEndNode();

linkedList.displayNodes();

linkedList.addNode(199)

linkedList.displayNodes();