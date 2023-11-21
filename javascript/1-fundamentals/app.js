// alert("working");
// document.querySelector("h2").innerText = "My Name is Muzammil";

//Fundamentals of Javascripts

//Variables (you can store any information in your variable)

var myName = "Muhammad Muzammil";
// // console.log(myName);

//DATA TYPES
//there are two types of data types
//1-primitive type
//2-reference type/ object type

//Primitive Type Variables
//store directly in the location the variable accesses stored on the stack.

var store = "something"; //string = text
// var store = 'something'; //string = text
var store = 1234; //number
var store = true; //boolean (true/false)
var store = false; //boolean (true/false)
var store = null; //null (khali hoti)
var store = undefined; //undefined
var store = Symbol("values of symbol"); //symbol

// // console.log(store, "store");

//REFERENCE TYPE
// Accessed by reference Objects that are stored
// on the heap a pointer to a location in memory.

// 1-Array
// 2-Object

var store = ["one", 123, true, false, null, undefined]; //array can save multiple types of values on same time
var store = {
  one: "one",
  two: "two",
}; //object also can save multiple values on same time

// // console.log(store);

let muzammilMarks = 90;
let musaddiqMarks = muzammilMarks;

musaddiqMarks = 95;

// // console.log(muzammilMarks, "muzammilMarks");
// // console.log(musaddiqMarks, "musaddiqMarks");

//reference type example

// let hassanArrayOne = ["one", "two"];
// let hassanArrayTwo = hassanArrayOne; //it will create the refrence of arr1
// // let hassanArrayTwo = [...hassanArrayOne]; //[...] = spread operator

// //add value at the end of the array
// hassanArrayTwo.push("three");

// // console.log(hassanArrayOne, "hassanArrayOne");
// // console.log(hassanArrayTwo, "arrayTwo");

//1st Example

let muzammilHouse = ["House One", "House Two"];
// let musaddiqHouse = muzammilHouse; //it will create the reference
let musaddiqHouse = [...muzammilHouse]; //we can remove reference from spread operator [...]

musaddiqHouse.push("House Three");

// // console.log(muzammilHouse, "muzammilHouse");
// // console.log(musaddiqHouse, "musaddiqHouse");

//2nd example

// let muzammilBike = "125 Honda";
// let musaddiqBike = muzammilBike;

// musaddiqBike = "Suzuki 150";

// // console.log(muzammilBike, "muzammilBike");
// // console.log(musaddiqBike, "musaddiqBike");

//we have three types of variables
//1-let
//2-const
//3-var

// we can use let in the scope

// {} = scope

// function test(){
// }

//or

//if(){}

// {} = scope

// test();

//we are using this variable in the scope = {}
{
  let muzammil_var = "working";
  // // console.log(muzammil_var, "muzammil var");
}

//we are trying to console let variable out of the scope
// // console.log(muzammil_var, "muzammil var");

let companyName = "Koderlabs";

{
  // // console.log(companyName, " company name");
}

// // console.log(companyName);

//we cannot change constant variables
//const is also work on scope

const coachingName = "Squadcodersdev";
// coachingName = "DevDev";
// // console.log(coachingName, " coaching Name");

//Var

//var is used everywhere

var carName = "suzuki";

{
  // // console.log(carName, "carname");
}

//we are using the var in the scope
{
  var carName2 = "toyota";
  // // console.log(carName2, "carName2");
}

//we can use var variable out of the scope
// // console.log(carName2, "carName2");

//but if this scope is function so it will be specific in this function

function workingFunction() {
  var amount = 100;
  // // console.log(amount, "amount");
}
// // console.log(amount, "amount"); //it will give you error

workingFunction();

// A1One = "One"; var

//javascript is case sensitive

var some = "some 1";
var Some = "some 2 with capital S";

// // console.log(some, "some");
// // console.log(Some, "Some");

//naming of variables
// letters, = a to z or 123
// underscore, = let javascript_awesome_one
// camelcase, = let javascriptAwesomeOne
// pascal case = let JavascriptAwesomeOneTwoThree

// let javascriptAwesomeOne = "javascriptAwesomeOne";
// let javascriptawesomeone = "javascriptAwesomeOne"; //both seperate variable because small or capital letter

//javascript developer prefer camel case variable

//Type conversion

//convert anyvariable to string = text
let testingVariable = "this is text or string";
testingVariable = new String(6555); //number
testingVariable = new String(true); //boolean
testingVariable = new String(false); //boolean
testingVariable = new String(new Date()); //boolean

// // console.log(testingVariable);
// // console.log(typeof testingVariable);

// let someVariable = 1;
// // console.log(someVariable.toString(), "someVariable");
let someVariable = (1).toString();
// // console.log(someVariable, "someVariable");

//Convert Any Variable to Number

// someVariable = "2";
someVariable = new Number("2");
someVariable = new Number(true); // 1
someVariable = new Number(false); // 0
someVariable = new Number(null); // 0
someVariable = new Number("Hello"); // Nan = Not A Number
someVariable = new Number([1, 2, 4]); // Nan = Not A Number
someVariable = new Number({ a: 1, b: 2 }); // Nan = Not A Number

//2nd method to convert in to number

someVariable = parseInt("2"); //good paractice
someVariable = parseFloat("2.555"); //for decimal values

//Boolean

someVariable = new Boolean(1); // true
someVariable = new Boolean(0); // false
someVariable = new Boolean(""); // false
someVariable = new Boolean("AAA"); //true
// // console.log(someVariable, "     some variable");

//consoles methods

const testingVariables = {
  name: "Muzammil",
  designation: "Software Engineer",
  companyName: "Koderlabs",
};

// console.error(testingVariables, "testingVariables");
// // console.log(testingVariables, "testingVariables");
// console.warn(testingVariables, "testingVariables");
// console.info(testingVariables, "testingVariables");
// console.table(testingVariables, "testingVariables");

//arthmetic operators

testingVariable = 5 + 5;
testingVariable = 5 - 5;
testingVariable = 5 / 5;
testingVariable = 5 % 5;
testingVariable = 5 * 5;

//Math Object / Calculation Methods
testingVariable = Math.PI;
//The Math.E property represents Euler's number, the base of natural logarithms, e, which is approximately 2.718.
testingVariable = Math.E;
testingVariable = Math.round(2.4); //2
testingVariable = Math.round(2.6); //3
testingVariable = Math.pow(8, 4); // 8 * 8 * 8 * 8
testingVariable = Math.min(33, 100, 1555, 888, 999, 555555);
testingVariable = Math.max(33, 100, 1555, 888, 999, 555555);
testingVariable = Math.random() * 20 + 1;
// testingVariable = Math.floor(2);

/*==================================
=            math floor            =
==================================*/
//for positive numbers
val = Math.floor(2.4); //2
val = Math.floor(2.3); //2
val = Math.floor(2.59); //2
val = Math.floor("2.3"); //2
val = Math.floor(2); //2

//for negative number
val = Math.floor(-2.4); //-3
val = Math.floor(-2.3); //-3
val = Math.floor(-2.5); //-3

/*=====  End of math floor  ======*/

// // console.log(testingVariable);

//String Concatination
//string ko jorna

const firstName = "Muzammil";
const lastName = "Rafay1";

const fullName = firstNamelastName;

// // console.log(fullName, "fullname"); //Muzammil Rafay1

// let testString =
// 'Hello, World my name is 'Muzammil Mustaqeem and my age 'is 24'; //it will give you the error

let testString =
  "Hello, World my name is 'Muzammil Mustaqeem and my age 'is 24";

// \n = line break
testString = "Hello, World my name is '" + fullName + " \n and my age 'is 24";

// // console.log(testString, "testString");

//template literal

testString = `Hello, World my name is 'Muzammil Mustaqeem
//  and my age 'is 24`;

//interpolation = ${}

testString = `Hello, World my name is '${fullName}
 and my age 'is 24`;

testString = testString.concat(" new thing", " second thing");
// testString = testString.toLowerCase(); //convert all text in to small letters
// testString = testString.toUpperCase(); //convert all text in to capital letters
testString = testString.replace(fullName, "Musaddiq Rafay");
// // console.log(testString, "testString");
testString = testString.includes("Hello, World"); //if value is exist in string it will return true or false

// console.log(testString);

//soda lana hai ammi kaa

let saman = "tomato";
// let saman = "magi";
let purchased = "";

if (saman == "tomato") {
  purchased = "tomato";
} else {
  purchased = "yogurt"; //dahi
}

// // console.log(purchased, "purchased");

let drinks = "";
// let foodpanda = "briyani";
// let foodpanda = "karahi";
let foodpanda = "zinger";

if (foodpanda === "briyani") {
  drinks = "Jumbo Cold drink";
} else if (foodpanda === "karahi") {
  drinks = "lassi";
} else if (foodpanda === "zinger") {
  drinks = "limca";
}

// // console.log(drinks, " drinks");

//Array Methods

const fruits = ["Mango", "Banana", "Apple"];

// // console.log(fruits, "fruits");
// // console.log(fruits[0], "fruits"); //Mango
// // console.log(fruits[1], "fruits"); //Banana
// // console.log(fruits[2], "fruits"); //Apple
// // console.log(fruits.length, "fruits"); // 3

//add new value in array at the end
// // console.log(fruits);
// fruits.push("Grapes");
// // console.log(fruits); // ["Mango", "Banana", "Apple" , "Grapes"]

// const numbers = [22, 60, 10, 88, 99]; //numbers
// numbers.push(2000); //Add on the end of array
// numbers.unshift(9999); //Add on the start of array
// numbers.pop(); //remove array from end
// numbers.shift(); //remove array from start
// numbers.splice(1, 1); //remove from array
// numbers.splice(1, 3); //remove from array

// // console.log(numbers.reverse());

//ascending Order with sort method
// numbers.sort(function (x, y) {
//   return x - y;
// });

// //descending Order with sort method
// numbers.sort(function (x, y) {
//   return y - x;
// });

// // console.log(numbers, " numbers checking");
// // console.log(numbers);

const users = [
  {
    name: "muzammil",
    email: "muzammil.rafay@gmail.com",
    status: "Active",
  },
  {
    name: "musaddiq",
    email: "musaddiq@gmail.com",
    status: "Active",
  },
  {
    name: "azam",
    email: "azam@gmail.com",
    status: "Deactive",
  },
];

// console.log(users, "users");

//it will return the single value according to your condition
const findMuzammilUser = users.find(function (singleUser) {
  return singleUser.email === "muzammil.rafay@gmail.com";
  // return singleUser.email === "muzammil.rafay111111@gmail.com"; //it will return undefine
});

//it will return the array index according to your condition
const findIndexMuzammilUser = users.findIndex(function (singleUser) {
  return singleUser.email === "musaddiq@gmail.com";
});
// // console.log(findIndexMuzammilUser, "findMuzammilUser");

//it will return the array according to your condition
const findActiveUsers = users.filter(function (singleUser) {
  return singleUser.status === "Active";
});
// console.log(findActiveUsers, "findActiveUsers");

//it will return the new array according to your object

// const needOnlyUsersEmails = users.map((singleUser) => {
//   return singleUser.email;
// });

// ["musaddiq@gmail.com","muzammil.rafay@gmail.com","azam@gmail.com"];

// // console.log(needOnlyUsersEmails, "needOnlyUsersEmails");

const needModifyUserData = users.map(function (singleUser) {
  return {
    userEmail: singleUser.email,
    userName: singleUser.name,
    userStatus: singleUser.status,
  };
});

// // console.log(needModifyUserData, "needModifyUserData");

//kuch condition true hongi to true warna false
//some method will return boolean (true/false) value
const findDeactiveUser = users.some(function (singleUser) {
  return singleUser.status === "Deactive";
});

// // console.log(findDeactiveUser, "findDeactiveUser");

//agar sari condition true hongi to true warna false
//agar sare users active honge to return karega true warna false
const findActiveUser = users.every(function (singleUser) {
  return singleUser.status === "Active";
});

// // console.log(findActiveUser, "findActiveUser");

//loop

const numbers = [22, 60, 10, 88, 99]; //numbers

// console.log(numbers);
//for (intialValue; checkCondition; incrementAfterLooping)
// 0 < 5
//index++ // index + 1
for (let index = 0; index < numbers.length; index++) {
  // // console.log(index);
  const element = numbers[index];
  // console.log(element);
}

//forEach

numbers.forEach(function (singleNumber) {
  // console.log(singleNumber, "singleNumber");
});

//it will run condition
let i = 0;
while (i < 10) {
  // console.log(i, "i");
  i++;
}

//The Do While Loop
// run it once

do {
  // console.log("i");
  i++;
} while (i < 0);

//object loop
const person = { fname: "John", lname: "Doe", age: 25 };

for (let x in person) {
  //x = object Key like fname
  // console.log(x, "object key");
  // console.log(person[x], "object value");
}

const arrayOfKeys = Object.keys(person); // ["fname","lname","age"];

// // console.log(arrayOfKeys, "arrayOfKeys");
// console.time();
arrayOfKeys.forEach(function (singleObjectKey) {
  // console.log(singleObjectKey, "object key");
  // console.log(person[singleObjectKey], "object value");
}); //array of keys
// console.timeEnd();

// console.time();
// arrayOfKeys.map(function (singleObjectKey) {
// // console.log(singleObjectKey, "object key");
// // console.log(person[singleObjectKey], "object value");
// }); //array of keys
// console.timeEnd();

// COMPARISON

// Comparison operators are used in logical statements to
// determine equality or difference between variables or values.
const conditionVariableChecking = "8"; // 8 is string
// // console.log(typeof conditionVariableChecking);

// == equal to

if (conditionVariableChecking == 8) {
  // 8 is number
  // // console.log("condition is true");
} else {
  // // console.log("condition is false");
}

// === equal to
// it will check the data type also

// if (conditionVariableChecking === 8) {
// //   console.log("condition is true");
// } else {
// //   console.log("condition is false");
// }

// if (parseInt(conditionVariableChecking) === 8) {
// //   console.log("condition is true");
// } else {
// //   console.log("condition is false");
// }

// != not equal to

// if (conditionVariableChecking != 8) {
// //   console.log("condition is true");
// } else {
// //   console.log("condition is false");
// }

// !==  not equal to

// "8" // string wala number hai
// 8 ;// number wala number hai

if (conditionVariableChecking !== 8) {
  // console.log("condition is true");
} else {
  // console.log("condition is false");
}

// GREATER OR LESS THAN
// > greater than
// < less than
// example of crocodile mouth

let id = 40;

//less than
// if (id < 40) {
// //   console.log("CORRECT");
// } else {
// //   console.log("INCORRECT");
// }

//greater than example
// if (id > 40) {
// //   console.log("CORRECT");
// } else {
// //   console.log("INCORRECT");
// }

//greater than or equal to
if (id >= 40) {
  // console.log("CORRECT 40");
} else {
  // console.log("INCORRECT");
}

//less than or equal to
if (id <= 40) {
  // console.log("CORRECT 40");
} else {
  // console.log("INCORRECT");
}

// LOGICAL OPERATORS
// && AND = both condition should be true
// || OR = one condition should be true

let laptop = "hp";
let ram = "2gb";

//&& means both condition should be true
if (laptop == "hp" && ram == "4gb") {
  // console.log("laptop is hp and have 4gb ram");
}

//|| means both condition should be true
if (laptop == "hp" || ram == "4gb") {
  // console.log("aaajzi wala laptop");
}

// TERNARY OPERATOR
//single line if else condition

// let purchasedLaptop;
// if(laptop == "hp"){
//   purchasedLaptop = "tu me khareedonga";
// }else{
//   purchasedLaptop = "warna nai khareedunga";
// }

// condition ? "agar ye tru ho to" : "warna ye"

const purchasedLaptop =
  laptop == "hp" ? "tu me khareedonga" : "warna nai khareedunga";

if (id == 101) {
  // // console.log("101 is true");
} else if (id == 100) {
  // // console.log("100 is true");
} else if (id == 102) {
  // // console.log("102 is true");
} else if (id == 103) {
  // // console.log("103 is true");
} else if (id == 104) {
  // // console.log("104 is true");
} else if (id == 105) {
  // // console.log("105 is true");
} else if (id == 106) {
  // // console.log("106 is true");
} else if (id == 107) {
  // // console.log("107 is true");
} else {
  // // console.log("not match any conditions");
}

//switch statement
const color2 = "blue";
switch (color2) {
  case "red":
    // console.log("color is red");
    break;
  case "blue":
    // console.log("color is blue");
    break;
  default:
  // console.log("color is not blue nor red");
}

// if(color2 == 'red'){
// //   console.log("color is red");
// }else if(color2 == 'blue'){
// //   console.log('color is blue')
// }else{
// //   console.log("color is not blue nor red");
// }

//it will get your system date
let valDate;
const today = new Date(); //it will get current date

let birthday = new Date("9-10-1981"); // Month - Date - Year
birthday = new Date("November 27 1996"); // Month Date Year
// birthday = new Date("11/27/1996"); // Month Date Year

// console.log(birthday, "birthday");

valDate = today.getMonth() + 1;
valDate = today.getFullYear();
valDate = today.getMinutes();
valDate = today.getHours();
valDate = today.getSeconds();
valDate = today.getMilliseconds();
valDate = today.getTime();
valDate = today.getDay();

//second example
let day;

switch (today.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

// console.log(today, "today");
// console.log(valDate, "val Date");
// console.log(day, "day");

// console.log("Today is " + day  + '\n ');
console.log(`Today is ${day}`); //template literal

//Functions
//A function is simply a “chunk” of code that you can use
// over and over again, rather than writing it out multiple times.
// Functions enable programmers to break down or decompose a problem
//into smaller chunks, each of which performs a particular task.

//function piece of code jo bar bar repeat ho

//declare function
function anyname() {
  console.log("anyname function is working");
}

//function call
anyname(); //

//function parameters or arguement

// function fullname(firstName, lastName) {
//   //ye parameter hein
//   console.log(`${firstName} ${lastName}`);
// }

// fullname("Muzammil", "Rafay");

//you can set default parameter in functions

function fullname(firstName = "John", lastName = "Doe") {
  console.log(`${firstName} ${lastName}`);
}

// fullname() //without parmeter so it will return this "John Doe";
// fullname("Muzammil","Rafay") // Muzammil Rafay

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

const add2 = (function (firstParam = "", SecondParam = "") {
  console.log(`${firstParam} ${SecondParam}`);
})("1st", "2nd");

const todo = {
  //object literals
  add: function () {
    // console.log("Add todo..");
  },
  edit: function (id) {
    //parameter
    // console.log(`Edit todo ${id}`);
  },
  // working:true,
  // working2:'working2',
};

todo.add();
todo.edit(2);

//closures

//global variables
let a = 4;
function myFunction() {
  return a * a;
}

//local variables
function myFunction() {
  let b = 4;
  return b * b;
}

//counter function

//counter is global variable
// let counter = 0;

// function add() {
//   counter += 1;
//   console.log(counter, "counter");
//   return counter;
// }

// add(); //1
// add(); //2
// add(); //3
// add(); //4
// counter = 10000; //
// add(); //10001

//we will create local variable

// function add() {
//   let counter = 0;
//   counter += 1;
//   console.log(counter, "counter");
// }

// add(); // 1
// add();// 1

//then we need closures
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

//it's mean function k andar ek or function return hora hai
add(); //1
add(); //2
add(); //3

//look at window object

// WINDOW METHODS / OBJECTS / PROPERTIES
//window object is global

// window.alert("working");
// alert("working");
// console.log(window, "window");

// Prompt

// const input = prompt();
// console.log(input, "input");

//Confirm

// const confirmedChecked = confirm("Are You Sure");
// console.log(confirmedChecked, "confirmedChecked");

// if (confirmedChecked) {
//   console.log("you have selected ok");
// } else {
//   console.log("you have selected cancel");
// }

let val89899;
val89899 = window.outerHeight; //browser height
val89899 = window.outerWidth; //browser width

val89899 = window.innerHeight; //browser inner height
val89899 = window.innerWidth; //browser inner width

val89899 = window.scrollY; //calculate y axis scroll
// val89899 = window.scrollX; //calculate x axis scroll

val89899 = window.location;

//   // Location Object
val89899 = window.location;
val89899 = window.location.hostname;
val89899 = window.location.port;
val89899 = window.location.href;
val89899 = window.location.search; //param will be there

//navigator = browser

if (window.navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position, "position");
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}

//redirect

// window.location.href = "http://google.com";

setTimeout(function () {
  console.log("execute this function after three seconds");
}, 3000);

// window.history.go(-2);

// // Navigator Object
val89899 = window.navigator;
val89899 = window.navigator.appName;
val89899 = window.navigator.appVersion;
val89899 = window.navigator.userAgent;
val89899 = window.navigator.platform;
val89899 = window.navigator.vendor;
val89899 = window.navigator.language;
console.log(val89899);
