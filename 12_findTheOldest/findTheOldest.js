const findTheOldest = function(people) {
    let currOldest = {name:"", age:0}
    let currTime = new Date()

    for (let data of people) {
        let dAge = data.yearOfDeath - data.yearOfBirth;
        console.log(data.yearOfDeath)
        if (data.yearOfDeath === undefined) {
            dAge = (currTime.getFullYear()) - data.yearOfBirth
        }

        if (currOldest.age < dAge) {
            currOldest.name = data.name
            currOldest.age = dAge
        }
        console.log(currOldest)
    }


    return currOldest
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
