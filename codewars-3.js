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

// The objective is to return all pairs of integers from a given collection of integers that have a difference of 2.

// The result should be sorted in ascending order.

// The input will consist of unique values. The order of the integers in the input collection should not matter.

// Examples
// [1, 2, 3, 4]      -->  [[1, 3], [2, 4]]
// [4, 1, 2, 3]      -->  [[1, 3], [2, 4]]
// [1, 23, 3, 4, 7]  -->  [[1, 3]]
// [4, 3, 1, 5, 6]   -->  [[1, 3], [3, 5], [4, 6]]

function twosDifference(input) {
  console.log(input);
  let output = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      //      console.log(input[i], input[j])
      if (input[i] - input[j] === 2) {
        output.push([input[j], input[i]]);
      } else if (input[j] - input[i] === 2) {
        output.push([input[i], input[j]]);
      }
    }
  }
  //  console.log(output)
  return output.sort((a, b) => {
    return a[0] - b[0];
  });
}

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
  console.log(integer);
  let arr = [];
  for (let i = integer; i > 0; i--) {
    if (
      Number.isInteger(integer / i) &&
      integer / i > 1 &&
      integer / i < integer
    )
      arr.push(integer / i);
  }
  if (!arr[0]) {
    return `${integer} is prime`;
  } else {
    return arr;
  }
}

// ask
// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

// Example
// For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.

//  After day 1 --> 100
//  After night 1 --> 90
//  After day 2 --> 190
//  After night 2 --> 180
//  After day 3 --> 280
//  After night 3 --> 270
//  After day 4 --> 370
//  After night 4 --> 360
//  After day 5 --> 460
//  After night 5 --> 450
//  After day 6 --> 550
//  After night 6 --> 540
//  After day 7 --> 640
//  After night 7 --> 630
//  After day 8 --> 730
//  After night 8 --> 720
//  After day 9 --> 820
//  After night 9 --> 810
//  After day 10 --> 910
// For upSpeed = 10, downSpeed = 9 and desiredHeight = 4, the output should be 1.

// Because the plant reach to the desired height at day 1(10 meters).

//  After day 1 --> 10
// Input/Output
// [input] integer upSpeed

// A positive integer representing the daily growth.

// Constraints: 5 ≤ upSpeed ≤ 100.

// [input] integer downSpeed

// A positive integer representing the nightly decline.

// Constraints: 2 ≤ downSpeed < upSpeed.

// [input] integer desiredHeight

// A positive integer representing the threshold.

// Constraints: 4 ≤ desiredHeight ≤ 1000.

// [output] an integer

// The number of days that it will take for the plant to reach/pass desiredHeight (including the last day in the total count).

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  console.log(upSpeed, downSpeed, desiredHeight);
  console.log((desiredHeight / upSpeed) * downSpeed);
}

// Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.

function multiplyAndFilter(array, multiplier) {
  console.log(array, multiplier);
  for (let i = 0; i < array.length; i++) {
    console.log(array);
    if (typeof array[i] === "number") {
      array[i] = array[i] * multiplier;
    } else {
      console.log(array[i]);
      array[i] = "x";
    }
  }
  if (array[1] === 0 || array[1] === undefined) {
    return array;
  } else {
    return array.filter((el) => {
      if (typeof el === "number" || el === 0) {
        console.log(el);
        return el;
      }
    });
  }
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  // ...
  console.log(numbers);
  let numArr = [];
  strNumArr = numbers.split(" ");
  numArr = strNumArr.map((el) => {
    return parseInt(el);
  });
  console.log(numArr);
  sortedArr = numArr.sort(function (a, b) {
    return b - a;
  });
  console.log(sortedArr);
  let sortedArr1 = [...sortedArr];
  //   console.log(sortedArr.shift())
  //   console.log(sortedArr.pop())

  return `${sortedArr1.shift()} ${sortedArr.pop()}`;
}

// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 15

function getSumOfDigits(integer) {
  let sum = 0;
  var digits = Math.floor(integer).toString();
  for (let ix = 0; ix < digits.length; ix++) {
    console.log(digits[ix]);
    sum = sum + +digits[ix];
  }
  return sum;
}

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  console.log(integers);
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  for (let j = 0; j < integers.length; j++) {
    console.log(oddCount, evenCount);
    if (oddCount < evenCount) {
      if (integers[j] % 2 !== 0) {
        console.log("hit", integers[j]);
        return integers[j];
      }
    } else {
      if (integers[j] % 2 === 0) {
        return integers[j];
      }
    }
  }
}
// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

function solution(digits) {
  let large = 0;
  digits = digits.split("");
  console.log(digits);
  for (let i = 0; i < digits.length; i++) {
    if (
      +`${digits[i]}${digits[i + 1]}${digits[i + 2]}${digits[i + 3]}${
        digits[i + 4]
      }` > large
    ) {
      large = +`${digits[i]}${digits[i + 1]}${digits[i + 2]}${digits[i + 3]}${
        digits[i + 4]
      }`;
    }
  }
  return large;
}
