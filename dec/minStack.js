// Design a stack that supports push, pop,top and retrieving the minimum element in constant time.
// Implement the ministack class:

// Minstack() initializes the stack object.
// void push(int val) pushes the element val onto the stack
// void pop() removes the element on the top of stack
// int top() gets the top element of the stack
// int getMin() retrieve the minimum element in the stack

// You must implement a solution with 0(1) time complexity for each function.

// E.g1
// Input: ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[1],[-2],[0],[-3],[],[],[]]
// Output:[null,null,null,null,-3,null,0,-2]

class MinStack {
  constructor() {
    this.stack = []; // Regular stack to store all elements
    this.minStack = []; // Auxiliary stack to store minimum elements
  }

  // Pushes the element onto the stack
  push(val) {
    this.stack.push(val);
    // If the minStack is empty or the new value is smaller than or equal to the current minimum, push it onto the minStack
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  // Removes the element on the top of the stack
  pop() {
    if (this.stack.length === 0) return;
    const popped = this.stack.pop();
    // If the popped value is the current minimum, pop it from the minStack as well
    if (popped === this.getMin()) {
      this.minStack.pop();
    }
  }

  // Gets the top element of the stack
  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  // Retrieves the minimum element in the stack
  getMin() {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
  }
}

// Example usage
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top()); // Output: 0
console.log(minStack.getMin()); // Output: -2
