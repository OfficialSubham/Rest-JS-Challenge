//Activity 4

//Task 4

//According to me The question is that I have to make a new LinkedList where The data is sorted


//creating Linked List

class Node {
    constructor(data, pointer = null) {
        this.data = data;
        this.pointer = pointer;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addData(data) {
        this.head = new Node(data, this.head)
    }

    displayLL() {
        console.log(this.head);
    }

    displayData() {
        let firstNode = this.head
        while(firstNode) {
            console.log(firstNode.data);
            firstNode = firstNode.pointer;
        }
    }
}

let newLinkedList1 = new LinkedList()//created Linded list
//add data
newLinkedList1.addData(1);
newLinkedList1.addData(2);
newLinkedList1.addData(3);
newLinkedList1.addData(4)

//newLinkedList1.displayLL();

let newLinkedList2 = new LinkedList(); //created another Linked List
//added data init
newLinkedList2.addData(5);
newLinkedList2.addData(6);
newLinkedList2.addData(7);
newLinkedList2.addData(8)

//newLinkedList2.displayLL();

//newLinkedList2.displayData()

//Here The Function Started

function mergedSortedList(list1, list2) {
    let sortArray = [];
    let list1Node = list1.head;
    let list2Node = list2.head;
    while(list1Node) {
        sortArray.push(list1Node.data);
        list1Node = list1Node.pointer;
    }
    while(list2Node) {
        sortArray.push(list2Node.data);
        list2Node = list2Node.pointer;
    }
    
    let sortedArray = orderedArray(sortArray);
    console.log(sortedArray);
}

//This function sort the array
function orderedArray(array) {
    let sortedArray = array; //defined that array with a variable
    let tempArray = [];//to add temporary value in this array
    //BubbleShort
    for (let i = 0; i < sortedArray.length; i++) {
        for(let index = 0; index < sortedArray.length; index++) {
            if(sortedArray[index] > sortedArray[index + 1]) {
                tempArray[0] = sortedArray[index];
                sortedArray[index] = sortedArray[index + 1];
                sortedArray[index + 1] = tempArray[0];
                tempArray = []
            }
        }
    }

    //this function repeteadly checking that the next number in the array is greater
    //then the previous number if not then it interchange their position

    return sortedArray;
}

mergedSortedList(newLinkedList1, newLinkedList2)