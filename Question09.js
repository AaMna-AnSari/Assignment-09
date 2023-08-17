// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

let palindrome = (str) => {
  let change = str.toLowerCase().replace(/^a-z0-9/g, "");
  if (change === change.split("").reverse().join("")) {
    return `${change}:Yes,This is palindrome`;
  } else {
    return `${change}:No,This is not palindrome`;
  }
};

let string = "run";
console.log(palindrome(string));
