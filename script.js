////////////////////////////////////
// Triple Add

// Currying function

/*
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
*/

////////////////////////////////////
// Button 5


// ES5 with IIFE
/*
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    (function(num) {
      button.onclick = function() {
        alert('This is button ' + num);
      };
    })(i);
    body.appendChild(button);
  }
}
*/

// ES6 
/*
function createButtons() {
  for (let i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    button.onclick = function() {
      alert('This is button ' + i);
    };
    body.appendChild(button);
  }
}

createButtons();
*/

////////////////////////////////////
// Closures

// What is a closure?
// A closure is an inner function that has access to the scope of an enclosing function.
// A closure will have access to variables in 3 separate scopes:
// 1. Variables in its own scope
// 2. Variables in the scope of the outer function
// 3. Variables in the global scope

/*
const globalVariable = 'global var';

function outterFunc(param1) {
  const variable1 = 'var one';

  function innerFunc(param2) {
    const variable2 = 'var two';

    console.log('globalVariable: ', globalVariable);
    console.log('variable1: ', variable1);
    console.log('variable2: ', variable2);
    console.log('param1: ', param1);
    console.log('param2: ', param2);
  }

  innerFunc('param two');
}

outterFunc('param one');
*/


////////////////////////////////////
// "this" keyword

// "This" is used to describe the object that is in the conntext of

/*
var house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Taylor',
  getPricePerSquareFoot: function() {
    return this.price / this.squareFeet;
  }
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());
*/


////////////////////////////////////
// Hoisting

// Variable and Function Hoisting is when the varaibles and functions are declared at the top of the file

/*
console.log(color);

var color = 'blue';

console.log(color);



var getProduct = function(num1, num2) {
  return num1 * num2;
};

console.log(getProduct(2, 3));

// Function declaration get hoisted to the top of the file
console.log(getProduct2(2, 3));

function getProduct2(num1, num2){
  return num1 * num2;
}

// Functions in another function get hoisted to the top of the outer function
var globalVar = 'global';
 
(function() {
  
  var name = 'Jen';
  
  var getAge = function() {
    return '30';
  };
  
  function getState() {
    return 'Delaware'; 
  }
  
})();

function getTotal() {
  let total = 0;

  for(var i = 0; i < 10; i++) {

    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }

  return total;
}

getTotal();
*/


////////////////////////////////////
// Scope and "self"

// self is used to store a reference to a certain scope or context that is to be used later on.

/*
var myCar = {
  color: "Blue",
  logColor: function() {
      var self = this;
      console.log("In logColor - this.color: " + this.color);
      console.log("In logColor - self.color: " + self.color);
      (function() {
          console.log("In IIFE - this.color: " + this.color);
          console.log("In IIFE - self.color: " + self.color);
      })();
  }
};

myCar.logColor();
*/


////////////////////////////////////
// Equals and Strict Equals

// == checks to see if it's abstract equality
// === checks to see if two values are completely equal to each other, strict equality

/*
console.log(7 == '7');
console.log(7 === '7');


////////////////////////////////////
// Log Number Function

var num = 50;

function logNumber() {
  console.log(num);
  var num = 100;
}

logNumber();
*/


////////////////////////////////////
// Use strict

// The main purpose of 'use strict' is to enforce stricter parsing and error handling in your code.

// Prevents the use of global variables

// example 1
 
/*
'use strict';
 
city = 'London';
console.log(city)
 
// example 2
 
'use strict';
function myFunc(a, a, b) {
    console.log(a, a, b);
}
 
myFunc(1, 2, 3);
 
// example 3
 
'use strict';
delete Object.prototype;
*/


////////////////////////////////////
// Curry function question

/*
function getProduct(num1, num2) {
  return num1 * num2;
}

getProduct(10, 20);

// Curry function example

function getProductOne(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

getProductOne(10)(20);
*/


////////////////////////////////////
// Counter Function

/*
function myFunc() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}
 
console.log(myFunc());
 
const instanceOne = myFunc();
const instanceTwo = myFunc();
 
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceOne: ', instanceOne());
*/


////////////////////////////////////
// Logging X and Y question

/*
(function() {
  'use strict';
  var x = y = 200;
})();

console.log('y: ', y);
console.log('x: ', x);
*/


////////////////////////////////////
// Call and Apply

/*
const car1 = {
  brand: 'Porsche',
  getCarDescription: function (cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
  }
};

const car2 = {
  brand: 'Lamborghini'
};

const car3 = {
  brand: 'Ford'
};

car1.getCarDescription(80000, 2010, 'blue');

// call()
// Gives you an alternate way to call your functions. It adds in methods shared from other functions
car1.getCarDescription.call(car2, 200000, 2013, 'yellow');

// apply()
// Similar to the call method but the arguments come in an array
car1.getCarDescription.apply(car3, [35000, 2012, 'black']);
*/


////////////////////////////////////
// list 2 question

/*
const list1 = [1, 2, 3, 4, 5];
const list2 = list1.slice();
list1.push(6, 7, 8);

console.log(list1);
console.log(list2);

// passing by value
const myNum = 10;
const myString = 'hello world';
const myString2 = myString;
*/


////////////////////////////////////
// Singly or Doubly Invoked Function

/*
function getTotal(num1, num2) {
  return num1 * num2;
};

function getTotal(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

//getTotal(10, 20);
getTotal(10)(20);
*/


////////////////////////////////////
// JSON Data

// TASK:
// 1. Describe what JSON format is.
// JSON is JavaScript Object Notation. It's a light weight format for transferring data.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.
 
/*
const myJsonObj = {
  "myString": "hello world",
  "myNumber": 123.45,
  "myNull": null,
  "myBoolean": false,
  // myUndefined: [undefined],
  "myArray": [20, 30, "orange"],
  // myFunction: [some function],
  "myObject": {
    "name": "Sam",
    "age": 30
  }
};
*/


////////////////////////////////////
// Order logged out

// Ouestion:
// What order are the numbers (1, 2, 3, 4) logged out in?

/*
function logNumbers() {
  console.log(1);
  setTimeout(function(){console.log(2)}, 1000);
  setTimeout(function(){console.log(3)}, 0);
  console.log(4);
}

logNumbers();
*/


////////////////////////////////////
// Making an object

/*
// object literal syntax
const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function() {
    return this.length;
  }

}; 

// new keyword & Object constructor
const student = new Object();
 
student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ["English", "Algebra", "Chemistry"];
student.getClasses = function() {
  return this.classes;
};
 
// constructor function
function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function() {
  return this.color;
};

const carlysCar = new Car('blue', 'Ferrari', 2015);
const jimsCar = new Car('red', 'Tesla', 2014);

console.log(carlysCar.getColor());
console.log(jimsCar.getColor());

function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

var user1 = new User('John', 'Smith', 26, 'male');
var user200 = new User('Jill', 'Robinson', 26, 'female');
*/


////////////////////////////////////
// type of Data Types

/*
console.log(typeof null);  // object
console.log(typeof undefined);  // undefined
console.log(typeof {});  // object
console.log(typeof []);  // object
*/


////////////////////////////////////
// Bind Method

/*
this.distance = 10000;
const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption) {
    return this.distance + unit + caption;
  }
};
 
const roadTrip2 = {
  distance: 5000
};
 
const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');
 
getTripDistance(' in total');
*/


////////////////////////////////////
// Two Objects

const user1 = {
  name: 'Jordan',
  age: 28
};

const user2 = {
  name: 'Jordan',
  age:28
};

console.log(user1 == user2);  // false
console.log(user1 === user2);  // false

console.log(JSON.stringify(user1) == JSON.stringify(user2));  // true
console.log(JSON.stringify(user1) === JSON.stringify(user2));  // false

// Two objects are never equal to each other. 
// In JS, we pass objects, we pass them by reference, not by value.