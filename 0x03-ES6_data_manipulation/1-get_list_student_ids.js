// eslint-disable-next-line no-unused-vars
import getListStudents from './0-get_list_students';

export default function getListStudentIds(studentArray) {
  if (!Array.isArray(studentArray)) {
    return [];
  }

  const idArray = studentArray.map((student) => student.id);
  return idArray;
}
