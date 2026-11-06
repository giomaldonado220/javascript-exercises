const fibonacci = function (numbuh) {
  if (typeof numbuh === 'string') numbuh = parseInt(numbuh);
  if (numbuh < 0) return "OOPS";
  if (numbuh === 0 || numbuh === 1) return numbuh;
  let first = 0, second = 1, temp = 1;
  for (let i = 2; i < numbuh; i++) {
    first = second;
    second = temp;
    temp = first + second;
  }
  return temp;


};

// Do not edit below this line
module.exports = fibonacci;
