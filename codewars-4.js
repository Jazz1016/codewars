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

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

function likes(names) {
  console.log(names);
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    console.log("hit");
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// Adding tip to a restaurant bill in a graceful way can be tricky, thats why you need make a function for it.

// The function will receive the restaurant bill (always a positive number) as an argument. You need to 1) add at least 15% in tip, 2) round that number up to an elegant value and 3) return it.

// What is an elegant number? It depends on the magnitude of the number to be rounded. Numbers below 10 should simply be rounded to whole numbers. Numbers 10 and above should be rounded like this:

// 10 - 99.99... ---> Round to number divisible by 5

// 100 - 999.99... ---> Round to number divisible by 50

// 1000 - 9999.99... ---> Round to number divisible by 500

// And so on...

// Good luck!

function gracefulTipping(bill) {
  console.log(bill);
  if (bill < 10) {
    return bill + Math.ceil(bill * 0.15);
  } else if (bill < 100) {
    if (bill + (Math.ceil(bill * 0.15) % 5) === 0) {
      return bill + Math.ceil(bill * 0.15);
    } else {
      return bill + Math.ceil(bill * 0.15) + 1;
    }
  }
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  console.log(l);
  let array = [];
  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i]) || `${l[i]}` === "0") {
      array.push(l[i]);
    }
  }
  return array;
}

Number of people in the bus
There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
  let ppl = 0
  for(let i = 0; i < busStops.length; i++){
    ppl = ppl + busStops[i][0] - busStops[i][1]
  }
  return ppl
}

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

function removeSmallest(numbers) {
  let sorted = [...numbers].sort((a,b) => {
    return a - b
  })
  let copy = [...numbers]
  console.log(sorted)
  if(numbers[0] === undefined){
    return []
  }
  for(let i = 0; i < copy.length; i++){
    if(copy[i] === sorted[0]){
      copy.splice(i, 1)
      return copy
    }
  }
}

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
// Inspired by https://adriann.github.io/programming_problems.html

function mergeArrays(a, b) {
  console.log(a,b)
  let arr = []
  if(a.length >= b.length){
  for(let i = 0; i < a.length; i++){
    if(a[i] !== undefined){
    arr.push(a[i])
    }
    if(b[i] !== undefined){
    arr.push(b[i])
    }
  }
  return arr
  } else {
  for(let i = 0; i < b.length; i++){
    if(a[i] !== undefined){
    arr.push(a[i])
    }
    if(b[i] !== undefined){
    arr.push(b[i])
    }
  }
  return arr
  }

//   Happy Holidays fellow Code Warriors!
// It's almost Christmas! That means Santa's making his list, and checking it twice. Unfortunately, elves accidentally mixed the Naughty and Nice list together! Santa needs your help to save Christmas!

// Save Christmas!
// Santa needs you to write two functions. Both of the functions accept a sequence of objects. The first one returns a sequence containing only the names of the nice people, and the other returns a sequence containing only the names of the naughty people. Return an empty sequence [] if the result from either of the functions contains no names.

// The objects in the passed will represent people. Each object contains two properties: name and wasNice.
// name - The name of the person
// wasNice - True if the person was nice this year, false if they were naughty

// Person Object Examples
// { name: 'Warrior reading this kata', wasNice: true }
// { name: 'xDranik', wasNice: false }
// Test Examples
// getNiceNames( [
//     { name: 'Warrior reading this kata', wasNice: true },
//     { name: 'xDranik', wasNice: false },
//     { name: 'Santa', wasNice: true }
// ] )
// // => returns [ 'Warrior reading this kata', 'Santa' ]

// getNaughtyNames( [
//     { name: 'Warrior reading this kata', wasNice: true },
//     { name: 'xDranik', wasNice: false },
//     { name: 'Santa', wasNice: true }
// ] )
// // => returns [ 'xDranik' ]

function getNiceNames(people){
  console.log(people)
  let names = []
  for(let i = 0; i < people.length; i++){
    if(people[i].wasNice){
      names.push(people[i].name)
    }
  }
  return names
}

function getNaughtyNames(people){
    let names = []
  for(let i = 0; i < people.length; i++){
    if(!people[i].wasNice){
      names.push(people[i].name)
    }
  }
  return names
}

// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
  //   console.log(nFloors)
    let arr = ["*"]
    let star = "***"
    for(let i = 1; i < nFloors; i++){
      arr.push(star)
      star += "**"
    }
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length - 1 - i; j++){
      arr[i] = ' ' + arr[i] + ' '
      }
    }
    return arr
  }

  fdsaf