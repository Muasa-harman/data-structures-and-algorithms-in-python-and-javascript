// On a 2D plane ,there are n points with integer coordinate points[i] = (x,y).
// Return the minimum time in seconds to visit all the points in order given by points:
// You can move according to this rules:

// In one second you can either move vertically by one unit
// move horiontally by one unit
// move horiontally by one one unit or
// move diagonally by one units (in other words, move one unit vertically than one unit horiontally in 1 second)
// You have to visit the points in the same order as they appear in the array
// You are allowed to pass through points that appear rather than in the order but those do not count as visits

// E.g1
//  Input: points = [[1,1],[3,4],[-1,0]]
//  Output:

// E.g2
// Input: points = [[3,2],[-2,2]]
// Output:5

function minTimeToVisitAllPoints(points) {
  let time = 0;
  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];

    // calculate the time to move from point[i-1] to point[i]
    time += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
  }
  return time;
}

// Example Usage:
console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
); // Output: 7
console.log(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2],
  ])
); // Output: 5

// Explanation of the Code:
// Iterate Through Points:

// We loop through the array points starting from the second point,
//  calculating the time required to move from the previous point to the current point.
// Calculate Time Between Points:

// For each pair of consecutive points,
// compute the time to move from the previous point to the current point using the formula
// max(abs(𝑥2−𝑥1),abs(𝑦2−𝑦1))max(abs(x 2 −x 1 ),abs(y 2−y 1)).
// Return Total Time:
// The time variable accumulates the total time required to visit all the points in the array.

// Time Complexity:
// O(n): We iterate through the list of points once,
//  and each iteration involves a constant time operation (calculating absolute differences and maximum).
// Space Complexity:
// O(1): We only use a few variables to store intermediate values, so the space complexity is constant.
// This solution efficiently computes the minimum time to visit all points in the given order while adhering to the movement rules.
