// A queue is an abstract datatype that maintains the order in which elements were added to it, allowing the oldest
// elements to be removed from the front and a new element to be added to the rear.
// A basic queue has the following operations:
//  . Enqueue - add a new element to the end of the queue
//  . Dequeue - remove element from the front of the queue and return it.A

//  In this challenge, you must implement a queue using two stack. Then process q queries, where each query is one of the
//  following 3 types:
//  1. 1 x: Enqueue element x into the end of the queue.
//  2. 2: Dequeue the elements from the front of the queue
//  3. 3: Print the elements at the front of the queue

// //  Input Format
// The first line contains single integer. q denoting number of queries.
// Each line i of the q subsequent lines contains a single query in the form described in the problem statement above
// All  3 queries start with an integer denoting the query type but only query 1 is followed by an additional space-separated
// value. x denoting the value to be enqueued.

function processData(input) {
  const commands = input.split("\n");
  const stack1 = [];
  const stack2 = [];

  for (let i = 1; i < commands.length; i++) {
    const command = commands[i].split(" ");

    if (command[0] === "1") {
      // Enqueue: Push element to stack1
      stack1.push(parseInt(command[1]));
    } else if (command[0] === "2") {
      // Dequeue: If stack2 is empty, move elements from stack1 to stack2
      if (stack2.length === 0) {
        while (stack1.length > 0) {
          stack2.push(stack1.pop());
        }
      }
      // Pop the top element from stack2
      stack2.pop();
    } else if (command[0] === "3") {
      // Print the front element
      if (stack2.length === 0) {
        // If stack2 is empty, the front is at the bottom of stack1
        while (stack1.length > 0) {
          stack2.push(stack1.pop());
        }
      }
      console.log(stack2[stack2.length - 1]);
    }
  }
}

// Sample Input
const input = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`;

processData(input);

// 1 42: Enqueue 42 -> stack1: [42]
// 2: Dequeue -> move stack1 to stack2 -> stack2: [42], then pop -> stack2: []
// 1 14: Enqueue 14 -> stack1: [14]
// 3: Print -> move stack1 to stack2 -> stack2: [14], print 14
// 1 28: Enqueue 28 -> stack1: [28]
// 3: Print -> stack2 has 14 -> print 14
// 1 60: Enqueue 60 -> stack1: [28, 60]
// 1 78: Enqueue 78 -> stack1: [28, 60, 78]
// 2: Dequeue -> pop from stack2 -> stack2: []
// 2: Dequeue -> move stack1 to stack2 -> stack2: [78, 60, 28], pop 28
