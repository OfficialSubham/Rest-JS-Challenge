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
        let node = new TreeNode(value)
        this.mainAddFun(node, this.stem)

    }

    mainAddFun(node, branch = null) {
        let root = branch;
        if(root == null) {
            this.stem = node;
        }
        else{
            this.loopFunction(root, node)
        }

    }

    loopFunction(root, node) {
        if(root.leftBranch == null && root.rightBranch == null) {
            root.leftBranch = node;

        }
        else if(root.leftBranch != null && root.rightBranch == null) {
            root.rightBranch = node;

        }
        else if (root.leftBranch != null && root.rightBranch != null) {
            if (root.value > node.value) {
                this.mainAddFun(node, root.rightBranch)
            }
            else{
                this.mainAddFun(node, root.leftBranch);
            }
        }
    }

    inOrderDisplay() {
        let node = this.stem;
        this.display(node);
    }

    display(node) {
        if(node) {
            this.display(node.leftBranch);
            console.log(node.value)
            this.display(node.rightBranch)
        }
    }

}

const tree = new BinaryTree();

tree.insertValue(12);
tree.insertValue(34);
tree.insertValue(10);
tree.insertValue(11);
tree.insertValue(13);
tree.insertValue(33);
tree.insertValue(35);
tree.insertValue(9);

console.log(tree);

tree.inOrderDisplay();