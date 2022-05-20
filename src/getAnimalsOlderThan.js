const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find(({ name }) => animal === name).residents
    .every(({ age: animalAges }) => age <= animalAges);
}

module.exports = getAnimalsOlderThan;
