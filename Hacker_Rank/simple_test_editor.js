// Implement a simple text editor. The editor initially contains an empty string .
//  S. Perform Q operations of the following 4 types:
// 1.append(W) - Append string W to the end of S.
// 2. delete(K) - Delete the last K characters of S
// 3.print(K) - Print the k th character of S
// 4. undo() - Undo the last (not previously undone)
// operation of type 1 or 2 reverting S to the state it was in prior to that operation.

function processData(input) {}

// Example
// S = 'abcde'
// ops = ['1 fg', '3 6', '2 5', '4', '3 7', ' 4' ]

function processData(input) {
  let S = ""; // Initialize the string S
  const stack = []; // Stack to store the previous states of S
  const commands = input.split("\n"); // Split the input into individual commands

  for (let i = 0; i < commands.length; i++) {
    const parts = commands[i].split(" "); // Split each command into operation and argument
    const operation = parts[0];

    if (operation === "1") {
      // Append W
      stack.push(S); // Push the current state of S to the stack
      S += parts[1]; // Append the string W to S
    } else if (operation === "2") {
      // Delete K characters
      stack.push(S); // Push the current state of S to the stack
      const k = parseInt(parts[1]);
      S = S.slice(0, -k); // Remove the last K characters from S
    } else if (operation === "3") {
      // Print Kth character
      const k = parseInt(parts[1]);
      console.log(S[k - 1]); // Print the Kth character (1-based index)
    } else if (operation === "4") {
      // Undo the last operation
      S = stack.pop(); // Revert S to the previous state
    }
  }
}

// Example input:
const input = `1 abcde
1 fg
3 6
2 5
4
3 7
4`;

// Expected output:
// f
// g

processData(input);

// f
// g
