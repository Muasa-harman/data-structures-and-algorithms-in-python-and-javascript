// // Given a time in 12-hour AM/PM format, convert it to military(24-hour) time.
// // Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// // - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// const { format } = require("mysql2")

// // Evample

// // s = '12:01:00PM'
// // Return '12:01:00'

// // s = '12:01:00AM'
// // Return '00:01:00'

// // Function Description
// // Complete the timeConversion function in the editor below. It should return a new string
// //  representing the input time in 24hour format
// // time Conversion has the following parameters(s)

// // . string s: a time in 12 hour format
// // Returns
// // . string: the time in 24 hour format

// // Input Format
// // A single string s that represents a time in 12-hour clock format(
//     // i.e  hh:mm:ssAM or hh:mm:ssPM ).
// // )

// // Constraints
// // All input times are valid

// // Sample Input
// // 07:05:45PM

// // Sample Output
// // 19:05:45

// // function readLine() {
// //     return inputString[currentLine++];
// // }

// function timeConversion(s){
//     // Extract the AM/PM part and time part
//     let period = s.slice(-2);
//     let time = s.slice(0,-2);

//     // split the time into components
//     let [hours, minutes, seconds] = time.split(':');

//     // Convert hours to integer for easier manipulation
//     hours = parseInt(hours);

//     if(period === 'PM'){
//         // Handle midnight case
//         if(period === 'AM'){
//             // Handle midnight case
//             if (hours === 12){
//                 hours = 0;
//             }
//         } else{
//             // Handle noon and PM cases
//             if (hours !== 12){
//                 hours += 12;
//             }
//         }
//         // Format hours to be two digits
//         hours = hours.toString().padStart(2,'0');

//         return `${hours}:${minutes}:${seconds}`;
//     }
// }

// // Example usage:
// console.log(timeConversion('12:01:00PM')); // Output: "12:01:00"
// console.log(timeConversion('12:01:00AM')); // Output: "00:01:00"
// console.log(timeConversion('07:05:45PM')); // Output: "19:05:45"




// // python
// def timeConversion(s):
//     # Extract the period (AM/PM)
//     period = s[-2:]
//     # Extract the time without the period
//     time = s[:-2]
//     # Split the time into hours, minutes, and seconds
//     hours, minutes, seconds = time.split(':')

//     # Convert the hours to 24-hour format
//     if period == 'AM':
//         if hours == '12':
//             hours = '00'
//     elif period == 'PM':
//         if hours != '12':
//             hours = str(int(hours) + 12)

//     # Return the formatted time in 24-hour format
//     return f"{hours}:{minutes}:{seconds}"

// # Sample Inputs
// print(timeConversion('12:01:00PM'))  # Output: '12:01:00'
// print(timeConversion('12:01:00AM'))  # Output: '00:01:00'
// print(timeConversion('07:05:45PM'))  # Output: '19:05:45'
