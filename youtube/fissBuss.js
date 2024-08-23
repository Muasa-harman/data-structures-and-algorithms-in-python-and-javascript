// Direction
// Write a program that consoles logs the numbers from 1 to n. But for multiples of three prints
// "fiss" instead of the number and for the multiples of both three and five print "fissbuss"

// Eg
// fissbuss(5);
// 1
// 2
// fiss
// 4
// buss

function fissbuss(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fissbuss");
    } else if (i % 3 === 0) {
      console.log("fiss");
    } else if (i % 5 === 0) {
      console.log("buss");
    } else {
      console.log(i);
    }
  }
}
console.log(fissbuss(15));
