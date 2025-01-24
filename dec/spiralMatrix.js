// Given an m * n matrix, return all elements of the matrix in spiral order
// E.g1:
// 1->2->3->6->9->8->7->4->5

// E.g2:
// 1->2->3->4->8->12->11->10->9->5->6->7
"medium";

// function spiralOrder(matrix) {
//   const result = [];
//   if (matrix.length === 0) return result;

//   let top = 0,
//     bottom = matrix.length - 1;
//   let left = 0,
//     right = matrix[0].length - 1;

//   while (top <= bottom && left <= right) {
//     // Traverse from left to right along the top row
//     for (let i = left; i <= right; i++) {
//       result.push(matrix[top][i]);
//     }
//     top++; //move the top boundary down

//     // Traverse from top to bottom along the right column
//     for (let i = top; i <= bottom; i++) {
//       result.push(matrix[i][right]);
//     }
//     right--;
//     if (top <= bottom) {
//       // Traverse from right to left along the bottom row
//       for (let i = right; i >= left; i--) {
//         result.push(matrix[bottom][i]);
//       }
//       bottom--; //move the bottom boundary up
//     }
//     if (left <= right) {
//       // Traverse from bottom to top along the left column
//       for (let i = bottom; i >= top; i--) {
//         result.push(matrix[i][left]);
//       }
//       left++; //Movr the left boundary right
//     }
//   }
//   return result;
// }

// // Example Usage:
// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// console.log(
//   spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//   ])
// );
// // Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
function spiralOrder(matrix) {
  const result = [];
  while (matrix.length > 0) {
    // Step 1: Remove and append the first row (left to right)
    result.push(...matrix.shift());

    // Step 2: Remove and append the last column (top to bottom)
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].length > 0) {
        result.push(matrix[i].pop());
      }
    }

    // Step 3: Remove and append the last row (right to left)
    if (matrix.length > 0) {
      result.push(...matrix.pop().reverse());
    }

    // Step 4: Remove and append the first column (bottom to top)
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length > 0) {
        result.push(matrix[i].shift());
      }
    }
  }

  return result;
}

// Example Usage:
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
// Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
