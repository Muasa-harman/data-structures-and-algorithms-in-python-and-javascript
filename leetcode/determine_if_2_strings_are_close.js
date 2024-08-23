// Determine if Two String Are Close
// Two strings are considered close if you can attain one from the otr using the follwing operations:

// - Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb 

// Operation 2: Transform every occurrence of one existing character into another existing character,
//  and do the same with the other character
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)

// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length){
        return false;
    }
    const countChars = (word) =>{
        let count = new Array(26).fill(0);
        for (let char of word){
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return count;
    }
    // return count;

    
    let count1 = countChars(word1);
    let count2 = countChars(word2);

    // Check if both have the same unique characters
    if (count1.map((x, i) => (x > 0 ? i : -1)).filter(x => x >= 0).toString() !==
    count2.map((x, i) => (x > 0 ? i : -1)).filter(x => x >= 0).toString()) {
    return false;
 }
   // Check if both have the same frequency counts
   count1.sort((a, b) => a - b);
   count2.sort((a, b) => a - b);
   
   return count1.toString() === count2.toString();

}

// Examples
console.log(closeStrings("abc", "bca"));      // Output: true
console.log(closeStrings("a", "aa"));         // Output: false
console.log(closeStrings("cabbba", "abbccc")) // Output: true
console.log(closeStrings("cabbba", "aabbss")) // Output: false


// To determine if two strings, word1 and word2, are "close," we can follow a structured approach based on the allowed operations:

// Check Length: If the two strings are of different lengths, they cannot be close because there's no way to transform one into the other using the allowed operations.

// Check Character Sets: Both strings must contain the same set of characters. This means that every character appearing in word1 must also appear in word2, though the frequencies may differ.

// Check Character Frequencies: The multiset of character frequencies (i.e., how often each character appears) in both strings must be identical. This ensures that we can rearrange the characters in one string to match the other by swapping characters.

// Steps to Implement the Solution:
// Convert both strings into arrays of character counts.
// Sort these counts.
// Compare the sorted character sets and sorted frequency arrays.


// Character Counting (countChars function):

// We create an array count of size 26 (for each letter of the alphabet) initialized with zeros. We iterate over the string and increment the respective index for each character.
// Check Unique Characters:

// We generate arrays representing the unique characters present in each string by mapping and filtering out zero frequencies. If these unique sets differ, the strings can't be close.
// Check Frequency Counts:

// We sort the frequency counts for each string. If the sorted frequency arrays are the same, the strings can be rearranged to become identical.


// // python
// def closeStrings(word1, word2):
//     # Step 1: Check if both strings have the same set of characters
//     if set(word1) != set(word2):
//         return False
    
//     # Step 2: Check if both strings have the same frequency of characters
//     from collections import Counter
//     return sorted(Counter(word1).values()) == sorted(Counter(word2).values())

// # Sample Inputs
// print(closeStrings("abc", "bca"))        # Output: True
// print(closeStrings("a", "aa"))           # Output: False
// print(closeStrings("cabbba", "abbccc"))  # Output: True
// print(closeStrings("cabbba", "aabbss"))  # Output: False



// Explanation:

// Check if both strings have the same set of characters: If set(word1) is not equal to set(word2), return False immediately. This ensures that both strings can potentially be transformed into each other by swapping characters.
// Check if both strings have the same frequency of characters: Use collections.Counter to get the frequency of each character in both strings. Sort these frequencies and compare them. If they are the same, the strings can be transformed into each other by swapping characters and transforming characters as needed.
// This approach ensures that the strings are compared correctly according to the defined operations.
