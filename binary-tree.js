class Node {
    constructor(data, left=null,right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
let root_node = new Node(5); 
// Left root
root_node.left = new Node(3);
root_node.left.left = new Node(2);
root_node.left.right = new Node(4);
// Right root
root_node.right = new Node(7);
root_node.right.left = new Node(6);
root_node.right.right = new Node(8);
// Observing the tree
console.log(root_node);
// Preorder - console.log first
// inorder - small to big, left, data,right. 
// post order - after console.log. from the endges to the root. good for removing trees
