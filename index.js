function isPalindrome(word) {
  word = word.toLowerCase().replace(/[a-z0-9]/g, "");
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}
let word = "eye";
console.log(isPalindrome(word));
