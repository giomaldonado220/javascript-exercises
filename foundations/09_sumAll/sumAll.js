const sumAll = function (floor, ceil) {

  if (!Number.isInteger(floor) || !Number.isInteger(ceil)) {
    return "ERROR";
  }
  if (floor < 0 || ceil < 0) {
    return "ERROR";
  }
  if (floor > ceil) {
    let temp = ceil;
    ceil = floor;
    floor = temp;
  }

  let sumation = 0;
  for (; ceil >= floor; ceil--) {
    sumation += ceil;
  }
  return sumation;
};

// Do not edit below this line
module.exports = sumAll;
