// Write a function that takes an array of numbers as input and returns a new array with duplicate values
// removed.

function removeDuplicates(numbers) {
  let uniqueNumbers = [];
  for (let num of numbers) {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num);
    }
  }
  return uniqueNumbers;
}

let numbers = [1, 2, 3, 2, 4, 5, 1, 6];
console.log(`Array with duplicates removed:[${removeDuplicates(numbers)}]`);
