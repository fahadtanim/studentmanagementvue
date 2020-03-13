<template src="./Student.html"></template>

<script>
import { StudentRepository } from "../../Repository/StudentRepository";
export default {
  name: "Student",
  props: {
    student: Object
  },
  methods: {
    async deleteStudent() {
      try {
        await StudentRepository.deleteStudent(this.student.id);
        let result = await StudentRepository.getStudents();
        this.$store.commit("setStudents", result.data);
      } catch (error) {
        alert(error);
      }
    }
  }
};
</script>

<style src="./Student.css"></style>
