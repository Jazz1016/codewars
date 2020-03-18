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
