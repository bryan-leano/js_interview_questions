////////////////////////////////////
// Triple Add

// Currying function
function tripleAdd(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    }
  }
};

function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
};

tripleAdd(10)(20)(30); 
// returns total of all 3 numbers added together
tripleAdd1(10, 20, 30);


////////////////////////////////////
// IIFE

// Stands for Immediately Invoked Function Expressions
// It's a function that is executed right after it's created
// Used to create a private scope separate from the global scope

(function doubleNumber(num) {
  return num * 2;
})(10);