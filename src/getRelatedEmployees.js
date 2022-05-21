const data = require('../data/zoo_data');

const employeeList = data.employees;

function isManager(id) {
  return employeeList.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  try {
    if (isManager(managerId) === false) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    }
    return employeeList.filter(({ managers }) => managers.includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  } catch (e) {
    throw e.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
