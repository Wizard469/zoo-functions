const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeId = employees.find((employee) => employee.id === id);
  const firstSpecie = species.find((specie) => specie.id === employeeId.responsibleFor[0]);
  const olderAnimal = firstSpecie.residents.sort((a, b) => b.age - a.age)[0];

  return Object.values(olderAnimal);
}

module.exports = getOldestFromFirstSpecies;
