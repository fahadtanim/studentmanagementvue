<template src="./Header.html"></template>

<style scoped src="./Header.css"></style>

<script>
import { StudentRepository } from "../../Repository/StudentRepository";
export default {
  name: "Header",
  async created() {
    let result = await StudentRepository.getStudents();
    // document.getElementById("test").innerHTML = JSON.stringify(result);
    this.$store.commit("setStudents", result.data);
  }
};
</script>
