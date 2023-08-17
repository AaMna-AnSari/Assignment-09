// Write a function that takes a number as input and determines whether it is a prime number.
function isPrime(number) {
  if (number % 2 === 0 || number % 3 === 0) {
    return `This is a prime number`;
  } else {
    return `this is not a prime number`;
  }
}
let number = 15;
console.log(isPrime(number));
