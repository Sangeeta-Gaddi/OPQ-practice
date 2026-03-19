//reverse the string (by characters and by words)

let str = "Hi I am mounika";

// Step 1: Reverse characters in each word using loops
let words = str.split(" ");
let reversedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let reversedWord = "";

  // reverse each word character by character
  for (let j = word.length - 1; j >= 0; j--) {
    reversedWord += word[j];
  }

  reversedWords.push(reversedWord);
}

console.log(reversedWords.join(" ")); // iH I ma akinoum

// Step 2: Reverse the order of words using loops
let reversedOrder = "";
for (let i = reversedWords.length - 1; i >= 0; i--) {
  reversedOrder += reversedWords[i] + " ";
}

console.log(reversedOrder.trim()); // akinoum ma I iH