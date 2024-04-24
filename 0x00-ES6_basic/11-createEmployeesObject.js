export default function createEmployeesObject(departmentName, employees) {
  const objectReturn = {
    [departmentName]: Array.isArray(employees) ? [...employees] : [employees],
  };
  return objectReturn;
}
