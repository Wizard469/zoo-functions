const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find(({ name }) => animal === name).residents
    .every(({ age: animalAges }) => age <= animalAges);
}

module.exports = getAnimalsOlderThan;
