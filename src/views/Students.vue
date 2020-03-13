<template>
  <div class="container">
    <table class="highlight centered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Dept</th>
          <th>Credit Completed</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        <Student v-bind:key="st.id" v-for=" st in students" :student="st" v-on:on-edit="openEdit" />
      </tbody>
    </table>
    <EditStudent v-bind:student="student" />
    <div id="test"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Student from "@/components/Student/Student";
import EditStudent from "@/components/EditStudent/EditStudent";
import M from "materialize-css";
export default {
  name: "Students",
  components: {
    Student,
    EditStudent
  },
  data() {
    return {
      student: {
        id: "",
        name: "",
        dept: "",
        credit_completed: ""
      }
    };
  },
  methods: {
    openEdit(st) {
      M.updateTextFields();
      this.student = st;
      const elems = document.querySelectorAll(".modal");
      M.Modal.init(elems, {});
      M.Modal.getInstance(document.getElementById("editStudentModal")).open();
      // console.log(modal);
    }
  },
  created() {
    M.updateTextFields();
  },
  computed: {
    students() {
      return this.$store.state.students;
    }
  }
};
</script>
