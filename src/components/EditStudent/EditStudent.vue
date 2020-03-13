<template src="./EditStudent.html"> </template>
<style scoped src="./EditStudent.css"></style>

<script>
import M from "materialize-css";
import { StudentRepository } from "../../Repository/StudentRepository";
export default {
  name: "EditStudent",
  props: {
    student: Object
  },

  created() {
    M.updateTextFields();
  },
  methods: {
    async editStudent(e) {
      e.preventDefault();
      this.$store.commit("updateStudent", this.student);
      let updatedStudent = {
        name: this.student.name,
        departmentName: this.student.departmentName,
        creditCompleted: this.student.creditCompleted
      };
      // console.log("LLL");
      try {
        await StudentRepository.updateStudent(this.student.id, updatedStudent);
        M.toast({ html: "Student Has been Updated" });
        let getStudentsResult = await StudentRepository.getStudents();
        this.$store.commit("setStudents", getStudentsResult.data);
      } catch (error) {
        M.toast({ html: "Student Couldn't be Updated" });
      }

      M.Modal.getInstance(document.getElementById("editStudentModal")).close();
    }
  }
};
</script>
