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
