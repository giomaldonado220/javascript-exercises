const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce(((accum, curr) => accum + curr), 0);
};

const multiply = function (array) {
  return array.reduce(((accum, curr) => accum * curr));

};

const power = function (base, exponent) {
  let multiplier = base;
  for (let i = exponent; i > 1; i--) {
    base *= multiplier;
  }
  return base;
};

const factorial = function (num) {
  if (num <= 0) {
    return 1;
  }
  let out = num;
  for (let i = num - 1; i > 0; i--) {
    out *= i;
  }
  return out;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
