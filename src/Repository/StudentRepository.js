import axios from "axios";

export const StudentRepository = {
  getStudents: async () => {
    let studentsResult = await axios.get("http://localhost:5001/api/students/");
    return studentsResult.data;
  },
  addStudent: async student => {
    let studentsResult = await axios.post(
      "http://localhost:5001/api/students/",
      student
    );
    return studentsResult.data;
  },
  updateStudent: async (student_id, student) => {
    let result = await window.axios.put(
      `http://localhost:5001/api/students/${student_id}`,
      student
    );
    return result.data;
  },
  deleteStudent: async student_id => {
    let result = await window.axios.delete(
      `http://localhost:5001/api/students/${student_id}`
    );
    return result.data;
  }
};
