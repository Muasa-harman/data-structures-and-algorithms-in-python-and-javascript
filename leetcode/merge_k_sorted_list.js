// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5], [1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//     1->4->5,
//     1->3->4,
//     2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6


// Example 2:
// Input: lists = []
// Output: []

// Example 3:

// Input: lists = [[]]
// Output: []


"hard"

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].val >= this.heap[parentIndex].val)
                 break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.val < element.val) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.val < element.val) ||
                    (swap !== null && rightChild.val < leftChild.val)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;

    const minHeap = new MinHeap();

    for (const list of lists) {
        if (list !== null) {
            minHeap.insert(list);
        }
    }

    const dummy = new ListNode();
    let current = dummy;

    while (!minHeap.isEmpty()) {
        const smallestNode = minHeap.extractMin();
        current.next = smallestNode;
        current = current.next;

        if (smallestNode.next !== null) {
            minHeap.insert(smallestNode.next);
        }
    }

    return dummy.next;
}

// Helper function to convert an array to a linked list
function arrayToList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Example usage:
const lists = [
    arrayToList([1, 4, 5]),
    arrayToList([1, 3, 4]),
    arrayToList([2, 6])
];

const mergedList = mergeKLists(lists);

// Helper function to print the linked list
function printList(list) {
    const result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    console.log(result.join('->'));
}

printList(mergedList);  // Output: 1->1->2->3->4->4->5->6



// To merge k sorted linked lists into one sorted linked list, we can use a min-heap (or priority queue). The min-heap helps us efficiently get the smallest element among the heads of the k linked lists, ensuring that we always append the smallest available element to the merged list.

// Here’s a step-by-step approach to solve this problem:

// Initialize a Min-Heap:

// The min-heap will store the nodes of the linked lists. The heap is sorted by the node values.
// Push Initial Nodes:

// Push the head of each linked list into the heap.
// Build the Merged List:

// Pop the smallest node from the heap, add it to the merged list, and push the next node of the popped node into the heap (if it exists).
// Repeat until the heap is empty.
// Return the Merged List:

// The nodes are linked together to form the merged sorted linked list.




// Explanation:
// ListNode Class:

// Defines the structure of a linked list node with val and next properties.
// mergeKLists Function:

// Initializes a min-heap.
// Pushes the head of each non-null linked list into the heap.
// Uses a dummy head to build the merged list.
// Continuously pops the smallest element from the heap and appends it to the merged list, pushing the next node of the popped element into the heap until the heap is empty.
// Helper Functions:

// arrayToList converts an array to a linked list for easier testing.
// printList prints the linked list in a readable format.
// This approach ensures that we efficiently merge k sorted linked lists with a time complexity of 
// 𝑂(𝑁log𝑘)O(Nlogk), where 𝑁N is the total number of nodes across all linked lists, and 𝑘k is the number of linked lists.