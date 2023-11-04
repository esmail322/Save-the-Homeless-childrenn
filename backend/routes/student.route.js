const express = require("express");
const StudentController = require("../controller/student.controller");

const router = express.Router();

router
  .route("/")
  .get(StudentController.getStudents)
  .post(StudentController.saveStudent);

router
  .route("/:_id")
  .delete(StudentController.deleteStudent)
  .get(StudentController.getStudent)
  .patch(StudentController.editStudent);

module.exports = router;
