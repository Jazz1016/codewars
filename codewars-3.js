// Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr) {
  console.log(arr);
  arr = arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
  return [arr[0], arr[arr.length - 1]];
}

// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ....
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
  // console.log(n)
  let total = 0;
  function looper(n) {
    console.log(total, n);
    total = total + n;
    if (n / 2 > 0) {
      n = Math.floor(n / 2);
      looper(n);
    } else {
      return n;
    }
  }
  looper(n);
  return total;
}

// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// My other katas
// If you enjoyed this kata then please try my other katas! :-)

// Translations are welcome!

function myLanguages(results) {
  console.log(results);
  let arr = [];
  for (let key in results) {
    console.log(key, results[key]);
    if (results[key] >= 60) {
      arr.push([key, results[key]]);
    }
  }
  arr = arr.sort((a, b) => {
    return b[1] - a[1];
  });
  console.log(arr);
  return arr.map((el) => {
    return el[0];
  });
}

// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null
// Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#).

function calculate(num1, operation, num2) {
  //TODO: make a basic calculator.
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return null;
      } else {
        return num1 / num2;
      }
    default:
      return null;
  }
}
