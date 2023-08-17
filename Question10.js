// Write a function that takes two arrays as input and returns a new array containing elements that are
// common in both input arrays.
function findCommonElements(arr1, arr2) {
  let commonElements = [];

  for (let element of arr1) {
    if (arr2.includes(element)) {
      commonElements.push(element);
    }
  }

  return commonElements;
}

let array2 = [3, 4, 5, 6, 7];
let array1 = [1, 2, 3, 4, 5];
const commonElements = findCommonElements(array1, array2);

console.log("Common elements:", findCommonElements(array1, array2));
