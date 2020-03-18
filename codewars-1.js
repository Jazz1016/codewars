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
