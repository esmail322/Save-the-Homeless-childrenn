const express = require("express");
const TeacherController = require("../controller/teacher.controller");
const upload = require("../middlewares/imageUploader");

const router = express.Router();

router
  .route("/")
  .get(TeacherController.getTeachers)
  .post(upload.single("image"), TeacherController.saveTeacher);

router
  .route("/:_id")
  .delete(TeacherController.deleteTeacher)
  .get(TeacherController.getTeacher)
  .patch(TeacherController.editTeacher);

module.exports = router;
