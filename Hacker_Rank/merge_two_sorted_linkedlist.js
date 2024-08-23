// Given pointers to the heads of two sorted linked lists,merge them into a single,sorted linked list. Either
// head  pointer may be null meaning that the corresponding list is empty.Either

// Example:
// headA refers to 1 -> 3 -> 7 -> null
// headB refers to 1 -> 2 -> null

// The new list is 1 -> 1 -> 2 -> 3 -> 7 -> null

// Function Description

// Complete the ,mergeList function in the editor below.

// mergeList has the following parameters:
//  . SinglyLinkedListNode pointer headerA: a reference to the head of a list
//  . SinglyLinkedListNode pointer headB: a reference to the head of a list

//  Returns
//   . SinglyLinkedListNode pointer: a reference to the head of the merged list

// //   Input Format
// The first line contains an integer t . the number of test cases.
// The format for each test case is as follows:
// The firs line contains an integer n, the length of the first linked list.
// The next line contains an integer m, the length of the second linked list.
// The next m lines contain an integer each, the element of the second linked list.

// Constraints
// 1 <= t <= 10
// 1 <= n,m <= 1000
// 1 <= list[i]<=1000. where list[i]is the ith element of the list.

// Sample input
// 13123234

// Sample Output
// 12334

function mergeLists(head1, head2) {
  linkedList = [];
}

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeLists(head1, head2) {
  // Create a dummy node to form the base of the new merged list
  let dummy = new SinglyLinkedListNode(0);
  let tail = dummy;

  // Traverse both lists and append the smaller value to the merged list
  while (head1 !== null && head2 !== null) {
    if (head1.data <= head2.data) {
      tail.next = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      head2 = head2.next;
    }
    tail = tail.next;
  }

  // If there are remaining nodes in either list, append them to the merged list
  if (head1 !== null) {
    tail.next = head1;
  }
  if (head2 !== null) {
    tail.next = head2;
  }

  // Return the next node of dummy, which is the actual head of the merged list
  return dummy.next;
}

// Function to print the linked list
function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.data);
    head = head.next;
  }
  console.log(result.join(" -> ") + " -> null");
}

// Example usage:
// List A: 1 -> 3 -> 7 -> null
// List B: 1 -> 2 -> null
let headA = new SinglyLinkedListNode(1);
headA.next = new SinglyLinkedListNode(3);
headA.next.next = new SinglyLinkedListNode(7);

let headB = new SinglyLinkedListNode(1);
headB.next = new SinglyLinkedListNode(2);

// Merging the lists
let merged_head = mergeLists(headA, headB);

// Print the merged list
printList(merged_head);

// class SinglyLinkedListNode:
//     def __init__(self, data):
//         self.data = data
//         self.next = None

// def mergeLists(head1, head2):
//     # Create a dummy node to form the base of the new merged list
//     dummy = SinglyLinkedListNode(0)
//     tail = dummy

//     # Traverse both lists and append the smaller value to the merged list
//     while head1 and head2:
//         if head1.data <= head2.data:
//             tail.next = head1
//             head1 = head1.next
//         else:
//             tail.next = head2
//             head2 = head2.next
//         tail = tail.next

//     # If there are remaining nodes in either list, append them to the merged list
//     if head1:
//         tail.next = head1
//     if head2:
//         tail.next = head2

//     # Return the next node of dummy, which is the actual head of the merged list
//     return dummy.next

// # Function to print the linked list
// def printList(head):
//     while head:
//         print(head.data, end=" -> ")
//         head = head.next
//     print("null")

// # Example usage:
// # List A: 1 -> 3 -> 7 -> null
// # List B: 1 -> 2 -> null
// headA = SinglyLinkedListNode(1)
// headA.next = SinglyLinkedListNode(3)
// headA.next.next = SinglyLinkedListNode(7)

// headB = SinglyLinkedListNode(1)
// headB.next = SinglyLinkedListNode(2)

// # Merging the lists
// merged_head = mergeLists(headA, headB)

// # Print the merged list
// printList(merged_head)
