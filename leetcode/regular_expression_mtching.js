// Given an input string s and a pattern p, implement regular expression matching with support for '.'
//  and '*' where: 

const { IDLE_FETCHER } = require("@remix-run/router");

// '.' Mathces any single character.
// '*' Matches  zero or more of the proceding element.

// The matching should cover the entire input String(not partial).

// Example 1:
//  Input: s = "aa", p ="a"
Output: false
// Explanation:"a" does not match the entire string "aa"

// Example2:
// Input: s = "aa",p="a*"
// Output: true
// Explanation:'*' means zero or more of the preceding element, 'a'.Therefore, by repeating 'a'
// once, it becomes "aa". 

// Example3:
// Input: s = "ab", p=".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character(.)".

var isMatch  = function(s,p){
    const m = s.length;
    const n = p.length;

    // Create a DP table with dimensions (m+1) x (n+1)
    const dp = Array.from({length: m + 1}, ()=> Array(n+1).fill(false));

    // Base case: empty string and empty pattern match
    dp[0][0] = true;

    // Base case: dealing with patterns like a*,a*b*, a*b*c
    for (let j = 1; j<=n; j++){
        if (p[j - 1] === '*'){
            dp[0][j] = dp[0][j - 2];
        }
    }

    // Fill the DP table
    for (let i = 1; i <=m; i++){
        for (let j = 1; j<=n; j++){
            if(p[j - 1] ===s[i - 1] || p[j - 1] === '.'){
                dp[i][j] = dp[i - 1][j -1];
            } else if (p[j -1] === '*'){
                dp[i][j] = dp[i][j- 2];  // Zero occurrences of the character before '*'
                if (p[j -2] === s[i -1] || p[j-2] === '.'){
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }
    return dp[m][n];
};
// Example usage:
console.log(isMatch("aa", "a"));     // Output: false
console.log(isMatch("aa", "a*"));    // Output: true
console.log(isMatch("ab", ".*"));    // Output: true


// Explanation:
// DP Table Definition:

// We define a 2D DP table dp where dp[i][j] represents whether the first i characters of the string s match the first j characters of the pattern p.
// Base Case:

// dp[0][0] is true because an empty string matches an empty pattern.
// dp[i][0] for i > 0 is false because a non-empty string cannot match an empty pattern.
// dp[0][j] needs special handling because patterns like "abc*" can match an empty string.
// DP Transition:

// If p[j-1] is a normal character or '.', it matches if the current characters match and the previous substrings also match: dp[i][j] = dp[i-1][j-1].
// If p[j-1] is '*', it can represent zero occurrences or one or more occurrences of the preceding element:
// Zero occurrences: dp[i][j] = dp[i][j-2].
// One or more occurrences: dp[i][j] = dp[i-1][j] if the preceding character matches the current character in s or the preceding character is '.'.
