const express = require("express");
const StudentController = require("../controller/student.controller");
const upload = require("../middlewares/imageUploader");
const { changeStatusStudent } = require("../controller/course.controller");

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

router.route("/change-status-student").put(changeStatusStudent);

module.exports = router;
