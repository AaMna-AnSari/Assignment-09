// Given an array of numbers, write a function that returns an array containing two sub-arrays: one with
// even numbers and one with odd numbers.

function separateEvenOdd(numbers) {
  let evenNumbers = [];
  let oddNumbers = [];

  for (let num of numbers) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  }

  return [evenNumbers, oddNumbers];
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(separateEvenOdd(numbers));
