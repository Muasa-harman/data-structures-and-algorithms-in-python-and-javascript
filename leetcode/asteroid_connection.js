// 735. Asteroid Collision
// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction
//  (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode.
//  If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// // Example 1:
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.

// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5
// collide resulting in 10.

// Constraints:

// 2 <= asteroids.length <= 10^4
// -1000 <= asteroids[i] <= 1000
// asteroids[i] != 0

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let asteroid of asteroids) {
    // we need a flag to check if the asteroid should be added to added to the stack
    let alive = true;

    while (
      alive &&
      stack.length &&
      stack[stack.length - 1] > 0 &&
      asteroid < 0
    ) {
      let top = stack.pop();
      if (Math.abs(top) === Math.abs(asteroid)) {
        // Stack's asteroid wins, re-add it and don't add the current one
        stack.push(top);
        alive = false;
      } else if (Math.abs(top) > Math.abs(asteroid)) {
        // Stack's asteroid wins, re-add it and don't add the current one
        stack.push(top);
        alive = false;
      }
      // Otherwise, continue loop and compare with next stack top
    }
    if (alive) {
      stack.push(asteroid);
    }
  }

  return stack;
};
// Example usage:
console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
console.log(asteroidCollision([8, -8])); // Output: []
console.log(asteroidCollision([10, 2, -5])); // Output: [10]
//

// Explanation
// Stack: Used to keep track of asteroids that are still in motion after potential collisions.
// Handling Collisions:
// We pop asteroids from the stack if they collide with a larger asteroid moving in the opposite direction.
// If asteroids are of the same size, both are removed.
// The loop ensures that multiple collisions can be handled in a single pass.
// This algorithm efficiently handles the problem with a time complexity of
// 𝑂
// (
// 𝑛
// )
// O(n), where
// 𝑛
// n is the number of asteroids, as each asteroid is processed at most twice (once when pushed onto the stack and once potentially when popped off).

// To solve the asteroid collision problem, we can use a stack data structure to efficiently manage the collisions:

// Stack Initialization: Start with an empty stack.

// Iterate Through the Asteroids:

// If the current asteroid is moving right (positive value) or the stack is empty, simply push it onto the stack.
// If the current asteroid is moving left (negative value), check the top of the stack:
// If the top of the stack is a right-moving asteroid, check the sizes:
// If they are of equal size, both explode.
// If the stack's asteroid is smaller, it explodes, and we continue checking the next top.
// If the stack's asteroid is larger, the current asteroid explodes.
// If the stack's asteroid is also left-moving or the stack becomes empty, push the current asteroid onto the stack.
// Result: After processing all asteroids, the remaining asteroids in the stack are the ones that survived.

// // python
// def asteroidCollision(asteroids):
//     stack = []

//     for asteroid in asteroids:
//         while stack and asteroid < 0 < stack[-1]:
//             top = stack[-1]
//             if top + asteroid == 0:
//                 stack.pop()
//                 break
//             elif top + asteroid < 0:
//                 stack.pop()
//                 continue
//             elif top + asteroid > 0:
//                 break
//         else:
//             stack.append(asteroid)

//     return stack

// # Sample Inputs
// print(asteroidCollision([5, 10, -5]))  # Output: [5, 10]
// print(asteroidCollision([8, -8]))      # Output: []
// print(asteroidCollision([10, 2, -5]))  # Output: [10]

// The function asteroidCollision takes a list of integers asteroids as an argument.
// We initialize an empty list stack to keep track of the asteroids that survive collisions.
// We iterate through each asteroid in the input list:
// If the stack is not empty and the current asteroid is moving left (asteroid < 0) while the top of the stack is moving right (stack[-1] > 0), a collision might occur.
// We compare the sizes of the colliding asteroids (top and asteroid):
// If they are of equal size (top + asteroid == 0), both asteroids are destroyed.
// If the incoming asteroid is larger (top + asteroid < 0), the top of the stack is destroyed.
// If the incoming asteroid is smaller (top + asteroid > 0), the incoming asteroid is destroyed.
// If there is no collision, the current asteroid is added to the stack.
// The function returns the stack, representing the state of the asteroids after all collisions.

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let asteroid of asteroids) {
    let alive = true; // Flag to check if the current asteroid should be added to the stack

    while (
      alive &&
      stack.length &&
      stack[stack.length - 1] > 0 &&
      asteroid < 0
    ) {
      let top = stack.pop();
      if (Math.abs(top) === Math.abs(asteroid)) {
        // Both asteroids explode
        alive = false;
      } else if (Math.abs(top) > Math.abs(asteroid)) {
        // The asteroid in the stack is larger, it survives
        stack.push(top);
        alive = false;
      }
      // Otherwise, continue checking the next asteroid in the stack
    }

    if (alive) {
      stack.push(asteroid);
    }
  }

  return stack;
};

// Example usage:
console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
console.log(asteroidCollision([8, -8])); // Output: []
console.log(asteroidCollision([10, 2, -5])); // Output: [10]
