// Given the head of singly linked listen,return the middle node of the linked list.
// If there are two middle node, return the second middle node.

// E.g1
// Input: head = [1,2,3,4,5]
// Output:[3,4,5]

// E.g2
// Input: head = [1,2,3,4,5,6]
// Output:[4,5,6]

// Explanation:
// The function uses two pointers:
// Slow pointer (slow) moves one step at a time.
// Fast pointer (fast) moves two steps at a time.

// When fast reaches the end of the list, slow will be at the middle.
// The function returns the slow pointer, which points to the middle node.

// Complexity:
// Time complexity:
// 𝑂(𝑛)O(n), where
// 𝑛
// n is the number of nodes in the linked list.
// Space complexity:
// 𝑂(1)O(1), as no additional space is used.

function middleLinkedList(head) {
  let slow = head;
  let fast = head;
  // move fast pointer twice as fast as slow pointer
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // slow now points to the middle node
  return slow;
}

// helper function to create a linked list from the array
function createLinkedList(arr) {
  let dummy = { val: 0, next: null };
  let current = dummy;

  for (let value of arr) {
    current.next = { val: value, next: null };
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert linked list to an array(for testing output)
function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test cases
let head1 = createLinkedList([1, 2, 3, 4, 5]);
let middle1 = middleLinkedList(head1);
console.log(linkedListToArray(middle1)); // Output: [3, 4, 5]

let head2 = createLinkedList([1, 2, 3, 4, 5, 6]);
let middle2 = middleLinkedList(head2);
console.log(linkedListToArray(middle2)); // Output: [4, 5, 6]
