// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
function breakChocolate(n, m) {
  if (n * m - 1 > 0) {
    return n * m - 1;
  } else return 0;
}

// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.

// Example:

// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

const findAll = (array, n) => {
  let finalArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      finalArr.push(i);
    }
  }
  return finalArr;
};

// Create a moreZeros function which will receive a string for input, and return an array containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

// Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False

//         --> ['a','b','d']

// 'DIGEST'--> ['D','I','E','T']
// All input will be valid strings of length > 0.

function moreZeros(s) {
  // let trueArr = ['a','b','d','h','p','A','B','C','D','E','F',
  // 'H','I','J','L','P','Q','R','T','X', ' ', '!', '0', '(', '@', '$','`', '"',]
  let falseArr = [];
  let sArr = s.split("");
  console.log(sArr);
  sArr = sArr.reduce((acc, el) => {
    if (acc.includes(el)) {
      return acc;
    } else {
      return [...acc, el];
    }
  }, []);
  let finalArr = sArr.filter(el => {
    if (trueArr.includes(el)) {
      console.log(el);
      return el;
    } else {
    }
  });
  return finalArr;
}

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s) {
  let sArr = s.split("");
  let evenArr = [...sArr];
  let oddArr = [...sArr];
  for (let i = 0; i < sArr.length; i++) {
    if (i % 2 === 0) {
      console.log(sArr[i]);
      evenArr[i] = sArr[i].toUpperCase();
    } else {
      oddArr[i] = sArr[i].toUpperCase();
    }
  }
  let evenStr = evenArr.join("");
  let oddStr = oddArr.join("");

  return [evenStr, oddStr];
}

// Description
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good, evil) {
  good = good.split(" ");
  evil = evil.split(" ");

  let goodTotal =
    +good[0] * 1 +
    +good[1] * 2 +
    +good[2] * 3 +
    +good[3] * 3 +
    +good[4] * 4 +
    +good[5] * 10;
  let evilTotal =
    +evil[0] * 1 +
    +evil[1] * 2 +
    +evil[2] * 2 +
    +evil[3] * 2 +
    +evil[4] * 3 +
    +evil[5] * 5 +
    +evil[6] * 10;

  if (goodTotal > evilTotal) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodTotal < evilTotal) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}

// Kata 5
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr) {
  console.log(arr);
  //   let contig =
  let indexes = [0, 1];
  let arrCompare = [];
  for (let i = 0; i < arr.length + 1; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      console.log(i, j);
      arrCompare.push({
        total: arr.slice(i, j).reduce((a, b) => {
          return a + b;
        }),
        start: i,
        finish: j
      });
    }
    for (let i = 0; i < arrCompare.length; i++) {
      for (let j = i; j <= arrCompare.length; j++) {}
    }
  }
  arrCompare = arrCompare.sort((a, b) => a.total - b.total);
  console.log(arrCompare);
  let finalObj = arrCompare[arrCompare.length - 1];
  console.log(finalObj);
  // ...
  //   if(total){
  if (arr[0] === undefined) {
    return 0;
  } else if (
    arr.slice(finalObj.start, finalObj.finish).reduce((acc, el) => {
      return acc + el;
    }, 0) < 0
  ) {
    return 0;
  } else {
    return arr.slice(finalObj.start, finalObj.finish).reduce((acc, el) => {
      return acc + el;
    }, 0);
  }
};

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

function digital_root(n) {
  // ...
  const runIt = n => {
    n = n.toString();
    let numArr = n.split("");
    numArr = numArr.map(el => {
      return +el;
    });
    console.log(numArr);

    let total = numArr.reduce((acc, el) => {
      return acc + el;
    });
    console.log(total);
    return total;
  };
  if (runIt(n) >= 10) {
    return runIt(runIt(n));
  } else {
    return runIt(n);
  }
}

// Your task is to find all the elements of an array that are non consecutive.

// A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.

// Create a function named allNonConsecutive

// E.g., if we have an array [1,2,3,4,6,7,8,10] then 6 and 10 are non-consecutive.

// You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

// E.g., for the above array the result should be:

// [
//   {i: 4, n:6},
//   {i: 7, n:10}
// ]
// If the whole array is consecutive or has one element then return an empty array.

// The array elements will all be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive and/or negetive.

// If you like this kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

function allNonConsecutive(arr) {
  console.log(arr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1] || arr[i + 1] === undefined) {
    } else {
      newArr.push({ i: i + 1, n: arr[i + 1] });
    }
  }
  return newArr;
}

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages) {
  ages = ages.sort((a, b) => {
    return a - b;
  });
  console.log(ages);
  let dif = ages[ages.length - 1] - ages[0];
  return [ages[0], ages[ages.length - 1], dif];
}

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  ages = ages.sort((a, b) => {
    return a - b;
  });
  console.log(ages);
  return [ages[ages.length - 2], ages[ages.length - 1]];
}

// Write a code that receives an array of numbers or strings, goes one by one through it while taking one value out, leaving one value in, taking, leaving, and back again to the beginning until all values are out.
// It's like a circle of people who decide that every second person will leave it, until the last person is there. So if the last element of the array is taken, the first element that's still there, will stay.
// The code returns a new re-arranged array with the taken values by their order. The first value of the initial array is always taken.

// Examples:

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  // returns [1, 3, 5, 7, 9, 2, 6, 10, 8, 4]

// var arr = ['this', 'code', 'is', 'right', 'the']
//  // returns ['this', 'is', 'the', 'right', 'code']

function yesNo(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!i % 2 === 0) {
      arr.push(arr[i]);
      arr.splice(i, 1);
    }
  }
  return arr;
}

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let strArr = str.split("");
  console.log(strArr);
  var vowelsCount = 0;
  strArr.map(el => {
    if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
      vowelsCount++;
    }
  });

  // enter your majic here

  return vowelsCount;
}

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  num = num.toString();
  let numArr = num.split("");
  console.log(numArr);
  numArr = numArr.map(el => {
    return +el * +el;
  });
  console.log(numArr);
  return +numArr.join("");

  //may the code be with you
}
