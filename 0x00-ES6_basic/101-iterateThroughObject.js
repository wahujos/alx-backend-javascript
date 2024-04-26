export default function iterateThroughObject(reportWithIterator) {
  let allEmployees = '';
  for (const employee of reportWithIterator) {
    allEmployees += `${employee} | `;
  }
  allEmployees = allEmployees.slice(0, -3);
  return allEmployees;
}
