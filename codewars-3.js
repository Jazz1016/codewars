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
