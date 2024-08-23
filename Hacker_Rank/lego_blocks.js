// Day 6
// You have an infinite number of 4 types of lego blocks of sizes given as (depth x height x width):

// d       h       w
// 1
// 2
// 3
// 4
// 1        1
// 1
// 1
// 1
// 1
// 1
// 1

// Using those blocks, you want to make a wall of height n and width m .
//  Feature of the wall are:

// - The wall should not have any holes in it
// - The wall you build should be one solid structure, so there should not be
//  a straight vertical break across all rows of bricks
// The bricks must be laid horizontally.
// How many ways can the wall be build ?

// Example
n = 2;
m = 3;
// The height is 2 and the width is 3. Here are some configurations:
// NB There are 9 valid permutations in all
//  Function Description
// Complete the legoBlocks function in the editor below.

// legoBlock has the following parameter(s):
// int n: the height of the wall
// int m: the width of the wall
// Returns
// -int: the number of valid wall formations modulo(10^9 + 7)

// Input Format
// The first line contains the numbers of test cases t . Each of the next t lines
//  contains two space-separated integers n and m .

function readLine() {
  return inputString[currentLine++];
}
