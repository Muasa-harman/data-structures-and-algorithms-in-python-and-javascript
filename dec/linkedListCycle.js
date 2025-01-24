// Given head, the head of a linked list, determines if the linked list has a cycle in it.
// There is a cycle in linked list if there is some node in the list that can be reached again by
//  continuously following the next pointer. Internally pos is used to denote the index of the node at the tail's next
// pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise return false.

// E.g1
// Input:head = [3,2,0,-4], pos = 1
// Output:true

// E.g2
// Input:head = [1,2], pos = 0
// Output:true

// E.g3
// Input:head = [1],pos = -1
// Output:false

function listHasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; //Move slow pointer by one step
    fast = fast.next.next; //move fast pointer by two steps

    if (slow === fast) {
      return true; // cycle detected
    }
  }
  return false; //No cycle
}

// Helper function to create a linked list with or without a cycle
function createLinkedListWithCylce(arr, pos) {
  let dummy = { val: 0, next: null };
  let current = dummy;
  let cycleNode = null;

  for (let i = 0; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
    if (i === pos) {
      cycleNode = current; //Save the node at the position where the cycle should start
    }
  }
  if (cycleNode) {
    current.next = cycleNode; //create the cycle
  }
  return dummy.next;
}

// Test cases
let head1 = createLinkedListWithCylce([3, 2, 0, -4], 1);
console.log(listHasCycle(head1)); // Output: true

let head2 = createLinkedListWithCylce([1, 2], 0);
console.log(listHasCycle(head2)); // Output: true

let head3 = createLinkedListWithCylce([1], -1);
console.log(listHasCycle(head3)); // Output: false

// Explanation:
// Fast and Slow Pointer Approach:

// A slow pointer moves one step at a time.
// A fast pointer moves two steps at a time.
// If there is a cycle, the fast pointer will eventually "lap" the slow pointer and they will meet at some point in the cycle.
// If there is no cycle, the fast pointer will reach the end of the list (null).

// Cycle Detection:
// If slow and fast pointers meet, it means there is a cycle.
// If the loop terminates with fast or fast.next as null, there is no cycle

// Complexity:
// Time Complexity:
// 𝑂(𝑛)O(n), where
// 𝑛
// n is the number of nodes in the linked list.
// Both pointers traverse the list at most once.
// Space Complexity:
// 𝑂(1)
// O(1), since no extra space is used.
