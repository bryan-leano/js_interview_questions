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