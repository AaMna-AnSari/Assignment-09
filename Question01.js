// Write a function that takes an array of numbers as input and returns the maximum value from the array.

function maxValue(array) {
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return `The maximum value is "${maxValue}"`;
}

let array = [33, 22, 13, 47, 57];
console.log(maxValue(array));
