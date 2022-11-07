function loopArr(arr, direction, steps) {}

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
  let str = "";
  for (i = 0; i < size; i++) {
    if (i % 2 === 0) {
      str += "1";
    } else {
      str += "0";
    }
  }
  return str;
}

//   You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  console.log(n);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

// Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

// Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

function connotation(str) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let count = 0;
  let strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    if (alphabet.indexOf(strArr[i].charAt(0).toLowerCase()) <= 12) {
      count++;
    } else {
      count--;
    }
  }
  return count >= 0 ? true : false;
}

return str
  .split(" ")
  .filter((el) => (el.length > 0 ? true : false))
  .reduce((final, el) => {
    return alphabet.indexOf(el.charAt(0).toLowerCase()) <= 12
      ? final + 1
      : final - 1;
  }, 0) >= 0
  ? true
  : false;

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    count += i;
  }

  return count;
};

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

function getDivisorsCnt(n) {
  console.log(n);
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  return count;
}

// Create a function that changes all the vowels (excluding y) in a string, and changes them all to the same vowel.
// The first parameter of the function is the string, and the second is the vowel that all the vowels in the string are being changed to.

function vowelChange(str, vow) {
  let vowels = "aeiou";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (vowels.includes(char.toLowerCase())) {
      newStr += vow;
    } else {
      newStr += char;
    }
  }
  return newStr;
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

// This kata is the first of a sequence of four about "Squared Strings".
// You are given a string of n lines, each substring being n characters long: For example:
// s = "abcd\nefgh\nijkl\nmnop"
// We will study some transformations of this square of strings.

function vertMirror(strng) {
  let arr = strng.split("\n");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
    console.log(arr[i]);
  }
  return arr.join("\n");
}
function horMirror(strng) {
  let arr = strng.split("\n");
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
  return newArr.join("\n");
}
function oper(fct, s) {
  console.log(fct, s);

  return fct(s);
}

// Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

function onesCounter(input) {
  let countArr = [];
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 1) {
      count++;
    } else if (input[i] === 0 && count > 0) {
      countArr.push(count);
      count = 0;
    }
  }
  if (count > 0) {
    countArr.push(count);
  }
  return countArr;
}

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

export function hero(bullets: number, dragons: number): boolean {
  if (dragons * 2 <= bullets) {
    return true;
  } else {
    return false;
  }
}

// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined. You can assume that all array elements will be positive integers.

var isSquare = function (arr) {
  if (arr.length === 0) {
    return undefined;
  }
  for (let i = 0; i < arr.length; i++) {
    if (Math.sqrt(arr[i]) % 1 !== 0) {
      return false;
    }
  }
  return true;
};

// There's a waiting room with N chairs set in single row. Chairs are consecutively numbered from 1 to N. First is closest to the entrance (which is exit as well).
// For some reason people choose a chair in the following way

// Find a place as far from other people as possible
// Find a place as close to exit as possible
// All chairs must be occupied before the first person will be served

// So it looks like this for 10 chairs and 10 patients

// Chairs	1	2	3	4	5	6	7	8	9	10
// Patients	1	7	5	8	3	9	4	6	10	2
// Your task is to find last patient's chair's number.

// Input - N - integer greater than 2 - number of chairs. Output should positive integer too - last patient's chair's number

// Have fun :)

function evenOrOdd(str) {
  let even = 0;
  let odd = 0;
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    console.log(parseInt(arr[i]));
    if (parseInt(arr[i]) % 2 === 0) {
      even += parseInt(arr[i]);
    } else {
      odd += parseInt(arr[i]);
    }
  }

  if (even > odd) {
    return "Even is greater than Odd";
  } else if (odd > even) {
    return "Odd is greater than Even";
  } else {
    return "Even and Odd are the same";
  }
}

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  let str = `${number}`;
  if (number < 0) {
    console.log(str.substring(1));
    str = str.substring(1);
  }

  let num = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(number, parseInt(str[i]));
    num += parseInt(str[i]);
  }
  console.log(num);
  return num;
}

// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.

function flyBy(lamps, drone) {
  let location = "";
  for (let i = 0; i < lamps.length; i++) {
    if (i < drone.length) {
      location += "o";
    } else {
      location += "x";
    }
  }
  return location;
}

flyBy(("xxxxxx", "====T"), "ooooox");

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// const removeConsecutiveDuplicates = (s) => {
//   console.log(s);
//   let arr = s.split(" ");
//   let word = "";
//   let final = "";
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] === arr[i - 1] ? null : (final += ` ${arr[i]}`);
//   }
//   return final.substring(1);
// };

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// function digitize(n) {
//   return `${n}`
//     .split("")
//     .reverse()
//     .map((el) => +el);
// }

// JAM LEA

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
  return friends.filter((word) => word.length === 4);
}

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap(string) {
  console.log(string);

  let arr = string.split("");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
        arr[i] = "A";
        break;
      case "e":
        arr[i] = "E";
        break;
      case "i":
        arr[i] = "I";
        break;
      case "o":
        arr[i] = "O";
        break;
      case "u":
        arr[i] = "U";
        break;
      default:
        arr[i] = arr[i];
    }
  }
  let str = arr.join("");
  console.log(str);
  return str;
}
