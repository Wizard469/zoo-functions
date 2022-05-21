const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals({ specie, sex } = {}) {
  const allAnimals = {};
  if (!specie && !sex) {
    species.forEach(({ name, residents }) => {
      allAnimals[name] = residents.length;
    });
    return allAnimals;
  }

  if (!sex) {
    return species.find(({ name }) => name === specie).residents.length;
  }

  return species.find(({ name }) => name === specie).residents
    .filter((bothSex) => bothSex.sex === sex).length;
}

module.exports = countAnimals;
