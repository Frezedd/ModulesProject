// 1. Create a module called "myFirst":
// a. Inside the "myFirst" module, log a simple text that says "My first module" on the console
// console.log("My first module");
// exports.printMsg = function() {
//     console.log("My first module");
// }

// b. Run the module and see the output of the code you just wrote in this module
// node myFirst.js

// c. Write a function called "myMultiplier" inside of your "myFirst" module. This function takes a single number as a parameter and returns a value that is 2 times the parameter
function myMultiplier(a, b) {
    if(typeof b === 'undefined') { 
      b = 10;
    }
    return a * b;
  }
  
  console.log(myMultiplier(2));
  // expected output: 20
