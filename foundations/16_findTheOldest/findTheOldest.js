const findTheOldest = function (people) {
  return people.reduce((acc, cur) => {
    const date = new Date().getFullYear();
    const findYearsLived = (person) => {
      const ret = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : date - person.yearOfBirth;
      console.log(ret);
      return ret;
    };

    return (findYearsLived(cur) >= findYearsLived(acc)) ? cur : acc;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
