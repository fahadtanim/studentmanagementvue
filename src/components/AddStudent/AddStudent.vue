<template src="./AddStudent.html"></template>

<script>
import M from "materialize-css";
import { StudentRepository } from "../../Repository/StudentRepository";
export default {
  name: "AddStudent",
  created() {
    // M.autoInit();
  },
  data() {
    return {
      newStudent: {
        name: "",
        departmentName: "",
        creditCompleted: ""
      }
    };
  },
  methods: {
    async addNewStudent(e) {
      e.preventDefault();
      try {
        await StudentRepository.addStudent(this.newStudent);
        let result = await StudentRepository.getStudents();
        this.$store.commit("setStudents", result.data);
        M.toast({ html: "Student Has been Added" });
        this.newStudent = {
          name: "",
          departmentName: "",
          creditCompleted: ""
        };
      } catch (error) {
        alert(error);
      }
      //   $emit("add-student", this.newStudent);
    }
  }
};
</script>

<style scoped src="./AddStudent.css"></style>
