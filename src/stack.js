const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return 0;
    } else {
      return this.elements.pop();
    }
  }

  peek() {
    if (this.isEmpty()) {
      return 0;
    } else {
      return this.elements[this.elementsSize() - 1];
    }
  }

  isEmpty() {
    return this.elementsSize() === 0;
  }

  elementsSize() {
    return this.elements.length;
  }
}

module.exports = {
  Stack
};
