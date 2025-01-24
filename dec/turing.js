// question
// Imagine you are exploring a sequence of numbers up to a certain limit. Within this sequence,
//  you're on the lookout for pairs of special numbers. These pairs have a unique quality. When you add them together,
// you get a specific target sum, and both numbers are prime.
// Can you provide a sorted list of these special pairs, following the given criteria?

// Example1:
// Input: n = 18
// Output: [[5,13],[7,11]]
// Explanation:In this example,there are two special pairs that satisfy the criteria:

// -The pairs are [5,13] and [7 , 11]
// - The output returns them in sorted order as described

// Example2:
// - Input: n = 13
// Output: [[2,11]]
// Explanation:There is only one pair [2,11] that gives a sum of 13.

// Constraints
// 1 <= n <= 10*6

// Understanding the problem:
// 1.Add upto a given target number n
// Are sorted in ascending order
// Ensure no duplicates i.e for any pair[p1,p2],p1<=p2

// The problem input is a single number n (with constraints 1 <=n<=10*6).
// The output must be a list of pairs where:
// - Both numbers are prime
// - Their sum equals n

// Approach to solve the problem
// Step1:Generate prime numbers efficiently

// - Use the Sieve of Eratosthenes algorithm to find all the prime numbers upto n.
// - The Sieve efficiently marks non-prime numbers, leaving only prime numbers

// Step2:Search for valid pairs
//  - Loop through the prime numbers.
// - For each prime p1, check if the number p2 = n - p1 also prime:
//  - Ensure p1 <= p2 to avoid duplicates
//    - If both p1 and p2 meet the criteria,add the pair [p1,p2] to the result list .

// Step3: Return the result
// Return the list of pairs sorted in ascending order

// Sieve of Eratosthenes is an efficient algorithm to find all prime numbers up to a given number
// 𝑛
// n. It works by iteratively marking the multiples of each prime starting from 2.
function spacial_par(n) {
  //step1: generate all prime numbers upto n using the Sieve of Eratosthenes
  const isPrime = Array(n + 1).fill(true); //Assume all numbers are prime initially
  isPrime[0] = isPrime[1] = false; //0 and 1 are not prime

  for (let i = 2; i * i <= n; i++) {
    //check up to sqrt(n).
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false; //Mark multiples of i as not prime.
      }
    }
  }
  // step2" Collect all primes in a list
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) primes.push(i);
  }
  // step3:Find pairs of primes that sum to n
  const res = [];

  const seen = new Set(); //To ensure unique pairs

  for (const p1 of primes) {
    const p2 = n - p1; //Find the complementary prime.
    if (p2 >= p1 && isPrime[p2]) {
      //Ensure p1 <= p2 and p2 is prime
      res.push([p1, p2]); // Add the pair to the result
    }
  }
  return res;
}

console.log(spacial_par(13));
console.log(spacial_par(18));

// How It Works
// Sieve of Eratosthenes:
// Efficiently generates all prime numbers up to n in 𝑂(𝑛loglog𝑛)O(nloglogn) time.

// Finding Pairs:

// For each prime 𝑝1p1, calculate 𝑝2=𝑛−𝑝1p2=n−p1.
// Check if 𝑝2p2 is prime and𝑝1≤𝑝2p1≤p2 (to avoid duplicates).
// If valid, add the pair [𝑝1,𝑝2][p1,p2] to the result.

// Example Walkthrough
// Input: n = 18

// Step 1: Generate primes up to 18 → [2, 3, 5, 7, 11, 13, 17]
// Step 2: Find pairs:

// 5+13=185+13=18 → Add [5,13][5,13].7+11=187+11=18 → Add [7,11][7,11].
// Output: [[5, 13], [7, 11]]

// Final Notes
// This approach is efficient and works well within the constraints.
// The sieve ensures prime generation is optimal, and the pair-finding logic avoids unnecessary computations.
