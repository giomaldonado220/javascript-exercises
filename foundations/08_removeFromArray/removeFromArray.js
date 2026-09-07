const removeFromArray = function (arr, ...args) {
  for (let arrIndex = arr.length - 1; arrIndex >= 0; arrIndex--) {

    for (let argsIndex = args.length - 1; argsIndex >= 0; argsIndex--) {

      if (arr[arrIndex] === args[argsIndex]) {
        arr.splice(arrIndex, 1);
        break;
      }
    }
  }
  return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
