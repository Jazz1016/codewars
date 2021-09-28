function loopArr(arr, direction, steps) {
    
}

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
    let str = ""
    for(i = 0; i < size; i++){
      if (i % 2 === 0) {
        str += "1"
      } else {
        str += "0"
      }
    }
    return str
  }
  
//   You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  console.log(n)
  let arr = []
  for(let i = 1; i <= n; i++){
    arr.push(i)
  }
  return arr
}

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}