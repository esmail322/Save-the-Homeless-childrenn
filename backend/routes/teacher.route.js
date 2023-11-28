const express = require("express");
const TeacherController = require("../controller/teacher.controller");
const upload = require("../middlewares/imageUploader");
const {
  getCourses,
  createCourse,
  deleteCourse,
  getSingleCourse,
  updateCourse,
  updateCourseStatus,
} = require("../controller/course.controller");

const router = express.Router();

router
  .route("/")
  .get(TeacherController.getTeachers)
  .post(upload.single("image"), TeacherController.saveTeacher);

router
  .route("/course")
  .get(getCourses)
  .post(upload.single("image"), createCourse);

router
  .route("/:_id")
  .delete(TeacherController.deleteTeacher)
  .get(TeacherController.getTeacher)
  .patch(TeacherController.editTeacher);

router
  .route("/course/:_id")
  .delete(deleteCourse)
  .get(getSingleCourse)
  .put(upload.single("image"), updateCourse);

router.route("/status/course").put(updateCourseStatus);

module.exports = router;
