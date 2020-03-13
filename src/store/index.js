import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
    createdStudents: 2
  },
  mutations: {
    setStudents(state, students) {
      state.students = students;
    },
    addStudent(state, student) {
      student.id = state.createdStudents + 1;
      state.createdStudents = state.createdStudents + 1;
      state.students = [...state.students, student];
    },
    updateStudent(state, student) {
      const students = state.students.filter(std => {
        return std.id !== student.id ? std : student;
      });
      state.students = students;
    },
    deleteStudent(state, student) {
      const students = state.students.filter(std => {
        return std.id !== student.id ? std : false;
      });
      state.students = students;
    }
  },
  getters: {
    students: state => state.students
  },
  actions: {},
  modules: {}
});
