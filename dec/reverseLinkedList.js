// Given the head of a singly linked list,reverse the list and return the reversed list
// E.g1
// Input:head = [1,2,3,4,5]
// Output:[5,4,3,2,1]

// E.g2
// Input: head = [1,2,3,4,5]
// Output:[5,4,3,2,1]

// E.g3
// Input:head = []
// Output:[]

// Explanation:
// Pointer Reversal:

// Start with a prev pointer as null and a current pointer at the head of the list.
// Iteratively reverse the current.next pointer to point to prev.
// Move the prev and current pointers forward.
// Return the New Head:

// Once the loop finishes, prev will point to the new head of the reversed list.

// Complexity:
// Time Complexity:
// 𝑂(𝑛)O(n), where
// 𝑛
// n is the number of nodes in the linked list. Each node is visited once.
// Space Complexity:
// 𝑂(1)O(1), as no extra space is used.

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next; // Temporarily store the next node
    current.next = prev; // Reverse the current node's pointer
    prev = current; // Move the `prev` pointer forward
    current = nextNode; // Move the `current` pointer forward
  }
  return prev; // `prev` is now the new head of the reversed list
}

// Helper function to create a linked list fom an array
function createLinkedList(arr) {
  let dummy = { val: 0, next: null };
  let current = dummy;

  for (let value of arr) {
    current.next = { val: value, next: null };
    current = current.next;
  }

  return dummy.next;
}

// helper function to convert linked list to an array (for testing output)
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
let reversed1 = reverseLinkedList(head1);
console.log(linkedListToArray(reversed1)); // Output: [5, 4, 3, 2, 1]

let head2 = createLinkedList([]);
let reversed2 = reverseLinkedList(head2);
console.log(linkedListToArray(reversed2)); // Output: []

let head3 = createLinkedList([1]);
let reversed3 = reverseLinkedList(head3);
console.log(linkedListToArray(reversed3)); // Output: [1]
