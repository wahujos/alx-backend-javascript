export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new Error('Students must be an array');
    } else {
      for (const element of students) {
        if (typeof element !== 'string') {
          throw new Error('students array must contain strings');
        }
      }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setters
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new Error('length must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new Error('Students must be an array');
    } else {
      for (const element of newStudents) {
        if (typeof element !== 'string') {
          throw new Error('students array must contain strings');
        }
      }
    }

    this._students = newStudents;
  }
}
