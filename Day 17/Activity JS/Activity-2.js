//Task 3

class Stack {

    constructor() {
        this.head = [];
    }

    displayData() {
        console.log(this.head);
    }

    push(data) {
        if(!this.head[0]) {
            this.head[0] = data;
        }
        else if (this.head) {
            let index = 0;//finding the last index
            for (let i = 0; i < this.head.length; i++) {
                index = i+1 ;
            }
            this.head[index] = data    
        }
    }

    pop() {
        if(this.head != []) {
            if(this.head.length == 1){
                console.log(this.head[0]);
                this.head = [];
            }
            else if(this.head.length > 1){
                let newArray = [];
                let lastIndex = 0
                for(let i = 0; i < (this.head.length - 1); i++) {
                    newArray[i] = this.head[i];
                    lastIndex = i;
               }
    
                //console.log(`Last Data is: ${this.head[lastIndex + 1]}`);
                console.log(this.head[lastIndex + 1]);
                this.head = newArray;
            }

        }
    }

    reverseString() {
        while(this.head[0]){
            this.pop();
        }
    }


}

const stack = new Stack();

stack.push("s");
stack.push("u");
stack.push("b");
stack.push("h");
stack.push("a");
stack.push("m")

stack.displayData();

stack.reverseString();

