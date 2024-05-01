// eslint-disable-next-line no-unused-vars
import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(studentsList) {
  const sumOfIds = studentsList.reduce((acc, student) => acc + student.id, 0);
  return sumOfIds;
}
