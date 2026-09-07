const repeatString = function (word, times) {
  if (times < 0) {
    return "ERROR";
  }
  let retWord = "";
  for (; times > 0; times--) {
    retWord += word;
  }
  return retWord;
};

// Do not edit below this line
module.exports = repeatString;
