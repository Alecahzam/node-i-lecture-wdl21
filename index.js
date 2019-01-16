const express = require("express");
const app = express();
const { json } = require("body-parser");

const {
  getStudents,
  updateStudent,
  addStudent,
  deleteStudent
} = require("./controller");

app.use(json());

app.get("/api/students", getStudents);
app.put("/api/students/:id", updateStudent);
app.post("/api/students", addStudent);
app.delete(`/api/students/:id`, deleteStudent);

app.listen(5050, () => {
  console.log("Listening on port 5050");
});
