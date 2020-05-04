// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s) {
  s = s.split("");
  console.log(s);
  if (s.length % 2 === 0) {
    return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
  } else {
    console.log("hi");
    return `${s[Math.floor(s.length / 2)]}`;
  }
}

// Given a list of numbers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// odd_or_even([0])          ==  "even"
// odd_or_even([0, 1, 4])    ==  "odd"
// odd_or_even([0, -1, -5])  ==  "even"

function oddOrEven(array) {
  console.log(array);
  let total = array.reduce((acc, el) => {
    return acc + el;
  }, 0);
  console.log(total);
  if (total % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
