// Day 6

// Jess loves cookies and wants the sweetness of some cookies to be greater than value K . To do this,
//  two cookies with the least sweetness are repeatedly mixed. This creates a special combined cookie with:
//  sweetness = (1x Least sweet cookie + 2x 2nd least sweet cookie).
// This occurs until the cookies have a sweetness => K.

const { sanitizeFilter } = require("mongoose");

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
