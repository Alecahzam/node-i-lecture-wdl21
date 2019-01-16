const students = require("./students");

const getStudents = (request, response, next) => {
  console.log("it worked");
  response.json(students);
};

const updateStudent = (req, res, next) => {
  //   students.splice(+req.params.id, 1, req.body);
  if (req.body.funFact) {
    students[+req.params.id].funFact = req.body.funFact;
    res.json(students);
  } else {
    res.status(500).json("Error: Needs a funFact");
  }
};

const addStudent = (req, res, next) => {
  students.push(req.body);
  res.json(students);
};

const deleteStudent = (req, res) => {
  students.splice(+req.params.id, 1);
  res.json(students);
};

module.exports = {
  getStudents: getStudents,
  updateStudent: updateStudent,
  addStudent: addStudent,
  deleteStudent
};
