// Directions
// Write a function that accepts a string. The function should
// capitalize the first letter of each word in the string then return the capitalized string

// Eg
// capitalize('this is Harman from did you know') -> 'This Is Harman From Did You Know'
// capitalize('what is titlecase?') -> 'What is Titlecase?'
// capitalize('titles of books, movies, songs, plays and other works') -> 'Title Of Books, Movies,Songs,Plays And Other Works'

function capitalize(str) {
  const words = str.split(" ");
  //   const result = [];

  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

  //   for (let word of words) {
  //     result.push(word[0].toUpperCase() + word.slice(1));
  //   }

  //   return result.join(" ");
}

console.log(capitalize("this is harman from did you know"));
