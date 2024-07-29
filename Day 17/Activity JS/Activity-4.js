//Task 7 && Task 8 Combined

class TreeNode {
    constructor(value, left = null, right = null) {
        this.leftBranch = left;
        this.value = value;
        this.rightBranch = right;
    }

}

class BinaryTree {
    constructor() {
        this.stem = null;

    }

    insertValue(value) {
        this.stem = new TreeNode(value, this.stem, this.stem)
    }
}

const tree = new BinaryTree();

tree.insertValue(12);
tree.insertValue(34);
console.log(tree);