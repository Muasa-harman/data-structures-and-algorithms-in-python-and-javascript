// Direction
// Write a function that accepts an integer N
// and returns a NaN spiral matrix
// Eg
// matrix(2)
// [[1,2] [4,3]]
// matrix(3)
// [[1,2,3]]
// [8,9,4]
// [7,6,5]
// matrix(4)
// [[1,2,3,4],[12,13,13,5],[11,16,15,6],[10,9,8,7]]

function matrix(n) {
  // Initialize an empty N x N matrix filled with 0s
  let result = Array.from({ length: n }, () => Array(n).fill(0));

  let startRow = 0,
    endRow = n - 1;
  let startCol = 0,
    endCol = n - 1;
  let counter = 1;

  // Fill the matrix in a spiral order
  while (startRow <= endRow && startCol <= endCol) {
    // Fill the top row (left to right)
    for (let col = startCol; col <= endCol; col++) {
      result[startRow][col] = counter++;
    }
    startRow++; // Move the top boundary down

    // Fill the right column (top to bottom)
    for (let row = startRow; row <= endRow; row++) {
      result[row][endCol] = counter++;
    }
    endCol--; // Move the right boundary left

    // Fill the bottom row (right to left)
    for (let col = endCol; col >= startCol; col--) {
      result[endRow][col] = counter++;
    }
    endRow--; // Move the bottom boundary up

    // Fill the left column (bottom to top)
    for (let row = endRow; row >= startRow; row--) {
      result[row][startCol] = counter++;
    }
    startCol++; // Move the left boundary right
  }

  return result;
}

// Example usage:
console.log(matrix(2));
// Output:
// [[1, 2],
//  [4, 3]]

console.log(matrix(3));
// Output:
// [[1, 2, 3],
//  [8, 9, 4],
//  [7, 6, 5]]

console.log(matrix(4));
// Output:
// [[ 1,  2,  3,  4],
//  [12, 13, 14,  5],
//  [11, 16, 15,  6],
//  [10,  9,  8,  7]]

console.log(matrix(4));

// // Python
// def matrix(N):
//     # Initialize an empty N x N matrix filled with 0s
//     result = [[0] * N for _ in range(N)]

//     start_row, end_row = 0, N - 1
//     start_col, end_col = 0, N - 1
//     counter = 1

//     # Fill the matrix in a spiral order
//     while start_row <= end_row and start_col <= end_col:
//         # Fill the top row (left to right)
//         for col in range(start_col, end_col + 1):
//             result[start_row][col] = counter
//             counter += 1
//         start_row += 1  # Move the top boundary down

//         # Fill the right column (top to bottom)
//         for row in range(start_row, end_row + 1):
//             result[row][end_col] = counter
//             counter += 1
//         end_col -= 1  # Move the right boundary left

//         # Fill the bottom row (right to left)
//         for col in range(end_col, start_col - 1, -1):
//             result[end_row][col] = counter
//             counter += 1
//         end_row -= 1  # Move the bottom boundary up

//         # Fill the left column (bottom to top)
//         for row in range(end_row, start_row - 1, -1):
//             result[row][start_col] = counter
//             counter += 1
//         start_col += 1  # Move the left boundary right

//     return result

// // # Example usage:
// print(matrix(2))
// // # Output:
// // # [[1, 2],
// #  [4, 3]]

// print(matrix(3))
// # Output:
// # [[1, 2, 3],
// #  [8, 9, 4],
// #  [7, 6, 5]]

// print(matrix(4))
// # Output:
// # [[ 1,  2,  3,  4],
// #  [12, 13, 14,  5],
// #  [11, 16, 15,  6],
// #  [10,  9,  8,  7]]

// Explanation:
// Matrix Initialization: The matrix is initialized as an N x N grid filled with zeros.
// Boundaries: Variables start_row, end_row, start_col, and end_col define the current boundaries of the spiral as we progress.
// Looping: The loop continues until the matrix is completely filled in a spiral order:
// The top row is filled from left to right.
// The right column is filled from top to bottom.
// The bottom row is filled from right to left.
// The left column is filled from bottom to top.
// Counter: The counter is used to keep track of the numbers to be filled in the matrix.
