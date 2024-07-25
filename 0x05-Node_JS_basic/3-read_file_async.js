const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      if (lines.length <= 1) {
        throw new Error('Cannot load the database');
      }

      const students = lines.slice(1).map((line) => line.split(',')).filter((fields) => fields.length > 1);
      const totalStudents = students.length;
      console.log(`Number of students: ${totalStudents}`);

      const fields = {};
      students.forEach((student) => {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      });

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const studentList = fields[field];
          console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
