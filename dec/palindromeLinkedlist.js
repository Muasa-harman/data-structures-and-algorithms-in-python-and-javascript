// Given the head of a singly linked list , return true if it is a palindrome or false otherwise
// E.g1
// Input: head = [1,2,2,1]
// Output:true

// E.g2
// Input: head = [1,2]
// Output:false

// Explanation:
// Find the Middle of the List:

// Use the slow and fast pointer technique to find the middle of the linked list.
// Reverse the Second Half:

// Reverse the portion of the list starting from the middle node to the end.
// Compare Both Halves:

// Compare the values of the nodes from the start of the list and the reversed second half.
// If any values differ, return false. Otherwise, return true.
// Complexity:
// Time Complexity:
// 𝑂(𝑛)O(n), where
// 𝑛
// n is the number of nodes in the linked list.
// Traversing the list to find the middle, reversing the second half, and comparing the two halves all take linear time.
// Space Complexity:
// 𝑂(1)O(1), as no additional space is used other than pointers.

function palindromeLinkedList(head) {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head;
  // find middle of the linked list
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half of the linked list
  let reversedSecondHalf = reversedLinkedList(slow);

  // compare the first and the reversed second half
  let firstHalf = head;
  while (reversedSecondHalf !== null) {
    if (firstHalf.val !== reversedSecondHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    reversedSecondHalf = reversedSecondHalf.next;
  }
  return true;
}

// helper function the reverse a linked list
function reversedLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}
// function to convert a linked linked to ana array
function createLinkedList(arr) {
  let dummy = { val: 0, next: null };
  let current = dummy;

  for (let value of arr) {
    current.next = { val: value, next: null };
    current = current.next;
  }
  return dummy.next;
}

// Test cases
let head1 = createLinkedList([1, 2, 2, 1]);
console.log(palindromeLinkedList(head1)); // Output: true

let head2 = createLinkedList([1, 2]);
console.log(palindromeLinkedList(head2)); // Output: false
