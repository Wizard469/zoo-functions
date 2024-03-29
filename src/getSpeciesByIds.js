const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  return ids.map((element) => species.find(({ id }) => id === element));
}

module.exports = getSpeciesByIds;
