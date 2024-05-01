// eslint-disable-next-line no-unused-vars
import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(getListStudents, city) {
  const filteredStudents = getListStudents.filter((student) => student.location === city);
  return filteredStudents;
}
