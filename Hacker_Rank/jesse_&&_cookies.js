// Day 6

// Jess loves cookies and wants the sweetness of some cookies to be greater than value K . To do this,
//  two cookies with the least sweetness are repeatedly mixed. This creates a special combined cookie with:
//  sweetness = (1x Least sweet cookie + 2x 2nd least sweet cookie).
// This occurs until the cookies have a sweetness => K.

// Given the sweetness of a number of cookies. Determine the minimum number of operations required. If it is not possible,
// return -1.

// Example
// k = 9
// A = [2,7,3,6,4,6]

// The smallest values are 2,3.
// Remove them then return 2 + 2 * 3 = 8 to the array .
//  Now A = [8,7,6,4,6].
// Remove 4,6 and return 4 + 6 * 2 = 16 to the array. Now A = [16,8,7,6]. Remove 6,7 return 6 + 2 * 7 = 20 and
// A =  [20,16,8,7].
// Finally, remove 8,7 and return 7 + 2 * 8 = 23 to A . Now A = [23,20,16].
// All values are => k = 9 so the process stops after 4 iterations . Return 4

// Function Description

// Complete the cookies function in the editor below .
// cookies has the folowing parameters:
// - int K: the threshold value
// - int A[n]: an array of sweetness values

// Returns
// int: the number of iterations required or -1

// Input Format
// The first line has two space-separated integers. n and k .
//  the size of A[] and the minimum required integers.A[i]

function readLine() {
  return inputString[currentLine++];
}

// Min-heap helper class
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Insert an element into the heap
  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  // Remove and return the smallest element from the heap
  extractMin() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  // Heapify up to maintain the min-heap property
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Heapify down to maintain the min-heap property
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }
      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[index],
        ];
        index = smallest;
      } else {
        break;
      }
    }
  }

  // Get the size of the heap
  size() {
    return this.heap.length;
  }

  // Get the minimum element without removing it
  peek() {
    return this.heap[0];
  }
}

function cookies(K, A) {
  const heap = new MinHeap();
  let operations = 0;

  // Insert all sweetness values into the heap
  for (let sweetness of A) {
    heap.insert(sweetness);
  }

  // Combine cookies until the smallest one has sweetness >= K
  while (heap.size() > 1 && heap.peek() < K) {
    let leastSweet = heap.extractMin();
    let secondLeastSweet = heap.extractMin();
    let newCookie = leastSweet + 2 * secondLeastSweet;
    heap.insert(newCookie);
    operations++;
  }

  // Check if the final cookie satisfies the condition
  if (heap.peek() >= K) {
    return operations;
  } else {
    return -1;
  }
}

// Example usage:
let K = 9;
let A = [2, 7, 3, 6, 4, 6];
console.log(cookies(K, A)); // Output: 4
