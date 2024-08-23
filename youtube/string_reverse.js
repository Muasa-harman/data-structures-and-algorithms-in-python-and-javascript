// Directions
// Given a string, return a new string with the reversed order of characters
// Eg
reverse("hi") === "ih";
reverse("hello") === "olleh";
reverse("CodingMoney") === "yenoMgnidoC";

function reverse(str) {
  //     // in build method
  //   const strToArray = str.split("");

  //   strToArray.reverse();

  //   return strToArray.join("");

  // using chain method
  return str.split("").reverse().join("");
}

console.log(reverse("CodingMoney"));

// function reverse(str) {
//   let reversed = "";

//   //   old school version
//   //   for (let i = 0; i < str.length; i++) {
//   //     reversed = str[i] + reversed;
//   //   }

//   // newer version
//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }
// console.log(reverse("CodingMoney"));

// Q2
// given string s you are required to reverse
// string that is inside bracket and
// return final output  e.g "mnk"{"skeeg"} "opq" output "mnk"{geekks},"opq"

// Javascript
function reverseInsideBrackets(s) {
  const start = s.indexOf("{") + 1; // Find the starting index of the content inside the brackets
  // indexOf('{') and indexOf('}'): These functions locate the positions of the opening and closing brackets.
  const end = s.indexOf("}"); // Find the ending index of the content inside the brackets

  if (start > 0 && end > 0 && start < end) {
    // Extract the string inside the brackets
    const toReverse = s.substring(start, end);
    // substring(start, end): This extracts the content between the brackets.
    // Reverse the extracted string
    const reversedString = toReverse.split("").reverse().join("");
    // Replace the original string inside the brackets with the reversed string
    // split('').reverse().join(''): This reverses the string inside the brackets.
    s = s.slice(0, start) + reversedString + s.slice(end);
    // slice(0, start) and slice(end): These combine the unchanged parts of the string with the reversed content inside the brackets
  }

  return s;
}

// Example usage
const inputStr = 'mnk{"skeeg"}opq';
const outputStr = reverseInsideBrackets(inputStr);
console.log(outputStr);

// solution2:
function reverseInsideBrackets(s) {
  let result = "";
  // insideBrackets: A boolean variable that tracks whether the current character is inside curly brackets.
  let insideBrackets = false;
  // temp: A temporary string that stores characters inside the brackets.
  let temp = "";

  // The loop iterates over each character in the string:
  // When it encounters an opening {, it starts collecting characters into temp.
  // When it encounters a closing }, it reverses temp and appends it to the result.
  // Characters outside of the brackets are directly added to result.

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") {
      insideBrackets = true;
      temp = ""; // Start collecting characters inside the brackets
    } else if (s[i] === "}") {
      insideBrackets = false;
      // Reverse the collected string inside the brackets
      for (let j = temp.length - 1; j >= 0; j--) {
        result += temp[j];
      }
      result += "}"; // Add the closing bracket back
    } else if (insideBrackets) {
      temp += s[i]; // Collect characters inside the brackets
    } else {
      result += s[i]; // Collect characters outside the brackets
    }
  }

  return result;
}

// Example usage
const inputStr2 = 'mnk{"skeeg"}opq';
const outputStr2 = reverseInsideBrackets(inputStr);
console.log(outputStr);

// // python
// def reverse_inside_brackets(s):
//     start = s.find('{') + 1  //Find the starting index of the content inside the brackets
//     end = s.find('}')  //Find the ending index of the content inside the brackets

//     if start > 0 and end > 0 and start < end:
//         // # Extract the string inside the brackets
//         to_reverse = s[start:end]
//         // # Reverse the extracted string
//         reversed_string = to_reverse[::-1]
//         // # Replace the original string inside the brackets with the reversed string
//         s = s[:start] + reversed_string + s[end:]

//     return s

// // # Example usage
// input_str = 'mnk{"skeeg"}opq'
// output_str = reverse_inside_brackets(input_str)
// print(output_str)
