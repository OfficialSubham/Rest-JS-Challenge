//Task 6

class Items {
    item = 0;
    itemArray = [];

    constructor() {}

    addItem(item) {
        this.itemArray.push(item);
        this.item++;
    }
    removeItem() {
        if(this.item <= 0) {
            console.log("There is no item in the cart");
        }
        else{
            item--;
            this.item[0].remove();
        }
    }
    display() {
        console.log(`Total Items ${this.item}, Items ${this.itemArray}`);
    }
}

const item1 = new Items()

item1.addItem("Item 1")
item1.addItem("Item 2")
item1.display()