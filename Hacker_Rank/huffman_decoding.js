// Huffman coding asssigns variable length codewords to fixed length input characters based on thir frequencies .
// More frequent characters are asssigned shorter codewords and less frequent characters are asssigned longer codewords.
// All edges along the path to a character contain a code digit . If they are on the left side of the tree .
// They will be
// a 0(zero)  If on the right, they'll be a 1 (one). Only the leaves will contain a letter and its frequency count. All other nodes will contain a null instead of a character, and the count of the frequency of all of it and its descendant characters.

// For instance, consider the string ABRACADABRA. There are a total of  characters in the string.
// This number should match the count in the ultimately determined root of the tree.
// Our frequencies are  and .
//  The two smallest frequencies are for  and , both equal to , so we'll create a tree with them.
//   The root node will contain the sum of the counts of its descendants, in this case .
//    The left node will be the first character encountered, , and the right will contain .
//     Next we have  items with a character count of :
//      the tree we just created, the character  and the character .
//      The tree came first, so it will go on the left of our new root node.
//        will go on the right.
//  Repeat until the tree is complete, then fill in the 's and 's for the edges. The finished graph looks like:

// Input characters are only present in the leaves. Internal nodes have a character value of ϕ (NULL). We can determine that our values for characters are:

// A - 0
// B - 111
// C - 1100
// D - 1101
// R - 10
// Our Huffman encoded string is:
// A B    R  A C     A D     A B    R  A
// 0 111 10 0 1100 0 1101 0 111 10 0
// or
// 01111001100011010111100
// To avoid ambiguity, Huffman encoding is a prefix free encoding technique.
//  No codeword appears as a prefix of any other codeword.

// To decode the encoded string, follow the zeros and ones to a leaf and return the character there.

// You are given pointer to the root of the Huffman tree and a binary coded string to decode.
//  You need to print the decoded string.

// Function Description

// Complete the function decode_huff in the editor below. It must return the decoded string.

// decode_huff has the following parameters:

// root: a reference to the root node of the Huffman tree
// s: a Huffman encoded string
// Input Format

// There is one line of input containing the plain string, .
//  Background code creates the Huffman tree then passes the head node and the encoded string to the function.

// Constraints

// Output Format

// Output the decoded string on a single line.

// Sample Input

function processData(input) {}

// Definition of the Node class for the Huffman tree
class Node {
  constructor(data, freq) {
    this.data = data; // Character or NULL
    this.freq = freq; // Frequency of the character
    this.left = null; // Left child
    this.right = null; // Right child
  }
}

// Function to decode the Huffman encoded string
function decode_huff(root, s) {
  let decodedString = "";
  let currentNode = root;

  for (let i = 0; i < s.length; i++) {
    // Traverse the tree according to the encoded string
    if (s[i] === "0") {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }

    // If a leaf node is reached
    if (!currentNode.left && !currentNode.right) {
      decodedString += currentNode.data; // Append the character to the decoded string
      currentNode = root; // Reset to the root for the next character
    }
  }

  console.log(decodedString); // Print the decoded string
}

// Example usage
// Constructing a simple Huffman Tree for demonstration
let root = new Node(null, 0);
root.left = new Node("A", 5);
root.right = new Node(null, 7);
root.right.left = new Node("R", 3);
root.right.right = new Node(null, 4);
root.right.right.left = new Node("C", 2);
root.right.right.right = new Node("D", 2);
root.right.right.right.left = new Node("B", 1);
root.right.right.right.right = new Node("B", 1);

// Huffman encoded string example
let encodedString = "01111001100011010111100";

// Decode the string
decode_huff(root, encodedString);
