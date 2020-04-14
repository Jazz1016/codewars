// Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr) {
  console.log(arr);
  arr = arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
  return [arr[0], arr[arr.length - 1]];
}
