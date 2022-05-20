const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === undefined) return [];
  return ids.map((element) => data.species.find(({ id }) => id === element));
}

module.exports = getSpeciesByIds;
