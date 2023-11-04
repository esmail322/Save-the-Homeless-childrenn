const express = require("express");
const TeacherController = require("../controller/teacher.controller");

const router = express.Router();

router
  .route("/")
  .get(TeacherController.getTeachers)
  .post(TeacherController.saveTeacher);

router
  .route("/:_id")
  .delete(TeacherController.deleteTeacher)
  .get(TeacherController.getTeacher)
  .patch(TeacherController.editTeacher);

module.exports = router;
