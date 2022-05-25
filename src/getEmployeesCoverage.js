const { species, employees } = require('../data/zoo_data');

const employeeInfo = () => employees.map((employee) => (
  {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((animal) => species.find(({ id }) => id === animal))
      .map(({ name }) => name),
    locations: employee.responsibleFor.map((animal) => species
      .find(({ id }) => id === animal)).map(({ location }) => location),
  }
));

function getEmployeesCoverage(information) {
  if (!information) return employeeInfo();

  const { id, name } = information;

  if (employeeInfo().find((employee) => employee.id === id)) {
    return employeeInfo().find((employee) => employee.id === id);
  }
  if (employeeInfo().find((employee) => employee.fullName.includes(name))) {
    return employeeInfo().find((employee) => employee.fullName.includes(name));
  }

  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
