//I didnot did this on my own i take help from someone's 
//github document

//Task 9

class Node1 {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function transversalFun(node) {
    if(node !== null) {
        transversalFun(node.left);
        console.log(node.value);
        transversalFun(node.right);
    }
}

const root = new Node1(1);
root.left = new Node1(2);
root.right = new Node1(3);
root.left.left = new Node1(4);
root.left.right = new Node1(5);

console.log(root);

transversalFun(root);

class Node {
    // Constructor to create a new node with a given value
    constructor(value) {
        // The value of the node
        this.value = value;
        // The left child of the node
        this.left = null;
        // The right child of the node
        this.right = null;
    }
}

// Function to calculate the depth of a binary tree
function calculateDepth(node) {
    // Base case - if the node is null, return 0
    if (node === null) {
        return 0;
    }

    // Recursive case - calculate the depth of the left and right subtrees
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    // Return the maximum depth of the left and right subtrees, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}

// Create a binary tree
const Root = new Node(1);
// Add child nodes
Root.left = new Node(2);
Root.right = new Node(3);
Root.left.left = new Node(4);
Root.left.right = new Node(5);
Root.right.left = new Node(6);

// Calculate the depth of the binary tree
console.log("Depth of the binary tree:");
console.log(calculateDepth(root)); // 3

console.log(root);

