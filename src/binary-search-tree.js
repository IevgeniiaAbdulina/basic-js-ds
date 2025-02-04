const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      const insertNode = (node = this.rootNode) => {
        if (data < node.data && node.left) {
          insertNode(node.left);

        } else if (data < node.data) {
          node.left = new Node(data);

        } else if (data > node.data && node.right) {
          insertNode(node.right);

        } else if (data > node.data) {
          node.right = new Node(data);
        }
      };
      insertNode();
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let node = this.rootNode;

    while (true) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        return node;
      }
      if (data < node.data) {
        node = node.left
      } else {
        node = node.right;
      }
    }
  }

  remove(data) {
    if (this.rootNode === null) {
      return null;
    } else {
      let node = this.rootNode;

      // it recurs over the tree to find and removes the data
      const removeNode = (node, data) => {
        // if data is less than roots data then move to left subtree
        if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;

          // if data is greater than roots data then move to right subtree
        } else if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;

          // if data is similar to the roots data
          // then delete this node
        } else {
          // deleting node with no children
          if (node.left === null && node.right === null) {
            node = null;
            return node;
          }

          // deleting node with one child
          if (node.left === null) {
            node = node.right;
            return node;
          } else if (node.right === null) {
            node = node.left;
            return node;
          }

          // Deleting node with two children
          const minNode = this.findMinNode(node.right);
          node.data = minNode.data;

          node.right = removeNode(node.right, minNode.data);
          return node;
        }
      }
      return removeNode(node, data);
    }
  }

  min() {
    const node = this.findMinNode(this.rootNode)
    return !node ? null : node.data;
  }

  max() {
    const findMaxNode = (node) => {
      if (node === null) {
        return null;
      }
      if (node.right === null) {
        return node.data;
      }
      return findMaxNode(node.right);
    }
    return findMaxNode(this.rootNode);
  }

  findMinNode(node) {
    if (node === null) {
      return null;
    }
    if (node.left === null) {
      return node;
    }
    return this.findMinNode(node.left);
  }
}

module.exports = {
  BinarySearchTree
};
