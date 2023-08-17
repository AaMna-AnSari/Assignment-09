// Write a function that calculates and returns the sum of all numbers in an array.

function sumAllNumbers(array) {
  let sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}

let array = [1, 2, 3, 4, 5];
console.log(`The Sum of All Numbers is ${sumAllNumbers(array)}`);
