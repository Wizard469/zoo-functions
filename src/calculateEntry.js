const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }

  const { child: price1, adult: price2, senior: price3 } = prices;
  const { child, adult, senior } = countEntrants(entrants);

  return child * price1 + adult * price2 + senior * price3;
}

module.exports = { calculateEntry, countEntrants };
