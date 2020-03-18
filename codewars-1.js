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
