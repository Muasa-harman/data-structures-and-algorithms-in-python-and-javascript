// Given an m * n 2D binary grid . grid which represents a map of "1"s(land) and "0"s (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjucent lands horintally or vertically.
//  You may assume all four edges of the grid are all surrounded by water.

// Input:grid=["1","1","1","1","0"],
// ["1","1","0","1","0"],
// ["1","1","0","0","0"],
// ["0","0","0","0","0"]
// Output:1

// // E.g2
// Input:grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","1","1"]
// ]
// Output:3

// Depth-First Search (DFS) or Breadth-First Search (BFS).
function numIslands(grid) {
  if (grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // Helper function for DFS
  const dfs = (r, c) => {
    // Base case: Out of bounds or water
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") {
      return;
    }
    // mark the current cell as visited
    grid[r][c] = "0";

    // Explore all 4 directions
    dfs(r + 1, c); //Down
    dfs(r - 1, c); //Up
    dfs(r, c + 1); //Right
    dfs(r, c, -1); //Left
  };
  // Main loop to traverse the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++; //Found a new island
        dfs(r, c); //Mark all connected lands as visited
      }
    }
  }
  return count;
}
// Example Usage:
console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
// Output: 1

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
// output:3
// Explanation:
// Grid Traversal:

// Loop through each cell in the grid.
// If a cell contains "1", it is the start of a new island.
// Depth-First Search (DFS):

// Use D/FS to mark all connected land cells ("1"s) as visited by changing them to "0".
// Explore the four possible directions (up, down, left, right).
// Count Islands:

// Each time DFS is initiated from a "1", it indicates a new island. Increment the count.
// Time Complexity:
// 𝑂(𝑚×𝑛)O(m×n):
// Every cell in the grid is visited once during the DFS.
// Space Complexity:
// 𝑂(𝑚×𝑛)O(m×n):
// In the worst case, the call stack for DFS can grow to the size of the grid if the entire grid is land.
