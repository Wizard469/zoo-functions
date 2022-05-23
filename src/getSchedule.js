const { species, hours } = require('../data/zoo_data');

const animalsNames = species.map(({ name }) => name);
const weekDays = Object.keys(hours);

const mondayIsClose = () => ({ officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' });

const animalsAvalibility = (day) => species
  .filter(({ availability }) => availability
    .includes(day)).map(({ name }) => name);

const daySchedule = (day) => {
  if (day === 'Monday') return mondayIsClose();

  const { open, close } = hours[day];

  return { officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: animalsAvalibility(day) };
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return { Monday: mondayIsClose() };

  if (weekDays.includes(scheduleTarget)) return { [scheduleTarget]: daySchedule(scheduleTarget) };

  if (animalsNames.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }

  return weekDays.reduce((acc, curr) => ({ ...acc, [curr]: daySchedule(curr) }), {});
}

module.exports = getSchedule;
