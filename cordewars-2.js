// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language. In Shell please return None).

function foldTo(distance) {
  var counter = 0;

  if (distance < 0) {
    return null;
  }

  for (var i = 0.0001; i < distance; i) {
    i *= 2;
    counter += 1;
  }

  return counter;
}

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true
// isSquare(26) returns  false

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

// The code does not execute properly. Try to figure out why.

function multiply(a, b) {
  return a * b;
}

// Write a function that accepts two arguments: an array/list of integers and another integer (n).

// Determine the number of times where two integers in the array have a difference of n.

// For example:

// [1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
// [1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)
// FUNDAMENTALS

const intDiff = (arr, n) => {
  console.log(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j], n, count);
      if (arr[i] - arr[j] === n) {
        count++;
      } else if (arr[j] - arr[i] === n) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
};

// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

// For Example:

// [
//   [1, 2, 3, 4, 5],       // minimum value of row is 1
//   [5, 6, 7, 8, 9],       // minimum value of row is 5
//   [20, 21, 34, 56, 100]  // minimum value of row is 20
// ]

function sumOfMinimums(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].sort((a, b) => {
      return a - b;
    });
    newArr.push(arr[i][0]);
  }
  console.log(arr);
  console.log(newArr);
  return newArr.reduce((acc, el) => {
    return acc + el;
  }, 0);
}

// You are currently in the United States of America. The main currency here is known as the United States Dollar (USD). You are planning to travel to another country for vacation, so you make it today's goal to convert your USD (all bills, no cents) into the appropriate currency. This will help you be more prepared for when you arrive in the country you will be vacationing in.

// Given an integer (usd) representing the amount of dollars you have and a string (currency) representing the name of the currency used in another country, it is your task to determine the amount of foreign currency you will receive when you exchange your United States Dollars.

// However, there is one minor issue to deal with first. The screens and monitors at the Exchange are messed up. Some conversion rates are correctly presented, but other conversion rates are incorrectly presented. For some countries, they are temporarily displaying the standard conversion rate in the form of a number's binary representation!

// You make some observations. If a country's currency begins with a vowel, then the conversion rate is unaffected by the technical difficulties. If a country's currency begins with a consonant, then the conversion rate has been tampered with.

// Normally, the display would show 1 USD converting to 111 Japanese Yen. Instead, the display is showing 1 USD converts to 1101111 Japanese Yen. You take it upon yourself to sort this out. By doing so, your 250 USD rightfully becomes 27750 Japanese Yen.

// function(250, "Japanese Yen") => "You now have 27750 of Japanese Yen."

// Normally, the display would show 1 USD converting to 21 Czech Koruna. Instead, the display is showing 1 USD converts to 10101 Czech Koruna. You take it upon yourself to sort this out. By doing so, your 325 USD rightfully becomes 6825 Czech Koruna.

// function(325, "Czech Koruna") => "You now have 6825 of Czech Koruna."

// Using your understanding of converting currencies in conjunction with the preloaded code shown below, properly convert your dollars into the correct amount of foreign currency.

// CONVERSION_RATES = {
//   "Argentinian Peso": 10,
//   "Armenian Dram": 478,
//   "Bangladeshi Taka": 1010010,
//   "Croatian Kuna": 110,
//   "Czech Koruna": 10101,
//   "Dominican Peso": 110000,
//   "Egyptian Pound": 18,
//   "Guatemalan Quetzal": 111,
//   "Haitian Gourde": 1000000,
//   "Indian Rupee": 63,
//   "Japanese Yen": 1101111,
//   "Kenyan Shilling": 1100110,
//   "Nicaraguan Cordoba": 11111,
//   "Norwegian Krone": 1000,
//   "Philippine Piso": 110010,
//   "Romanian Leu": 100,
//   "Samoan Tala": 11,
//   "South Korean Won": 10000100011,
//   "Thai Baht": 100000,
//   "Uzbekistani Som": 8333,
//   "Venezuelan Bolivar": 1010,
//   "Vietnamese Dong": 101100000101101
// }
// Note: CONVERSION_RATES is frozen.

function convertMyDollars(usd, currency) {
  console.log(usd, currency, CONVERSION_RATES[currency]);
  // Replace this comment with your solution
  if (
    currency.charAt(0) === "A" ||
    currency.charAt(0) === "E" ||
    currency.charAt(0) === "I" ||
    currency.charAt(0) === "O" ||
    currency.charAt(0) === "U"
  ) {
    return `You now have ${usd * CONVERSION_RATES[currency]} of ${currency}.`;
  } else {
    return `You now have ${
      usd * parseInt(CONVERSION_RATES[currency], 2)
    } of ${currency}.`;
  }
}

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

// complete the function
function solution(string) {
  let strArr = string.split("");
  let indexes = [];
  console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == strArr[i].toUpperCase()) {
      indexes.push(i - 1);
    }
  }
  let counter = 1;
  indexes.map((el) => {
    strArr.splice(el + counter, 0, " ");
    counter++;
  });
  console.log(indexes);
  return strArr.join("");
}
// Task
// Given a positive integer as input, return the output as a string in the following format:

// Each element, corresponding to a digit of the number, multiplied by a power of 10 in such a way that with the sum of these elements you can obtain the original number.

// Examples
// Input	Output
// 0	""
// 56	"5*10+6"
// 60	"6*10"
// 999	"9*100+9*10+9"
// 10004	"1*10000+4"
// Note: input >= 0

function simplify(number) {
  number = number.toString();
  number = number.split("");
  number = number.reverse();
  let numberCopy = [...number];
  let indexes = [];
  let repeat = "0";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === "0") {
      indexes.push(i);
    } else {
      number[i] = `${number[i]}*1${repeat.repeat(i)}+`;
    }
  }
  console.log(number, numberCopy);
  number[0] = numberCopy[0];
  let counter = 0;
  indexes.map((el) => {
    number.splice(el - counter, 1);
    counter++;
  });
  number = number.reverse();
  number = number.join("");
  number = number.split("");
  if (number[number.length - 1] === "+") {
    number.pop();
  }
  return number.join("");
  console.log(number);
}

// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

// The Challenge
// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.
function findScreenHeight(width, ratio) {
  ratio = ratio.split("");
  console.log(width, ratio);
  let colonIndex = 0;
  for (let i = 0; i < ratio.length; i++) {
    if (ratio[i] === ":") {
      colonIndex = i;
    }
  }
  //     console.log(colonIndex)
  let divide = ratio.slice(0, colonIndex);
  let multiply = ratio.slice(colonIndex + 1, ratio.length + 1);
  multiply = multiply.join("");
  divide = divide.join("");
  console.log(multiply, divide);
  return `${width}x${(width * multiply) / divide}`;
}

// Is the string uppercase?
// Task
// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

// "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function () {
  console.log(this, this.toUpperCase());
  if (this === this.toUpperCase()) {
    console.log("hit");
    return true;
  } else {
    return false;
  }
};

// Welcome to the Codewars Bar!
// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Example parties:
// Input 0:
// "1 beer"

// Output 0:
// "1 glass of water"

// Explaination 0:
// You drank one standard drink

// Input 1:
// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"

// Output 1:
// "10 glasses of water"

// Explaination 1:
// You drank ten standard drinks

// Note:

// To keep the things simple, we'll considere that any "numbered thing" in the string is a drink. Even "1 bear" => "1 glass of water" or "1 chainsaw and 2 pools" => "3 glasses of water"...

function hydrate(s) {
  s = s.split("");
  console.log(s);
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (+s[i]) {
      console.log(s[i]);
      total = total + +s[i];
    }
  }
  if (total === 1) {
    return "1 glass of water";
  } else {
    return `${total} glasses of water`;
  }
}

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function (array) {
  console.log(array);
  let arrClone = [...array];
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    array[i] = array[array.length - i];
  }
  console.log(array);
  array.shift();
  console.log(array);
  return array;
};
