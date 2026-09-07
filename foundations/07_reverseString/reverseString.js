const reverseString = function (toReverse) {
  let reversed = ""
  for (let x = toReverse.length - 1; x >= 0; x--) {
    reversed += toReverse.charAt(x);
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
