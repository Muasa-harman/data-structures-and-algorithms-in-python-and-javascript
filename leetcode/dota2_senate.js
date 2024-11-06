// Dota2 Senate
// In the world of Dota2, there are two parties: the Radiant and the Dire.

// The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on
// a change in the Dota2 game. The voting for this change is a round-based procedure. In each round,
// each senator can exercise one of the two rights:

// Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.

// Announce the victory: If this senator found the senators who still have rights to vote are all from the same party,
// he can announce the victory and decide on the change in the game.

// Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant
// party and the Dire party. Then if there are n senators, the size of the given string will be n.

// The round-based procedure starts from the first senator to the last senator in the given order.
//  This procedure will last until the end of voting. All the senators who have lost their rights
//   will be skipped during the procedure.

// Suppose every senator is smart enough and will play the best strategy for his own party.
//  Predict which party will finally announce the victory and change the Dota2 game.
//   The output should be "Radiant" or "Dire".

// Example 1:
// Input: senate = "RD"
// Output: "Radiant"
// Explanation:
// The first senator comes from Radiant and he can just ban the next senator's right in round 1.
// And the second senator can't exercise any rights anymore since his right has been banned.
// And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.

// Example 2:
// Input: senate = "RDD"
// Output: "Dire"
// Explanation:
// The first senator comes from Radiant and he can just ban the next senator's right in round 1.
// And the second senator can't exercise any rights anymore since his right has been banned.
// And the third senator comes from Dire and he can ban the first senator's right in round 1.
// And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.

// Constraints:
// . n == senate.length
// 1 <= n <= 10^4
// senate[i] is either 'R' or 'D'.

/**
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
  let radiant = [];
  let dire = [];

  // Fill in the queue with the initial indices of each party's senator
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }
  // Process the rounds
  while (radiant.length > 0 && dire.length > 0) {
    let rIndex = radiant.shift();
    let dIndex = dire.shift();

    if (rIndex < dIndex) {
      // Radiant bans dire,Radiant senator requeues with new index
      radiant.push(rIndex + senate.length);
    } else {
      // Dire bans Radiant,Dire senator requeues with new index
      dire.push(dIndex + senate.length);
    }
  }
  // The winner is determined by which queue is non-empty
  return radiant.length > 0 ? "Radiant" : "Dire";
}

// Example usages
console.log(predictPartyVictory("RD")); // Output: "Radiant"
console.log(predictPartyVictory("RDD")); // Output: "Dire"

/**
 * from collections import deque

def predictPartyVictory(senate):
    radiant = deque()
    dire = deque()
    
    # Populate the initial queues with indices of Radiant and Dire senators
    for i, s in enumerate(senate):
        if s == 'R':
            radiant.append(i)
        else:
            dire.append(i)
    
    n = len(senate)
    
    # Process the rounds
    while radiant and dire:
        r_index = radiant.popleft()
        d_index = dire.popleft()
        
        if r_index < d_index:
            radiant.append(r_index + n)
        else:
            dire.append(d_index + n)
    
    # Determine the winner
    return "Radiant" if radiant else "Dire"

# Sample Inputs
print(predictPartyVictory("RD"))    # Output: "Radiant"
print(predictPartyVictory("RDD"))   # Output: "Dire"
print(predictPartyVictory("RDDR"))  # Output: "Radiant"
**/

var predictPartyVictory = function (senate) {
  let radiant = [];
  let dire = [];

  // Populate the queues with the initial indices of Radiant and Dire senators
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }

  const n = senate.length;

  // Process the rounds
  while (radiant.length > 0 && dire.length > 0) {
    let rIndex = radiant.shift();
    let dIndex = dire.shift();

    if (rIndex < dIndex) {
      // Radiant senator bans Dire, Radiant senator requeues with new index
      radiant.push(rIndex + n);
    } else {
      // Dire senator bans Radiant, Dire senator requeues with new index
      dire.push(dIndex + n);
    }
  }

  // The winner is determined by which queue is non-empty
  return radiant.length > 0 ? "Radiant" : "Dire";
};

// Example usages
console.log(predictPartyVictory("RD")); // Output: "Radiant"
console.log(predictPartyVictory("RDD")); // Output: "Dire"
console.log(predictPartyVictory("RDDR")); // Output: "Radiant"

// from collections import deque

// def predictPartyVictory(senate):
//     radiant = deque()
//     dire = deque()

//     # Populate the initial queues with indices of Radiant and Dire senators
//     for i, s in enumerate(senate):
//         if s == 'R':
//             radiant.append(i)
//         else:
//             dire.append(i)

//     n = len(senate)

//     # Process the rounds
//     while radiant and dire:
//         r_index = radiant.popleft()
//         d_index = dire.popleft()

//         if r_index < d_index:
//             # Radiant senator bans Dire, and requeues with new index
//             radiant.append(r_index + n)
//         else:
//             # Dire senator bans Radiant, and requeues with new index
//             dire.append(d_index + n)

//     # Determine the winner
//     return "Radiant" if radiant else "Dire"

// # Sample Inputs
// print(predictPartyVictory("RD"))    # Output: "Radiant"
// print(predictPartyVictory("RDD"))   # Output: "Dire"
// print(predictPartyVictory("RDDR"))  # Output: "Radiant"
