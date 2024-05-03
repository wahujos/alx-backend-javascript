// eslint-disable-next-line no-unused-vars
import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const studentFromCity = studentsList.filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';
      return { ...student, grade };
    });
  return studentFromCity;
}
