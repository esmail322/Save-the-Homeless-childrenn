const express = require("express");
const StudentController = require("../controller/student.controller");
const upload = require("../middlewares/imageUploader");

const router = express.Router();

router
  .route("/")
  .get(StudentController.getStudents)
  .post(upload.single("image"), StudentController.saveStudent);

router
  .route("/:_id")
  .delete(StudentController.deleteStudent)
  .get(StudentController.getStudent)
  .patch(StudentController.editStudent);

module.exports = router;
