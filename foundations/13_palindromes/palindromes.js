const palindromes = function (word) {
  //make an array "/" is regex "[]" is " a single character" 
  word = word.toLowerCase();
  let arr = [...word].filter(letter => /[^\W_]/.test(letter)).join();
  let start = 0;
  let end = Math.max(arr.length - 1, 0);
  console.log(arr);
  while (start != end) {
    if (arr[start] != arr[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true

};

// Do not edit below this line
module.exports = palindromes;
