//Activity 1

//Task 1 Add Two Numbers

//Creating the Node of the Linked List

class Node {
    data;
    next;
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

//Creating LinkedList

class LinkedList {
    constructor () {
        this.head = null
    }

    addData(data) {
        this.head = new Node(data, this.head)
    }
}
//Defining the two lists
const list1 = new LinkedList()
const list2 = new LinkedList()
//adding data to those list
list1.addData(2);
list2.addData(3);

console.log();

//making the function that takes 2 list
//and add them and create a new linked list

let addedList;

function addTwoList (firstList, secondList) {
    const result = Number(firstList.head.data) + Number(secondList.head.data);//adding the data of the two list
    addedList = new LinkedList()//defining the list 
    addedList.addData(result);//adding the result in it;
}

addTwoList(list1, list2)//using the function

console.log(addedList);//logging the list

