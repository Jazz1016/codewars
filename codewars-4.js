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

//  Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2)
{
  switch(operation){
    case '+':
    return value1 + value2
    break;
    case '-':
    return value1 - value2
    break;
    case '*':
    return value1 * value2
    break;
    case '/':
    return value1 / value2
    break;
  }
}

// You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

// Your Task
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

// Rules
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
// Example
// cookingTime(0); // must return 0
// cookingTime(5); // must return 5
// cookingTime(10); // must return 10

function cookingTime(eggs) {
  let time = 0
  return time + Math.ceil(eggs/8) * 5
    console.log(eggs)
  }

//   The following code is not giving the expected results. Can you figure out what the issue is?

// The following is an example of data that would be passed in to the function.

// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]

// getNames(data) // should return ['Joe', 'Bill', 'Kate']
// BUGS

function getNames(data){
  return data.map((item)=>{return item.name});
}

// Happy Holidays fellow Code Warriors!
// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

// Sort Santa's Reindeer
// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

// Notes:
// It's guaranteed that each string is composed of two words
// In case of two identical last names, keep the original order

function sortReindeer(reindeerNames) {
  for(let i = 0; i < reindeerNames.length; i++){
    reindeerNames[i] = reindeerNames[i].split(' ')
  }
    reindeerNames =  reindeerNames.sort()
  console.log(reindeerNames)
    
    for(let i = 0; i < reindeerNames.length; i++){
    reindeerNames[i] = reindeerNames[i].join(' ')
  }
  return reindeerNames
  }

//   You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.

// The list(lst) contains integers, that means it may contain some negative numbers.

// If the list is empty or contains a single element, return 0.

// The list(lst) is not sorted.

// maxDiff([1, 2, 3, 4]); //return 3, because 4 - 1 == 3
// maxDiff([1, 2, 3, -4]); //return 7, because 3 - (-4) == 7

function maxDiff(list) {
  list = list.sort((a,b) => {return a-b})
  if(list[0] !== undefined){
    return +list[list.length - 1] - +list[0]
  } else {
    return 0
  }
    
};

// Scenario

// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Notes

//     Array size is at least 1.
//     All numbers will be positive.


function rowWeights(array){
  let arr = [0,0]
  for(i=0;i<array.length;i++){
    if(i%2===0){
      arr[0] = arr[0] + array[i]
    } else {
      arr[1] = arr[1] + array[i]
    }
  }
  return arr
}

// Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.

// The first name will come from the month, and the last name will come from the last digit of the date:

// Month -> first name

// January -> "The Evil"
// February -> "The Vile"
// March -> "The Cruel"
// April -> "The Trashy"
// May -> "The Despicable"
// June -> "The Embarrassing"
// July -> "The Disreputable"
// August -> "The Atrocious"
// September -> "The Twirling"
// October -> "The Orange"
// November -> "The Terrifying"
// December -> "The Awkward"
// Last digit of date -> last name

// 0 -> "Mustache"
// 1 -> "Pickle"
// 2 -> "Hood Ornament"
// 3 -> "Raisin"
// 4 -> "Recycling Bin"
// 5 -> "Potato"
// 6 -> "Tomato"
// 7 -> "House Cat"
// 8 -> "Teaspoon"
// 9 -> "Laundry Basket"
// The returned value should be a string in the form of "First Name Last Name".

// For example, a birthday of November 18 would return "The Terrifying Teaspoon"

function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  let villianFirstName
  let villianLastName
  console.log(
//     birthday.getUTCMonth(),
    birthday.getUTCDate()
  )
  for(let i = 0; i<m.length; i++){
    if(i === birthday.getMonth()){
      villianFirstName = m[i]
    }
  }
 let dateArray = birthday.getDate().toString().split('')
 
 console.log(dateArray)
  
  for(let i = 0; i<d.length; i++){
    if(i === +dateArray[dateArray.length - 1]){
      villianLastName = d[i]
    }
  }
  return `The ${villianFirstName} ${villianLastName}`
}

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
  console.log(n, d);
  let array = [];
  for (let i = 0; i <= n; i++) {
    array.push(i * i);
  }
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    counter += array[i]
      .toString()
      .split("")
      .filter((number, i, arr) => {
        if (number === `${d}`) {
          return number;
        }
      }).length;
  }
  return counter;
}

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

function wordsToMarks(string){
  let array = string.split("")
  let counter = 0
  for(let i = 0; i < array.length; i++){
      if(array[i] === 'a'){
        counter = counter + 1
      }
      if(array[i] === 'b'){
        counter = counter + 2
      }      if(array[i] === 'c'){
        counter = counter + 3
      }      if(array[i] === 'd'){
        counter = counter + 4
      }      if(array[i] === 'e'){
        counter = counter + 5
      }      if(array[i] === 'f'){
        counter = counter + 6
      }      if(array[i] === 'g'){
        counter = counter + 7
      }      if(array[i] === 'h'){
        counter = counter + 8
      }      if(array[i] === 'i'){
        counter = counter + 9
      }      if(array[i] === 'j'){
        counter = counter + 10
      }      if(array[i] === 'k'){
        counter = counter + 11
      }      if(array[i] === 'l'){
        counter = counter + 12
      }      if(array[i] === 'm'){
        counter = counter + 13
      }      if(array[i] === 'n'){
        counter = counter + 14
      }      if(array[i] === 'o'){
        counter = counter + 15
      }      if(array[i] === 'p'){
        counter = counter + 16
      }      if(array[i] === 'q'){
        counter = counter + 17
      }      if(array[i] === 'r'){
        counter = counter + 18
      }      if(array[i] === 's'){
        counter = counter + 19
      }      if(array[i] === 't'){
        counter = counter + 20
      }      if(array[i] === 'u'){
        counter = counter + 21
      }      if(array[i] === 'v'){
        counter = counter + 22
      }      if(array[i] === 'w'){
        counter = counter + 23
      }      if(array[i] === 'x'){
        counter = counter + 24
      }      if(array[i] === 'y'){
        counter = counter + 25
      }      if(array[i] === 'z'){
        counter = counter + 26
      }
  }
  return counter
}

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers){
  let numbersArr = numbers.split(" ")
  let evensArr = []
  let oddsArr = []
  let oddsIndex = 1
  let evensIndex = 1
  
  for(let i = 0; i < numbersArr.length; i++){
    if(+numbersArr[i] % 2 === 0){
        evensArr.push(numbersArr)
        evensIndex += i
    } else {
      oddsArr.push(numbersArr[i])
      oddsIndex += i
    }
  }
  if(evensArr.length > oddsArr.length){
    return oddsIndex
  } else {
    return evensIndex
  }
}

// #Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// Example:

// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

function averages(numbers) {
  console.log(numbers)
  let arr = []
  for(let i = 0; i < numbers.length; i++){
      console.log(numbers[i], numbers[i+1])
    if(+numbers[i] + +numbers[i + 1] || i === numbers.length-1 || +numbers[i] + +numbers[i + 1] === 0 ){
      arr.push((numbers[i] + numbers[i + 1])/2)
    } else {
      return []
    }
  }
  arr.pop()
  return arr
}