/* Sum Zero
Write a function that takes in an array of numbers. 
The function should return True if any two numberss
in list sum to 0, and false otherwise. */

const addToZero = (arr) => {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        result = true;
      }
    }
  }
  return result;
};
// console.log(addToZero([1, 2, 3, -2]));
// console.log(addToZero([]));
//Quadratic Time: O(n^2)

/*******************************************************************************/

/* Unique Characters
Write a function that takes in a single word, as a string. 
It should return True if that word contains only unique characters.
Return False otherwise. */

const hasUniqueChars = (str) => {
  let arr = str.split("");
  let unique = new Set(str);
  return arr.length === unique.size;
};
// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))
//Constant: O(1)

/*******************************************************************************/

/* Pangram Sentence
A pangram is a sentence that contains all the letters of the English 
alphabet at least once, like “The quick brown fox jumps over the lazy dog.” */

const isPangram = (str) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabet.every((el) => str.toLowerCase().includes(el));
};

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// console.log(isPangram("I like cats, but not mice"));
//Linear time: O(n)

/*******************************************************************************/

/* Longest Word
Write a function, find_longest_word, that takes a list of words and returns 
the length of the longest one. */

const findLonestWord = (arr) => arr.reduce((a,b) => a.length < b.length ? b : a)

// console.log(findLonestWord(["hi", "hello", "heeelllooo"]))
//Linear time: O(n)

