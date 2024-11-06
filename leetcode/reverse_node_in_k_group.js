// Given the head of a linked lists, reverse the node of the list k at a time,
//  and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list.
//  If the number of nodes is not a multiple of k then left-out nodes, in the end should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseKGroup(head, k) {
  // Helper function to reverse k nodes in the linked list
  function reverseLinkedList(head, k) {
    let prev = null;
    let curr = head;
    while (k > 0) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      k--;
    }
    return prev; // New head after reversing
  }

  // Count the number of nodes in the list
  let count = 0;
  let node = head;
  while (node !== null) {
    count++;
    node = node.next;
  }

  // Initialize dummy node
  let dummy = new ListNode(0);
  dummy.next = head;

  // Pointers for reversing process
  let prev = dummy;
  let curr = head;

  while (count >= k) {
    // Reverse the next k nodes
    let tail = curr;
    let next = curr;
    for (let i = 0; i < k; i++) {
      next = next.next;
    }

    // Reverse the k nodes
    let newHead = reverseLinkedList(curr, k);
    prev.next = newHead;
    tail.next = next;

    // Move the pointers forward
    prev = tail;
    curr = next;
    count -= k;
  }

  return dummy.next;
}

// Example usage:

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print the linked list
function printLinkedList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

// Example 1:
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let k1 = 2;
let result1 = reverseKGroup(list1, k1);
printLinkedList(result1); // Output: 2 -> 1 -> 4 -> 3 -> 5

// Example 2:
let list2 = createLinkedList([1, 2, 3, 4, 5]);
let k2 = 3;
let result2 = reverseKGroup(list2, k2);
printLinkedList(result2); // Output: 3 -> 2 -> 1 -> 4 -> 5

// // Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// var reverseKGroup = function(head, k) {
//     // Helper function to reverse a part of the linked list
//     function reverseLinkedList(head, k) {
//         let prev = null;
//         let curr = head;
//         while (k > 0) {
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//             k--;
//         }
//         return prev;
//     }

//     // Count the number of nodes in the list
//     let count = 0;
//     let node = head;
//     while (node !== null) {
//         count++;
//         node = node.next;
//     }

//     // Initialize dummy node
//     let dummy = new ListNode(0);
//     dummy.next = head;

//     // Pointers for the reversing process
//     let prev = dummy;
//     let curr = head;

//     while (count >= k) {
//         // Reverse the next k nodes
//         let tail = curr;
//         let next = curr;
//         for (let i = 0; i < k; i++) {
//             next = next.next;
//         }

//         // Reverse the k nodes
//         let newHead = reverseLinkedList(curr, k);
//         prev.next = newHead;
//         tail.next = next;

//         // Move the pointers forward
//         prev = tail;
//         curr = next;
//         count -= k;
//     }

//     return dummy.next;
// };

// // Example usage:
// let list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// let k1 = 2;
// let result1 = reverseKGroup(list1, k1);
// while (result1 !== null) {
//     console.log(result1.val);  // Output: 2, 1, 4, 3, 5
//     result1 = result1.next;
// }

// let list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// let k2 = 3;
// let result2 = reverseKGroup(list2, k2);
// while (result2 !== null) {
//     console.log(result2.val);  // Output: 3, 2, 1, 4, 5
//     result2 = result2.next;
// }
